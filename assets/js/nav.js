(function () {
  var toggle = document.querySelector('.site-nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  }

  // Always start closed — also handles bfcache / restored page loads
  window.addEventListener('pageshow', function () { setOpen(false); });

  toggle.addEventListener('click', function () {
    setOpen(!document.body.classList.contains('nav-open'));
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  nav.addEventListener('click', function (e) {
    if (e.target.matches('.site-nav__link')) setOpen(false);
  });
})();
