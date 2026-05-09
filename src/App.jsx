import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { profile } from './data/profile';
import { translations } from './i18n/translations';
import './App.css';

// ── Contexte langue ───────────────────────────────────────────────
const LangContext = createContext();
const useLang = () => useContext(LangContext);

// ── Hook scroll reveal ────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Hook typewriter ───────────────────────────────────────────────
function useTypewriter(texts, speed = 80) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const textsRef = useRef(texts);
  textsRef.current = texts;

  useEffect(() => {
    const current = textsRef.current[index];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % textsRef.current.length);
    }
  }, [displayed, deleting, index, speed]);
  return displayed;
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Navbar
// ═══════════════════════════════════════════════════════════════════
function Navbar({ lang, setLang }) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about',          label: t.about },
    { href: '#skills',         label: t.skills },
    { href: '#experience',     label: t.experience },
    { href: '#certifications', label: t.certifications },
    { href: '#projects',       label: t.projects },
    { href: '#contact',        label: t.contact },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">AN</a>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__right">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          aria-label="Switch language"
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Hero
// ═══════════════════════════════════════════════════════════════════
function Hero() {
  const { lang } = useLang();
  const t = translations[lang].hero;
  const typed = useTypewriter(profile.title[lang], 75);

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-shape" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">{t.greeting}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <div className="hero__typewriter">
            <span>{typed}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {profile.location[lang]}
          </p>
          <div className="hero__actions">
            <a href={profile.cvPath} download className="btn btn--primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t.cta_cv}
            </a>
            <a href={profile.cvWordPath} download className="btn btn--outline btn--word">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              {t.cta_cv_word}
            </a>
            <a href="#contact" className="btn btn--outline">{t.cta_contact}</a>
          </div>
        </div>

        <div className="hero__photo">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="hero__photo-img" />
          ) : (
            <div className="hero__photo-placeholder">
              <span>AN</span>
              <p className="hero__photo-hint">Ajouter photo dans<br/>public/assets/photo.jpg</p>
            </div>
          )}
          <div className="hero__photo-ring" aria-hidden="true" />
        </div>
      </div>

      <div className="hero__stats">
        {profile.stats[lang].map((s, i) => (
          <div key={i} className="hero__stat">
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : About
// ═══════════════════════════════════════════════════════════════════
function About() {
  const { lang } = useLang();
  const t = translations[lang].about;
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section section--light">
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`} ref={ref}>
        <SectionHeader label={t.subtitle} title={t.section} />
        <div className="about__grid">
          <div className="about__text">
            <p>{profile.about[lang]}</p>
          </div>
          <div className="about__contacts">
            <ContactItem icon="mail" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactItem icon="phone" label="Téléphone" value={profile.phone} href={`tel:${profile.phone}`} />
            <ContactItem icon="map-pin" label="Ville" value={profile.location[lang]} />
            <ContactItem icon="linkedin" label="LinkedIn" value="linkedin.com/in/adamandiayeworks" href={profile.linkedin} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href, placeholder }) {
  const icons = {
    mail: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>,
    'map-pin': <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  };
  const content = (
    <div className={`contact-item${placeholder ? ' contact-item--placeholder' : ''}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        {icons[icon]}
      </svg>
      <div>
        <span className="contact-item__label">{label}</span>
        <span className="contact-item__value">{value}</span>
      </div>
    </div>
  );
  return href && !placeholder ? <a href={href} target="_blank" rel="noreferrer" className="contact-link">{content}</a> : content;
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Skills
// ═══════════════════════════════════════════════════════════════════
function Skills() {
  const { lang } = useLang();
  const t = translations[lang].skills;
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="section">
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`} ref={ref}>
        <SectionHeader label={t.subtitle} title={t.section} />
        <div className="skills__grid">
          {profile.skills[lang].map((cat, i) => (
            <div key={i} className="skills__card">
              <h3 className="skills__cat">{cat.category}</h3>
              {cat.items.map((skill, j) => (
                <div key={j} className="skill-item">
                  <div className="skill-item__header">
                    <span>{skill.name}</span>
                    <span className="skill-item__pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar__fill"
                      style={{ width: visible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <h3 className="skills__lang-title">{t.languages}</h3>
        <div className="langs__grid">
          {profile.languages[lang].map((l, i) => (
            <div key={i} className="lang-card">
              <div className="lang-card__header">
                <span className="lang-card__name">{l.name}</span>
                <span className="lang-card__level">{l.level}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar__fill skill-bar__fill--lang"
                  style={{ width: visible ? `${l.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Experience & Formation (Timeline)
// ═══════════════════════════════════════════════════════════════════
function Experience() {
  const { lang } = useLang();
  const t = translations[lang].experience;
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section section--light">
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`} ref={ref}>
        <SectionHeader label={t.subtitle} title={t.section} />
        <div className="timeline__grid">
          {/* Expérience */}
          <div className="timeline__col">
            <h3 className="timeline__col-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              {t.exp_label}
            </h3>
            {profile.experience.map((exp, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__period">{exp.period}</span>
                  <h4 className="timeline__title">{exp.title[lang]}</h4>
                  <p className="timeline__org">{exp.company} — <em>{exp.type[lang]}</em></p>
                  <ul className="timeline__bullets">
                    {exp.bullets[lang].map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Formation */}
          <div className="timeline__col">
            <h3 className="timeline__col-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              {t.edu_label}
            </h3>
            {profile.education.map((edu, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__period">{edu.year}</span>
                  <h4 className="timeline__title">{edu.degree[lang]}</h4>
                  <p className="timeline__org">
                    {typeof edu.school === 'string' ? edu.school : edu.school[lang]}
                    {edu.location ? ` — ${edu.location}` : ''}
                  </p>
                  {edu.detail && <p className="timeline__detail">{edu.detail[lang]}</p>}
                  {edu.modules && <p className="timeline__modules">{edu.modules[lang]}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Certifications
// ═══════════════════════════════════════════════════════════════════
function Certifications() {
  const { lang } = useLang();
  const t = translations[lang].certifications;
  const [ref, visible] = useReveal();

  return (
    <section id="certifications" className="section">
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`} ref={ref}>
        <SectionHeader label={t.subtitle} title={t.section} />
        <div className="certs__grid">
          {profile.certifications.map((cert, i) => (
            <div key={i} className={`cert-card${cert.featured ? ' cert-card--featured' : ''}`}>
              <div className="cert-card__icon" style={{ background: cert.color + '1A', borderColor: cert.color + '40' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              {cert.badge && (
                <span className="cert-card__badge" style={{ background: cert.color, color: '#fff' }}>
                  {cert.badge[lang] || cert.badge.fr}
                </span>
              )}
              <h4 className="cert-card__title">{cert.title}</h4>
              <p className="cert-card__org">{cert.org}</p>
              <div className="cert-card__footer">
                <span className="cert-card__year">{cert.year}</span>
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-card__link">
                    {t.verify}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                ) : (
                  <span className="cert-card__link cert-card__link--disabled">GoMyCode</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Projects
// ═══════════════════════════════════════════════════════════════════
function Projects() {
  const { lang } = useLang();
  const t = translations[lang].projects;
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section section--light">
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`} ref={ref}>
        <SectionHeader label={t.subtitle} title={t.section} />
        <div className="projects__grid">
          {profile.projects.map((proj, i) => (
            <div key={i} className="project-card">
              <div className="project-card__preview">
                <div className="project-card__preview-inner">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="1.5" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                  </svg>
                  {proj.status === 'coming' && (
                    <span className="project-card__coming">{t.coming}</span>
                  )}
                </div>
              </div>
              <div className="project-card__body">
                <h4 className="project-card__title">{proj.title[lang]}</h4>
                <p className="project-card__desc">{proj.description[lang]}</p>
                <div className="project-card__tags">
                  {proj.tech.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
                <button
                  className="btn btn--sm btn--outline"
                  disabled={proj.status === 'coming'}
                  style={{ opacity: proj.status === 'coming' ? 0.5 : 1, cursor: proj.status === 'coming' ? 'not-allowed' : 'pointer' }}
                >
                  {proj.status === 'coming' ? t.coming : t.view}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Contact
// ═══════════════════════════════════════════════════════════════════
function Contact() {
  const { lang } = useLang();
  const t = translations[lang].contact;
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Remplacer YOUR_FORM_ID par l'ID obtenu sur https://formspree.io
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className={`container reveal${visible ? ' reveal--visible' : ''}`} ref={ref}>
        <SectionHeader label={t.subtitle} title={t.section} />
        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder={t.name} />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.email}</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder={t.email} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.message}</label>
              <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required placeholder={t.message} />
            </div>
            {status === 'sent' && (
              <p className="form-feedback form-feedback--success">{t.sent}</p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--error">{t.error}</p>
            )}
            <button type="submit" className="btn btn--primary btn--full" disabled={status === 'sending' || status === 'sent'}>
              {status === 'sending' ? t.sending : status === 'sent' ? t.sent : t.send}
            </button>
          </form>

          <div className="contact__info">
            <p className="contact__or">{t.or}</p>
            <div className="contact__socials">
              <a href={`mailto:${profile.email}`} className="social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                linkedin.com/in/adamandiayeworks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Footer
// ═══════════════════════════════════════════════════════════════════
function Footer() {
  const { lang } = useLang();
  const t = translations[lang].footer;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">AN</span>
        <p>{t.made} · {new Date().getFullYear()} · {t.rights}</p>
        <a href="#hero" className="footer__top" aria-label="Retour en haut">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
        </a>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Section Header
// ═══════════════════════════════════════════════════════════════════
function SectionHeader({ label, title }) {
  return (
    <div className="section-header">
      <span className="section-header__label">{label}</span>
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__line" aria-hidden="true" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPOSANT : Scroll Progress Bar
// ═══════════════════════════════════════════════════════════════════
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}

// ═══════════════════════════════════════════════════════════════════
// APP ROOT
// ═══════════════════════════════════════════════════════════════════
export default function App() {
  const [lang, setLang] = useState('fr');

  return (
    <LangContext.Provider value={{ lang }}>
      <ScrollProgress />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </LangContext.Provider>
  );
}
