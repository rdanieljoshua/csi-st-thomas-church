// Fade-in animation on scroll
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight - 100;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      element.classList.add('show');
    }
  });
});

// Run once when page loads
window.dispatchEvent(new Event('scroll'));
