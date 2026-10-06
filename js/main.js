(function () {
  'use strict';

  // ══════════════════════════════════════════════════════════════
  //  i18n DICTIONARY
  // ══════════════════════════════════════════════════════════════
  var translations = {
    pt: {
      'nav.inicio':       'Início',
      'nav.sobre':        'Sobre',
      'nav.skills':       'Skills',
      'nav.experiencia':  'Experiência',
      'nav.projetos':     'Projetos',
      'nav.contato':      'Contato',

      'hero.greeting': 'Olá, sou',
      'hero.subtitle': 'Foco em backend',
      'hero.cta1':     'Ver Projetos',
      'hero.cta2':     'Fale Comigo',

      'about.title': 'Sobre',
      'about.text':  'Fullstack Software Engineer com foco em backend. 4 anos de experiência profissional e quase 6 anos desenvolvendo software. Atualmente na DEEPESG, plataforma SaaS multitenant de gestão e auditoria ESG com 2.000+ usuários.',
      'about.text2': 'Antes disso, atuei como Teaching Assistant na Alpha EdTech, mentorando alunos em desenvolvimento fullstack.',
      'about.stat1': 'anos de experiência',
      'about.stat2': 'anos programando',
      'about.stat3': 'usuários impactados',

      'skills.title':    'Skills',
      'skills.backend':  'Backend',
      'skills.frontend': 'Frontend',
      'skills.cloud':    'Cloud & Infra',
      'skills.tools':    'Ferramentas',
      'skills.languages':'Idiomas',
      'skills.portuguese':'Português nativo',
      'skills.english':  'Inglês fluente',

      'exp.title':        'Experiência Profissional',
      'exp.deepesg.role': 'Fullstack Software Engineer',
      'exp.deepesg.b1':   'Projetei e construí módulo GHG de emissões do zero, consolidando 28 tabelas em 5, eliminando inconsistências recorrentes de dados.',
      'exp.deepesg.b2':   'Redesenhei sistema de bibliotecas na migração single para multi-tenancy — deploy de ~30min para menos de 2min.',
      'exp.deepesg.b3':   'Sistema de agendamento com Google Pub/Sub e Cloud Scheduler, processando ~300 tarefas mensais.',
      'exp.deepesg.b4':   'Refatorei módulo de gestão de empresas para multitenancy — criação de empresa de ~1h para menos de 5min.',
      'exp.deepesg.b5':   'Export multi-tab XLSX/CSV para dados de emissões, suportando 28 categorias e 40+ filiais.',
      'exp.deepesg.b6':   'i18n gerenciado via banco com 3 idiomas, eliminando redeploys para atualizações de tradução.',
      'exp.deepesg.b7':   'Migrei 10+ componentes Vue 2 para Vue 3 e documentei novos componentes no Storybook.',
      'exp.alpha.role':   'Fullstack Development Teaching Assistant',
      'exp.alpha.desc':   'Mentoria de alunos ao longo do programa fullstack, conduzindo sessões de Q&A e acompanhamento técnico cobrindo lógica de programação, JavaScript, React, Node.js, PostgreSQL e Redis.',

      'projects.title':       'Projetos',
      'projects.coming-soon': 'Em breve',
      'projects.view-repo':   'Ver repositório \u2192',
      'projects.pong.title':  'Pong Game',
      'projects.pong.desc':   'Jogo Pong clássico rodando no browser, construído com JavaScript puro e Canvas API.',
      'projects.dnd.title':   'DnD 5e Character Creator',
      'projects.dnd.desc':    'Criador visual de personagens para D&D 5e — escolha raça, classe, atributos e gere sua ficha interativamente.',
      'projects.jobfit.title':      'Job Fit Check',
      'projects.jobfit.desc':       'Plataforma full-stack para análise de fit com vagas. Scraping com Playwright, fila de processamento com BullMQ e score de compatibilidade via LLM local.',
      'projects.notebookrag.title': 'NotebookRAG',
      'projects.notebookrag.desc':  'App de chat com documentos via RAG. Upload de PDFs, Markdown, Word e texto — converse com seus docs usando LLM local, sem cloud, sem API keys, 100% privado.',

      'contact.title':    'Contato',
      'contact.subtitle': 'Vamos trabalhar juntos? Entre em contato.',
      'contact.email':    'felype.nasc@hotmail.com',
      'contact.linkedin': 'felype-nascimento',

      'footer.rights': 'Todos os direitos reservados.',
      'footer.email':  'Email',
    },

    en: {
      'nav.inicio':       'Home',
      'nav.sobre':        'About',
      'nav.skills':       'Skills',
      'nav.experiencia':  'Experience',
      'nav.projetos':     'Projects',
      'nav.contato':      'Contact',

      'hero.greeting': "Hi, I'm",
      'hero.subtitle': 'Backend-focused \u00b7',
      'hero.cta1':     'View Projects',
      'hero.cta2':     'Get in Touch',

      'about.title': 'About',
      'about.text':  'Fullstack Software Engineer with a backend focus. 4 years of professional experience and nearly 6 years of software development. Currently at DEEPESG, a multitenant SaaS platform for ESG management and auditing with 2,000+ users.',
      'about.text2': 'Before that, I was a Teaching Assistant at Alpha EdTech, mentoring students in fullstack development.',
      'about.stat1': 'years of experience',
      'about.stat2': 'years coding',
      'about.stat3': 'users impacted',

      'skills.title':    'Skills',
      'skills.backend':  'Backend',
      'skills.frontend': 'Frontend',
      'skills.cloud':    'Cloud & Infra',
      'skills.tools':    'Tools',
      'skills.languages':'Languages',
      'skills.portuguese':'Portuguese (native)',
      'skills.english':  'English (fluent)',

      'exp.title':        'Professional Experience',
      'exp.deepesg.role': 'Fullstack Software Engineer',
      'exp.deepesg.b1':   'Designed and built a GHG emissions module from scratch, consolidating 28 tables into 5 and eliminating recurring data inconsistencies.',
      'exp.deepesg.b2':   'Redesigned the indicator library system for the single-to-multi-tenancy migration — deploy time from ~30min to under 2min.',
      'exp.deepesg.b3':   'Built a task scheduling system with Google Pub/Sub and Cloud Scheduler, processing ~300 monthly tasks.',
      'exp.deepesg.b4':   'Refactored the company management module for multitenancy — company creation from ~1h to under 5min.',
      'exp.deepesg.b5':   'Multi-tab XLSX/CSV export for emissions data supporting 28 categories and 40+ branches.',
      'exp.deepesg.b6':   'DB-managed i18n with 3 languages, eliminating redeploys for translation updates.',
      'exp.deepesg.b7':   'Migrated 10+ Vue 2 components to Vue 3 and documented new components in Storybook.',
      'exp.alpha.role':   'Fullstack Development Teaching Assistant',
      'exp.alpha.desc':   'Mentored students throughout the fullstack program, conducting Q&A sessions and technical support covering programming logic, JavaScript, React, Node.js, PostgreSQL, and Redis.',

      'projects.title':       'Projects',
      'projects.coming-soon': 'Coming soon',
      'projects.view-repo':   'View repository \u2192',
      'projects.pong.title':  'Pong Game',
      'projects.pong.desc':   'Classic Pong game running in the browser, built with vanilla JavaScript and Canvas API.',
      'projects.dnd.title':   'DnD 5e Character Creator',
      'projects.dnd.desc':    'Visual character creator for D&D 5e — choose race, class, attributes and generate your character sheet interactively.',
      'projects.jobfit.title':      'Job Fit Check',
      'projects.jobfit.desc':       'Full-stack job-fit analysis platform. Scrapes listings with Playwright, processes resumes through a BullMQ queue, and scores compatibility using a local LLM.',
      'projects.notebookrag.title': 'NotebookRAG',
      'projects.notebookrag.desc':  'RAG-powered document chat app. Upload PDFs, Markdown, Word docs, and plain text to chat with your documents using a local LLM — no cloud, no API keys, fully private.',

      'contact.title':    'Contact',
      'contact.subtitle': "Let's work together? Get in touch.",
      'contact.email':    'felype.nasc@hotmail.com',
      'contact.linkedin': 'felype-nascimento',

      'footer.rights': 'All rights reserved.',
      'footer.email':  'Email',
    },
  };

  // ══════════════════════════════════════════════════════════════
  //  LANGUAGE
  // ══════════════════════════════════════════════════════════════
  var currentLang = localStorage.getItem('lang') || 'pt';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    document.documentElement.lang = lang;

    var dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    var label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'pt' ? 'EN' : 'PT';

    // Reset typing for new language
    restartTyping();
  }

  var langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  THEME
  // ══════════════════════════════════════════════════════════════
  var isDark = localStorage.getItem('theme') !== 'light';

  function applyTheme(dark) {
    isDark = dark;
    document.body.classList.toggle('light-theme', !dark);
    var icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = dark ? '\u2600' : '\u263D'; // sun : moon
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(!isDark);
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  MOBILE MENU
  // ══════════════════════════════════════════════════════════════
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  NAVBAR SCROLL STATE
  // ══════════════════════════════════════════════════════════════
  var header = document.getElementById('header');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 60);
    updateScrollSpy();
    updateParallax();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ══════════════════════════════════════════════════════════════
  //  SCROLL SPY
  // ══════════════════════════════════════════════════════════════
  var sections = Array.from(document.querySelectorAll('section[id]'));
  var navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  function updateScrollSpy() {
    var scrollY = window.scrollY + 80;
    var current = '';

    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  PARALLAX (Experience section)
  // ══════════════════════════════════════════════════════════════
  var parallaxBg  = document.getElementById('parallax-bg');
  var expSection  = document.getElementById('experiencia');

  function updateParallax() {
    if (!parallaxBg || !expSection) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var rect     = expSection.getBoundingClientRect();
    var viewH    = window.innerHeight;
    // Only apply when section is in view
    if (rect.bottom < 0 || rect.top > viewH) return;

    var progress = 1 - (rect.top + rect.height) / (viewH + rect.height);
    var offset   = (progress - 0.5) * 80; // max ±40px
    parallaxBg.style.transform = 'translateY(' + offset + 'px)';
  }

  // ══════════════════════════════════════════════════════════════
  //  INTERSECTION OBSERVER — REVEAL ANIMATIONS
  // ══════════════════════════════════════════════════════════════
  var revealObs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObs.observe(el);
  });

  // ══════════════════════════════════════════════════════════════
  //  TYPING EFFECT
  // ══════════════════════════════════════════════════════════════
  var typingStrings = {
    pt: ['Fullstack Software Engineer', 'Desenvolvedor Backend', 'Node.js \u00b7 NestJS \u00b7 TypeScript'],
    en: ['Fullstack Software Engineer', 'Backend Developer',    'Node.js \u00b7 NestJS \u00b7 TypeScript'],
  };

  var typingTarget = document.getElementById('typing-target');
  var typingIdx  = 0;
  var charIdx    = 0;
  var isDeleting = false;
  var typingTimer = null;

  function typeStep() {
    if (!typingTarget) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      typingTarget.textContent = typingStrings[currentLang][0];
      return;
    }

    var strings = typingStrings[currentLang];
    var current = strings[typingIdx % strings.length];

    if (isDeleting) {
      typingTarget.textContent = current.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typingTarget.textContent = current.substring(0, charIdx + 1);
      charIdx++;
    }

    var delay = isDeleting ? 45 : 95;

    if (!isDeleting && charIdx === current.length) {
      delay = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      typingIdx++;
      delay = 450;
    }

    typingTimer = setTimeout(typeStep, delay);
  }

  function restartTyping() {
    clearTimeout(typingTimer);
    if (typingTarget) typingTarget.textContent = '';
    charIdx    = 0;
    isDeleting = false;
    typeStep();
  }

  // ══════════════════════════════════════════════════════════════
  //  3D TILT ON PROJECT CARDS
  // ══════════════════════════════════════════════════════════════
  document.querySelectorAll('.tilt-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      var rect    = card.getBoundingClientRect();
      var x       = e.clientX - rect.left;
      var y       = e.clientY - rect.top;
      var cx      = rect.width  / 2;
      var cy      = rect.height / 2;
      var rotX    = ((y - cy) / cy) * -7;
      var rotY    = ((x - cx) / cx) *  7;

      card.style.transform =
        'perspective(900px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) translateY(-4px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // ══════════════════════════════════════════════════════════════
  //  FOOTER YEAR
  // ══════════════════════════════════════════════════════════════
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ══════════════════════════════════════════════════════════════
  //  INIT
  // ══════════════════════════════════════════════════════════════
  applyTheme(isDark);
  setLanguage(currentLang);
  onScroll();
  typeStep();

}());
