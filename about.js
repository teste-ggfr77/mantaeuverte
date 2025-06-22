// Translation System
const translations = {
	en: {
	  aboutTitle: "About Us",
	  aboutText: "Manteau.Vert is a leading Moroccan company specializing in the creation of luxurious pools, breathtaking gardens, and elegant fountains.",
	  techTitle: "Our Technology",
	  techText: "We use advanced landscape design software, 3D modeling, drone mapping, and automated irrigation systems.",
	  projectsTitle: "Our Projects",
	  projectsText: "We’ve completed iconic projects across Morocco — from luxury hotel courtyards and city parks to modern villa rooftops."
	},
	ar: {
	  aboutTitle: "من نحن",
	  aboutText: "Manteau.Vert هي شركة مغربية رائدة في تصميم المسابح الفاخرة والحدائق الخلابة والنوافير الأنيقة.",
	  techTitle: "تقنيتنا",
	  techText: "نستخدم برامج تصميم متطورة، نماذج ثلاثية الأبعاد، تصوير جوي بالطائرات، وأنظمة ري ذكية.",
	  projectsTitle: "مشاريعنا",
	  projectsText: "قمنا بتنفيذ مشاريع أيقونية في المغرب تشمل فنادق فاخرة وحدائق عامة وأسقف فيلات خاصة."
	},
	fr: {
	  aboutTitle: "À propos de nous",
	  aboutText: "Manteau.Vert est une entreprise marocaine spécialisée dans la création de piscines luxueuses, de jardins époustouflants et de fontaines élégantes.",
	  techTitle: "Notre technologie",
	  techText: "Nous utilisons des logiciels de conception paysagère, modélisation 3D, drones et systèmes d’irrigation automatisés.",
	  projectsTitle: "Nos projets",
	  projectsText: "Nous avons réalisé des projets emblématiques au Maroc, y compris des hôtels, des parcs publics et des toits de villas modernes."
	},
	es: {
	  aboutTitle: "Sobre nosotros",
	  aboutText: "Manteau.Vert es una empresa marroquí líder en la creación de piscinas lujosas, jardines impresionantes y fuentes elegantes.",
	  techTitle: "Nuestra tecnología",
	  techText: "Usamos software avanzado, modelos 3D, drones y sistemas de riego automatizado.",
	  projectsTitle: "Nuestros proyectos",
	  projectsText: "Hemos transformado espacios en hoteles, parcs públicos y azoteas de villas en Marruecos."
	}
  };
  
  let currentLanguage = localStorage.getItem('language') || 'en';
  
  function updateTexts() {
	const t = translations[currentLanguage];
	document.getElementById('aboutTitle').textContent = t.aboutTitle;
	document.getElementById('aboutText').textContent = t.aboutText;
	document.getElementById('techTitle').textContent = t.techTitle;
	document.getElementById('techText').textContent = t.techText;
	document.getElementById('projectsTitle').textContent = t.projectsTitle;
	document.getElementById('projectsText').textContent = t.projectsText;
	document.querySelector('.language-code').textContent = currentLanguage.toUpperCase();
  }
  
  document.getElementById('languageSwitcher').addEventListener('click', () => {
	const dropdown = document.getElementById('languageDropdown');
	dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
  });
  
  document.querySelectorAll('.language-dropdown button').forEach(button => {
	button.addEventListener('click', () => {
	  currentLanguage = button.getAttribute('data-lang');
	  localStorage.setItem('language', currentLanguage);
	  updateTexts();
	  document.documentElement.lang = currentLanguage;
	  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
	  document.getElementById('languageDropdown').style.display = 'none';
	});
  });
  
  updateTexts();
  
  // 3D Model Interaction
  (() => {
	const modelViewers = document.querySelectorAll(".model-viewer");
	const cards = document.querySelectorAll(".card");
	const defaultOrbit = "0deg 90deg 164m";
  
	const applyOrbit = (modelViewer, orbit, vert) => {
	  modelViewer.setAttribute("camera-orbit", orbit);
	  modelViewer.setAttribute("interpolation-decay", "200");
	  modelViewer.setAttribute("camera-target", `0m ${vert}m 10m`);
	};
  
	cards.forEach((card, index) => {
	  const modelViewer = modelViewers[index];
	  if (modelViewer) {
		const calcOrbit = (xPos, cardRect) => {
		  const normalizedX = (xPos - cardRect.left) / cardRect.width;
		  const angle = normalizedX * 90 - 45;
		  return `${-angle}deg 90deg 164m`;
		};
  
		card.addEventListener("mousemove", (event) => {
		  const cardRect = card.getBoundingClientRect();
		  const orbit = calcOrbit(event.clientX, cardRect);
		  applyOrbit(modelViewer, orbit, 120);
		});
  
		card.addEventListener("mouseleave", () => {
		  applyOrbit(modelViewer, defaultOrbit, 140);
		});
  
		modelViewer.addEventListener("load", () => {
		  modelViewer.classList.add("loaded");
		});
	  }
	});
  })();
  
  // Scroll Reveal Animation
  const scrollReveal = () => {
	const reveals = document.querySelectorAll(".reveal");
	reveals.forEach((el) => {
	  const rect = el.getBoundingClientRect();
	  if (rect.top < window.innerHeight - 100) {
		el.classList.add("active");
	  }
	});
  };
  
  window.addEventListener("scroll", scrollReveal);
  scrollReveal();
  
  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  });
  
  // Load Saved Theme
  if (localStorage.getItem('darkMode') === 'true') {
	document.body.classList.add('dark-mode');
  }
  
  // Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', (e) => {
	e.preventDefault();
	alert('Message sent successfully!');
	e.target.reset();
  });