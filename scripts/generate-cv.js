#!/usr/bin/env node
'use strict';

const PDFDocument = require('pdfkit');
const { Document, Packer, Paragraph, TextRun, BorderStyle, ExternalHyperlink } = require('docx');
const fs   = require('fs');
const path = require('path');

const OUT = '/Users/macbook/Downloads/portfolio/public/assets';
fs.mkdirSync(OUT, { recursive: true });

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════
const D = {
  name:      'Adama Ndiaye',
  title:     'Assistante Gestion de Projets | Analyste Financière & CRM',
  email:     'adamandiaye.works@gmail.com',
  phone:     '+221 76 271 48 88',
  loc:       'Dakar, Sénégal',
  li:        'linkedin.com/in/adamandiayeworks',
  portfolio: 'adamandiayeworks.vercel.app',
  about:     "Diplômée d'une Licence en Comptabilité & Gestion (FASEG – UCAD) et certifiée Salesforce Sales Operations, j'ai accompagné 4 missions freelance dans des secteurs variés — fintech, plateformes numériques et collaboration franco-sénégalaise — tout en gérant la comptabilité d'une structure éducative sur deux ans. Rigoureuse, organisée et à l'aise avec les outils digitaux et l'IA, je cherche à contribuer à des projets à impact social et de développement.",
  experience: [
    {
      title:   'Assistante – Acquisition Clients, Projets & Comptabilité',
      company: 'MODLABS',
      type:    'Mission freelance',
      period:  '2025 – 2026',
      loc:     'Dakar, Sénégal',
      bullets: [
        'Accompagné 4 clients sur des missions de développement web & mobile : FLA (freelancing sénégalais), SMK (fintech) et AACTE (collaboration franco-sénégalaise).',
        'Coordonné le suivi opérationnel de chaque projet : planification des jalons, relances clients et respect des délais.',
        'Établi les devis, factures et assuré le suivi des encaissements.',
        'Produit des rapports financiers mensuels synthétisant les flux de trésorerie.',
        'Contribué à la fidélisation client via un accompagnement personnalisé post-livraison.',
      ],
    },
    {
      title:   'Gestionnaire Comptable',
      company: 'École Franco-Arabe Alhidaya Keur Fatma Haris',
      type:    'Mission externe',
      period:  '2024 – 2026',
      loc:     'Dakar, Sénégal',
      bullets: [
        'Tenu la comptabilité générale : saisie des opérations, lettrage et rapprochements bancaires.',
        'Établi les rapports financiers mensuels et annuels à destination de la direction.',
        'Assuré le suivi des encaissements (frais de scolarité) et des dépenses opérationnelles.',
        'Garanti la conformité des documents comptables et la traçabilité financière.',
      ],
    },
  ],
  education: [
    { degree: 'Licence en Comptabilité & Gestion', school: 'FASEG – UCAD', loc: 'Dakar, Sénégal', year: '2022', detail: 'Option : Analyse Politique et Économique', modules: 'Comptabilité générale, Analyse financière, Macroéconomie, Droit des affaires' },
    { degree: 'Baccalauréat Général – Série S2',   school: 'Sénégal',       loc: '',              year: '2018', detail: 'Sciences Expérimentales',                  modules: null },
  ],
  certs: [
    { title: 'Salesforce Sales Operations',                                    org: 'Coursera · Salesforce', year: '2025', featured: true,  link: 'https://www.coursera.org/account/accomplishments/professional-cert/GQAQEHNWU08L' },
    { title: 'Gestion des prospects dans Salesforce',                          org: 'Coursera · Salesforce', year: '2025', featured: false, link: 'https://www.coursera.org/account/accomplishments/records/EU1CMLMI4FVK' },
    { title: 'Gestion des opportunités dans Salesforce',                       org: 'Coursera · Salesforce', year: '2025', featured: false, link: 'https://www.coursera.org/account/accomplishments/records/AYENZ0V3HI9C' },
    { title: "Vue d'ensemble des ventes et de la GRC",                         org: 'Coursera · Salesforce', year: '2025', featured: false, link: 'https://www.coursera.org/account/accomplishments/records/7MW81L4O1TLW' },
    { title: 'Rapports, tableaux de bord et réussite clients dans Salesforce', org: 'Coursera · Salesforce', year: '2025', featured: false, link: 'https://www.coursera.org/account/accomplishments/records/V1KZ817B25XZ' },
    { title: 'Données pour les analystes commerciaux – Microsoft Excel',       org: 'Coursera · Microsoft',  year: '2025', featured: false, link: 'https://www.coursera.org/account/accomplishments/records/YECHV5HNBBOI' },
    { title: "Principes fondamentaux de l'analyse d'entreprise",               org: 'Coursera',              year: '2025', featured: false, link: 'https://www.coursera.org/account/accomplishments/records/P7PYUDDVMKHM' },
    { title: 'Développement Web – HTML, CSS, JavaScript',                      org: 'GoMyCode · Dakar',      year: '2021', featured: false, link: null },
  ],
  skills: [
    { cat: 'Gestion de Projets & CRM',  items: 'Coordination de projets · Salesforce CRM · Suivi opérationnel · Reporting' },
    { cat: 'Analyse & Données',         items: 'Excel avancé (TCD) · Reporting financier · Analyse de données' },
    { cat: 'Comptabilité',              items: 'Comptabilité générale · Facturation & devis · Analyse financière' },
    { cat: 'Outils Digitaux & IA',      items: 'Suite Microsoft Office · Outils IA · Canva · HTML/CSS' },
  ],
  langs: [
    { name: 'Français',  level: 'Avancé — C1'        },
    { name: 'Anglais',   level: 'Intermédiaire — B1' },
    { name: 'Wolof',     level: 'Langue maternelle'  },
    { name: 'Espagnol',  level: 'Débutant — A1'      },
  ],
};

// ═══════════════════════════════════════════════════════════════
// PDF
// ═══════════════════════════════════════════════════════════════
function makePDF() {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 0 });
    const ws  = fs.createWriteStream(path.join(OUT, 'CV_Adama_Ndiaye.pdf'));
    doc.pipe(ws);
    ws.on('finish', resolve);
    ws.on('error', reject);

    const W  = 595.28;
    const ML = 45, MR = 45;
    const CW = W - ML - MR;
    const NAVY = '#0D2137', BLUE = '#1565C0', BLUE2 = '#1976D2', GOLD = '#C8963E';
    const TEXT = '#1A1A2E', MUTED = '#4A5568', BGBLUE = '#E3F0FC';

    // ── HEADER ────────────────────────────────────────────────────────
    doc.rect(0, 0, W, 126).fill(NAVY);
    doc.rect(0, 0, 6, 126).fill(GOLD);

    doc.font('Helvetica-Bold').fontSize(25).fillColor('#fff')
       .text(D.name, 54, 22, { width: CW });

    doc.font('Helvetica').fontSize(10.5).fillColor('#90CAF9')
       .text(D.title, 54, 57, { width: CW });

    doc.font('Helvetica').fontSize(8.5).fillColor('#B3C8E8')
       .text(`${D.email}   ·   ${D.phone}   ·   ${D.loc}`, 54, 83, { width: CW });

    doc.font('Helvetica').fontSize(8.5).fillColor('#90CAF9')
       .text(`${D.li}   ·   ${D.portfolio}`, 54, 99, { width: CW });

    let y = 144;

    // ── Helpers ───────────────────────────────────────────────────────
    function section(label) {
      if (y > 785) {
        doc.addPage({ size: 'A4', margin: 0 });
        doc.rect(0, 0, 6, 20).fill(GOLD);
        y = 35;
      }
      doc.font('Helvetica-Bold').fontSize(7.5).fillColor(BLUE)
         .text(label.toUpperCase(), ML, y, { characterSpacing: 1.2 });
      y += 12;
      doc.moveTo(ML, y).lineTo(W - MR, y).strokeColor(BLUE).lineWidth(1.5).stroke();
      y += 10;
    }

    function guard(h) {
      if (y + h > 808) {
        doc.addPage({ size: 'A4', margin: 0 });
        doc.rect(0, 0, 6, 20).fill(GOLD);
        y = 35;
      }
    }

    // ── PROFIL ────────────────────────────────────────────────────────
    section('Profil');
    doc.font('Helvetica').fontSize(9.5).fillColor(MUTED)
       .text(D.about, ML, y, { width: CW, lineGap: 2.5 });
    y = doc.y + 18;

    // ── EXPÉRIENCE ────────────────────────────────────────────────────
    section('Expérience Professionnelle');

    D.experience.forEach(exp => {
      guard(80);
      doc.rect(ML, y, 76, 16).fill(BGBLUE);
      doc.font('Helvetica-Bold').fontSize(8).fillColor(BLUE)
         .text(exp.period, ML, y + 3, { width: 76, align: 'center' });
      doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT)
         .text(exp.title, ML + 84, y, { width: CW - 84 });
      y += 19;
      doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(BLUE2)
         .text(`${exp.company} — ${exp.type}   |   ${exp.loc}`, ML, y, { width: CW });
      y += 14;
      exp.bullets.forEach(b => {
        guard(14);
        doc.circle(ML + 5, y + 4, 2).fill(BLUE);
        doc.font('Helvetica').fontSize(9).fillColor(MUTED)
           .text(b, ML + 14, y, { width: CW - 14, lineGap: 1.2 });
        y = doc.y + 3;
      });
      y += 10;
    });

    // ── FORMATION ─────────────────────────────────────────────────────
    guard(70);
    section('Formation');

    D.education.forEach(edu => {
      guard(50);
      doc.rect(ML, y, 52, 16).fill(BGBLUE);
      doc.font('Helvetica-Bold').fontSize(9).fillColor(BLUE)
         .text(edu.year, ML, y + 3, { width: 52, align: 'center' });
      doc.font('Helvetica-Bold').fontSize(10).fillColor(TEXT)
         .text(edu.degree, ML + 60, y, { width: CW - 60 });
      y += 19;
      doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(BLUE2)
         .text(`${edu.school}${edu.loc ? '  —  ' + edu.loc : ''}`, ML + 60, y);
      y += 13;
      if (edu.detail) {
        doc.font('Helvetica-Bold').fontSize(8.5).fillColor(BLUE)
           .text(edu.detail, ML + 60, y);
        y += 12;
      }
      if (edu.modules) {
        doc.font('Helvetica-Oblique').fontSize(8).fillColor(MUTED)
           .text(edu.modules, ML + 60, y, { width: CW - 60 });
        y = doc.y + 6;
      }
      y += 6;
    });

    // ── CERTIFICATIONS ────────────────────────────────────────────────
    guard(80);
    section('Certifications');

    const colW = (CW - 12) / 2;
    for (let i = 0; i < D.certs.length; i += 2) {
      guard(32);
      const ry = y;
      const c0 = D.certs[i];
      const c1 = D.certs[i + 1];

      // Left cert
      doc.circle(ML + 4, ry + 5, c0.featured ? 4 : 2.5).fill(c0.featured ? GOLD : BLUE);
      doc.font(c0.featured ? 'Helvetica-Bold' : 'Helvetica')
         .fontSize(8.5).fillColor(c0.link ? BLUE : TEXT)
         .text(c0.title, ML + 13, ry, {
           width: colW - 14,
           ...(c0.link ? { link: c0.link, underline: true } : {}),
         });
      doc.font('Helvetica').fontSize(7.5).fillColor(MUTED)
         .text(`${c0.org} · ${c0.year}`, ML + 13, ry + 12, { width: colW - 14 });

      // Right cert
      if (c1) {
        const cx = ML + colW + 12;
        doc.circle(cx + 4, ry + 5, c1.featured ? 4 : 2.5).fill(c1.featured ? GOLD : BLUE);
        doc.font(c1.featured ? 'Helvetica-Bold' : 'Helvetica')
           .fontSize(8.5).fillColor(c1.link ? BLUE : TEXT)
           .text(c1.title, cx + 13, ry, {
             width: colW - 14,
             ...(c1.link ? { link: c1.link, underline: true } : {}),
           });
        doc.font('Helvetica').fontSize(7.5).fillColor(MUTED)
           .text(`${c1.org} · ${c1.year}`, cx + 13, ry + 12, { width: colW - 14 });
      }
      y = ry + 30;
    }
    y += 6;

    // ── COMPÉTENCES ───────────────────────────────────────────────────
    guard(60);
    section('Compétences');

    D.skills.forEach(sk => {
      guard(14);
      doc.circle(ML + 4, y + 4.5, 2).fill(BLUE);
      doc.font('Helvetica-Bold').fontSize(9).fillColor(TEXT)
         .text(sk.cat + ' : ', ML + 12, y, { continued: true });
      doc.font('Helvetica').fillColor(MUTED).text(sk.items);
      y = doc.y + 5;
    });
    y += 6;

    // ── LANGUES ───────────────────────────────────────────────────────
    guard(50);
    section('Langues');

    D.langs.forEach(l => {
      guard(14);
      doc.circle(ML + 4, y + 4, 2).fill(NAVY);
      doc.font('Helvetica-Bold').fontSize(9).fillColor(TEXT)
         .text(l.name + ' ', ML + 12, y, { continued: true });
      doc.font('Helvetica').fillColor(MUTED).text('— ' + l.level);
      y = doc.y + 4;
    });

    doc.end();
  });
}

// ═══════════════════════════════════════════════════════════════
// DOCX
// ═══════════════════════════════════════════════════════════════
async function makeDOCX() {
  const pt = n => n * 20;

  const run  = (text, opts = {}) => new TextRun({ text, size: 20, color: '4A5568', ...opts });
  const bold = (text, opts = {}) => new TextRun({ text, size: 20, bold: true, color: '1A1A2E', ...opts });

  const secH = label => new Paragraph({
    children: [new TextRun({ text: label.toUpperCase(), bold: true, size: 18, color: '1565C0', characterSpacing: 20 })],
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: '1565C0', space: 4 } },
    spacing: { before: pt(16), after: pt(8) },
  });

  const bullet = text => new Paragraph({
    children: [run(`• ${text}`)],
    indent: { left: pt(18) },
    spacing: { before: 0, after: pt(2) },
  });

  // Cert row: linked title if link exists, plain otherwise
  const certPara = c => {
    const titleRun = c.link
      ? new ExternalHyperlink({
          link: c.link,
          children: [new TextRun({
            text: c.title,
            bold: c.featured,
            size: c.featured ? 21 : 20,
            color: '1565C0',
            underline: {},
          })],
        })
      : new TextRun({ text: c.title, bold: c.featured, size: c.featured ? 21 : 20, color: '1A1A2E' });

    return new Paragraph({
      children: [
        new TextRun({ text: c.featured ? '★  ' : '›  ', bold: c.featured, size: 20, color: c.featured ? 'C8963E' : '1565C0' }),
        titleRun,
        new TextRun({ text: `   —   ${c.org} · ${c.year}`, size: 17, color: '718096' }),
      ],
      spacing: { before: pt(3), after: pt(3) },
    });
  };

  const paragraphs = [
    // ── HEADER ────────────────────────────────────────────────────────
    new Paragraph({
      children: [new TextRun({ text: D.name, bold: true, size: 56, color: '0D2137' })],
      spacing: { before: 0, after: pt(4) },
    }),
    new Paragraph({
      children: [new TextRun({ text: D.title, size: 24, color: '1565C0' })],
      spacing: { before: 0, after: pt(4) },
    }),
    new Paragraph({
      children: [new TextRun({ text: `${D.email}   |   ${D.phone}   |   ${D.loc}`, size: 17, color: '718096' })],
      spacing: { before: 0, after: pt(2) },
    }),
    new Paragraph({
      children: [
        new ExternalHyperlink({ link: `https://${D.li}`, children: [new TextRun({ text: D.li, size: 17, color: '1565C0', underline: {} })] }),
        new TextRun({ text: '   |   ', size: 17, color: '718096' }),
        new ExternalHyperlink({ link: `https://${D.portfolio}`, children: [new TextRun({ text: D.portfolio, size: 17, color: '1565C0', underline: {} })] }),
      ],
      spacing: { before: 0, after: pt(10) },
    }),

    // ── PROFIL ────────────────────────────────────────────────────────
    secH('Profil'),
    new Paragraph({ children: [run(D.about)], spacing: { before: 0, after: pt(4) } }),

    // ── EXPÉRIENCE ────────────────────────────────────────────────────
    secH('Expérience Professionnelle'),
    ...D.experience.flatMap(exp => [
      new Paragraph({
        children: [
          new TextRun({ text: exp.period + '   ', bold: true, size: 18, color: '1565C0' }),
          new TextRun({ text: exp.title, bold: true, size: 21, color: '1A1A2E' }),
        ],
        spacing: { before: pt(10), after: pt(2) },
      }),
      new Paragraph({
        children: [new TextRun({ text: `${exp.company} — ${exp.type}   |   ${exp.loc}`, italics: true, size: 19, color: '1976D2' })],
        spacing: { before: 0, after: pt(4) },
      }),
      ...exp.bullets.map(b => bullet(b)),
    ]),

    // ── FORMATION ─────────────────────────────────────────────────────
    secH('Formation'),
    ...D.education.flatMap(edu => [
      new Paragraph({
        children: [
          new TextRun({ text: edu.year + '   ', bold: true, size: 18, color: '1565C0' }),
          new TextRun({ text: edu.degree, bold: true, size: 21, color: '1A1A2E' }),
        ],
        spacing: { before: pt(10), after: pt(2) },
      }),
      new Paragraph({
        children: [new TextRun({ text: `${edu.school}${edu.loc ? '  —  ' + edu.loc : ''}`, italics: true, size: 19, color: '1976D2' })],
        spacing: { before: 0, after: pt(2) },
      }),
      ...(edu.detail ? [new Paragraph({ children: [new TextRun({ text: edu.detail, bold: true, size: 19, color: '1565C0' })], spacing: { before: 0, after: pt(2) } })] : []),
      ...(edu.modules ? [new Paragraph({ children: [new TextRun({ text: edu.modules, italics: true, size: 17, color: '718096' })], spacing: { before: 0, after: pt(6) } })] : []),
    ]),

    // ── CERTIFICATIONS ────────────────────────────────────────────────
    secH('Certifications'),
    ...D.certs.map(c => certPara(c)),

    // ── COMPÉTENCES ───────────────────────────────────────────────────
    secH('Compétences'),
    ...D.skills.map(sk => new Paragraph({
      children: [bold(sk.cat + ' : '), run(sk.items)],
      spacing: { before: pt(3), after: pt(3) },
    })),

    // ── LANGUES ───────────────────────────────────────────────────────
    secH('Langues'),
    ...D.langs.map(l => new Paragraph({
      children: [bold(l.name + '  '), run('— ' + l.level)],
      spacing: { before: pt(2), after: pt(2) },
    })),
  ];

  const doc = new Document({
    creator: 'Adama Ndiaye',
    title:   'CV — Adama Ndiaye',
    sections: [{
      properties: { page: { margin: { top: 720, bottom: 720, left: 900, right: 900 } } },
      children: paragraphs,
    }],
  });

  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(path.join(OUT, 'CV_Adama_Ndiaye.docx'), buf);
  console.log('✓ DOCX  →  CV_Adama_Ndiaye.docx');
}

// ═══════════════════════════════════════════════════════════════
// RUN
// ═══════════════════════════════════════════════════════════════
Promise.all([makePDF(), makeDOCX()])
  .then(() => console.log('\nCV générés dans public/assets/'))
  .catch(e => { console.error(e); process.exit(1); });
