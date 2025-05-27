document.addEventListener("DOMContentLoaded", function() {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150; // cuánto antes de entrar a la vista activa la animación

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // para activar las que ya están visibles al cargar
});
