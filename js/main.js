document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // Active Link Highlighter
  const current = window.location.pathname;
  const links = document.querySelectorAll('.nav-list a, .mobile-menu a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current.endsWith('/') && href.includes('index.html'))) {
      link.classList.add('active');
    }
  });
});