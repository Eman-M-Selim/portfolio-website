// Shared single source of truth for portfolio and CV pages.
// Update this file once, and all pages (index/projects/certificates/cv) will update automatically.
const portfolioData = {
  personal: {
    name: "Eman Selim",
    profileImage: "assets/images/eman-profile.jpeg?v=20260918-1",
    title: {
      en: "Computer Science Student | Python, Backend & AI Applications",
      de: "Informatikstudentin | Python, Backend & KI-Anwendungen",
    },
    summary: {
      en: "Building practical Python, backend and AI-based applications while expanding my software development experience.",
      de: "Ich entwickle praxisnahe Python-, Backend- und KI-basierte Anwendungen und erweitere dabei meine Erfahrung in der Softwareentwicklung.",
    },
    location: {
      en: "47119 Duisburg, Germany",
      de: "47119 Duisburg, Deutschland",
    },
    locationMapUrl: "https://maps.google.com/?q=47119+Duisburg+Germany",
    email: "eman.m.selim@gmail.com",
    github: "https://github.com/Eman-M-Selim",
    linkedin: "https://www.linkedin.com/in/eman-m-selim/",
  },

  ui: {
    en: {
      nav: ["About", "Skills", "Experience", "Projects", "Certificates", "Contact"],
      heroProjects: "View Projects",
      heroCv: "Download CV",
      sectionTitles: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Get In Touch",
      },
      cardTitles: {
        about: "About",
        education: "Education",
        contactInfo: "Contact Information",
        sendMessage: "Send a Message",
        followMe: "Follow Me",
      },
      aboutSummary:
        "Computer Science student at Westfälische Hochschule with practical experience in Python, FastAPI, REST APIs and AI-based applications. Through university projects and my internship, I have worked with chatbots, RAG, AI agents and semantic search. I am currently expanding my practical experience in backend development and applied AI.",
      contactNote:
        "Feel free to reach out for internships, student jobs, collaborations, or project opportunities.",
      allProjects: "View All Projects",
      allCertificates: "View All Certificates",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        subjectPlaceholder: "Message Subject",
        messagePlaceholder: "Your Message",
        submit: "Send Message",
      },
      shared: {
        status: "Status",
        issuer: "Issuer",
        issued: "Issued",
        credentialId: "Credential ID",
        liveDemo: "Live Demo",
        sourceCode: "Code",
        verifyCertificate: "Verify Certificate",
      },
      projectsPageTitle: "All Projects",
      certificatesPageTitle: "All Certificates",
      portfolioHome: "Portfolio Home",
      projectsNav: "Projects",
      certificatesNav: "Certificates",
      cv: {
        title: "Curriculum Vitae",
        personalInfo: "Personal Information",
        summary: "Summary",
        skills: "Skills",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
        backToPortfolio: "Back to Portfolio",
        downloadPdf: "Print / Save PDF",
        printHint:
          "To remove browser date, URL, and page numbers, disable \"Headers and footers\" in the print dialog.",
      },
    },
    de: {
      nav: ["Über mich", "Fähigkeiten", "Erfahrung", "Projekte", "Zertifikate", "Kontakt"],
      heroProjects: "Projekte ansehen",
      heroCv: "Lebenslauf herunterladen",
      sectionTitles: {
        about: "Über mich",
        skills: "Fähigkeiten",
        experience: "Erfahrung",
        projects: "Projekte",
        certificates: "Zertifikate",
        contact: "Kontakt aufnehmen",
      },
      cardTitles: {
        about: "Über mich",
        education: "Ausbildung",
        contactInfo: "Kontaktinformationen",
        sendMessage: "Nachricht senden",
        followMe: "Folge mir",
      },
      aboutSummary:
        "Informatikstudentin an der Westfälischen Hochschule mit praktischer Erfahrung in Python, FastAPI, REST-APIs und KI-basierten Anwendungen. Im Rahmen von Hochschulprojekten und meiner Praxisphase habe ich mit Chatbots, RAG, KI-Agenten und semantischer Suche gearbeitet. Aktuell vertiefe ich meine praktischen Kenntnisse in der Backend-Entwicklung und angewandten KI.",
      contactNote:
        "Kontaktiere mich gerne für Praktika, Werkstudentenstellen, Zusammenarbeit oder Projektmöglichkeiten.",
      allProjects: "Alle Projekte ansehen",
      allCertificates: "Alle Zertifikate ansehen",
      form: {
        name: "Name",
        email: "E-Mail",
        subject: "Betreff",
        message: "Nachricht",
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "Ihre E-Mail",
        subjectPlaceholder: "Betreff der Nachricht",
        messagePlaceholder: "Ihre Nachricht",
        submit: "Nachricht senden",
      },
      shared: {
        status: "Status",
        issuer: "Aussteller",
        issued: "Ausgestellt",
        credentialId: "Nachweis-ID",
        liveDemo: "Live-Demo",
        sourceCode: "Code",
        verifyCertificate: "Zertifikat prüfen",
      },
      projectsPageTitle: "Alle Projekte",
      certificatesPageTitle: "Alle Zertifikate",
      portfolioHome: "Portfolio-Startseite",
      projectsNav: "Projekte",
      certificatesNav: "Zertifikate",
      cv: {
        title: "Lebenslauf",
        personalInfo: "Persönliche Informationen",
        summary: "Zusammenfassung",
        skills: "Fähigkeiten",
        experience: "Berufserfahrung",
        education: "Bildung",
        projects: "Projekte",
        certificates: "Zertifikate",
        contact: "Kontakt",
        backToPortfolio: "Zurück zum Portfolio",
        downloadPdf: "Drucken / als PDF speichern",
        printHint:
          "Um Browser-Datum, URL und Seitenzahlen zu entfernen, deaktivieren Sie im Druckdialog die Option \"Kopf- und Fußzeilen\".",
      },
    },
  },

  skills: {
    groups: [
      {
        key: "programming",
        iconClass: "bi-code-slash",
        title: { en: "Programming", de: "Programmierung" },
        items: {
          en: ["Python", "Java", "JavaScript (Basic Knowledge)"],
          de: ["Python", "Java", "JavaScript (Grundkenntnisse)"],
        },
      },
      {
        key: "databases",
        iconClass: "bi-database",
        title: { en: "Databases", de: "Datenbanken" },
        items: ["SQL"],
      },
      {
        key: "backend-apis",
        iconClass: "bi-hdd-network",
        title: { en: "Backend & APIs", de: "Backend & APIs" },
        items: {
          en: ["FastAPI", "REST APIs"],
          de: ["FastAPI", "REST-APIs"],
        },
      },
      {
        key: "ai",
        iconClass: "bi-cpu",
        title: { en: "AI", de: "KI" },
        items: {
          en: ["RAG", "AI Agents", "Chatbot Development", "Embeddings", "FAISS"],
          de: ["RAG", "KI-Agenten", "Chatbot-Entwicklung", "Embeddings", "FAISS"],
        },
      },
      {
        key: "tools",
        iconClass: "bi-tools",
        title: { en: "Tools", de: "Tools" },
        items: ["Git", "GitHub", "Docker", "VS Code"],
      },
    ],
  },

  languages: [
    { name: { en: "Arabic", de: "Arabisch" }, level: { en: "Native", de: "Muttersprache" }, value: 100 },
    { name: { en: "German", de: "Deutsch" }, level: { en: "C1", de: "C1" }, value: 85 },
    { name: { en: "English", de: "Englisch" }, level: { en: "B2", de: "B2" }, value: 75 },
  ],

  education: [
    {
      period: { en: "10/2021 - Present", de: "10/2021 - heute" },
      degree: { en: "B.Sc. Computer Science", de: "B.Sc. Informatik" },
      institution: {
        en: "Westfälische Hochschule Gelsenkirchen",
        de: "Westfälische Hochschule Gelsenkirchen",
      },
    },
    {
      period: "10/2008 - 07/2010",
      degree: {
        en: "B.A. Library and Information Science",
        de: "B.A. Bibliotheks- und Informationswissenschaft",
      },
      institution: { en: "Tanta University, Egypt", de: "Tanta University, Ägypten" },
    },
  ],

  experience: [
    {
      period: { en: "05/2026 - Present", de: "05/2026 - heute" },
      role: {
        en: "Praxisphase / Internship - AI Chatbot",
        de: "Praxisphase - KI-Chatbot",
      },
      organization: {
        en: "Institute for Internet Security (if(is)), Gelsenkirchen",
        de: "Institute for Internet Security (if(is)), Gelsenkirchen",
      },
      bullets: {
        en: [
          "Contributing to the development of an AI chatbot.",
          "Implementing and improving chatbot functionality using Python.",
          "Working with RAG-based approaches and practical chatbot workflows.",
          "Supporting implementation, testing and continuous improvement.",
        ],
        de: [
          "Mitarbeit an der Entwicklung eines KI-Chatbots.",
          "Implementierung und Weiterentwicklung von Chatbot-Funktionen mit Python.",
          "Arbeit mit RAG-basierten Ansätzen und praxisnahen Chatbot-Workflows.",
          "Unterstützung bei Implementierung, Tests und kontinuierlicher Verbesserung.",
        ],
      },
    },
    {
      period: "2021 - 2026",
      role: {
        en: "Student Jobs & Operational Experience",
        de: "Studentische Nebentätigkeiten",
      },
      organization: {
        en: "Various roles in retail, logistics, events and customer service.",
        de: "Verschiedene Tätigkeiten in Einzelhandel, Logistik, Events und Kundenservice.",
      },
      bullets: {
        en: [
          "Developed experience in teamwork, communication and customer-oriented environments.",
          "Worked reliably and independently in dynamic operational environments.",
        ],
        de: [
          "Erfahrung in Teamarbeit, Kommunikation und kundenorientierten Arbeitsumgebungen.",
          "Zuverlässige und selbstständige Arbeit in dynamischen Arbeitsumgebungen.",
        ],
      },
    },
    {
      period: "2018 - 2020",
      role: { en: "Designer", de: "Designerin" },
      organization: { en: "Sense Adv, Egypt", de: "Sense Adv, Ägypten" },
      bullets: {
        en: ["Packaging design and product photography."],
        de: ["Verpackungsdesign und Produktfotografie."],
      },
    },
  ],

  projects: [
    {
      title: "Beyond the Museum",
      organization: {
        en: "Learning Project",
        de: "Lernprojekt",
      },
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Feman-m-selim.github.io%2Fbeyond-the-museum-landing-page%2F?w=1200",
      summary: {
        en: "Cinematic Egypt tourism landing page built with HTML, CSS, Bootstrap 5, and minimal JavaScript. Includes an interactive Cairo section and EN/AR language switch with RTL support.",
        de: "Cinematische Landingpage für Ägypten-Tourismus mit HTML, CSS, Bootstrap 5 und minimalem JavaScript. Enthält einen interaktiven Kairo-Bereich sowie EN/AR-Sprachumschaltung mit RTL-Unterstützung.",
      },
      technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
      status: {
        en: "Learning Project",
        de: "Lernprojekt",
      },
      liveDemo: "https://eman-m-selim.github.io/beyond-the-museum-landing-page/",
      sourceCode: "https://github.com/Eman-M-Selim/beyond-the-museum-landing-page.git",
    },
    {
      title: "Vectorizr",
      organization: {
        en: "Westfälische Hochschule",
        de: "Westfälische Hochschule",
      },
      image: "assets/images/vectorizr-search.png",
      summary: {
        en: "Semantic search prototype using embeddings and FAISS, developed as a university team project.",
        de: "Semantischer Suchprototyp mit Embeddings und FAISS, entwickelt als Hochschul-Teamprojekt.",
      },
      technologies: ["Python", "FastAPI", "Docker", "FAISS", "Embeddings", "Tauri"],
      status: {
        en: "University Project",
        de: "Hochschulprojekt",
      },
      liveDemo: "",
      sourceCode: "https://github.com/Eman-M-Selim",
    },
    {
      title: "UI/UX Design Project",
      organization: {
        en: "Westfälische Hochschule",
        de: "Westfälische Hochschule",
      },
      image: "assets/images/agile-tablet.png",
      summary: {
        en: "Interactive wireframes and UI prototypes created in Figma for a university design project.",
        de: "Interaktive Wireframes und UI-Prototypen, erstellt in Figma für ein Hochschul-Designprojekt.",
      },
      technologies: ["Figma", "UI/UX Design", "Wireframing"],
      status: {
        en: "University Project",
        de: "Hochschulprojekt",
      },
      liveDemo:
        "https://www.figma.com/design/ppPqWfphQov5PseOdLGgmu/Gruppe--2?node-id=7-2",
      sourceCode: "",
    },
  ],

  certificates: [
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      issued: "Apr 2026",
      credentialId: "",
      verifyUrl: "https://verify.skilljar.com/c/vm6vpyt8gfqz",
    },
    {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic",
      issued: "Apr 2026",
      credentialId: "",
      verifyUrl: "https://verify.skilljar.com/c/o35qp5irgp9d",
    },
    {
      title: "Certificate of Completion: Claude Code 101",
      issuer: "Anthropic",
      issued: "Apr 2026",
      credentialId: "",
      verifyUrl: "https://verify.skilljar.com/c/hqznkc6aaqif",
    },
    {
      title: "Mikrozertifikat RES",
      issuer: "WeLearnInBits",
      issued: "Jan 2024",
      credentialId: "5262791935ES",
      verifyUrl: "https://elearninghub.welearninbits.de/admin/tool/certificate/index.php?code=5262791935ES",
    },
    {
      title: "Certificate: A Company at Its Core",
      issuer: "WeLearnInBits",
      issued: "Dec 2023",
      credentialId: "9250626093ES",
      verifyUrl: "https://elearninghub.welearninbits.de/admin/tool/certificate/index.php?code=9250626093ES",
    },
    {
      title: "Certificate: Introduction to Process Mining",
      issuer: "WeLearnInBits",
      issued: "Jul 2023",
      credentialId: "3307009881ES",
      verifyUrl: "https://elearninghub.welearninbits.de/admin/tool/certificate/index.php?code=3307009881ES",
    },
  ],
};
