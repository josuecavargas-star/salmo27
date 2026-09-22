(function () {
  "use strict";

  /* ===== MENÚ MÓVIL ===== */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    /* Cerrar menú al hacer clic en un enlace */
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  /* ===== AÑO EN EL FOOTER ===== */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ===== FORMULARIO DE CONTACTO ===== */
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = contactForm.nombre.value.trim();
      const email = contactForm.email.value.trim();
      const mensaje = contactForm.mensaje.value.trim();

      if (!nombre || !email || !mensaje) {
        formNote.textContent = "Por favor, completa todos los campos.";
        formNote.style.color = "#7d6b73";
        return;
      }

      formNote.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
      formNote.style.color = "#3b5e5b";
      contactForm.reset();
    });
  }
})();
