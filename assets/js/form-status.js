function initDemoForms() {
  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    const translate = (key) => window.carzoneI18n?.t(key) ?? key;
    const updateMessage = () => {
      const message = form.querySelector('[data-demo-result]');
      if (message) message.textContent = `${translate(form.dataset.demoI18n || 'form.fallbackLabel')} ${translate('form.demoResult')}`;
    };
    form.addEventListener('invalid', (event) => {
      const field = event.target;
      field.setCustomValidity('');
      const validity = field.validity;
      if (validity.valueMissing) field.setCustomValidity(translate('form.required'));
      else if (validity.typeMismatch && field.type === 'email') field.setCustomValidity(translate('form.invalidEmail'));
      else if (validity.badInput) field.setCustomValidity(translate('form.invalidNumber'));
      else if (validity.rangeUnderflow) field.setCustomValidity(`${translate('form.min')} ${field.min}.`);
      else if (validity.rangeOverflow) field.setCustomValidity(`${translate('form.max')} ${field.max}.`);
      else if (!validity.valid) field.setCustomValidity(translate('form.invalidValue'));
    }, true);
    form.addEventListener('input', (event) => event.target.setCustomValidity?.(''));
    window.addEventListener('carzone:languagechange', () => {
      form.querySelectorAll('input, select, textarea').forEach(field => field.setCustomValidity(''));
      updateMessage();
    });
    function handleDemoSubmit(event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      form.querySelector('[data-demo-result]')?.remove();

      const message = document.createElement('p');
      message.className = 'form-status form-status--success';
      message.dataset.demoResult = '';
      message.setAttribute('role', 'status');
      message.setAttribute('tabindex', '-1');
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
