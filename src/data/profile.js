// Toutes les données du portfolio — modifier ici pour mettre à jour le site

export const profile = {
  name: "Adama Ndiaye",
  title: {
    fr: ["Assistante Gestion de Projets", "Analyste Financière & CRM", "Coordinatrice Junior"],
    en: ["Project Management Assistant", "Financial Analyst & CRM", "Junior Coordinator"],
  },
  email: "adamandiaye.works@gmail.com",
  phone: "+221 76 271 48 88",
  location: { fr: "Dakar, Sénégal", en: "Dakar, Senegal" },
  linkedin: "https://www.linkedin.com/in/adamandiayeworks",
  portfolio: "https://portfolio-adama.vercel.app",
  photo: null, // Mettre le chemin de la photo ici ex: "/assets/photo.jpg"
  cvPath:     "/assets/CV_Adama_Ndiaye.pdf",
  cvWordPath: "/assets/CV_Adama_Ndiaye.docx",

  about: {
    fr: "Diplômée d'une Licence en Comptabilité & Gestion (FASEG – UCAD) et certifiée Salesforce Sales Operations, j'ai accompagné 4 missions freelance dans des secteurs variés — fintech, plateformes numériques et collaboration franco-sénégalaise — tout en gérant la comptabilité d'une structure éducative sur deux ans. Rigoureuse, organisée et à l'aise avec les outils digitaux et l'IA, je cherche à mettre ces compétences au service de projets à impact social et de développement.",
    en: "Holding a Bachelor's in Accounting & Management (FASEG – UCAD) and Salesforce Sales Operations certified, I have supported 4 freelance missions across fintech, digital platforms and French-Senegalese collaboration sectors, while managing an educational institution's accounting for two years. Rigorous, organized and fluent with digital and AI tools, I am eager to contribute to impactful social development projects.",
  },

  stats: {
    fr: [
      { value: "4",  label: "Missions accompagnées" },
      { value: "2",  label: "Ans de gestion comptable" },
      { value: "7",  label: "Certifications" },
      { value: "1",  label: "Client international" },
    ],
    en: [
      { value: "4",  label: "Missions supported" },
      { value: "2",  label: "Years of accounting" },
      { value: "7",  label: "Certifications" },
      { value: "1",  label: "International client" },
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
          "Accompagné 4 clients sur des missions de développement web & mobile : FLA (plateforme de freelancing sénégalaise), SMK (projet fintech), AACTE (plateforme de collaboration franco-sénégalaise) et un client basé en France.",
          "Coordonné le suivi opérationnel de chaque projet : planification des jalons, relances clients et respect des délais.",
          "Établi les devis, factures et assuré le suivi des encaissements.",
          "Produit des rapports financiers mensuels synthétisant les flux de trésorerie.",
          "Contribué à la fidélisation client via un accompagnement personnalisé post-livraison.",
        ],
        en: [
          "Supported 4 clients on web & mobile development missions: FLA (Senegalese freelancing platform), SMK (fintech project), AACTE (French-Senegalese local authorities collaboration platform) and a France-based client.",
          "Coordinated operational follow-up on each project: milestone planning, client follow-ups and deadline management.",
          "Drafted quotes, invoices and managed payment collection.",
          "Produced monthly financial reports summarizing cash flows.",
          "Contributed to client retention through personalized post-delivery support.",
        ],
      },
    },
    {
      title: { fr: "Gestionnaire Comptable", en: "Accounting Manager" },
      company: "École Franco-Arabe Alhidaya Keur Fatma Haris",
      type: { fr: "Mission externe", en: "External mission" },
      location: "Dakar, Sénégal",
      period: "2024 – 2026",
      bullets: {
        fr: [
          "Tenu la comptabilité générale de l'établissement : saisie des opérations, lettrage et rapprochements bancaires.",
          "Établi les rapports financiers mensuels et annuels à destination de la direction.",
          "Assuré le suivi des encaissements (frais de scolarité) et des dépenses opérationnelles.",
          "Garanti la conformité des documents comptables et la traçabilité de l'ensemble des flux financiers.",
        ],
        en: [
          "Maintained general accounting records: journal entries, reconciliation and bank statements.",
          "Prepared monthly and annual financial reports for management.",
          "Tracked tuition fee collections and operational expenses.",
          "Ensured accounting document compliance and full financial traceability.",
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
      title: "Gestion des prospects dans Salesforce",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/EU1CMLMI4FVK",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Gestion des opportunités dans Salesforce",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/AYENZ0V3HI9C",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Vue d'ensemble des ventes et de la GRC",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/7MW81L4O1TLW",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Rapports, tableaux de bord et réussite clients dans Salesforce",
      badge: null,
      org: "Coursera · Salesforce",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/V1KZ817B25XZ",
      featured: false,
      color: "#1565C0",
    },
    {
      title: "Données pour les analystes commerciaux – Microsoft Excel",
      badge: null,
      org: "Coursera · Microsoft",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/YECHV5HNBBOI",
      featured: false,
      color: "#1976D2",
    },
    {
      title: "Principes fondamentaux de l'analyse d'entreprise",
      badge: null,
      org: "Coursera",
      year: "2025",
      link: "https://www.coursera.org/account/accomplishments/records/P7PYUDDVMKHM",
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
      {
        category: "Gestion de Projets & CRM",
        items: [
          { name: "Coordination de projets", level: 80 },
          { name: "Salesforce CRM",          level: 85 },
          { name: "Suivi opérationnel",       level: 82 },
          { name: "Reporting & Tableaux de bord", level: 85 },
        ],
      },
      {
        category: "Analyse & Données",
        items: [
          { name: "Excel avancé (TCD)",    level: 88 },
          { name: "Reporting financier",   level: 85 },
          { name: "Analyse de données",    level: 78 },
        ],
      },
      {
        category: "Comptabilité",
        items: [
          { name: "Comptabilité générale", level: 88 },
          { name: "Facturation & devis",   level: 90 },
          { name: "Analyse financière",    level: 80 },
        ],
      },
      {
        category: "Outils Digitaux & IA",
        items: [
          { name: "Suite Microsoft Office", level: 88 },
          { name: "Outils IA",              level: 75 },
          { name: "Canva",                  level: 75 },
          { name: "HTML / CSS",             level: 55 },
        ],
      },
    ],
    en: [
      {
        category: "Project Management & CRM",
        items: [
          { name: "Project coordination",      level: 80 },
          { name: "Salesforce CRM",            level: 85 },
          { name: "Operational follow-up",     level: 82 },
          { name: "Reporting & Dashboards",    level: 85 },
        ],
      },
      {
        category: "Analysis & Data",
        items: [
          { name: "Advanced Excel (PivotTables)", level: 88 },
          { name: "Financial reporting",          level: 85 },
          { name: "Data analysis",                level: 78 },
        ],
      },
      {
        category: "Accounting",
        items: [
          { name: "General accounting",  level: 88 },
          { name: "Invoicing & quotes",  level: 90 },
          { name: "Financial analysis",  level: 80 },
        ],
      },
      {
        category: "Digital Tools & AI",
        items: [
          { name: "Microsoft Office Suite", level: 88 },
          { name: "AI Tools",               level: 75 },
          { name: "Canva",                  level: 75 },
          { name: "HTML / CSS",             level: 55 },
        ],
      },
    ],
  },

  languages: {
    fr: [
      { name: "Français", level: "Avancé – C1",        pct: 90  },
      { name: "Anglais",  level: "Intermédiaire – B1", pct: 55  },
      { name: "Wolof",    level: "Langue maternelle",  pct: 100 },
      { name: "Espagnol", level: "Débutant – A1",      pct: 20  },
    ],
    en: [
      { name: "French",   level: "Advanced – C1",      pct: 90  },
      { name: "English",  level: "Intermediate – B1",  pct: 55  },
      { name: "Wolof",    level: "Native language",    pct: 100 },
      { name: "Spanish",  level: "Beginner – A1",      pct: 20  },
    ],
  },

  projects: [
    {
      title: { fr: "Tableau de bord financier – École Alhidaya", en: "Financial Dashboard – Alhidaya School" },
      description: {
        fr: "Tableau de bord Excel de suivi des flux de trésorerie, encaissements et dépenses de l'École Franco-Arabe Alhidaya sur 2 ans.",
        en: "Excel dashboard tracking cash flows, collections and expenses for Alhidaya Franco-Arabic School over 2 years.",
      },
      tech: ["Excel", "TCD", "Finance", "Comptabilité"],
      status: "coming",
      link: null,
    },
    {
      title: { fr: "Rapport de gestion – MODLABS", en: "Management Report – MODLABS" },
      description: {
        fr: "Rapports mensuels synthétisant la facturation, les encaissements et l'avancement des 4 projets clients suivis.",
        en: "Monthly reports summarizing invoicing, collections and progress across 4 client projects.",
      },
      tech: ["Excel", "Reporting", "Salesforce"],
      status: "coming",
      link: null,
    },
    {
      title: { fr: "Accompagnement AACTE", en: "AACTE Project Support" },
      description: {
        fr: "Suivi de projet pour AACTE, plateforme de mise en collaboration des collectivités locales françaises et sénégalaises.",
        en: "Project follow-up for AACTE, a platform connecting French and Senegalese local authorities.",
      },
      tech: ["Gestion de projet", "CRM", "Coordination"],
      status: "coming",
      link: null,
    },
  ],
};
