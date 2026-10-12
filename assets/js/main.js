(function () {
  // Tabbed pages: #home, #research, #projects. Without JS, all sections simply show in order.
  var pages = Array.prototype.slice.call(document.querySelectorAll('[data-page]'));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var pageIds = pages.map(function (p) { return p.id; });

  function route() {
    var hash = decodeURIComponent(location.hash.slice(1));
    var pageId = pageIds.indexOf(hash) !== -1 ? hash : null;
    var anchor = null;

    // A hash pointing inside a page (e.g. #publications) opens that page and scrolls to it.
    if (!pageId && hash) {
      var el = document.getElementById(hash);
      var parent = el && el.closest('[data-page]');
      if (parent) { pageId = parent.id; anchor = el; }
    }
    pageId = pageId || 'home';

    pages.forEach(function (p) { p.hidden = p.id !== pageId; });
    navLinks.forEach(function (a) {
      if (a.getAttribute('href') === '#' + pageId) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    document.title = document.getElementById(pageId).dataset.title || document.title;

    if (anchor) anchor.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();

  document.getElementById('year').textContent = new Date().getFullYear();
})();
