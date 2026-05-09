// Toutes les données du portfolio — modifier ici pour mettre à jour le site

export const profile = {
  name: "Adama Ndiaye",
  title: {
    fr: ["Gestionnaire Comptable & Analyste", "CRM Salesforce Certified", "Business Analyst"],
    en: ["Accounting Manager & Analyst", "CRM Salesforce Certified", "Business Analyst"],
  },
  email: "adamandiaye.works@gmail.com",
  phone: "+221 76 271 48 88",
  location: { fr: "Dakar, Sénégal", en: "Dakar, Senegal" },
  linkedin: "https://www.linkedin.com/in/adamandiayeworks",
  portfolio: "https://adama-ndiaye.github.io/portfolio",
  photo: null, // Mettre le chemin de la photo ici ex: "/assets/photo.jpg"
  cvPath: "/assets/CV_Adama_Ndiaye.pdf",

  about: {
    fr: "Titulaire d'une Licence en Comptabilité & Gestion (FASEG – UCAD) et certifiée Salesforce Sales Operations, je combine une maîtrise solide de la comptabilité générale et de l'analyse financière à des compétences avancées en CRM et data. Forte d'une expérience en gestion de projets et acquisition client dans une structure tech, j'apporte rigueur analytique, sens commercial et agilité digitale à toute organisation ambitieuse.",
    en: "Holding a Bachelor's degree in Accounting & Management (FASEG – UCAD) and Salesforce Sales Operations certified, I combine solid expertise in general accounting and financial analysis with advanced CRM and data skills. With hands-on experience in project management and client acquisition in a tech company, I bring analytical rigor, business acumen, and digital agility to any ambitious organization.",
  },

  stats: {
    fr: [
      { value: "6", label: "Certifications" },
      { value: "1+", label: "An d'expérience" },
      { value: "3", label: "Projets gérés" },
      { value: "2", label: "Spécialisations" },
    ],
    en: [
      { value: "6", label: "Certifications" },
      { value: "1+", label: "Year of experience" },
      { value: "3", label: "Projects managed" },
      { value: "2", label: "Specializations" },
    ],
  },

  experience: [
    {
      title: { fr: "Assistante – Acquisition Clients, Projets & Comptabilité", en: "Assistant – Client Acquisition, Projects & Accounting" },
      company: "MODLABS",
      type: { fr: "Mission freelance", en: "Freelance mission" },
      location: "Dakar, Sénégal",
      period: "2025 – 2026",
      bullets: {
        fr: [
          "Développé un portefeuille de clients pour des projets de développement web & mobile.",
          "Coordonné le suivi opérationnel de plusieurs projets : planification, relances et respect des délais.",
          "Établi les devis, factures et assuré le suivi des encaissements.",
          "Produit des rapports financiers mensuels synthétisant les flux de trésorerie.",
          "Contribué à la fidélisation client via un accompagnement personnalisé post-livraison.",
        ],
        en: [
          "Built and grew a client portfolio for web & mobile development projects.",
          "Coordinated operational follow-up on multiple simultaneous projects.",
          "Drafted quotes, invoices and managed payment collection.",
          "Produced monthly financial reports summarizing cash flows.",
          "Contributed to client retention through personalized post-delivery support.",
        ],
      },
    },
  ],

  education: [
    {
      degree: { fr: "Licence en Comptabilité & Gestion", en: "Bachelor's in Accounting & Management" },
      school: "FASEG – UCAD",
      location: "Dakar, Sénégal",
      year: "2022",
      detail: { fr: "Option : Analyse Politique et Économique", en: "Major: Political & Economic Analysis" },
      modules: { fr: "Comptabilité générale, Analyse financière, Macroéconomie, Droit des affaires", en: "General accounting, Financial analysis, Macroeconomics, Business law" },
    },
    {
      degree: { fr: "Baccalauréat Général – Série S2", en: "High School Diploma – S2 Science" },
      school: { fr: "Sénégal", en: "Senegal" },
      location: "",
      year: "2018",
      detail: { fr: "Sciences Expérimentales", en: "Experimental Sciences" },
      modules: null,
    },
  ],

  certifications: [
    {
      title: "Salesforce Sales Operations",
      badge: { fr: "Spécialisation Professionnelle", en: "Professional Specialization" },
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/GQAQEHNWU08L",
      featured: true,
      color: "#C8963E",
    },
    {
      title: "Sales and CRM Overview",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/EU1CMLMI4FVK",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Lead Management in Salesforce",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/YECHV5HNBBOI",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Reports, Dashboards & Customer Success",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/7MW81L4O1TLW",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Data for Business Analysts – Excel",
      badge: null,
      org: "Coursera · Microsoft",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/P7PYUDDVMKHM",
      featured: false,
      color: "#1976D2",
    },
    {
      title: "Business Analysis Fundamentals",
      badge: null,
      org: "Coursera",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/verify/V1KZ817B25XZ",
      featured: false,
      color: "#1976D2",
    },
    {
      title: "Développement Web – HTML, CSS, JavaScript",
      badge: { fr: "Fondamentaux du Web", en: "Web Fundamentals" },
      org: "GoMyCode · Dakar",
      year: "2021",
      link: null,
      featured: false,
      color: "#0D2137",
    },
  ],

  skills: {
    fr: [
      { category: "CRM & Ventes", items: [{ name: "Salesforce", level: 90 }, { name: "Lead Management", level: 85 }, { name: "Reporting & Dashboards", level: 88 }] },
      { category: "Analyse & Données", items: [{ name: "Excel avancé (TCD)", level: 88 }, { name: "Tableaux de bord", level: 82 }, { name: "Reporting financier", level: 85 }] },
      { category: "Comptabilité", items: [{ name: "Comptabilité générale", level: 90 }, { name: "Facturation", level: 92 }, { name: "Analyse financière", level: 82 }] },
      { category: "Outils & Tech", items: [{ name: "Suite Microsoft Office", level: 88 }, { name: "Canva", level: 75 }, { name: "HTML / CSS / JS", level: 55 }, { name: "Outils IA", level: 72 }] },
    ],
    en: [
      { category: "CRM & Sales", items: [{ name: "Salesforce", level: 90 }, { name: "Lead Management", level: 85 }, { name: "Reporting & Dashboards", level: 88 }] },
      { category: "Analysis & Data", items: [{ name: "Advanced Excel (PivotTables)", level: 88 }, { name: "Dashboards", level: 82 }, { name: "Financial reporting", level: 85 }] },
      { category: "Accounting", items: [{ name: "General accounting", level: 90 }, { name: "Invoicing", level: 92 }, { name: "Financial analysis", level: 82 }] },
      { category: "Tools & Tech", items: [{ name: "Microsoft Office Suite", level: 88 }, { name: "Canva", level: 75 }, { name: "HTML / CSS / JS", level: 55 }, { name: "AI Tools", level: 72 }] },
    ],
  },

  languages: {
    fr: [
      { name: "Français", level: "Avancé – C1", pct: 90 },
      { name: "Anglais", level: "Intermédiaire – B1", pct: 55 },
      { name: "Wolof", level: "Langue maternelle", pct: 100 },
      { name: "Espagnol", level: "Débutant – A1", pct: 20 },
    ],
    en: [
      { name: "French", level: "Advanced – C1", pct: 90 },
      { name: "English", level: "Intermediate – B1", pct: 55 },
      { name: "Wolof", level: "Native language", pct: 100 },
      { name: "Spanish", level: "Beginner – A1", pct: 20 },
    ],
  },

  projects: [
    {
      title: { fr: "Tableau de bord financier", en: "Financial Dashboard" },
      description: { fr: "Tableau de bord Excel de suivi des flux de trésorerie et indicateurs financiers mensuels chez MODLABS.", en: "Excel dashboard tracking monthly cash flows and financial KPIs at MODLABS." },
      tech: ["Excel", "TCD", "Finance"],
      status: "coming", // "live" ou "coming"
      link: null,
    },
    {
      title: { fr: "Rapport de gestion mensuel", en: "Monthly Management Report" },
      description: { fr: "Rapport de gestion synthétisant la facturation, les encaissements et l'avancement des projets.", en: "Management report summarizing invoicing, collections and project progress." },
      tech: ["Excel", "Comptabilité", "Reporting"],
      status: "coming",
      link: null,
    },
    {
      title: { fr: "Campagne d'acquisition clients", en: "Client Acquisition Campaign" },
      description: { fr: "Stratégie de prospection et d'acquisition de clients pour des projets tech web & mobile.", en: "Prospecting and client acquisition strategy for web & mobile tech projects." },
      tech: ["Salesforce", "CRM", "Ventes"],
      status: "coming",
      link: null,
    },
  ],
};
