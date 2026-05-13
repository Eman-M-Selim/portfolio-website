// Main renderer for portfolio pages.
// Uses shared content from data/portfolio-data.js.

const THEME_CLASS_DARK = "dark-theme";
const THEME_STORAGE_KEY = "portfolio-theme";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_THEME = "dark";
const DEFAULT_LANGUAGE = "en";

const bodyElement = document.body;
const siteHeaderElement = document.querySelector(".site-header");
const mobileMenuToggleButton = document.getElementById("mobile-menu-toggle");
const navbarLinksContainer = document.getElementById("navbar-links");
const themeToggleButton = document.getElementById("theme-toggle");
const languageToggleButton = document.getElementById("language-toggle");
const scrollTopButton = document.getElementById("scroll-top-button");
const navigationLinks = Array.from(document.querySelectorAll(".nav-link"));
const observedSections = Array.from(document.querySelectorAll("main section[id]"));

const currentPage = (() => {
  const pageName = window.location.pathname.split("/").pop().toLowerCase();
  if (pageName === "projects.html") {
    return "projects";
  }
  if (pageName === "certificates.html") {
    return "certificates";
  }
  return "index";
})();

const getCurrentLanguage = () => localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
const getCurrentTheme = () => localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;

const getLocalizedValue = (value, language) => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    if (Object.prototype.hasOwnProperty.call(value, language)) {
      return value[language];
    }
    return value.en || "";
  }
  return value;
};

const getUiLabels = (language) => portfolioData.ui[language] || portfolioData.ui.en;

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value !== undefined) {
    element.textContent = value;
  }
};

const setLinkAttributes = (linkElement, href, label) => {
  if (!linkElement || !href) {
    return;
  }

  linkElement.href = href;
  if (label) {
    linkElement.setAttribute("aria-label", label);
  }
};

const setExternalLinkSecurity = (containerElement) => {
  if (!containerElement) {
    return;
  }

  containerElement.querySelectorAll('a[target="_blank"]').forEach((anchor) => {
    anchor.setAttribute("rel", "noreferrer noopener");
  });
};

const getStickyNavbarOffset = () => {
  const headerHeight = siteHeaderElement?.offsetHeight || 74;
  return headerHeight + 8;
};

const scrollToSectionWithOffset = (targetElement, behavior = "smooth") => {
  if (!targetElement) {
    return;
  }

  const targetTop = targetElement.getBoundingClientRect().top + window.scrollY;
  const scrollTop = Math.max(targetTop - getStickyNavbarOffset(), 0);
  window.scrollTo({ top: scrollTop, behavior });
};

// Responsive Navigation: toggles, outside click close, and keyboard escape.
const setMobileMenuState = (isOpen) => {
  if (!navbarLinksContainer || !mobileMenuToggleButton) {
    return;
  }

  navbarLinksContainer.classList.toggle("is-open", isOpen);
  mobileMenuToggleButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenuToggleButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
};

const closeMobileMenu = () => setMobileMenuState(false);

const setupMobileMenu = () => {
  if (!mobileMenuToggleButton || !navbarLinksContainer) {
    return;
  }

  mobileMenuToggleButton.addEventListener("click", () => {
    const isOpen = !navbarLinksContainer.classList.contains("is-open");
    setMobileMenuState(isOpen);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMobileMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navbarLinksContainer.contains(event.target);
    const clickedToggle = mobileMenuToggleButton.contains(event.target);
    if (!clickedInsideMenu && !clickedToggle) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  setMobileMenuState(false);
};

const setupSmoothScrolling = () => {
  if (currentPage !== "index") {
    return;
  }

  const inPageLinks = document.querySelectorAll('a[href^="#"]');
  inPageLinks.forEach((linkElement) => {
    linkElement.addEventListener("click", (event) => {
      const targetSelector = linkElement.getAttribute("href");
      if (!targetSelector || targetSelector === "#") {
        return;
      }

      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) {
        return;
      }

      event.preventDefault();
      scrollToSectionWithOffset(targetElement);
      history.replaceState(null, "", targetSelector);
      closeMobileMenu();
    });
  });
};

const setupActiveNavHighlight = () => {
  if (currentPage !== "index" || !observedSections.length || !navigationLinks.length) {
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const activeSectionId = entry.target.getAttribute("id");
        navigationLinks.forEach((linkElement) => {
          const targetId = linkElement.getAttribute("href")?.replace("#", "");
          const isActive = targetId === activeSectionId;
          linkElement.classList.toggle("active", isActive);
          if (isActive) {
            linkElement.setAttribute("aria-current", "page");
          } else {
            linkElement.removeAttribute("aria-current");
          }
        });
      });
    },
    { threshold: 0.45, rootMargin: "-12% 0px -33% 0px" },
  );

  observedSections.forEach((sectionElement) => sectionObserver.observe(sectionElement));
};

// Theme Toggle: shared theme preference for all pages.
const applyTheme = (themeName) => {
  const isDarkTheme = themeName === "dark";
  bodyElement.classList.toggle(THEME_CLASS_DARK, isDarkTheme);

  if (!themeToggleButton) {
    return;
  }

  const iconElement = themeToggleButton.querySelector("i");
  if (iconElement) {
    iconElement.className = isDarkTheme ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
  }
  themeToggleButton.setAttribute("aria-pressed", String(isDarkTheme));
};

const setupThemeToggle = () => {
  if (!themeToggleButton) {
    return;
  }

  applyTheme(getCurrentTheme());

  themeToggleButton.addEventListener("click", () => {
    const nextTheme = bodyElement.classList.contains(THEME_CLASS_DARK) ? "light" : "dark";
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  });
};

// Skills Section: grouped cards rendered from shared data source.
const createSkillCard = (group, language) => {
  const card = document.createElement("article");
  card.className = "glass-card skill-card interactive-card";

  const title = document.createElement("h3");
  title.innerHTML = `<i class="bi ${group.iconClass}" aria-hidden="true"></i> ${getLocalizedValue(group.title, language)}`;

  const list = document.createElement("ul");
  list.className = "pill-list";
  const items = Array.isArray(group.items) ? group.items : getLocalizedValue(group.items, language);

  items.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  });

  card.append(title, list);
  return card;
};

const renderSkills = (language) => {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid) {
    return;
  }

  skillsGrid.innerHTML = "";
  portfolioData.skills.groups.forEach((group) => {
    skillsGrid.appendChild(createSkillCard(group, language));
  });
};

const renderLanguages = (language) => {
  const languagesGrid = document.getElementById("languages-grid");
  if (!languagesGrid) {
    return;
  }

  languagesGrid.innerHTML = "";
  portfolioData.languages.forEach((languageItem) => {
    const card = document.createElement("article");
    card.className = "glass-card language-card";

    const head = document.createElement("div");
    head.className = "language-head";
    head.innerHTML = `<h3>${getLocalizedValue(languageItem.name, language)}</h3><span>${getLocalizedValue(languageItem.level, language)}</span>`;

    const progress = document.createElement("div");
    progress.className = "language-progress";
    progress.innerHTML = `<span style="width: ${languageItem.value}%"></span>`;

    card.append(head, progress);
    languagesGrid.appendChild(card);
  });
};

// About + Experience Timeline: dynamic cards with language-aware content.
const renderEducation = (language) => {
  const educationTimeline = document.getElementById("education-timeline");
  if (!educationTimeline) {
    return;
  }

  educationTimeline.innerHTML = "";
  portfolioData.education.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "timeline-item interactive-card";
    card.innerHTML = `
      <p class="timeline-date">${entry.period}</p>
      <h3>${getLocalizedValue(entry.degree, language)}</h3>
      <p>${getLocalizedValue(entry.institution, language)}</p>
    `;
    educationTimeline.appendChild(card);
  });
};

const renderExperience = (language) => {
  const experienceTimeline = document.getElementById("experience-timeline");
  if (!experienceTimeline) {
    return;
  }

  experienceTimeline.innerHTML = "";
  portfolioData.experience.forEach((entry) => {
    const role = getLocalizedValue(entry.role, language) || getLocalizedValue(entry.title, language);
    const organization = getLocalizedValue(entry.organization, language);
    const bullets = getLocalizedValue(entry.bullets, language)
      .map((bullet) => `<li>${bullet}</li>`)
      .join("");

    const card = document.createElement("article");
    card.className = "glass-card timeline-item interactive-card";
    card.innerHTML = `
      <p class="timeline-date">${entry.period}</p>
      <h3>${role}</h3>
      ${organization ? `<p>${organization}</p>` : ""}
      <ul>${bullets}</ul>
    `;
    experienceTimeline.appendChild(card);
  });
};

// Projects Cards: homepage preview and full projects page share one renderer.
const createProjectCard = (project, language, labels) => {
  const card = document.createElement("article");
  card.className = "project-card interactive-card";

  const technologies = project.technologies.map((tech) => `<li>${tech}</li>`).join("");
  const sourceCodeButton = project.sourceCode
    ? `<a class="project-link project-link-source" href="${project.sourceCode}" target="_blank" rel="noreferrer noopener"><i class="bi bi-github" aria-hidden="true"></i><span>${labels.shared.sourceCode}</span></a>`
    : "";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title} project preview" class="project-image" loading="lazy" decoding="async" />
    <div class="project-content">
      <h3>${project.title}</h3>
      <p class="project-summary">${getLocalizedValue(project.summary, language)}</p>
      <ul class="tech-badges">${technologies}</ul>
      <p class="project-status"><strong>${labels.shared.status}:</strong> ${getLocalizedValue(project.status, language)}</p>
      <div class="project-links">
        <a class="project-link project-link-view" href="${project.liveDemo}" target="_blank" rel="noreferrer noopener"><i class="bi bi-box-arrow-up-right" aria-hidden="true"></i><span>${labels.shared.liveDemo}</span></a>
        ${sourceCodeButton}
      </div>
    </div>
  `;

  return card;
};

const renderProjects = (language, options = { full: false }) => {
  const targetGrid = document.getElementById("projects-grid") || document.getElementById("projects-page-grid");
  if (!targetGrid) {
    return;
  }

  const labels = getUiLabels(language);
  const projectList = options.full ? portfolioData.projects : portfolioData.projects.slice(0, 2);
  targetGrid.innerHTML = "";
  projectList.forEach((project) => targetGrid.appendChild(createProjectCard(project, language, labels)));
  setExternalLinkSecurity(targetGrid);
};

// Certificates Section: cards are reused on homepage and standalone page.
const createCertificateCard = (certificate, labels) => {
  const card = document.createElement("article");
  card.className = "glass-card certificate-card interactive-card";

  const credentialLine = certificate.credentialId
    ? `<p><strong>${labels.shared.credentialId}:</strong> ${certificate.credentialId}</p>`
    : "";

  card.innerHTML = `
    <h3>${certificate.title}</h3>
    <p><strong>${labels.shared.issuer}:</strong> ${certificate.issuer}</p>
    <p><strong>${labels.shared.issued}:</strong> ${certificate.issued}</p>
    ${credentialLine}
    <a class="credential-link" href="${certificate.verifyUrl}" target="_blank" rel="noreferrer noopener">${labels.shared.verifyCertificate}</a>
  `;

  return card;
};

const renderCertificates = (language, options = { full: false }) => {
  const targetGrid = document.getElementById("certificates-grid") || document.getElementById("certificates-page-grid");
  if (!targetGrid) {
    return;
  }

  const labels = getUiLabels(language);
  const certificateList = options.full ? portfolioData.certificates : portfolioData.certificates.slice(0, 3);
  targetGrid.innerHTML = "";
  certificateList.forEach((certificate) => targetGrid.appendChild(createCertificateCard(certificate, labels)));
  setExternalLinkSecurity(targetGrid);
};

// Contact Section + Mailto Form: keeps privacy-friendly client-side submission.
const renderContact = (language) => {
  const contactContainer = document.getElementById("contact-info-list");
  if (!contactContainer) {
    return;
  }

  const labels = getUiLabels(language);
  const cardTitles = labels.cardTitles || {};
  const followLabel = cardTitles.followMe || "Follow Me";
  const { personal } = portfolioData;
  const locationText = getLocalizedValue(personal.location, language);
  const mapUrl = personal.locationMapUrl || `https://maps.google.com/?q=${encodeURIComponent(locationText)}`;

  contactContainer.innerHTML = `
    <h3 class="content-card-title contact-card-title">${cardTitles.contactInfo || "Contact Information"}</h3>
    <p class="contact-intro">${labels.contactNote}</p>
    <a class="contact-item" href="${mapUrl}" target="_blank" rel="noreferrer noopener">
      <span class="contact-icon"><i class="bi bi-geo-alt" aria-hidden="true"></i></span>
      <span>${locationText}</span>
    </a>
    <a class="contact-item" href="mailto:${personal.email}">
      <span class="contact-icon"><i class="bi bi-envelope" aria-hidden="true"></i></span>
      <span>${personal.email}</span>
    </a>
    <div class="contact-follow">
      <h3 class="contact-follow-title">${followLabel}</h3>
      <div class="contact-follow-icons">
        <a href="${personal.github}" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
          <i class="bi bi-github" aria-hidden="true"></i>
        </a>
        <a href="${personal.linkedin}" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
          <i class="bi bi-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  `;
};

const setupContactForm = () => {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) {
    return;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const senderName = String(formData.get("name") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const senderSubject = String(formData.get("subject") || "").trim();
    const senderMessage = String(formData.get("message") || "").trim();

    if (!senderName || !senderEmail || !senderSubject || !senderMessage) {
      return;
    }

    const subject = encodeURIComponent(senderSubject);
    const body = encodeURIComponent(
      `Name: ${senderName}\nEmail: ${senderEmail}\nSubject: ${senderSubject}\n\nMessage:\n${senderMessage}`,
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  });
};

const updateNavLabels = (labels) => {
  const navItems = Array.from(document.querySelectorAll(".navbar-links .nav-link"));
  navItems.forEach((item, index) => {
    if (labels[index]) {
      item.textContent = labels[index];
    }
  });
};

const renderIndexPage = (language) => {
  const labels = getUiLabels(language);
  const { personal } = portfolioData;
  const cardTitles = labels.cardTitles || {};

  setText("#hero-name", personal.name);
  setText("#hero-subtitle", getLocalizedValue(personal.title, language));
  setText("#hero-summary", getLocalizedValue(personal.summary, language));
  setText("#hero-projects-text", labels.heroProjects);
  setText("#hero-cv-text", labels.heroCv);

  setText("#about-title", labels.sectionTitles.about);
  setText("#skills-title", labels.sectionTitles.skills);
  setText("#experience-title", labels.sectionTitles.experience);
  setText("#projects-title", labels.sectionTitles.projects);
  setText("#certificates-title", labels.sectionTitles.certificates);
  setText("#contact-title", labels.sectionTitles.contact);

  setText("#about-summary", labels.aboutSummary);
  setText("#all-projects-button", labels.allProjects);
  setText("#all-certificates-button", labels.allCertificates);
  setText("#about-card-title", cardTitles.about || "About");
  setText("#education-card-title", cardTitles.education || "Education");
  setText("#contact-form-card-title", cardTitles.sendMessage || "Send Me a Message");

  setText("#contact-label-name", labels.form.name);
  setText("#contact-label-email", labels.form.email);
  setText("#contact-label-subject", labels.form.subject);
  setText("#contact-label-message", labels.form.message);
  setText("#contact-submit", labels.form.submit);

  const fieldMap = [
    ["name", labels.form.namePlaceholder],
    ["email", labels.form.emailPlaceholder],
    ["subject", labels.form.subjectPlaceholder],
    ["message", labels.form.messagePlaceholder],
  ];
  fieldMap.forEach(([id, placeholder]) => {
    const field = document.getElementById(id);
    if (field) {
      field.placeholder = placeholder;
    }
  });

  const heroImage = document.getElementById("hero-image");
  if (heroImage) {
    heroImage.src = personal.profileImage;
    heroImage.alt = `Portrait of ${personal.name}`;
  }

  setLinkAttributes(document.getElementById("hero-github"), personal.github, "GitHub");
  setLinkAttributes(document.getElementById("hero-linkedin"), personal.linkedin, "LinkedIn");
  setLinkAttributes(document.getElementById("hero-email"), `mailto:${personal.email}`, `Email ${personal.name}`);

  updateNavLabels(labels.nav);
  renderEducation(language);
  renderSkills(language);
  renderLanguages(language);
  renderExperience(language);
  renderProjects(language, { full: false });
  renderCertificates(language, { full: false });
  renderContact(language);
};

const renderProjectsPage = (language) => {
  const labels = getUiLabels(language);
  setText("#projects-page-title", labels.projectsPageTitle);
  setText("#projects-nav-home", labels.portfolioHome);
  setText("#projects-nav-other", labels.certificatesNav);
  renderProjects(language, { full: true });
};

const renderCertificatesPage = (language) => {
  const labels = getUiLabels(language);
  setText("#certificates-page-title", labels.certificatesPageTitle);
  setText("#cert-nav-home", labels.portfolioHome);
  setText("#cert-nav-other", labels.projectsNav);
  renderCertificates(language, { full: true });
};

const setupInteractiveCards = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(hover: none)").matches) {
    return;
  }

  const cards = document.querySelectorAll(".interactive-card");
  cards.forEach((cardElement) => {
    if (cardElement.dataset.interactiveReady === "true") {
      return;
    }

    cardElement.addEventListener("mousemove", (event) => {
      const cardBounds = cardElement.getBoundingClientRect();
      const centerX = cardBounds.left + cardBounds.width / 2;
      const centerY = cardBounds.top + cardBounds.height / 2;
      const rotateY = (event.clientX - centerX) / 40;
      const rotateX = (centerY - event.clientY) / 40;
      cardElement.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    cardElement.addEventListener("mouseleave", () => {
      cardElement.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });

    cardElement.dataset.interactiveReady = "true";
  });
};

// Language Switching: rerenders all dynamic sections from shared translations.
const renderCurrentPage = () => {
  const language = getCurrentLanguage();
  if (currentPage === "index") {
    renderIndexPage(language);
  } else if (currentPage === "projects") {
    renderProjectsPage(language);
  } else if (currentPage === "certificates") {
    renderCertificatesPage(language);
  }

  document.documentElement.lang = language === "de" ? "de" : "en";
  if (languageToggleButton) {
    languageToggleButton.textContent = language.toUpperCase();
  }
  setExternalLinkSecurity(document);
  setupInteractiveCards();
};

const setupLanguageToggle = () => {
  renderCurrentPage();
  if (!languageToggleButton) {
    return;
  }

  languageToggleButton.addEventListener("click", () => {
    const nextLanguage = getCurrentLanguage() === "en" ? "de" : "en";
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    renderCurrentPage();
  });
};

const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) {
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
};

const setupScrollTopButton = () => {
  if (!scrollTopButton) {
    return;
  }

  const updateVisibility = () => {
    scrollTopButton.classList.toggle("visible", window.scrollY > 420);
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
  scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
};

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupThemeToggle();
  setupLanguageToggle();
  setupSmoothScrolling();
  setupActiveNavHighlight();
  setupRevealAnimations();
  setupScrollTopButton();
  setupContactForm();

  if (currentPage === "index" && window.location.hash) {
    const targetElement = document.querySelector(window.location.hash);
    requestAnimationFrame(() => scrollToSectionWithOffset(targetElement, "auto"));
  }
});
