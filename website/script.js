/* truthOS marketing site — minimal interaction layer.
   Mobile nav, nav shadow on scroll, reveal-on-scroll, footer year. */
(function () {
  "use strict";

  // Sticky nav border on scroll
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Footer year
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // Interactive command-center console: click a center to switch the dashboard
  document.querySelectorAll(".console").forEach(function (con) {
    var btns = con.querySelectorAll(".cc-btn");
    var panels = con.querySelectorAll(".cc-panel");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-cc");
        btns.forEach(function (b) { b.classList.toggle("active", b === btn); });
        panels.forEach(function (p) {
          p.classList.toggle("active", p.getAttribute("data-cc") === key);
        });
      });
    });
  });

  // Apply form: friendly no-backend handler
  var form = document.querySelector("form[data-apply]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = form.querySelector("[data-apply-done]");
      form.querySelectorAll("input, select, textarea, button").forEach(function (el) {
        el.setAttribute("disabled", "true");
      });
      if (done) done.style.display = "flex";
    });
  }
})();
