const dialogElem = document.getElementById("dialog");
const dialogImageElem = document.getElementById("dialog-image");
const dialogCreditElem = document.getElementById("dialog-credit");
const showBtns = document.querySelectorAll(".show");
const closeBtn = document.querySelector(".close");
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll("[data-item]");

/* Image modal */
showBtns.forEach((showBtn) => {
  showBtn.addEventListener("click", (event) => {
    const listItem = event.currentTarget.closest("li");
    const creditHTML = listItem.querySelector(".credit").innerHTML;
    const imgElem = listItem.querySelector("img");
    const imgSrc = imgElem.getAttribute("src");
    const imgAlt = imgElem.getAttribute("alt");

    dialogCreditElem.innerHTML = creditHTML;
    dialogImageElem.setAttribute("src", imgSrc);
    dialogImageElem.setAttribute("alt", imgAlt);

    if (typeof dialogElem.showModal === "function") {
      dialogElem.showModal();
    }
  });
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});

dialogElem.addEventListener("click", (event) => {
  const dialogDimensions = dialogElem.getBoundingClientRect();

  const clickedInDialog =
    event.clientX >= dialogDimensions.left &&
    event.clientX <= dialogDimensions.right &&
    event.clientY >= dialogDimensions.top &&
    event.clientY <= dialogDimensions.bottom;

  if (!clickedInDialog) {
    dialogElem.close();
  }
});

/* Filtering */
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedFilter = btn.dataset.filter;

    filterBtns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    galleryItems.forEach((item) => {
      const category = item.dataset.category;

      if (selectedFilter === "all" || category === selectedFilter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});

const beforeAfterSliders = document.querySelectorAll(".before-after-slider");

beforeAfterSliders.forEach((slider) => {
  const range = slider.querySelector(".before-after-range");
  const afterWrapper = slider.querySelector(".after-image-wrapper");
  const sliderLine = slider.querySelector(".slider-line");
  const dragHint = slider.querySelector(".drag-hint");

  function updateSlider() {
    const value = range.value + "%";
    afterWrapper.style.width = value;
    sliderLine.style.left = value;
  }

  range.addEventListener("input", () => {
    updateSlider();

    if (dragHint) {
      dragHint.style.display = "none";
    }
  });

  range.addEventListener("change", updateSlider);

  updateSlider();
});