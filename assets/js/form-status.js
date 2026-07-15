function initDemoForms() {
  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    function handleDemoSubmit(event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      form.querySelector('[data-demo-result]')?.remove();

      const message = document.createElement('p');
      message.className = 'form-status form-status--success';
      message.dataset.demoResult = '';
      message.setAttribute('role', 'status');
      message.setAttribute('tabindex', '-1');
      const translate = window.carzoneI18n?.t ?? ((key) => key);
      const label = form.dataset.demoI18n
        ? translate(form.dataset.demoI18n)
        : translate('form.fallbackLabel');
      message.textContent = `${label} ${translate('form.demoResult')}`;

      form.prepend(message);
      message.focus();
    }

    form.addEventListener('submit', handleDemoSubmit);
    form.querySelector('[type="submit"]')?.addEventListener('click', handleDemoSubmit);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDemoForms, { once: true });
} else {
  initDemoForms();
}
