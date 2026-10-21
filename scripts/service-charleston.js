document.addEventListener("DOMContentLoaded", () => {
  const yearTarget = document.getElementById("footer-year");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      mainNav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open");
    });
  }

  const animatedSections = document.querySelectorAll(
    ".split-story, .problem-grid, .detail-columns, .local-grid, .timeline article, .faq-item, .cta-grid"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  animatedSections.forEach((section) => {
    section.classList.add("pre-reveal");
    observer.observe(section);
  });
});