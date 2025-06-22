// === LANGUAGE SWITCHER === //
document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      home: "Home",
      info: "Info",
      contact: "Contact",
      title1: "Designing and Creating Gardens",
      des1: "Over the past three years, we have designed and implemented more than 100 garden projects...",
      morePhotos1: "MORE PHOTOS",
      title2: "Building Pools",
      des2: "At our company, we focus on providing exceptional value to our clients by building pools...",
      morePhotos2: "MORE PHOTOS",
      title3: "A Touch of Luxury and Sustainability",
      des3: "Our fountains are not just aesthetic additions; they are the embodiment of creativity...",
      morePhotos3: "MORE PHOTOS",
      // Mobile versions
      mobileTitle1: "Designing and Creating Gardens",
      mobileDes1: "Over the past three years, we have designed and implemented more than 100 garden projects...",
      mobileMorePhotos1: "MORE PHOTOS",
      mobileTitle2: "Building Pools",
      mobileDes2: "At our company, we focus on providing exceptional value to our clients by building pools...",
      mobileMorePhotos2: "MORE PHOTOS",
      mobileTitle3: "A Touch of Luxury and Sustainability",
      mobileDes3: "Our fountains are not just aesthetic additions; they are the embodiment of creativity...",
      mobileMorePhotos3: "MORE PHOTOS"
    },
    ar: {
      home: "الرئيسية",
      info: "معلومات",
      contact: "اتصل بنا",
      title1: "تصميم وإنشاء الحدائق",
      des1: "على مدى السنوات الثلاث الماضية، قمنا بتصميم وتنفيذ أكثر من 100 مشروع حديقة...",
      morePhotos1: "المزيد من الصور",
      title2: "بناء المسابح",
      des2: "في شركتنا، نركز على تقديم قيمة استثنائية لعملائنا من خلال بناء مسابح تجمع بين الجمال والمتانة...",
      morePhotos2: "المزيد من الصور",
      title3: "لمسة من الفخامة والاستدامة",
      des3: "نوافيرنا ليست مجرد إضافات جمالية؛ إنها تجسيد للإبداع والهندسة المتقدمة...",
      morePhotos3: "المزيد من الصور",
      mobileTitle1: "تصميم وإنشاء الحدائق",
      mobileDes1: "على مدى السنوات الثلاث الماضية، قمنا بتصميم وتنفيذ أكثر من 100 مشروع حديقة...",
      mobileMorePhotos1: "المزيد من الصور",
      mobileTitle2: "بناء المسابح",
      mobileDes2: "في شركتنا، نركز على تقديم قيمة استثنائية لعملائنا من خلال بناء مسابح...",
      mobileMorePhotos2: "المزيد من الصور",
      mobileTitle3: "لمسة من الفخامة والاستدامة",
      mobileDes3: "نوافيرنا ليست مجرد إضافات جمالية؛ إنها تجسيد للإبداع والهندسة المتقدمة...",
      mobileMorePhotos3: "المزيد من الصور"
    },
    fr: {
      home: "Accueil",
      info: "Info",
      contact: "Contact",
      title1: "Conception et création de jardins",
      des1: "Au cours des trois dernières années, nous avons conçu et réalisé plus de 100 projets de jardins...",
      morePhotos1: "PLUS DE PHOTOS",
      title2: "Construction de piscines",
      des2: "Dans notre entreprise, nous nous concentrons sur la fourniture d'une valeur exceptionnelle à nos clients en construisant des piscines...",
      morePhotos2: "PLUS DE PHOTOS",
      title3: "Une touche de luxe et de durabilité",
      des3: "Nos fontaines ne sont pas seulement des ajouts esthétiques ; elles incarnent la créativité et l'ingénierie avancée...",
      morePhotos3: "PLUS DE PHOTOS",
      mobileTitle1: "Conception et création de jardins",
      mobileDes1: "Au cours des trois dernières années, nous avons conçu et réalisé plus de 100 projets de jardins...",
      mobileMorePhotos1: "PLUS DE PHOTOS",
      mobileTitle2: "Construction de piscines",
      mobileDes2: "Dans notre entreprise, nous nous concentrons sur la fourniture d'une valeur exceptionnelle à nos clients en construisant des piscines...",
      mobileMorePhotos2: "PLUS DE PHOTOS",
      mobileTitle3: "Une touche de luxe et de durabilité",
      mobileDes3: "Nos fontaines ne sont pas seulement des ajouts esthétiques ; elles incarnent la créativité et l'ingénierie avancée...",
      mobileMorePhotos3: "PLUS DE PHOTOS"
    },
    es: {
      home: "Inicio",
      info: "Información",
      contact: "Contacto",
      title1: "Diseño y creación de jardines",
      des1: "En los últimos tres años, hemos diseñado e implementado más de 100 proyectos de jardines...",
      morePhotos1: "MÁS FOTOS",
      title2: "Construcción de piscinas",
      des2: "En nuestra empresa, nos enfocamos en brindar un valor excepcional a nuestros clientes construyendo piscinas...",
      morePhotos2: "MÁS FOTOS",
      title3: "Un toque de lujo y sostenibilidad",
      des3: "Nuestras fuentes no son solo adiciones estéticas; son la encarnación de la creatividad y la ingeniería avanzada...",
      morePhotos3: "MÁS FOTOS",
      mobileTitle1: "Diseño y creación de jardines",
      mobileDes1: "En los últimos tres años, hemos diseñado e implementado más de 100 proyectos de jardines...",
      mobileMorePhotos1: "MÁS FOTOS",
      mobileTitle2: "Construcción de piscinas",
      mobileDes2: "En nuestra empresa, nos enfocamos en brindar un valor excepcional a nuestros clientes construyendo piscinas...",
      mobileMorePhotos2: "MÁS FOTOS",
      mobileTitle3: "Un toque de lujo y sostenibilidad",
      mobileDes3: "Nuestras fuentes no son solo adiciones estéticas; son la encarnación de la creatividad y la ingeniería avanzada...",
      mobileMorePhotos3: "MÁS FOTOS"
    }
  };

  const langSwitcher = document.getElementById("languageSwitcher");
  const langDropdown = document.getElementById("languageDropdown");
  const buttons = document.querySelectorAll(".language-dropdown button");
  let currentLang = localStorage.getItem("lang") || "en";

  function setLanguage(lang) {
    try {
      if (!translations[lang]) {
        console.error(`Language ${lang} not found in translations`);
        lang = 'en'; // Fallback to English
      }

      currentLang = lang;
      localStorage.setItem("lang", lang);
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

      Object.keys(translations[lang]).forEach((key) => {
        const element = document.getElementById(key);
        if (element) element.textContent = translations[lang][key];
      });

      langSwitcher.textContent = lang.toUpperCase();
      langDropdown.style.display = "none";
    } catch (error) {
      console.error('Error setting language:', error);
      // Fallback to English if there's an error
      if (lang !== 'en') setLanguage('en');
    }
  }

  langSwitcher.addEventListener("click", () => {
    langDropdown.style.display =
      langDropdown.style.display === "flex" ? "none" : "flex";
  });

  langSwitcher.addEventListener("click", () => {
    langDropdown.classList.toggle("show");
  });

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
  );

  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
      langDropdown.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) {
        langDropdown.classList.remove("show");
    }
  });

  setLanguage(currentLang);
});

// === CAROUSEL LOGIC === //
class Carousel {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.thumbs = document.querySelectorAll(".thumb-item");
    this.prevBtn = document.getElementById("prev");
    this.nextBtn = document.getElementById("next");
    this.current = 0;
    this.autoRotateInterval = null;
    this.init();
  }

  init() {
    this.showSlide(this.current);
    this.addEventListeners();
    this.startAutoRotate();
  }

  showSlide(index) {
    // Add proper bounds checking with wrap-around
    if (index < 0) {
      index = this.slides.length - 1;
    } else if (index >= this.slides.length) {
      index = 0;
    }

    this.slides.forEach((s, i) => {
      s.classList.remove("active");
      this.thumbs[i].classList.remove("active");
    });

    this.slides[index].classList.add("active");
    this.thumbs[index].classList.add("active");
    this.current = index;
  }

  nextSlide() {
    this.showSlide(this.current + 1);
  }

  prevSlide() {
    this.showSlide(this.current - 1);
  }

  startAutoRotate() {
    this.autoRotateInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Rotate every 5 seconds
  }

  stopAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  addEventListeners() {
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.prevBtn.addEventListener("click", () => this.prevSlide());

    this.thumbs.forEach((t, i) => {
      t.addEventListener("click", () => this.showSlide(i));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") this.nextSlide();
      if (e.key === "ArrowLeft") this.prevSlide();
    });

    this.setupTouch();

    // Add pause on hover
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("mouseenter", () => this.stopAutoRotate());
    carousel.addEventListener("mouseleave", () => this.startAutoRotate());
  }

  setupTouch() {
    let startX = null;
    const carousel = document.querySelector(".carousel");

    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
      startX = null;
    });
  }

  // Clean up method
  destroy() {
    this.stopAutoRotate();
    document.removeEventListener("keydown", this.handleKeydown);
    // Remove other event listeners
  }
}

new Carousel();

// === HOVER EFFECT ON NAV LINKS === //
const links = document.querySelectorAll("header a");

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

window.addEventListener("mousemove", throttle((e) => {
  links.forEach((link) => {
    const rect = link.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const dx = e.clientX - x;
    const dy = e.clientY - y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 200;
    const force = Math.max(0, 1 - distance / maxDistance);
    const offsetX = dx * force * 0.1;
    const offsetY = dy * force * 0.1;
    link.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}, 16)); // Throttle to approximately 60fps

window.addEventListener("mouseleave", () => {
  links.forEach((link) => {
    link.style.transform = "translate(0, 0)";
  });
});