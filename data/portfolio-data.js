// Shared single source of truth for portfolio and CV pages.
// Update this file once, and all pages (index/projects/certificates/cv) will update automatically.
const portfolioData = {
  personal: {
    name: "Eman Selim",
    profileImage: "assets/images/eman-profile.jpeg?v=20260918-1",
    title: {
      en: "Software Developer",
      de: "Softwareentwicklerin",
    },
    summary: {
      en: "Building practical software solutions with experience across web development, backend systems and AI applications.",
      de: "Entwicklung praxisnaher Softwarelösungen mit Erfahrung in Webentwicklung, Backend-Systemen und KI-Anwendungen.",
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
        "I am a software developer with hands-on experience in building web applications, backend systems, REST APIs, and AI-based solutions.\n\nI work with technologies including Python, Java, JavaScript, FastAPI, SQL, and Docker, and I have practical experience with AI applications such as RAG, chatbots, embeddings, and AI agents.\n\nI enjoy solving technical problems, exploring different areas of software development, and continuously improving the quality and functionality of the applications I build.",
      contactNote:
        "Feel free to reach out regarding professional opportunities, collaborations, or software projects.",
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
        "Ich bin Softwareentwicklerin mit praktischer Erfahrung in der Entwicklung von Webanwendungen, Backend-Systemen, REST-APIs und KI-basierten Lösungen.\n\nIch arbeite mit Technologien wie Python, Java, JavaScript, FastAPI, SQL und Docker und habe praktische Erfahrung mit KI-Anwendungen wie RAG, Chatbots, Embeddings und AI Agents.\n\nIch löse gerne technische Probleme, beschäftige mich mit verschiedenen Bereichen der Softwareentwicklung und arbeite kontinuierlich daran, die Qualität und Funktionalität meiner Anwendungen zu verbessern.",
      contactNote:
        "Kontaktieren Sie mich gerne bezüglich beruflicher Möglichkeiten, Zusammenarbeit oder Softwareprojekten.",
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
          en: ["Python", "Java", "JavaScript"],
          de: ["Python", "Java", "JavaScript"],
        },
      },
      {
        key: "frontend-basics",
        iconClass: "bi-window",
        title: { en: "Frontend / Web", de: "Frontend / Web" },
        items: ["HTML5", "CSS3", "Bootstrap 5"],
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
        key: "databases",
        iconClass: "bi-database",
        title: { en: "Databases", de: "Datenbanken" },
        items: ["SQL"],
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
        items: ["Git", "GitHub", "GitLab", "Docker", "VS Code"],
      },
      {
        key: "methods",
        iconClass: "bi-people",
        title: { en: "Methods", de: "Methoden" },
        items: ["Agile", "Scrum"],
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
        en: "AI Chatbot Development - Internship",
        de: "Praxisphase - KI-Chatbot-Entwicklung",
      },
      organization: {
        en: "Institute for Internet Security (if(is)), Gelsenkirchen",
        de: "Institute for Internet Security (if(is)), Gelsenkirchen",
      },
      bullets: {
        en: [
          "Contributing to the development of an AI chatbot.",
          "Implementing and refining chatbot functionality using Python.",
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
        en: "Additional Professional Experience",
        de: "Weitere Berufserfahrung",
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
        en: "Cinematic Egypt tourism landing page developed with HTML, CSS, Bootstrap 5, and JavaScript. Eman built the page structure, responsive styling, interactive Cairo section, and EN/AR language switch with RTL support.",
        de: "Cinematische Landingpage für Ägypten-Tourismus, entwickelt mit HTML, CSS, Bootstrap 5 und JavaScript. Eman entwickelte Seitenstruktur, responsives Styling, den interaktiven Kairo-Bereich und die EN/AR-Sprachumschaltung mit RTL-Unterstützung.",
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
        en: "Semantic search prototype using embeddings and FAISS, developed as a university team project. Eman contributed to the application workflow and backend-related implementation with Python, FastAPI and Docker.",
        de: "Semantischer Suchprototyp mit Embeddings und FAISS, entwickelt als Hochschul-Teamprojekt. Eman arbeitete am Anwendungsworkflow und an backendbezogenen Implementierungen mit Python, FastAPI und Docker mit.",
      },
      technologies: ["Python", "FastAPI", "Docker", "FAISS", "Embeddings", "Tauri"],
      status: {
        en: "University Project",
        de: "Hochschulprojekt",
      },
      liveDemo: "",
      sourceCode: "",
    },
    {
      title: "UI/UX Design Project",
      organization: {
        en: "Westfälische Hochschule",
        de: "Westfälische Hochschule",
      },
      image: "assets/images/agile-tablet.png",
      summary: {
        en: "Interactive wireframes and UI prototypes created in Figma for a university design project. Eman worked on user flows, screen layouts, and clickable prototype interactions.",
        de: "Interaktive Wireframes und UI-Prototypen, erstellt in Figma für ein Hochschul-Designprojekt. Eman arbeitete an User Flows, Screen-Layouts und klickbaren Prototyp-Interaktionen.",
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
