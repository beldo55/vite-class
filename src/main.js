import home from './pages/home.js';
import about from './pages/about.js';
import services from './pages/services.js';
import work from './pages/work.js';
import pricing from './pages/pricing.js';
import team from './pages/team.js';
import blog from './pages/blog.js';
import faq from './pages/faq.js';
import contact from './pages/contact.js';
import privacy from './pages/privacy.js';

const app = document.querySelector('#app');

function showPage() {
  const page = location.hash === '#menu' ? '#home' : location.hash || '#home';

  if (page === '#about') {
    app.innerHTML = about;
  } else if (page === '#services') {
    app.innerHTML = services;
  } else if (page === '#work') {
    app.innerHTML = work;
  } else if (page === '#pricing') {
    app.innerHTML = pricing;
  } else if (page === '#team') {
    app.innerHTML = team;
  } else if (page === '#blog') {
    app.innerHTML = blog;
  } else if (page === '#faq') {
    app.innerHTML = faq;
  } else if (page === '#contact') {
    app.innerHTML = contact;
  } else if (page === '#privacy') {
    app.innerHTML = privacy;
  } else {
    app.innerHTML = home;
  }

  document.querySelectorAll('.site-nav a').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === page);
  });
}

window.addEventListener('hashchange', showPage);
showPage();
