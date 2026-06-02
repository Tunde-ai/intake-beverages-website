/* ============================================================
   InTake Beverages — Main Interactions
   ============================================================ */

(function () {
  'use strict';

  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  /* ── Sticky Header — scroll detection ──────────────────────── */

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Hamburger Toggle — NAV-04 ─────────────────────────────── */

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('header__hamburger--open');
    nav.classList.toggle('nav--open');
  });

  /* ── Smooth Scroll & Close Nav — NAV-05 ────────────────────── */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      // Close mobile nav if open
      hamburger.classList.remove('header__hamburger--open');
      nav.classList.remove('nav--open');

      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
