// =====================================================
// MENU RESPONSIVO (HAMBÚRGUER)
// =====================================================

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    mainNav.classList.toggle("is-open");
  });

  // Fecha o menu ao clicar em um link (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navToggle.classList.remove("is-open");
        mainNav.classList.remove("is-open");
      }
    });
  });
}

// =====================================================
// ANO AUTOMÁTICO NO FOOTER
// =====================================================

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// =====================================================
// ANIMAÇÕES SUAVES AO SCROLL
// =====================================================

const animatedElements = document.querySelectorAll(".animate-on-scroll");

if ("IntersectionObserver" in window) {
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
      threshold: 0.18,
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
} else {
  // Fallback simples
  animatedElements.forEach((el) => el.classList.add("in-view"));
}

// =====================================================
// FILTRO DE PROJETOS NO GRID
// =====================================================

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.getAttribute("data-filter");

    // Atualiza estado visual do botão
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filtra projetos
    portfolioItems.forEach((item) => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        item.style.opacity = "1";
        item.style.pointerEvents = "auto";
        item.style.transform = "translateY(0)";
      } else {
        item.style.opacity = "0.12";
        item.style.pointerEvents = "none";
        item.style.transform = "translateY(4px)";
      }
    });
  });
});

// =====================================================
// GALERIA DE PROJETOS: TROCA DE IMAGEM PRINCIPAL
// =====================================================

document.querySelectorAll("[data-main-image]").forEach((galleryMain) => {
  const mainImg = galleryMain.querySelector("img");
  if (!mainImg) return;

  const thumbsWrapperId = galleryMain.getAttribute("data-main-image");
  const thumbsWrapper = document.getElementById(thumbsWrapperId);
  if (!thumbsWrapper) return;

  thumbsWrapper.querySelectorAll("[data-image-src]").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const newSrc = thumb.getAttribute("data-image-src");
      if (newSrc) {
        mainImg.src = newSrc;
      }
    });
  });
});

// =====================================================
// FORMULÁRIO DE CONTATO (DEMO)
// =====================================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Aqui você pode integrar com algum serviço de envio de e-mail (Formspree, API própria, etc.)
    alert(
      "Obrigado pela mensagem! Em breve entraremos em contato.\n\n(Observação: este formulário está em modo demonstrativo.)"
    );

    contactForm.reset();
  });
}

