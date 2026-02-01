// Scroll Reveal Animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (top < trigger) {
      el.classList.add("active");
    }
  });
});

// Hero text animation
window.addEventListener("load", () => {
  document.querySelectorAll(".animate").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
});
