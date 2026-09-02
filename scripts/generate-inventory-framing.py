#!/usr/bin/env python3
"""Generate normalized alpha bounds for every vehicle image in stoc.html."""

from __future__ import annotations

import argparse
import json
from html.parser import HTMLParser
from pathlib import Path

from PIL import Image


class VehicleImageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.paths: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "img":
            return
        values = dict(attrs)
        classes = (values.get("class") or "").split()
        source = values.get("src")
        if "featured__img" in classes and source:
            self.paths.append(source)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Measure visible vehicle bounds and write inventory framing metadata."
    )
    parser.add_argument(
        "--repo",
        type=Path,
        default=Path(__file__).resolve().parents[1],
        help="Repository root (defaults to the parent of scripts/).",
    )
    parser.add_argument(
        "--alpha-threshold",
        type=int,
        default=8,
        help="Ignore alpha values below this level when finding the visible car.",
    )
    return parser.parse_args()


def visible_bounds(image: Image.Image, threshold: int) -> tuple[int, int, int, int]:
    alpha = image.convert("RGBA").getchannel("A")
    mask = alpha.point(lambda value: 255 if value >= threshold else 0)
    bounds = mask.getbbox()
    if not bounds:
        raise ValueError("image has no visible pixels above the alpha threshold")
    return bounds


def main() -> int:
    args = parse_args()
    repo = args.repo.resolve()
    parser = VehicleImageParser()
    parser.feed((repo / "stoc.html").read_text(encoding="utf-8"))
    paths = list(dict.fromkeys(parser.paths))
    if not paths:
        raise RuntimeError("No .featured__img sources found in stoc.html")

    images: dict[str, dict[str, object]] = {}
    visible_areas: list[tuple[int, str]] = []
    for relative_path in paths:
        source = repo / relative_path
        if not source.is_file():
            raise FileNotFoundError(f"Missing inventory image: {relative_path}")
        with Image.open(source) as image:
            rgba = image.convert("RGBA")
            left, top, right, bottom = visible_bounds(rgba, args.alpha_threshold)
            width, height = rgba.size
        visible_width = right - left
        visible_height = bottom - top
        visible_areas.append((visible_width * visible_height, relative_path))
        images[relative_path] = {
            "sourceSize": [width, height],
            "bounds": [
                round(left / width, 7),
                round(top / height, 7),
                round(right / width, 7),
                round(bottom / height, 7),
            ],
            "visibleAspect": round(visible_width / visible_height, 4),
        }

    payload = {
        "version": 1,
        "alphaThreshold": args.alpha_threshold,
        "normalization": {
            "targetAreaRatio": 0.58,
            "maxWidthRatio": 0.94,
            "maxHeightRatio": 0.82,
            "baselineRatio": 0.93,
        },
        "images": images,
    }
    destination = repo / "assets" / "data" / "inventory-framing.json"
    temporary = destination.with_suffix(destination.suffix + ".new")
    temporary.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    temporary.replace(destination)

    visible_areas.sort()
    print(f"Wrote {len(images)} image frames to {destination}")
    print(
        "Raw visible-area spread: "
        f"{visible_areas[0][0]:,} ({visible_areas[0][1]}) to "
        f"{visible_areas[-1][0]:,} ({visible_areas[-1][1]})."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
