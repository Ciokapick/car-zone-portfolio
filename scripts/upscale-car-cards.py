#!/usr/bin/env python3
"""AI-upscale the transparent vehicle card images referenced by cars.json.

The photographic RGB layer is enlarged with Real-ESRGAN at its native 4x
scale, reduced to the requested 2x delivery size, and recombined with a 2x
alpha mask. Results are staged and validated before any source is replaced.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image


MIB = 1024 * 1024
SITE_BACKDROP = (5, 7, 11)
MANIFEST_RELATIVE = Path("assets/data/card-upscale-manifest.json")


@dataclass(frozen=True)
class Card:
    relative_path: str
    source: Path
    width: int
    height: int
    original_bytes: int
    alpha_extrema: tuple[int, int]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Upscale every non-empty cars.json card image with Real-ESRGAN."
    )
    parser.add_argument(
        "--repo",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="Repository root (defaults to the parent of scripts/).",
    )
    parser.add_argument(
        "--upscaler",
        type=Path,
        help="Path to realesrgan-ncnn-vulkan.exe.",
    )
    parser.add_argument("--factor", type=int, default=2, choices=(2,))
    parser.add_argument("--quality", type=int, default=82)
    parser.add_argument("--min-quality", type=int, default=72)
    parser.add_argument("--growth-budget-mb", type=float, default=15.0)
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Validate inputs and report the planned work without processing.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Run again even when the completion manifest exists.",
    )
    parser.add_argument(
        "--record-current",
        action="store_true",
        help="Record the current files as an already completed batch without processing.",
    )
    return parser.parse_args()


def folder_size(path: Path) -> int:
    return sum(item.stat().st_size for item in path.rglob("*") if item.is_file())


def locate_upscaler(repo: Path, explicit: Path | None) -> Path:
    candidates: list[Path] = []
    if explicit:
        candidates.append(explicit)
    if os.environ.get("REALESRGAN_NCNN"):
        candidates.append(Path(os.environ["REALESRGAN_NCNN"]))
    candidates.extend(
        [
            repo.parent
            / "realesrgan-ncnn-vulkan-20220424-windows"
            / "realesrgan-ncnn-vulkan.exe",
            repo / "tools" / "realesrgan-ncnn-vulkan.exe",
        ]
    )
    discovered = shutil.which("realesrgan-ncnn-vulkan") or shutil.which(
        "realesrgan-ncnn-vulkan.exe"
    )
    if discovered:
        candidates.append(Path(discovered))
    for candidate in candidates:
        resolved = candidate.expanduser().resolve()
        if resolved.is_file():
            return resolved
    searched = "\n  - ".join(str(path) for path in candidates)
    raise FileNotFoundError(
        "Real-ESRGAN executable not found. Pass --upscaler PATH. Searched:\n  - "
        + searched
    )


def load_cards(repo: Path) -> list[Card]:
    data_path = repo / "assets" / "data" / "cars.json"
    inventory = json.loads(data_path.read_text(encoding="utf-8"))
    relative_paths = list(
        dict.fromkeys(car.get("image") for car in inventory.values() if car.get("image"))
    )
    cards: list[Card] = []
    for relative_path in relative_paths:
        source = repo / relative_path
        if not source.is_file():
            raise FileNotFoundError(f"Missing card image: {relative_path}")
        if source.suffix.lower() != ".webp":
            raise ValueError(f"Card is not WebP: {relative_path}")
        with Image.open(source) as image:
            rgba = image.convert("RGBA")
            alpha_extrema = rgba.getchannel("A").getextrema()
            if alpha_extrema == (255, 255):
                raise ValueError(f"Card has no transparent pixels: {relative_path}")
            cards.append(
                Card(
                    relative_path=relative_path,
                    source=source,
                    width=rgba.width,
                    height=rgba.height,
                    original_bytes=source.stat().st_size,
                    alpha_extrema=alpha_extrema,
                )
            )
    return cards


def run_realesrgan(executable: Path, source: Path, destination: Path) -> None:
    command = [
        str(executable),
        "-i",
        str(source),
        "-o",
        str(destination),
        "-n",
        "realesrgan-x4plus",
        "-s",
        "4",
        "-f",
        "png",
    ]
    result = subprocess.run(
        command,
        cwd=executable.parent,
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode:
        details = (result.stderr or result.stdout).strip()
        raise RuntimeError(f"Real-ESRGAN failed ({result.returncode}): {details}")
    if not destination.is_file():
        raise RuntimeError("Real-ESRGAN completed without producing an output file.")


def build_master(card: Card, executable: Path, work_dir: Path, factor: int) -> Path:
    token = card.source.stem
    rgb_input = work_dir / f"{token}-rgb.png"
    ai_4x = work_dir / f"{token}-ai-4x.png"
    master = work_dir / f"{token}-master-{factor}x.png"

    with Image.open(card.source) as image:
        rgba = image.convert("RGBA")
        alpha = rgba.getchannel("A")
        backdrop = Image.new("RGB", rgba.size, SITE_BACKDROP)
        backdrop.paste(rgba.convert("RGB"), mask=alpha)
        backdrop.save(rgb_input, format="PNG", optimize=True)

        target_size = (card.width * factor, card.height * factor)
        alpha_2x = alpha.resize(target_size, Image.Resampling.LANCZOS)

    run_realesrgan(executable, rgb_input, ai_4x)
    with Image.open(ai_4x) as ai_image:
        rgb_2x = ai_image.convert("RGB").resize(target_size, Image.Resampling.LANCZOS)
        output = rgb_2x.convert("RGBA")
        output.putalpha(alpha_2x)
        output.save(master, format="PNG", optimize=True)

    rgb_input.unlink(missing_ok=True)
    ai_4x.unlink(missing_ok=True)
    return master


def encode_webp(master: Path, destination: Path, quality: int) -> None:
    with Image.open(master) as image:
        image.convert("RGBA").save(
            destination,
            format="WEBP",
            quality=quality,
            method=6,
            lossless=False,
            exact=True,
        )


def validate_output(card: Card, output: Path, factor: int) -> None:
    with Image.open(output) as image:
        rgba = image.convert("RGBA")
        expected_size = (card.width * factor, card.height * factor)
        if rgba.size != expected_size:
            raise ValueError(
                f"Wrong size for {card.relative_path}: {rgba.size}, expected {expected_size}"
            )
        extrema = rgba.getchannel("A").getextrema()
        if extrema == (255, 255) or extrema[0] >= 255:
            raise ValueError(f"Alpha was lost for {card.relative_path}: {extrema}")


def encode_batch(
    cards: list[Card], masters: dict[str, Path], output_dir: Path, quality: int, factor: int
) -> dict[str, Path]:
    encoded: dict[str, Path] = {}
    for index, card in enumerate(cards, start=1):
        output = output_dir / f"{index:02d}-{card.source.name}"
        encode_webp(masters[card.relative_path], output, quality)
        validate_output(card, output, factor)
        encoded[card.relative_path] = output
    return encoded


def projected_folder_size(before_folder: int, cards: list[Card], outputs: dict[str, Path]) -> int:
    original_cards = sum(card.original_bytes for card in cards)
    staged_cards = sum(path.stat().st_size for path in outputs.values())
    return before_folder - original_cards + staged_cards


def replace_sources(cards: list[Card], outputs: dict[str, Path]) -> None:
    for card in cards:
        staged = outputs[card.relative_path]
        atomic_temp = card.source.with_name(card.source.name + ".upscale-new")
        shutil.copyfile(staged, atomic_temp)
        os.replace(atomic_temp, card.source)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def write_manifest(
    repo: Path,
    cards: list[Card],
    factor: int,
    quality: int,
    before_folder: int,
    after_folder: int,
    infer_inputs: bool = False,
) -> None:
    images: dict[str, dict[str, object]] = {}
    for card in cards:
        with Image.open(card.source) as image:
            output_size = image.size
        input_size = (
            [output_size[0] // factor, output_size[1] // factor]
            if infer_inputs
            else [card.width, card.height]
        )
        images[card.relative_path] = {
            "inputSize": input_size,
            "outputSize": list(output_size),
            "outputBytes": card.source.stat().st_size,
            "outputSha256": sha256(card.source),
        }
    payload = {
        "completedAt": datetime.now(timezone.utc).isoformat(),
        "engine": "realesrgan-x4plus",
        "deliveryFactor": factor,
        "webpQuality": quality,
        "imageCount": len(cards),
        "assetsImgBytesBefore": before_folder,
        "assetsImgBytesAfter": after_folder,
        "images": images,
    }
    destination = repo / MANIFEST_RELATIVE
    temporary = destination.with_suffix(destination.suffix + ".new")
    temporary.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    os.replace(temporary, destination)


def main() -> int:
    args = parse_args()
    repo = args.repo.resolve()
    cards = load_cards(repo)
    assets_img = repo / "assets" / "img"
    before_folder = folder_size(assets_img)
    before_cards = sum(card.original_bytes for card in cards)
    manifest = repo / MANIFEST_RELATIVE

    print(f"Discovered {len(cards)} unique non-empty card images.", flush=True)
    print(
        f"Before: assets/img={before_folder / MIB:.2f} MiB; "
        f"card sources={before_cards / MIB:.2f} MiB.",
        flush=True,
    )
    if args.record_current:
        for card in cards:
            validate_output(
                Card(
                    card.relative_path,
                    card.source,
                    card.width // args.factor,
                    card.height // args.factor,
                    card.original_bytes,
                    card.alpha_extrema,
                ),
                card.source,
                args.factor,
            )
        write_manifest(
            repo,
            cards,
            args.factor,
            args.quality,
            before_folder,
            before_folder,
            infer_inputs=True,
        )
        print(f"Recorded completed batch: {manifest}")
        return 0
    if manifest.is_file() and not args.force:
        print(
            f"Completion manifest already exists: {manifest}\n"
            "No files changed. Pass --force only if the card sources were restored."
        )
        return 0
    if args.dry_run:
        for card in cards:
            print(
                f"  {card.relative_path}: {card.width}x{card.height} -> "
                f"{card.width * args.factor}x{card.height * args.factor}; "
                f"alpha={card.alpha_extrema}"
            )
        print("Dry run complete; no files changed.")
        return 0

    executable = locate_upscaler(repo, args.upscaler)
    print(f"Upscaler: {executable}", flush=True)

    with tempfile.TemporaryDirectory(prefix="carzone-upscale-") as temp_name:
        temp_root = Path(temp_name)
        master_dir = temp_root / "masters"
        encoded_dir = temp_root / "encoded"
        master_dir.mkdir()
        encoded_dir.mkdir()

        masters: dict[str, Path] = {}
        for index, card in enumerate(cards, start=1):
            print(
                f"[{index:02d}/{len(cards):02d}] AI upscale {card.relative_path} "
                f"({card.width}x{card.height})",
                flush=True,
            )
            master = build_master(card, executable, master_dir, args.factor)
            masters[card.relative_path] = master

        quality = args.quality
        budget_bytes = round(args.growth_budget_mb * MIB)
        while True:
            shutil.rmtree(encoded_dir)
            encoded_dir.mkdir()
            outputs = encode_batch(cards, masters, encoded_dir, quality, args.factor)
            projected = projected_folder_size(before_folder, cards, outputs)
            growth = projected - before_folder
            print(
                f"Quality {quality}: projected assets/img={projected / MIB:.2f} MiB "
                f"({growth / MIB:+.2f} MiB).",
                flush=True,
            )
            if growth <= budget_bytes:
                break
            quality -= 2
            if quality < args.min_quality:
                raise RuntimeError(
                    "Could not meet the folder growth budget without dropping below "
                    f"quality {args.min_quality}. Original files were not changed."
                )

        replace_sources(cards, outputs)

    after_folder = folder_size(assets_img)
    after_cards = sum(card.source.stat().st_size for card in cards)
    for card in cards:
        validate_output(card, card.source, args.factor)
    write_manifest(
        repo,
        cards,
        args.factor,
        quality,
        before_folder,
        after_folder,
    )

    print("All staged files validated and replaced atomically.", flush=True)
    print(
        f"After: assets/img={after_folder / MIB:.2f} MiB "
        f"({(after_folder - before_folder) / MIB:+.2f} MiB); "
        f"card sources={after_cards / MIB:.2f} MiB; WebP quality={quality}.",
        flush=True,
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        print(f"ERROR: {error}", file=sys.stderr, flush=True)
        raise SystemExit(1)
