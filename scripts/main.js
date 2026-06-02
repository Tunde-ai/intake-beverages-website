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

  /* ── Testimonials Carousel — TEST-04 ───────────────────────── */

  var slides = document.querySelectorAll('.testimonials__slide');
  var dots = document.querySelectorAll('.testimonials__dot');
  var prevBtn = document.querySelector('.testimonials__btn--prev');
  var nextBtn = document.querySelector('.testimonials__btn--next');
  var currentSlide = 0;
  var autoRotateTimer;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('testimonials__slide--active');
    dots[currentSlide].classList.remove('testimonials__dot--active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('testimonials__slide--active');
    dots[currentSlide].classList.add('testimonials__dot--active');
  }

  function startAutoRotate() {
    autoRotateTimer = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, 5000);
  }

  function resetAutoRotate() {
    clearInterval(autoRotateTimer);
    startAutoRotate();
  }

  if (prevBtn && nextBtn && slides.length > 0) {
    prevBtn.addEventListener('click', function () {
      goToSlide(currentSlide - 1);
      resetAutoRotate();
    });

    nextBtn.addEventListener('click', function () {
      goToSlide(currentSlide + 1);
      resetAutoRotate();
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
        resetAutoRotate();
      });
    });

    startAutoRotate();
  }

  /* ── Form Submissions — CONT-05, FOOT-04 ──────────────────── */

  function handleFormSubmit(form, statusEl, successMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var btn = form.querySelector('[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          statusEl.textContent = successMsg;
          statusEl.className = statusEl.className.replace(/--error/, '') + '--success';
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch(function () {
        statusEl.textContent = 'Something went wrong. Please try again.';
        statusEl.className = statusEl.className.replace(/--success/, '') + '--error';
      })
      .finally(function () {
        btn.textContent = originalText;
        btn.disabled = false;
      });
    });
  }

  var contactForm = document.getElementById('contact-form');
  var contactStatus = document.getElementById('contact-status');
  if (contactForm && contactStatus) {
    handleFormSubmit(contactForm, contactStatus, 'Message sent successfully! We\'ll be in touch.');
  }

  var newsletterForm = document.getElementById('newsletter-form');
  var newsletterStatus = document.getElementById('newsletter-status');
  if (newsletterForm && newsletterStatus) {
    handleFormSubmit(newsletterForm, newsletterStatus, 'Subscribed! Welcome to the InTake family.');
  }
})();
