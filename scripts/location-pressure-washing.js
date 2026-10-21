document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const icon = item.querySelector(".faq-icon");

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      faqItems.forEach((faq) => {
        faq.classList.remove("open");
        faq.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
        faq.querySelector(".faq-icon").textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
        icon.textContent = "–";
      }
    });
  });
});