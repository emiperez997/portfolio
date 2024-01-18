const locationsObject = {
  "": 0,
  "#about": 1,
  "#projects": 2,
  "#skills": 3,
  "#contact": 4,
};

const currentLocation = location.href.split("/").slice(-1)[0];
const page = locationsObject[currentLocation];

showPage(page);

function showPage(n) {
  const menuLink = document.getElementsByClassName("menu-link");
  const menuItem = document.getElementsByClassName("item");

  if (menuItem[n].href === currentLocation) {
    menuItem[n].classList.add("active");
  }

  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    menuItem[i].classList.remove("active");
  }

  menuItem[n].classList.add("active");
}

// Slides
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("project-item");

  const dots = document.getElementsByClassName("dots");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  slides[slideIndex - 1].classList.remove("hide");
  dots[slideIndex - 1].classList.add("active-dot");
}

// Copy to clipboard
const copyEmailButton = document.querySelector(".mail-copy");

const originalHtml = copyEmailButton.innerHTML;

copyEmailButton.addEventListener("click", () => {
  const email = document.querySelector(".email");
  const emailValue = email.textContent;
  navigator.clipboard.writeText(emailValue);
  copyEmailButton.textContent = "Copied!";
  setTimeout(() => {
    copyEmailButton.innerHTML = originalHtml;
  }, 2000);
});
