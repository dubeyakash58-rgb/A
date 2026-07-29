const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
const year = document.querySelector('#year');
const contactForm = document.querySelector('#contact-form');

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 80);
}, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = `${data.get('firstName')} ${data.get('lastName')}`.trim();
  const subject = encodeURIComponent(`New ${data.get('projectType')} project inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Email: ${data.get('email')}\n` +
    `Phone: ${data.get('phone') || 'Not provided'}\n` +
    `Project type: ${data.get('projectType')}\n\n` +
    `Project details:\n${data.get('message')}`
  );

  window.location.href = `mailto:akash.dubey@techversesmartsolutions.com?subject=${subject}&body=${body}`;
});
