document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      form.querySelector('[data-demo-result]')?.remove();

      const message = document.createElement('p');
      message.className = 'form-status form-status--success';
      message.dataset.demoResult = '';
      message.setAttribute('role', 'status');
      message.setAttribute('tabindex', '-1');
      message.textContent = `${form.dataset.demoLabel || 'Solicitarea'} a trecut validarea locală. Acesta este un proiect de portofoliu: nimic nu a fost trimis sau stocat.`;

      form.prepend(message);
      message.focus();
    });
  });
});
