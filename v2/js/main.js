/* GOLBERT: The Series
 * All site content lives in SITE below. Edit it here; the sections render from it.
 */

var V = "https://www.coursera.org/account/accomplishments/verify/";
var S = "https://www.coursera.org/account/accomplishments/specialization/";

var SITE = {
  person: {
    fullName: "Golbert Gautier Kamanzi",
    shortName: "Golbert Kamanzi",
    headline: "Software Engineering Student | Full-Stack & Cloud",
    city: "Kigali, Rwanda",
    cityTag: "Kigali, RW",
    phone: "+250 783 363 830",
    phoneHref: "tel:+250783363830",
    email: "kamanzigolbert@gmail.com",
    github: "https://github.com/kamanzi2025",
    linkedin: "https://www.linkedin.com/in/kamanzi-gautier-golbert-06b6b6360/",
    resume: "assets/Golbert-Kamanzi-Resume.pdf",
    // TODO: add a waist-up photo on a dark background, e.g. "assets/golbert.jpg". Until then a monogram shows.
    photo: "",
    photoAlt: "Golbert Gautier Kamanzi, waist-up portrait",
    summary: "Bachelor of Software Engineering student at African Leadership University specialising in full-stack development, with academic training in front-end and back-end development, cloud technologies, databases, APIs and algorithms, and hands-on work in Python (FastAPI), JavaScript and React. Supported by professional certifications in software engineering, Python programming, cloud computing, cybersecurity and identity & access management (Azure AD and AWS IAM), plus Google and Microsoft IT Support. Strong analytical thinking, attention to detail and communication skills. Seeking an internship or junior role in software development, cloud, or IT support.",
    synopsis: "A Software Engineering student at African Leadership University builds full-stack apps for farmers, students, landlords and local businesses, while earning credentials in cloud, identity & access management and IT support. Now seeking an internship or junior role.",
    education: [
      { school: "African Leadership University, Kigali, Rwanda", when: "Sep 2024 – Present",
        detail: "Bachelor of Software Engineering (BSc), majoring in Full-Stack Software Engineering. Front-end and back-end development, databases, APIs and cloud technologies, with a strong foundation in algorithms and data structures." },
      { school: "Nu-Vision High School, Kigali, Rwanda", when: "Sep 2018 – Aug 2021",
        detail: "High School Diploma in Mathematics, Economics and Computer Science: Rwanda Advanced Certificate of Education (NESA, 2021)." }
    ],
    leadership: "Club President, Nu-Vision High School. Led the club and organised annual outreach initiatives to support less fortunate communities, building leadership and community engagement alongside technical training.",
    softSkills: ["Active listening", "Problem-solving", "Empathy & customer focus", "Working under pressure", "Adaptability & flexibility", "Time management", "Teamwork & collaboration", "Conflict resolution", "Attention to detail", "Quick learning", "Working independently"],
    skillLines: [
      ["Programming & development", "Python (FastAPI), JavaScript, React, TypeScript, SQL, Dart"],
      ["Frameworks & tools", "Next.js, Node.js / Express, Flutter, Tailwind CSS, Git, REST APIs"],
      ["Databases", "MySQL, Oracle, Supabase, Firebase"],
      ["Cloud & security", "Azure, AWS, Identity & Access Management (Azure AD / Entra ID, AWS IAM), authentication, secure networking"],
      ["IT support", "Troubleshooting, system administration basics, customer support"],
      ["Core concepts", "Algorithms, data structures, problem solving"]
    ],
    languages: "Kinyarwanda (native) · English (professional) · French (conversational)",
    languageCount: 3
  },

  profiles: [
    { id: "golbert", name: "Golbert", glyph: "G", grad: "grad-red", badge: "MAIN",
      hint: "The full series, in order", kicker: "A GOLBERT ORIGINAL SERIES",
      order: ["continue", "story", "moments", "certs", "skills", "originals", "journey", "picks"] },
    { id: "recruiter", name: "Recruiter", glyph: "R", grad: "grad-blue",
      hint: "Résumé, achievements & skills first", kicker: "RECRUITER'S CUT · RÉSUMÉ FIRST",
      order: ["continue", "story", "certs", "moments", "skills", "picks", "originals", "journey"] },
    { id: "developer", name: "Developer", glyph: "</>", glyphClass: "is-code", grad: "grad-green",
      hint: "Projects, stack & certificates first", kicker: "DEVELOPER'S CUT · CODE FIRST",
      order: ["continue", "originals", "skills", "certs", "journey", "story", "moments", "picks"] },
    { id: "creative", name: "Creative", glyph: "✦", glyphClass: "is-star", grad: "grad-amber",
      hint: "The story as a highlight reel", kicker: "THE HIGHLIGHT REEL",
      order: ["continue", "picks", "journey", "moments", "originals", "skills", "certs", "story"] }
  ],

  episodes: [
    { n: "01", title: "The Full Story", sub: "Résumé · education & leadership", progress: 100, href: "#story" },
    { n: "02", title: "My Projects", sub: "What I have built", progress: 60, href: "#projects" },
    { n: "03", title: "My Journey", sub: "Four seasons, 2018 – now", progress: 80, href: "#journey" },
    { n: "04", title: "Certificates", sub: "24 verified credentials", progress: 100, href: "#certificates" },
    { n: "05", title: "Contact", sub: "The next episode", progress: 20, href: "#contact" }
  ],

  // Certificate groups, as on the résumé. All certificates are issued through Coursera.
  certGroups: [
    { id: "pro", name: "Professional Certificates" },
    { id: "swe", name: "Software Engineering & Cloud" },
    { id: "sec", name: "Cybersecurity & IAM" },
    { id: "it", name: "IT Support & Systems" },
    { id: "career", name: "Career Development" }
  ],
  certPlatform: "Coursera",

  certs: [
    { id: "google-it", group: "pro", title: "Google IT Support Professional Certificate", issuer: "Google", date: "Jun 2026", url: S + "O23C2CTT575K", professional: true },
    { id: "ms-it", group: "pro", title: "Microsoft IT Support Specialist Professional Certificate", issuer: "Microsoft", date: "Jun 2026", url: S + "WUR37UQVG017", professional: true },
    { id: "ibm-se", group: "swe", title: "Introduction to Software Engineering", issuer: "IBM", date: "Nov 2025", url: V + "C586UUUD67L2" },
    { id: "ibm-cloud", group: "swe", title: "Introduction to Cloud Computing", issuer: "IBM", date: "Nov 2025", url: V + "UE1XVZ0TEEF1" },
    { id: "meta-apis", group: "swe", title: "APIs", issuer: "Meta", date: "Sep 2026", url: V + "7RA0YOAKPDD2" },
    { id: "ibm-flutter", group: "swe", title: "Flutter and Dart: Developing iOS, Android, and Mobile Apps", issuer: "IBM", date: "Jun 2026", url: V + "EDIPBMI09ZZT" },
    { id: "cfi-python", group: "swe", title: "Python Fundamentals", issuer: "Corporate Finance Institute", date: "Nov 2025", url: V + "QXDYUFT7WYP1" },
    { id: "ms-azure-ad", group: "sec", title: "Secure Access with Azure Active Directory", issuer: "Microsoft", date: "Nov 2025", url: V + "P4GCERXW7YEP", iam: true },
    { id: "wl-azure-iam", group: "sec", title: "Azure: Identity and Access Management", issuer: "Whizlabs", date: "Nov 2025", url: V + "GQYLIQROUVPA", iam: true },
    { id: "wl-aws-iam", group: "sec", title: "AWS: Identity and Access Management", issuer: "Whizlabs", date: "Nov 2025", url: V + "NF7J1XE9FKMV", iam: true },
    { id: "packt-iam", group: "sec", title: "Identity and Access Management (IAM)", issuer: "Packt", date: "Nov 2025", url: V + "RGCIM53OBLRG", iam: true },
    { id: "mq-iam", group: "sec", title: "Cyber Security: Identity Access Management and Authentication", issuer: "Macquarie University", date: "Nov 2025", url: V + "7BCCDB2M9EEJ", iam: true },
    { id: "google-sec", group: "sec", title: "IT Security: Defense against the Digital Dark Arts", issuer: "Google", date: "Jun 2026", url: V + "EZG7AR58QHTA" },
    { id: "ms-cyber", group: "sec", title: "Cybersecurity and Privacy", issuer: "Microsoft", date: "Jun 2026", url: V + "JZN8XIS55WPC" },
    { id: "ms-net", group: "sec", title: "Introduction to Secure Networking", issuer: "Microsoft", date: "Jun 2026", url: V + "NVDH0K9X6IGW" },
    { id: "google-tsf", group: "it", title: "Technical Support Fundamentals", issuer: "Google", date: "Jun 2026", url: V + "VR11VSOCAWJZ" },
    { id: "google-net", group: "it", title: "The Bits and Bytes of Computer Networking", issuer: "Google", date: "Jun 2026", url: V + "6F4X1HNZD5LD" },
    { id: "google-os", group: "it", title: "Operating Systems and You: Becoming a Power User", issuer: "Google", date: "Jun 2026", url: V + "EVVD3WX7JXN6" },
    { id: "google-sysadmin", group: "it", title: "System Administration and IT Infrastructure Services", issuer: "Google", date: "Jun 2026", url: V + "8IQMBBE74X9E" },
    { id: "ms-computers", group: "it", title: "Introduction to Computers", issuer: "Microsoft", date: "Jun 2026", url: V + "45XKEEVJANGD" },
    { id: "ms-backup", group: "it", title: "Essential Aspects of Software, Hardware, and Data Backup", issuer: "Microsoft", date: "Jun 2026", url: V + "86BUUUSL5NS8" },
    { id: "ms-diag", group: "it", title: "Technical Diagnostics and Troubleshooting Techniques", issuer: "Microsoft", date: "Jun 2026", url: V + "BJL1GOCDQC0W" },
    { id: "ms-365", group: "it", title: "The Microsoft 365 Ecosystem", issuer: "Microsoft", date: "Jun 2026", url: V + "VCQUCIMQNSJG" },
    { id: "google-ai-job", group: "career", title: "Accelerate Your Job Search with AI", issuer: "Google", date: "Jun 2026", url: V + "9COICEUF3O4R" }
  ],

  // cert: links to that certificate; href: links inside the page
  moments: [
    { kind: "PROFESSIONAL", title: "Google IT Support", note: "Professional Certificate · Jun 2026", cert: "google-it" },
    { kind: "PROFESSIONAL", title: "Microsoft IT Support Specialist", note: "Professional Certificate · Jun 2026", cert: "ms-it" },
    { kind: "SPECIALTY", title: "IAM on Azure & AWS", note: "8 security & identity certificates", href: "#certificates" },
    { kind: "LEADERSHIP", title: "Club President", note: "Nu-Vision High School · yearly community outreach", href: "#story" },
    { kind: "ADMITTED", title: "African Leadership University", note: "BSc Software Engineering · 2024", href: "#journey" }
  ],

  genres: [
    { id: "languages", name: "Languages", skills: [
      ["Py", "Python", "FastAPI back ends · CFI Python Fundamentals"],
      ["JS", "JavaScript", "React front ends and Node.js services"],
      ["TS", "TypeScript", "AgriSmart and Apartment Manager"],
      ["SQL", "SQL", "Queries and schema design for MySQL and Oracle"],
      ["Dt", "Dart", "IBM Flutter & Dart certificate · LaunchPad app"]
    ] },
    { id: "frontend", name: "Frontend", skills: [
      ["Re", "React", "AgriSmart, CaféCampus, AutoParts, Sand Supply"],
      ["Fl", "Flutter", "LaunchPad, with Riverpod state management"],
      ["Nx", "Next.js", "Apartment Manager landlord & tenant portal"],
      ["TW", "Tailwind CSS", "Styling across most of my web apps"],
      ["PWA", "Progressive web apps", "Offline-first AutoParts Store Manager"]
    ] },
    { id: "backend", name: "Backend", skills: [
      ["FA", "FastAPI", "Python APIs"],
      ["API", "REST APIs", "Meta APIs certificate · designing and consuming APIs"],
      ["ND", "Node.js & Express", "AgriSmart, CaféCampus, Sand Supply back ends"],
      ["PR", "Prisma", "ORM for AgriSmart and CaféCampus"],
      ["WS", "WebSockets", "Live orders in CaféCampus with Socket.io"],
      ["Git", "Git & GitHub Actions", "Version control and CI"]
    ] },
    { id: "cloud", name: "Cloud & Security", tag: "my specialty", skills: [
      ["Az", "Azure", "Secure Access with Azure AD · Azure IAM"],
      ["AWS", "AWS", "AWS Identity and Access Management"],
      ["IAM", "Identity & Access", "Azure AD / Entra ID, AWS IAM, authentication · 5 IAM certificates"],
      ["NET", "Secure Networking", "Microsoft secure networking · Google networking & IT security"],
      ["CL", "Cloud computing", "IBM Introduction to Cloud Computing"],
      ["DEP", "Vercel & Render", "Where my apps are deployed"]
    ] },
    { id: "databases", name: "Databases", skills: [
      ["MY", "MySQL", "Relational design and SQL"],
      ["ORA", "Oracle", "Relational databases coursework"],
      ["SB", "Supabase", "AutoParts sync and Apartment Manager"],
      ["FB", "Firebase", "Auth and Firestore for LaunchPad"]
    ] },
    { id: "soft", name: "Soft Skills", skills: [
      ["AL", "Active listening", "Understanding the real problem first"],
      ["PS", "Problem-solving", "Breaking problems into clear steps"],
      ["EM", "Empathy & customer focus", "Core to IT support work"],
      ["UP", "Working under pressure", "Calm with deadlines and outages"],
      ["AD", "Adaptability & flexibility", "Picking up new stacks and roles"],
      ["TM", "Time management", "Studies, certificates and client work together"],
      ["TW", "Teamwork & collaboration", "ALU group projects and club leadership"],
      ["CR", "Conflict resolution", "Keeping teams moving forward"],
      ["AT", "Attention to detail", "Accounts, VAT reports and access rules"],
      ["QL", "Quick learning", "24 certificates in under a year"],
      ["IN", "Working independently", "Six apps designed and built solo"]
    ] },
    { id: "cs", name: "CS Fundamentals", skills: [
      ["ALG", "Algorithms", "ALU coursework"],
      ["DS", "Data Structures", "ALU coursework"],
      ["PS", "Problem Solving", "Breaking real business problems into software"],
      ["IT", "IT Support", "Troubleshooting, system administration basics, customer support"]
    ] }
  ],

  // live: main demo link · portals: extra apps, shown in the Journey episodes (and on the poster if portalsOnPoster)
  // image: optional screenshot in assets/projects/ (TODO: Sand Supply and LaunchPad have none yet)
  projects: [
    { title: "AgriSmart", type: "Web & mobile app", color: "poster-green",
      desc: "Planting, watering and pest advice for East African bean farmers, from live local weather.",
      tags: ["React", "TypeScript", "Node.js", "Expo"],
      live: "https://agrismart-seven.vercel.app", code: "https://github.com/kamanzi2025/Agrismart", image: "assets/projects/agrismart.jpg" },
    { title: "CaféCampus", type: "Web platform", color: "poster-orange",
      desc: "Campus food ordering across several restaurants, with live orders and loyalty points.",
      tags: ["React", "Socket.io", "Prisma"],
      live: "https://cafecampus.org.rw/", code: "https://github.com/kamanzi2025/school-cafeteria", image: "assets/projects/cafecampus.jpg",
      portals: [["Student app", "https://cafecampus.org.rw/"], ["Restaurant portal", "https://restaurant.cafecampus.org.rw/"]] },
    { title: "AutoParts Store Manager", type: "Web app", client: true, color: "poster-blue",
      desc: "Sales, stock and accounting for an auto parts shop. Installs like an app and works offline.",
      tags: ["React", "PWA", "Supabase"],
      live: "https://autoparts-manager-t1zb.onrender.com/", code: "https://github.com/kamanzi2025/brian-", image: "assets/projects/autoparts.jpg" },
    { title: "Sand Supply Manager", type: "Web app", client: true, color: "poster-purple",
      desc: "Orders, customers and VAT reports for a sand supply business, replacing paper records.",
      tags: ["React", "Express", "libSQL"],
      live: "", code: "https://github.com/kamanzi2025/sand-business-management-", image: "" },
    { title: "Apartment Manager", type: "Web platform", color: "poster-blue",
      desc: "A landlord and tenant portal for units, rent, expenses, requests and messaging.",
      tags: ["Next.js", "TypeScript", "Supabase"],
      live: "https://apartment-manager-landlord.onrender.com/landlord", code: "https://github.com/kamanzi2025/realestate-management-", image: "assets/projects/apartment.jpg",
      portals: [["Landlord portal", "https://apartment-manager-landlord.onrender.com/landlord"], ["Tenant portal", "https://apartment-manager-tenant.onrender.com/"]], portalsOnPoster: true },
    { title: "LaunchPad", type: "Mobile app", color: "poster-orange",
      desc: "Matches ALU students with internships at student-led startups.",
      tags: ["Flutter", "Dart", "Firebase"],
      live: "", code: "https://github.com/kamanzi2025/flutter_formative", image: "" }
  ],

  seasons: [
    { n: 1, name: "The Beginning", years: "2018 – 2021", episodes: [
      { date: "2018–21", color: "art-1", title: "Nu-Vision High School", desc: "High School Diploma in Mathematics, Economics and Computer Science (Sep 2018 – Aug 2021). Where I discovered programming." },
      { date: "2018–21", color: "art-4", title: "Club President", desc: "Led the club and organised yearly outreach for less fortunate communities." }
    ] },
    { n: 2, name: "Leveling Up", years: "2024", episodes: [
      { date: "Sep 2024", color: "art-2", title: "Joined African Leadership University", desc: "BSc Software Engineering, full-stack track." }
    ] },
    { n: 3, name: "Cloud & Security", years: "2025", episodes: [
      { date: "Nov 2025", color: "art-3", title: "IAM certificates for Azure & AWS", desc: "Identity and access management from Microsoft, Whizlabs, Packt and Macquarie University." },
      { date: "Nov 2025", color: "art-5", title: "IBM Software Engineering & Cloud Computing", desc: "Introduction to Software Engineering and Introduction to Cloud Computing." }
    ] },
    { n: 4, name: "Building Real Products", years: "2026", episodes: [
      { date: "Jun 2026", color: "art-4", title: "Two professional certificates", desc: "Google IT Support and Microsoft IT Support Specialist." },
      { date: "Sep 2026", color: "art-2", title: "Meta APIs certificate", desc: "Earned while building full-stack projects." },
      { date: "2026", color: "art-3", title: "AgriSmart", desc: "Weather-driven advice for bean farmers, on web and mobile.", project: "AgriSmart" },
      { date: "2026", color: "art-1", title: "CaféCampus", desc: "Multi-restaurant food ordering for a school campus.", project: "CaféCampus" },
      { date: "2026", color: "art-5", title: "AutoParts Store Manager", desc: "Offline-first sales, stock and accounting for an auto parts shop.", project: "AutoParts Store Manager", client: true },
      { date: "2026", color: "art-4", title: "Sand Supply Manager", desc: "Orders, customers and VAT reports for a sand supply business.", project: "Sand Supply Manager", client: true },
      { date: "2026", color: "art-2", title: "Apartment Manager", desc: "A portal connecting landlords and tenants.", project: "Apartment Manager" },
      { date: "2026", color: "art-3", title: "LaunchPad", desc: "A Flutter app matching ALU students with startup internships.", project: "LaunchPad" }
    ] }
  ],
  defaultSeason: 4,

  picks: [
    { title: "Google IT Support", cert: "google-it", color: "poster-blue" },
    { title: "Microsoft IT Support", cert: "ms-it", color: "poster-green" },
    { title: "AWS: IAM", cert: "wl-aws-iam", color: "poster-orange" },
    { title: "Azure Active Directory", cert: "ms-azure-ad", color: "poster-purple" },
    { title: "APIs (Meta)", cert: "meta-apis", color: "poster-blue" }
  ]
};

/* ---------------------------------------------------------------- */

(function () {
  "use strict";

  var KEY_INTRO = "golbert.introSeen";
  var KEY_PROFILE = "golbert.profile";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function store(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { return null; }
    return null;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function certById(id) { return SITE.certs.filter(function (c) { return c.id === id; })[0]; }
  function ext(href) { return /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ""; }

  var TROPHY = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>';

  /* ---------- Section components ---------- */

  function head(title, kicker, gold) {
    return '<div class="block-head">' +
      '<h2 class="block-title">' + title + "</h2>" +
      (kicker ? '<p class="kicker' + (gold ? " gold" : "") + '">' + esc(kicker) + "</p>" : "") +
      "</div>";
  }
  function row(label, items) {
    return '<div class="row" data-row>' +
      '<button type="button" class="row-arrow prev" tabindex="-1" aria-hidden="true">‹</button>' +
      '<ul class="row-track" aria-label="' + esc(label) + '">' + items + "</ul>" +
      '<button type="button" class="row-arrow next" tabindex="-1" aria-hidden="true">›</button>' +
      "</div>";
  }
  function li(inner, cls) { return '<li class="' + (cls || "") + '">' + inner + "</li>"; }

  var SECTIONS = {
    "continue": function () {
      var items = SITE.episodes.map(function (e, i) {
        return li('<a class="tile episode" href="' + e.href + '">' +
          '<div class="episode-art art-' + (i % 5 + 1) + '">' +
            '<span class="episode-num">EPISODE ' + e.n + "</span>" +
            '<span class="episode-title">' + esc(e.title) + "</span>" +
            '<span class="episode-sub">' + esc(e.sub) + "</span>" +
          "</div>" +
          '<div class="progress" aria-hidden="true"><span style="width:' + e.progress + '%"></span></div>' +
          "</a>");
      }).join("");
      return { id: "continue", html: head("Continue Exploring") + row("Episodes", items) };
    },

    story: function () {
      var p = SITE.person;
      var edu = p.education.map(function (e) {
        return '<div class="edu-row"><strong>' + esc(e.school) + '</strong><span class="when">' + esc(e.when) + "</span><p>" + esc(e.detail) + "</p></div>";
      }).join("");
      var skills = p.skillLines.map(function (s) { return "<li><b>" + esc(s[0]) + ":</b> " + esc(s[1]) + "</li>"; }).join("");
      var profCount = SITE.certs.filter(function (c) { return c.professional; }).length;
      var certGroupLines = SITE.certGroups.map(function (g) {
        var list = SITE.certs.filter(function (c) { return c.group === g.id; });
        return "<li><b>" + esc(g.name) + " (" + list.length + "):</b> " + list.map(function (c) { return esc(c.title) + " – " + esc(c.issuer); }).join("; ") + "</li>";
      }).join("");
      var html = head("The Full Story", "— THE SCREENPLAY") +
        '<div class="block-body story">' +
          '<article class="card resume" aria-label="Résumé">' +
            "<header>" +
              '<h3 class="resume-name">' + esc(p.fullName) + "</h3>" +
              '<p class="resume-headline">' + esc(p.headline) + "</p>" +
              '<p class="resume-contact">' + esc(p.city) + ' · <a href="' + p.phoneHref + '">' + esc(p.phone) + '</a> · <a href="mailto:' + p.email + '">' + esc(p.email) + "</a></p>" +
            "</header>" +
            '<p class="resume-summary">' + esc(p.summary) + "</p>" +
            "<section><h4>EDUCATION</h4><div class=\"edu\">" + edu + "</div></section>" +
            '<section><h4>LEADERSHIP</h4><p class="resume-summary">' + esc(p.leadership) + "</p></section>" +
            '<section><h4>TECHNICAL SKILLS</h4><ul class="skill-lines">' + skills + "</ul></section>" +
            '<section><h4>CERTIFICATIONS</h4><ul class="skill-lines">' + certGroupLines + '</ul><p class="resume-note">All ' + SITE.certs.length + ' verified through ' + esc(SITE.certPlatform) + '. <a href="#certificates">See every certificate</a></p></section>' +
            '<section><h4>LANGUAGES</h4><p class="resume-summary">' + esc(p.languages) + "</p></section>" +
            '<section><h4>SOFT SKILLS</h4><ul class="soft-list">' + p.softSkills.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>" +
          "</article>" +
          '<aside class="card story-side">' +
            "<h3>Every episode, one page.</h3>" +
            "<p>Education, leadership, skills and certificates on a single printable page.</p>" +
            '<div class="story-actions">' +
              '<a class="btn btn-red" href="' + esc(p.resume) + '" target="_blank" rel="noopener">Download Résumé (PDF)</a>' +
              '<a class="btn btn-grey" href="#contact">Contact me</a>' +
            "</div>" +
            '<div class="stats">' +
              '<div class="stat"><b>' + SITE.certs.length + "</b><span>Certificates</span></div>" +
              '<div class="stat"><b>' + profCount + "</b><span>Professional</span></div>" +
              '<div class="stat"><b>' + p.languageCount + "</b><span>Languages</span></div>" +
            "</div>" +
          "</aside>" +
        "</div>";
      return { id: "story", html: html };
    },

    moments: function () {
      var items = SITE.moments.map(function (m) {
        var href = m.cert ? certById(m.cert).url : m.href;
        return li('<a class="tile award" href="' + esc(href) + '"' + ext(href) + ">" +
          TROPHY +
          '<span class="award-kind">' + esc(m.kind) + "</span>" +
          '<span class="award-title">' + esc(m.title) + "</span>" +
          '<span class="award-note">' + esc(m.note) + "</span>" +
          "</a>");
      }).join("");
      return { id: "moments", html: head("Top Moments", "— AWARD SEASON", true) + row("Top moments", items) };
    },

    certs: function () {
      var chips = [{ id: "all", name: "All" }].concat(SITE.certGroups).map(function (g, i) {
        var n = g.id === "all" ? SITE.certs.length : SITE.certs.filter(function (c) { return c.group === g.id; }).length;
        return '<button type="button" class="chip" data-group="' + g.id + '" aria-pressed="' + (i === 0) + '">' + esc(g.name) + " <span>" + n + "</span></button>";
      }).join("");
      var html = head("Certified · " + SITE.certs.length + " credentials") +
        '<div class="block-body cert-filters" role="group" aria-label="Filter certificates by group">' + chips + "</div>" +
        row("Certificates", certItems("all"));
      return { id: "certificates", html: html, init: initCerts };
    }
  };

  function certItems(group) {
      return SITE.certs.filter(function (c) { return group === "all" || c.group === group; }).map(function (c) {
        return li('<a class="tile cert" href="' + esc(c.url) + '" target="_blank" rel="noopener" aria-label="' + esc(c.title + ", " + c.issuer + ", " + c.date + ". Verify (opens in a new tab)") + '">' +
          '<span class="cert-top"><span class="cert-issuer">' + esc(c.issuer) + '</span><span class="cert-arrow" aria-hidden="true">↗</span></span>' +
          '<span class="cert-title">' + esc(c.title) + "</span>" +
          '<span class="cert-foot">' + esc(c.date) + " · " + esc(SITE.certPlatform) + " · <span>Verify</span></span>" +
          "</a>");
      }).join("");
  }

  function initCerts(section) {
    var track = $(".row-track", section);
    var chips = $all(".chip", section);
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.setAttribute("aria-pressed", c === chip); });
        track.innerHTML = certItems(chip.getAttribute("data-group"));
        track.scrollLeft = 0;
        track.dispatchEvent(new Event("scroll"));
      });
    });
  }

  var SECTIONS_REST = {

    skills: function () {
      var tabs = SITE.genres.map(function (g, i) {
        return '<button type="button" class="genre-tab" role="tab" id="genre-tab-' + g.id + '" aria-controls="genre-panel" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" data-genre="' + i + '">' +
          esc(g.name) + (g.tag ? "<small>" + esc(g.tag) + "</small>" : "") + "</button>";
      }).join("");
      var html = head("My Skill Universe", "— GENRES") +
        '<div class="block-body skills">' +
          '<div class="genre-tabs" role="tablist" aria-label="Skill genres" aria-orientation="vertical">' + tabs + "</div>" +
          '<div class="skill-grid" id="genre-panel" role="tabpanel" tabindex="0" aria-labelledby="genre-tab-' + SITE.genres[0].id + '"></div>' +
        "</div>";
      return { id: "skills", html: html, init: initSkills };
    },

    originals: function () {
      var items = SITE.projects.map(function (p) {
        var main = p.live || p.code;
        var shot = p.image ? '<span class="poster-shot" style="background-image:url(\'' + esc(p.image) + '\')" aria-hidden="true"></span>' : "";
        var tags = (p.client ? '<span class="client">Client project</span>' : "") +
          p.tags.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
        var label = p.title + ". " + p.desc + (p.live ? " Live demo" : " Code on GitHub") + ", opens in a new tab";
        return li(
          '<a class="tile poster ' + p.color + (p.image ? " has-shot" : "") + '" href="' + esc(main) + '" target="_blank" rel="noopener" aria-label="' + esc(label) + '">' +
            shot +
            '<span class="poster-badge"><b>G</b>ORIGINAL</span>' +
            '<span class="poster-bottom">' +
              '<span class="poster-tags">' + tags + "</span>" +
              '<span class="poster-title">' + esc(p.title) + "</span>" +
              '<span class="poster-desc">' + esc(p.desc) + "</span>" +
              '<span class="poster-links"><span>' + (p.portalsOnPoster ? esc(p.portals[0][0]) + " ↗" : p.live ? "Live demo ↗" : "View code ↗") + "</span></span>" +
            "</span>" +
          "</a>" +
          (p.live ? '<span class="poster-actions">' +
            (p.portalsOnPoster ? p.portals.slice(1).map(function (l) {
              return '<a class="poster-code" href="' + esc(l[1]) + '" target="_blank" rel="noopener" aria-label="' + esc(p.title + " " + l[0]) + ', opens in a new tab">' + esc(l[0]) + " ↗</a>";
            }).join("") : "") +
            '<a class="poster-code" href="' + esc(p.code) + '" target="_blank" rel="noopener" aria-label="' + esc(p.title) + ' code on GitHub">Code ↗</a></span>' : ""),
          "poster-wrap");
      }).join("");
      return { id: "projects", html: head("Golbert Originals · Projects") + row("Projects", items) };
    },

    journey: function () {
      var tabs = SITE.seasons.map(function (s) {
        var on = s.n === SITE.defaultSeason;
        return '<button type="button" class="season-tab" role="tab" id="season-tab-' + s.n + '" aria-controls="season-panel" aria-selected="' + on + '" tabindex="' + (on ? 0 : -1) + '" data-season="' + s.n + '">Season ' + s.n + "</button>";
      }).join("");
      var html = head("My Journey", "— " + SITE.seasons.length + " SEASONS") +
        '<div class="block-body">' +
          '<div class="season-tabs" role="tablist" aria-label="Seasons">' + tabs + "</div>" +
          '<div id="season-panel" role="tabpanel" tabindex="0" aria-labelledby="season-tab-' + SITE.defaultSeason + '"></div>' +
        "</div>";
      return { id: "journey", html: html, init: initJourney };
    },

    picks: function () {
      var items = SITE.picks.map(function (p, i) {
        var c = certById(p.cert);
        return li('<a class="pick" href="' + esc(c.url) + '" target="_blank" rel="noopener" aria-label="' + esc("Number " + (i + 1) + ": " + c.title + ", " + c.issuer + ". Opens in a new tab") + '">' +
          '<span class="pick-num" aria-hidden="true">' + (i + 1) + "</span>" +
          '<span class="pick-poster ' + p.color + '">' +
            '<span class="poster-badge"><b>G</b>PICK</span>' +
            '<span><span class="pick-title">' + esc(p.title) + '</span><span class="pick-issuer">' + esc(c.issuer) + "</span></span>" +
          "</span>" +
          "</a>");
      }).join("");
      return { id: "picks", html: head("Golbert's Top Picks") + row("Top picks", items) };
    }
  };

  Object.keys(SECTIONS_REST).forEach(function (k) { SECTIONS[k] = SECTIONS_REST[k]; });

  /* ---------- Tabs ---------- */

  function tablist(list, onSelect, vertical) {
    var tabs = $all('[role="tab"]', list);
    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
      });
      if (focus) tab.focus();
      onSelect(tab);
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab, false); });
      tab.addEventListener("keydown", function (e) {
        var prev = vertical ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"];
        var next = vertical ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"];
        var to = null;
        if (next.indexOf(e.key) > -1) to = tabs[(i + 1) % tabs.length];
        else if (prev.indexOf(e.key) > -1) to = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === "Home") to = tabs[0];
        else if (e.key === "End") to = tabs[tabs.length - 1];
        if (to) { e.preventDefault(); select(to, true); }
      });
    });
    var current = tabs.filter(function (t) { return t.getAttribute("aria-selected") === "true"; })[0] || tabs[0];
    onSelect(current);
  }

  function initSkills(section) {
    var panel = $("#genre-panel", section);
    tablist($(".genre-tabs", section), function (tab) {
      var g = SITE.genres[+tab.getAttribute("data-genre")];
      panel.setAttribute("aria-labelledby", tab.id);
      panel.innerHTML = g.skills.map(function (s) {
        return '<div class="skill"><span class="skill-icon" aria-hidden="true">' + esc(s[0]) + "</span><div><h4>" + esc(s[1]) + "</h4><p>" + esc(s[2]) + "</p></div></div>";
      }).join("");
    }, true);
  }

  function initJourney(section) {
    var panel = $("#season-panel", section);
    tablist($(".season-tabs", section), function (tab) {
      var n = +tab.getAttribute("data-season");
      var s = SITE.seasons.filter(function (x) { return x.n === n; })[0];
      panel.setAttribute("aria-labelledby", tab.id);
      panel.innerHTML =
        '<div class="season-head"><h3>Season ' + s.n + " · " + esc(s.name) + "</h3><p>" + esc(s.years) + " · " + s.episodes.length + (s.episodes.length === 1 ? " episode" : " episodes") + "</p></div>" +
        '<ol class="ep-list">' + s.episodes.map(function (e, i) {
          var proj = e.project && SITE.projects.filter(function (p) { return p.title === e.project; })[0];
          var linkList = !proj ? [] : (proj.portals || (proj.live ? [["Live demo", proj.live]] : [])).concat([["Code", proj.code]]);
          var link = linkList.map(function (l) {
            return ' <a href="' + esc(l[1]) + '" target="_blank" rel="noopener">' + esc(l[0]) + '<span class="sr-only"> for ' + esc(proj.title) + " (opens in a new tab)</span> ↗</a>";
          }).join(" ·");
          return '<li class="ep">' +
            '<span class="ep-num" aria-hidden="true">' + (i + 1) + "</span>" +
            '<span class="ep-thumb ' + e.color + '">' + esc(e.date) + "</span>" +
            "<div><h4>" + esc(e.title) + (e.client ? '<span class="ep-tag">CLIENT</span>' : "") + "</h4><p>" + esc(e.desc) + link + "</p></div>" +
            "</li>";
        }).join("") + "</ol>";
    }, false);
  }

  /* ---------- Rows: wheel, touch, arrows ---------- */

  function initRow(rowEl) {
    var track = $(".row-track", rowEl);
    var prev = $(".row-arrow.prev", rowEl);
    var next = $(".row-arrow.next", rowEl);
    function update() {
      var max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    }
    function page(dir) {
      track.scrollBy({ left: dir * track.clientWidth * 0.85, behavior: reduceMotion ? "auto" : "smooth" });
    }
    prev.addEventListener("click", function () { page(-1); });
    next.addEventListener("click", function () { page(1); });
    track.addEventListener("scroll", update, { passive: true });
    // Re-measure when the row becomes visible or changes size.
    if ("ResizeObserver" in window) new ResizeObserver(update).observe(track);
    else window.addEventListener("resize", update);
    // Vertical wheel scrolls the row sideways until it reaches an end, then the page scrolls.
    track.addEventListener("wheel", function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) return;
      var max = track.scrollWidth - track.clientWidth;
      if (max <= 0) return;
      var d = e.deltaMode === 1 ? e.deltaY * 32 : e.deltaY;
      if ((d < 0 && track.scrollLeft <= 0) || (d > 0 && track.scrollLeft >= max - 1)) return;
      e.preventDefault();
      track.style.scrollSnapType = "none";
      track.scrollLeft += d;
      clearTimeout(track._snap);
      track._snap = setTimeout(function () { track.style.scrollSnapType = ""; }, 160);
    }, { passive: false });
    update();
  }

  /* ---------- Reveal on scroll ---------- */

  var observer = null;
  function reveal(el) {
    if (reduceMotion || !("IntersectionObserver" in window)) { el.classList.add("is-in"); return; }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); observer.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    el.classList.add("reveal");
    observer.observe(el);
  }

  /* ---------- Static parts ---------- */

  function renderStatic() {
    var p = SITE.person;

    $("#hero-meta").innerHTML = [
      '<span class="meta-badge">ALU</span>',
      '<span class="meta-hi">2024 – Present</span>',
      "BSc Software Engineering",
      SITE.certs.length + " Certificates",
      p.languageCount + " Languages"
    ].map(function (x) { return "<li>" + x + "</li>"; }).join("");
    $("#hero-synopsis").textContent = p.synopsis;
    $("#hero-resume").href = p.resume;

    var fig = $("#hero-photo");
    fig.innerHTML = (p.photo
      ? '<img src="' + esc(p.photo) + '" alt="' + esc(p.photoAlt) + '" width="600" height="750">'
      : '<div class="photo-fallback" role="img" aria-label="' + esc(p.fullName) + ' monogram">GK</div>') +
      '<figcaption class="hero-tag">' + esc(p.cityTag) + "</figcaption>";

    $("#footer-actions").innerHTML =
      '<a class="btn btn-red" href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a>" +
      '<a class="btn btn-grey" href="' + esc(p.github) + '" target="_blank" rel="noopener">GitHub</a>' +
      '<a class="btn btn-grey" href="' + esc(p.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>';
    $("#footer-contact").innerHTML = '<a href="' + p.phoneHref + '" style="color:inherit;text-decoration:none">' + esc(p.phone) + "</a> · " + esc(p.city);

    $("#profile-list").innerHTML = SITE.profiles.map(function (pr) {
      return "<li>" +
        '<button type="button" class="profile" data-profile="' + pr.id + '" aria-label="' + esc(pr.name + ": " + pr.hint) + '">' +
          '<span class="profile-avatar ' + pr.grad + " " + (pr.glyphClass || "") + '" aria-hidden="true">' + esc(pr.glyph) +
            (pr.badge ? '<span class="badge-main">' + esc(pr.badge) + "</span>" : "") + "</span>" +
          '<span class="profile-name" aria-hidden="true">' + esc(pr.name) + "</span>" +
          '<span class="profile-hint" aria-hidden="true">' + esc(pr.hint) + "</span>" +
        "</button></li>";
    }).join("");
    $all(".profile").forEach(function (b) {
      b.addEventListener("click", function () { chooseProfile(b.getAttribute("data-profile")); });
    });
  }

  function profileById(id) {
    return SITE.profiles.filter(function (p) { return p.id === id; })[0] || SITE.profiles[0];
  }

  function renderBrowse(profile) {
    $("#hero-kicker").textContent = profile.kicker;
    $("#switch-name").textContent = profile.name;
    var chip = $("#switch-chip");
    chip.className = "switch-chip " + profile.grad + " " + (profile.glyphClass || "");
    chip.textContent = profile.glyph;
    $("#switch-profile").setAttribute("aria-label", "Switch profile (watching as " + profile.name + ")");

    var root = $("#rows");
    root.innerHTML = "";
    profile.order.forEach(function (key) {
      var c = SECTIONS[key]();
      var sec = document.createElement("section");
      sec.className = "block";
      sec.id = c.id;
      sec.setAttribute("data-section", key);
      sec.innerHTML = c.html;
      var h = $(".block-title", sec);
      if (h) { h.id = c.id + "-title"; sec.setAttribute("aria-labelledby", h.id); }
      root.appendChild(sec);
      if (c.init) c.init(sec);
      $all("[data-row]", sec).forEach(initRow);
      reveal(sec);
    });
  }

  /* ---------- State machine: intro → profiles → browse ---------- */

  var screens = { intro: $("#intro"), profiles: $("#profiles"), browse: $("#browse") };
  var introTimer = null;

  function show(name) {
    Object.keys(screens).forEach(function (k) { screens[k].hidden = k !== name; });
    window.scrollTo(0, 0);
    document.body.setAttribute("data-screen", name);
  }

  function goIntro() {
    clearTimeout(introTimer);
    show("intro");
    // Restart the CSS animations each time the intro plays.
    $all(".intro > span").forEach(function (el) {
      el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
    });
    screens.intro.focus({ preventScroll: true });
    store(KEY_INTRO, "1");
    introTimer = setTimeout(goProfiles, 3000);
  }

  function goProfiles() {
    clearTimeout(introTimer);
    show("profiles");
    var current = store(KEY_PROFILE);
    var btn = $('.profile[data-profile="' + (current || "golbert") + '"]') || $(".profile");
    btn.focus({ preventScroll: true });
  }

  function chooseProfile(id) {
    store(KEY_PROFILE, id);
    goBrowse(profileById(id));
  }

  function goBrowse(profile) {
    renderBrowse(profile);
    show("browse");
    $("#hero-title").focus({ preventScroll: true });
  }

  screens.intro.addEventListener("click", goProfiles);
  $("#play-intro").addEventListener("click", goIntro);
  $("#switch-profile").addEventListener("click", goProfiles);

  var nav = $("#nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });

  renderStatic();

  var forceIntro = /[?&]intro=1(&|$)/.test(window.location.search);
  var seen = store(KEY_INTRO) === "1";
  var saved = store(KEY_PROFILE);
  if (forceIntro || !seen) goIntro();
  else if (saved) goBrowse(profileById(saved));
  else goProfiles();
})();
