// CV Generator
// Renders a printable CV from the same shared portfolio data used by the website.

const THEME_CLASS_DARK = "dark-theme";
const THEME_STORAGE_KEY = "portfolio-theme";
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_THEME = "dark";
const DEFAULT_LANGUAGE = "en";

const cvRoot = document.getElementById("cv-root");
const languageToggleButton = document.getElementById("language-toggle");
const themeToggleButton = document.getElementById("theme-toggle");

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

const sanitizeLinkLabel = (url) => (url || "").replace(/^https?:\/\/(www\.)?/i, "");
const formatMetaPipes = (text) => String(text || "").replace(/,\s*/g, " | ");

// Theme Toggle: reuses global theme preference used in the portfolio pages.
const applyTheme = () => {
  const isDarkTheme = getCurrentTheme() === "dark";
  document.body.classList.toggle(THEME_CLASS_DARK, isDarkTheme);

  if (themeToggleButton) {
    themeToggleButton.innerHTML = `<i class="bi ${isDarkTheme ? "bi-moon-stars-fill" : "bi-sun-fill"}" aria-hidden="true"></i>`;
    themeToggleButton.setAttribute("aria-pressed", String(isDarkTheme));
  }
};

const setupThemeToggle = () => {
  applyTheme();

  themeToggleButton?.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains(THEME_CLASS_DARK) ? "light" : "dark";
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme();
  });
};

const renderCompactSkills = (language) => {
  const skillLines = portfolioData.skills.groups
    .map((group) => {
      const groupTitle = getLocalizedValue(group.title, language);
      const groupItems = Array.isArray(group.items) ? group.items : getLocalizedValue(group.items, language);
      return `<p class="cv-skill-line"><span class="cv-skill-label">${groupTitle}:</span> ${groupItems.join(", ")}</p>`;
    })
    .join("");

  const languagesLabel = language === "de" ? "Sprachen" : "Languages";
  const languagesLine = portfolioData.languages
    .map((entry) => `${getLocalizedValue(entry.name, language)} (${getLocalizedValue(entry.level, language)})`)
    .join(", ");

  return `${skillLines}<p class="cv-skill-line"><span class="cv-skill-label">${languagesLabel}:</span> ${languagesLine}</p>`;
};

const renderTimelineEntries = (entries, language) => {
  return entries
    .map((entry) => {
      const role = getLocalizedValue(entry.role, language) || getLocalizedValue(entry.title, language);
      const organization = getLocalizedValue(entry.organization, language);
      const bullets = getLocalizedValue(entry.bullets, language)
        .map((bullet) => `<li>${bullet}</li>`)
        .join("");

      return `
        <div class="cv-entry">
          <div class="cv-entry-head">
            <div class="cv-entry-left">
              <div class="cv-entry-title">${role}</div>
              ${organization ? `<div class="cv-entry-org">${formatMetaPipes(organization)}</div>` : ""}
            </div>
            <div class="cv-entry-date">${entry.period}</div>
          </div>
          <ul class="cv-bullets">${bullets}</ul>
        </div>
      `;
    })
    .join("");
};

const renderProjects = (language) => {
  const technologiesLabel = language === "de" ? "Technologien" : "Technologies";
  return portfolioData.projects
    .map((project) => {
      const summary = getLocalizedValue(project.summary, language);
      const status = getLocalizedValue(project.status, language);
      const organization = getLocalizedValue(project.organization, language);

      return `
        <div class="cv-entry">
          <div class="cv-entry-head">
            <div class="cv-entry-left">
              <div class="cv-entry-title">${project.title}</div>
              ${organization ? `<div class="cv-entry-org">${formatMetaPipes(organization)}</div>` : ""}
            </div>
            <div class="cv-entry-date">${status}</div>
          </div>
          <ul class="cv-bullets">
            <li>${summary}</li>
            <li><strong>${technologiesLabel}:</strong> ${project.technologies.join(", ")}</li>
          </ul>
        </div>
      `;
    })
    .join("");
};

const renderEducation = (language) => {
  return portfolioData.education
    .map((entry) => {
      const degree = getLocalizedValue(entry.degree, language);
      const institution = formatMetaPipes(getLocalizedValue(entry.institution, language));
      return `
        <div class="cv-entry">
          <div class="cv-entry-head">
            <div class="cv-entry-left">
              <div class="cv-entry-title">${degree}</div>
              <div class="cv-entry-org">${institution}</div>
            </div>
            <div class="cv-entry-date">${entry.period}</div>
          </div>
        </div>
      `;
    })
    .join("");
};

const renderCertificates = (language) => {
  const labels = getUiLabels(language);
  return portfolioData.certificates
    .map((certificate) => {
      const idLine = certificate.credentialId ? ` | ${labels.shared.credentialId}: ${certificate.credentialId}` : "";
      return `
        <div class="cv-entry">
          <div class="cv-entry-head">
            <div class="cv-entry-left">
              <div class="cv-entry-title">${certificate.title}</div>
            </div>
            <div class="cv-entry-date">${certificate.issued}</div>
          </div>
          <div class="cv-entry-meta">${labels.shared.issuer}: ${certificate.issuer}${idLine}</div>
        </div>
      `;
    })
    .join("");
};

// CV Generator: builds all printable sections dynamically.
const renderCV = () => {
  const language = getCurrentLanguage();
  const labels = getUiLabels(language);
  const cvLabels = labels.cv;
  const { personal } = portfolioData;

  document.documentElement.lang = language === "de" ? "de" : "en";
  document.title = `CV | ${personal.name}`;

  if (languageToggleButton) {
    languageToggleButton.textContent = language.toUpperCase();
  }

  const backLink = document.getElementById("cv-back-link");
  if (backLink) {
    backLink.textContent = cvLabels.backToPortfolio;
  }

  const nameParts = personal.name.split(" ");
  const firstName = nameParts.shift() || personal.name;
  const lastName = nameParts.join(" ") || "";
  const rawLocationLine = getLocalizedValue(personal.location, language);
  const locationLine = formatMetaPipes(rawLocationLine);
  const mapUrl = personal.locationMapUrl || `https://maps.google.com/?q=${encodeURIComponent(rawLocationLine)}`;
  const emailLine = `<a href="mailto:${personal.email}">${personal.email}</a>`;
  const linkedinLabel = sanitizeLinkLabel(personal.linkedin);
  const githubLabel = sanitizeLinkLabel(personal.github);

  cvRoot.innerHTML = `
    <h1 class="cv-page-ui-title">${cvLabels.title}</h1>
    <div class="cv-actions" id="cv-actions">
      <a class="button button-secondary" href="./index.html" id="cv-back-button">${cvLabels.backToPortfolio}</a>
      <button class="button button-primary" type="button" id="cv-download-button">${cvLabels.downloadPdf}</button>
    </div>
    <p class="cv-print-hint">${cvLabels.printHint || ""}</p>

    <article class="cv-document">
      <header class="cv-header">
        <h1 class="cv-person-name">
          <span class="cv-name-primary">${firstName.toUpperCase()}</span>
          <span class="cv-name-accent">${lastName.toUpperCase()}</span>
        </h1>
        <p class="cv-subtitle">${getLocalizedValue(personal.title, language)}</p>
        <div class="cv-contact-stack">
          <p class="cv-contact-line"><a href="${mapUrl}" target="_blank" rel="noreferrer noopener">${locationLine}</a> <span class="cv-separator">|</span> ${emailLine}</p>
          <p class="cv-contact-line">
            <strong>LinkedIn:</strong>
            <a href="${personal.linkedin}" target="_blank" rel="noreferrer noopener">${linkedinLabel}</a>
            <span class="cv-separator">|</span>
            <strong>GitHub:</strong>
            <a href="${personal.github}" target="_blank" rel="noreferrer noopener">${githubLabel}</a>
          </p>
        </div>
      </header>

      <section class="cv-section">
        <h2>${cvLabels.summary}</h2>
        <p class="cv-text">${labels.aboutSummary}</p>
      </section>

      <section class="cv-section">
        <h2>${cvLabels.skills}</h2>
        ${renderCompactSkills(language)}
      </section>

      <section class="cv-section">
        <h2>${cvLabels.projects}</h2>
        ${renderProjects(language)}
      </section>

      <section class="cv-section">
        <h2>${cvLabels.experience}</h2>
        ${renderTimelineEntries(portfolioData.experience, language)}
      </section>

      <section class="cv-section">
        <h2>${cvLabels.education}</h2>
        ${renderEducation(language)}
      </section>

      <section class="cv-section">
        <h2>${cvLabels.certificates || labels.sectionTitles.certificates}</h2>
        ${renderCertificates(language)}
      </section>

      <section class="cv-section">
        <h2>${cvLabels.volunteering}</h2>
        ${renderTimelineEntries(portfolioData.volunteering || [], language)}
      </section>
    </article>
  `;

  document.getElementById("cv-download-button")?.addEventListener("click", () => {
    window.print();
  });
};

// Language Switching: rerenders the full CV to keep content synchronized.
const setupLanguageToggle = () => {
  languageToggleButton?.addEventListener("click", () => {
    const nextLanguage = getCurrentLanguage() === "en" ? "de" : "en";
    localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    renderCV();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupThemeToggle();
  setupLanguageToggle();
  renderCV();
});
