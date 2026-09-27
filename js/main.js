document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // 2. Active Route Highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-list a, .mobile-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.endsWith('/') && href.includes('index.html'))) {
      link.classList.add('active');
    }
  });

  // 3. Simulated Telemetry Clock (UTC Session Time)
  const sessionClock = document.getElementById('utc-clock');
  if (sessionClock) {
    const updateTime = () => {
      const now = new Date();
      const utcStr = now.toISOString().substring(11, 19) + ' UTC';
      sessionClock.textContent = utcStr;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  // 4. Subtle Interactive Price Fluctuations for Terminal Preview
  const esPrice = document.getElementById('tick-es');
  const nqPrice = document.getElementById('tick-nq');
  if (esPrice && nqPrice) {
    setInterval(() => {
      const delta = (Math.random() - 0.49) * 0.5;
      const current = parseFloat(esPrice.textContent);
      esPrice.textContent = (current + delta).toFixed(2);
    }, 2400);
  }
});