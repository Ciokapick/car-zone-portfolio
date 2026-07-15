function initFinancingPage() {
    // Selectăm formularul și câmpurile de input
    const loanAmountInput = document.getElementById("loan-amount");
    const interestRateInput = document.getElementById("interest-rate");
    const loanTermInput = document.getElementById("loan-term");
    const advanceInput = document.getElementById("advance");

    // Selectăm elementele pentru afișarea rezultatelor
    const totalInterestOutput = document.getElementById("total-interest");
    const monthlyPaymentOutput = document.getElementById("monthly-payment");
    const totalPaymentOutput = document.getElementById("total-payment");

    const calculatorForm = document.querySelector(".calculator-form");
    const calculateButton = document.querySelector(".calculate-btn");

    if (!calculatorForm || !calculateButton || !loanAmountInput || !interestRateInput || !loanTermInput || !advanceInput || !totalInterestOutput || !monthlyPaymentOutput || !totalPaymentOutput) {
        return;
    }

    function calculateFinancing(event) {
        event.preventDefault(); // Prevenim trimiterea formularului

        // Obținem valorile din câmpurile de input
        const loanAmount = parseFloat(loanAmountInput.value);
        const interestRate = parseFloat(interestRateInput.value) / 100;
        const loanTerm = parseInt(loanTermInput.value);
        const advance = parseFloat(advanceInput.value);

        // Verificăm dacă valorile sunt valide
        if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || isNaN(advance)) {
            alert(window.carzoneI18n?.t('fin.alertInvalid') || 'Please enter valid values in all fields.');
            return;
        }

        // Calculăm suma de finanțat (loanAmount - advance)
        const financedAmount = loanAmount - advance;

        // Verificăm dacă suma finanțată este validă
        if (financedAmount <= 0) {
            alert(window.carzoneI18n?.t('fin.alertAdvance') || 'The down payment cannot be greater than the total amount.');
            return;
        }

        // Calculăm dobânda totală
        const totalInterest = financedAmount * interestRate * loanTerm;
        const totalPayment = financedAmount + totalInterest;
        const monthlyPayment = totalPayment / (loanTerm * 12);

        // Afișăm rezultatele
        totalInterestOutput.textContent = totalInterest.toFixed(2);
        monthlyPaymentOutput.textContent = monthlyPayment.toFixed(2);
        totalPaymentOutput.textContent = totalPayment.toFixed(2);
    }

    calculatorForm.addEventListener("submit", calculateFinancing);
    calculateButton.addEventListener("click", calculateFinancing);

    // Adăugăm animații ScrollReveal pentru finanțare
    const srFinance = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2500,
        delay: 400,
        reset: false // Dezactivează resetarea animațiilor
    });

    // Aplica animațiile pe elementele relevante din secțiunea de finanțare
    srFinance.reveal(`.video-title, .video-subtitle`, { interval: 200 });
    srFinance.reveal(`.financing-card`, { interval: 300, origin: "bottom" });
    srFinance.reveal(`.calculator-section h2`, { delay: 200 });
    srFinance.reveal(`.calculator-section p`, { delay: 300 });
    srFinance.reveal(`.calculator-section`, { origin: "bottom", delay: 400, distance: "100px" }); // Fundal calculator
    srFinance.reveal(`.calculator-form`, { interval: 100, origin: "bottom", delay: 500 });
    srFinance.reveal(`.form-group`, { interval: 150, origin: "left", delay: 600 });
    srFinance.reveal(`.calculate-btn`, { origin: "bottom", delay: 700, distance: "80px" });
    srFinance.reveal(`.calculator-results p`, { interval: 100, origin: "right", delay: 800 });

    // Adăugăm animații ScrollReveal pentru footer
    const srFooter = ScrollReveal({
        origin: "bottom",
        distance: "50px",
        duration: 2000,
        delay: 300,
        reset: false // Dezactivează resetarea animațiilor pentru footer
    });

    // Aplica animațiile pe elementele relevante din footer
    srFooter.reveal(`.footer__content img`, { origin: "left", delay: 200 }); // Logo-ul
    srFooter.reveal(`.footer__description`, { origin: "left", delay: 300 }); // Descrierea
    srFooter.reveal(`.footer__title`, { origin: "top", delay: 400 }); // Titlurile secțiunilor
    srFooter.reveal(`.footer__links li`, { interval: 100, origin: "top", delay: 500 }); // Link-urile
    srFooter.reveal(`.footer__social a`, { interval: 150, origin: "bottom", delay: 600 }); // Iconițele sociale
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFinancingPage, { once: true });
} else {
    initFinancingPage();
}
