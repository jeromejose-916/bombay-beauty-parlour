const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.nav');

if (mainNav && !mainNav.querySelector('a[href="services.html"]')) {
  const servicesLink = document.createElement('a');
  servicesLink.href = 'services.html';
  servicesLink.textContent = 'Services';
  mainNav.insertBefore(servicesLink, mainNav.querySelector('a[href="contact.html"]'));
}

const copyright = document.querySelector('.footer-bottom > span');

if (copyright) {
  copyright.textContent = `© ${new Date().getFullYear()} Bombay Beauty Parlour`;
}

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
    mainNav.classList.toggle('open', !isExpanded);
  });
}

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const fields = new FormData(contactForm);
    const subject = `Enquiry: ${fields.get('service')}`;
    const body = [
      `Name: ${fields.get('name')}`,
      `Email: ${fields.get('email')}`,
      `Service: ${fields.get('service')}`,
      `Preferred date: ${fields.get('date') || 'Flexible'}`,
      '',
      fields.get('message'),
    ].join('\n');

    document.querySelector('#form-status').textContent = 'Your email app is opening with your enquiry. We look forward to hearing from you.';
    window.location.href = `mailto:hello@bombaybeautyparlour.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
