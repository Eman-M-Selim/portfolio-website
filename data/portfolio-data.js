// Shared single source of truth for portfolio and CV pages.
// Update this file once, and all pages (index/projects/certificates/cv) will update automatically.
const portfolioData = {
  personal: {
    name: "Eman Selim",
    profileImage: "assets/images/eman-profile.jpeg",
    title: {
      en: "Computer Science Student | Full-Stack Development & AI",
      de: "Informatikstudentin | Full-Stack-Entwicklung & KI",
    },
    summary: {
      en: "Building practical web applications while continuously improving my backend, API, and AI engineering skills.",
      de: "Ich entwickle praxisnahe Webanwendungen und vertiefe kontinuierlich meine Kenntnisse in Backend-Entwicklung, APIs und KI-Technologien.",
    },
    location: {
      en: "47119 Duisburg, Germany",
      de: "47119 Duisburg, Deutschland",
    },
    locationMapUrl: "https://maps.google.com/?q=47119+Duisburg+Germany",
    email: "eman.m.selim@gmail.com",
    phone: "+49 163 9688853",
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
        "Computer Science student at Westfälische Hochschule focused on full-stack development and AI-enabled applications. Hands-on experience with Python, FastAPI, JavaScript, REST APIs, and Docker through academic and personal projects. Interested in backend engineering, scalable systems, and modern software development.",
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
        volunteering: "Volunteering",
        education: "Education",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
        backToPortfolio: "Back to Portfolio",
        downloadPdf: "Download PDF",
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
        "Informatikstudentin an der Westfälischen Hochschule mit praktischer Erfahrung in Full-Stack-Entwicklung, REST-APIs und KI-basierten Anwendungen. Sicher im Aufbau moderner Webanwendungen mit Python, FastAPI, JavaScript und Docker. Interesse an Software Engineering, skalierbaren Systemen und praxisorientierter Problemlösung in agilen Umgebungen.",
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
        volunteering: "Ehrenamt",
        education: "Bildung",
        projects: "Projekte",
        certificates: "Zertifikate",
        contact: "Kontakt",
        backToPortfolio: "Zurück zum Portfolio",
        downloadPdf: "Als PDF herunterladen",
        printHint:
          "Um Browser-Datum, URL und Seitenzahlen zu entfernen, deaktivieren Sie im Druckdialog die Option \"Kopf- und Fußzeilen\".",
      },
    },
  },

  skills: {
    groups: [
      {
        key: "frontend",
        iconClass: "bi-window",
        title: { en: "Frontend", de: "Frontend" },
        items: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
      },
      {
        key: "backend",
        iconClass: "bi-hdd-network",
        title: { en: "Backend", de: "Backend" },
        items: ["Python", "Java", "FastAPI", "REST APIs"],
      },
      {
        key: "ai-data",
        iconClass: "bi-cpu",
        title: { en: "AI & Data", de: "KI & Daten" },
        items: ["FAISS", "Embeddings", "Prompt Engineering", "AI Agent Development"],
      },
      {
        key: "tools-platforms",
        iconClass: "bi-tools",
        title: { en: "Tools & Platforms", de: "Tools & Plattformen" },
        items: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Figma"],
      },
      {
        key: "methods",
        iconClass: "bi-diagram-3",
        title: { en: "Methods", de: "Methoden" },
        items: {
          en: ["Agile", "Scrum"],
          de: ["Agile", "Scrum"],
        },
      },
      {
        key: "soft",
        iconClass: "bi-people",
        title: { en: "Soft Skills", de: "Soft Skills" },
        items: {
          en: [
            "Problem Solving",
            "Teamwork",
            "Analytical Thinking",
            "Communication",
            "Adaptability",
          ],
          de: [
            "Problemlösung",
            "Teamarbeit",
            "Analytisches Denken",
            "Kommunikation",
            "Anpassungsfähigkeit",
          ],
        },
      },
    ],
  },

  languages: [
    { name: { en: "Arabic", de: "Arabisch" }, level: { en: "Native", de: "Muttersprache" }, value: 100 },
    { name: { en: "German", de: "Deutsch" }, level: { en: "C1", de: "C1" }, value: 85 },
    { name: { en: "English", de: "Englisch" }, level: { en: "B1", de: "B1" }, value: 65 },
  ],

  education: [
    {
      period: "10/2021 - Present",
      degree: { en: "B.Sc. Computer Science", de: "B.Sc. Informatik" },
      institution: {
        en: "Westfälische Hochschule Gelsenkirchen",
        de: "Westfälische Hochschule Gelsenkirchen",
      },
    },
    {
      period: "10/2014 - 06/2015",
      degree: { en: "Diploma in Pedagogy", de: "Diplom in Pädagogik" },
      institution: { en: "Kafr El-Sheikh University", de: "Kafr El-Sheikh University" },
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
      period: "2021 - 2025",
      role: {
        en: "Working Student Professional Experience",
        de: "Werkstudentische Berufserfahrung",
      },
      organization: {
        en: "Amazon, Mercedes-Benz AG, Thalia, SportFive, REWE, Zara, Primark, Arvato, ID Logistics",
        de: "Amazon, Mercedes-Benz AG, Thalia, SportFive, REWE, Zara, Primark, Arvato, ID Logistics",
      },
      bullets: {
        en: [
          "Experience in customer-oriented communication and teamwork",
          "Support for operational processes in dynamic work environments",
          "Structured and reliable way of working under time pressure",
          "Experience with SAP, goods processing, and organizational processes",
          "Flexible assignments in service, events, retail, and logistics",
        ],
        de: [
          "Erfahrung in kundenorientierter Kommunikation und Teamarbeit",
          "Unterstützung operativer Abläufe in dynamischen Arbeitsumgebungen",
          "Strukturierte und zuverlässige Arbeitsweise unter Zeitdruck",
          "Erfahrung mit SAP, Warenbearbeitung und organisatorischen Prozessen",
          "Flexible Einsätze im Service-, Event-, Einzelhandels- und Logistikbereich",
        ],
      },
    },
    {
      period: "2018 - 2020",
      role: { en: "Designer", de: "Designerin" },
      organization: { en: "Sense Adv, Egypt", de: "Sense Adv, Ägypten" },
      bullets: {
        en: ["Packaging design", "Product photography"],
        de: ["Verpackungsdesign", "Produktfotografie"],
      },
    },
  ],

  volunteering: [
    {
      period: "2017 - 2018",
      role: { en: "Volunteer Teacher", de: "Ehrenamtliche Lehrerin" },
      organization: { en: "Terre des Hommes", de: "Terre des Hommes" },
      bullets: {
        en: ["Teaching computer basics for children", "Microsoft Office basics"],
        de: ["Unterricht in Computergrundlagen für Kinder", "Grundlagen in Microsoft Office"],
      },
    },
  ],

  projects: [
    {
      title: "Vectorizr",
      organization: {
        en: "Westfälische Hochschule",
        de: "Westfälische Hochschule",
      },
      image: "assets/images/vectorizr-search.png",
      summary: {
        en: "Semantic search prototype using embeddings and FAISS, developed through iterative Agile workflow and team collaboration.",
        de: "Semantischer Suchprototyp mit Embeddings und FAISS, entwickelt in einem iterativen Agile-Workflow mit Teamarbeit.",
      },
      technologies: ["Python", "FastAPI", "Docker", "FAISS", "Tauri"],
      status: {
        en: "University Project",
        de: "Hochschulprojekt",
      },
      liveDemo: "https://github.com/Eman-M-Selim",
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
        en: "Interactive wireframes and UI prototypes designed in a Scrum collaboration setting with iterative feedback and UI/UX teamwork.",
        de: "Interaktive Wireframes und UI-Prototypen in Figma, umgesetzt in Scrum-Zusammenarbeit mit iterativem Feedback und UI/UX-Teamwork.",
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
