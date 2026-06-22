// ======================
// MOBILE MENU
// ======================

const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
});

// ======================
// CLOSE MENU ON CLICK
// ======================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

// ======================
// ACTIVE NAVIGATION
// ======================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute("id");

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(`.nav-link[href*=${sectionId}]`)
        ?.classList.add("active");
    } else {
      document
        .querySelector(`.nav-link[href*=${sectionId}]`)
        ?.classList.remove("active");
    }
  });
});

// ======================
// TYPING EFFECT
// ======================

const text = [
  "Frontend Developer",
  "Full Stack Developer",
  "Software Engineer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (!typingElement) return;

  if (charIndex < text[textIndex].length) {
    typingElement.textContent += text[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = text[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex++;
    if (textIndex >= text.length) textIndex = 0;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// ======================
// SCROLL REVEAL
// ======================

const revealElements = document.querySelectorAll(
  ".section, .project-card, .skill-card"
);

window.addEventListener("scroll", reveal);

function reveal() {
  revealElements.forEach(item => {
    const windowHeight = window.innerHeight;
    const revealTop = item.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      item.classList.add("show");
    }
  });
}

reveal();

// ======================
// BACK TO TOP BUTTON
// ======================

const topBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn?.classList.add("show-top");
  } else {
    topBtn?.classList.remove("show-top");
  }
});

topBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ======================
// CONTACT FORM
// ======================

const form = document.querySelector(".contact-form");

form?.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  alert("Message Sent Successfully 🚀");
  form.reset();
});