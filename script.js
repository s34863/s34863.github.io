(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a => {
    if ((a.getAttribute('href') || '') === path) a.classList.add('active');
  });
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.navlinks');
  if (menu) menu.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  const lightbox = document.querySelector('.lightbox');
  const lightImg = document.querySelector('.lightbox img');
  if (lightbox && lightImg) {
    document.querySelectorAll('.cert').forEach(img => img.addEventListener('click', () => {
      lightImg.src = img.src; lightImg.alt = img.alt; lightbox.classList.add('open');
    }));
    document.querySelector('.close')?.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }
})();
