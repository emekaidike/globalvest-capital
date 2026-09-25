document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      if (!name || !email || !message) return;

      formMessage.textContent = `Thank you, ${name.value.trim() || 'there'} — your message has been received.`;
      contactForm.reset();
    });
  }
});
