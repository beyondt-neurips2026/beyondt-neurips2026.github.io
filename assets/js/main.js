/* =====================================================================
   Beyond Transformers — NeurIPS 2026 Workshop
   ===================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     DATA
  --------------------------------------------------------------- */
  const speakersSydney = [
    { name: "Albert Gu", aff: "CMU & Cartesia AI", status: "Confirmed" },
    { name: "Daniel Y. Fu", aff: "UC San Diego", status: "Confirmed" },
    { name: "Krzysztof Choromanski", aff: "Google DeepMind", status: "Confirmed" },
    { name: "Anima Anandkumar", aff: "Caltech", status: "Confirmed" },
    { name: "Yu Cheng", aff: "Chinese University of Hong Kong", status: "Confirmed" },
  ];
  const speakersParis = [
    { name: "Jürgen Schmidhuber", aff: "KAUST & IDSIA", status: "Confirmed" },
    { name: "Danqi Chen", aff: "Princeton University", status: "Confirmed" },
    { name: "Albert Gu", aff: "CMU & Cartesia AI", role: "Virtual", status: "Confirmed" },
    { name: "Edoardo Ponti", aff: "Imperial College London", status: "Confirmed" },
    { name: "Vahab Mirrokni", aff: "Google Research", status: "Confirmed" },
  ];

  const panelSydney = [
    { name: "Ramin Hasani", aff: "Liquid AI & MIT", status: "Confirmed" },
    { name: "Aditi Raghunathan", aff: "Carnegie Mellon University", status: "Confirmed" },
    { name: "Vikram Appia", aff: "AMD", status: "Confirmed" },
  ];
  const panelParis = [
    { name: "Maximilian Beck", aff: "JKU Linz / NXAI", status: "Confirmed" },
    { name: "Danqi Chen", aff: "Princeton University", status: "Confirmed" },
    { name: "Edoardo Ponti", aff: "Imperial College London", status: "Confirmed" },
  ];

  const organizers = [
    {
      name: "Mehdi Rezagholizadeh", aff: "AMD", role: "Lead / General Chair",
      bio: "Principal Member of Technical Staff at AMD; previously led the NLP team at Huawei Noah's Ark Lab Canada. Co-organizer of the NeurIPS ENLSP series (2021–2025).",
    },
    {
      name: "Beidi Chen", aff: "Carnegie Mellon University", role: "Program & Reviews",
      bio: "Assistant Professor at CMU and researcher at Meta FAIR, working on efficient ML systems — sparsity, long-context inference, KV-cache and speculative decoding (Deja Vu, H2O, Sequoia).",
    },
    {
      name: "Pavlo Molchanov", aff: "NVIDIA", role: "Industry & Demos",
      bio: "Leads research on efficient deep learning at NVIDIA Research — pruning, NAS, distillation, and efficient foundation models (Minitron, Hymba, Nemotron).",
    },
    {
      name: "Ali Ghodsi", aff: "University of Waterloo", role: "Speakers, Panel & Mentorship",
      bio: "Professor of Statistics at the University of Waterloo with 100+ papers in deep learning, NLP, vision, and bioinformatics. Co-organizer of the NeurIPS ENLSP workshops.",
    },
  ];

  const committee = [
    { name: "Ahmed Imteaj", role: "Meta-Reviewer", aff: "Southern Illinois University" },
    { name: "Young Jin Kim", role: "Meta-Reviewer", aff: "Microsoft" },
    { name: "Yue Dong", role: "Meta-Reviewer", aff: "UC Riverside" },
    { name: "Sayeh Sharify", role: "Meta-Reviewer", aff: "d-Matrix Corp" },
    { name: "Soheila Samiee", role: "Meta-Reviewer", aff: "BASF Canada Inc." },
    { name: "Peyman Passban", role: "Meta-Reviewer", aff: "Sanofi" },
    { name: "Walid Ahmed", role: "Meta-Reviewer", aff: "Huawei Canada" },
    { name: "Jahangir Alam", role: "Meta-Reviewer", aff: "CRIM" },
    { name: "Saleh Ashkboos", role: "Meta-Reviewer", aff: "ETH Zurich" },
    { name: "Xin Wang", role: "Meta-Reviewer", aff: "d-Matrix Corporation" },
    { name: "Alessio Brutti", role: "Meta-Reviewer", aff: "Fondazione Bruno Kessler" },
    { name: "Parijat Dube", role: "Meta-Reviewer", aff: "IBM" },
    { name: "Yuhui Xu", role: "Meta-Reviewer", aff: "Salesforce" },
    { name: "Hamidreza Mahyar", role: "Meta-Reviewer", aff: "McMaster University" },
    { name: "Jonathan Mamou", role: "Meta-Reviewer", aff: "Intel Labs" },
    { name: "Ruixiang Zhang", role: "Meta-Reviewer", aff: "Apple" },
    { name: "Ahmad Rashid", role: "Meta-Reviewer", aff: "U Waterloo & Vector Institute" },
    { name: "Peilin Yu", role: "Reviewer", aff: "Brown University" },
    { name: "Mojtaba Valipour", role: "Reviewer", aff: "Hum.ai" },
    { name: "Shangyu Wu", role: "Reviewer", aff: "City University of Hong Kong" },
    { name: "Huiqiang Jiang", role: "Reviewer", aff: "Microsoft Research" },
    { name: "Lei Gao", role: "Reviewer", aff: "University of Southern California" },
    { name: "Daria Soboleva", role: "Reviewer", aff: "Cerebras" },
    { name: "Mike Lasby", role: "Reviewer", aff: "University of Calgary" },
    { name: "Ali Edalati", role: "Reviewer", aff: "Cohere" },
    { name: "Abderrahim Fathan", role: "Reviewer", aff: "CRIM" },
    { name: "Haz Sameen Shahgir", role: "Reviewer", aff: "UC Riverside" },
    { name: "Sai Ganesh Mirishkar", role: "Reviewer", aff: "IIIT Hyderabad" },
    { name: "Mohammadreza Tayaranian", role: "Reviewer", aff: "McGill University" },
    { name: "Satya Sai Srinath Namburi", role: "Reviewer", aff: "University of Wisconsin–Madison" },
    { name: "Tushar Shinde", role: "Reviewer", aff: "IIT Madras Zanzibar" },
    { name: "Maryam Dialameh", role: "Reviewer", aff: "University of Waterloo" },
    { name: "Mahdi Biparva", role: "Reviewer", aff: "Huawei Canada" },
    { name: "Coleman Hooper", role: "Reviewer", aff: "UC Berkeley" },
    { name: "Ning Shi", role: "Reviewer", aff: "University of Alberta" },
    { name: "Yujie Pan", role: "Reviewer", aff: "Intel" },
    { name: "Raffy Fahim", role: "Reviewer", aff: "Microsoft" },
    { name: "Nikhil Bhendawade", role: "Reviewer", aff: "Apple" },
    { name: "Ankur Kumar", role: "Reviewer", aff: "Amazon" },
    { name: "Heitor R. Guimarães", role: "Reviewer", aff: "INRS" },
    { name: "Taehyeon Kim", role: "Reviewer", aff: "LG AI Research" },
    { name: "Pieter-Jan Hoedt", role: "Reviewer", aff: "Johannes Kepler University, Linz" },
    { name: "Benyamin Jamialahmadi", role: "Reviewer", aff: "Huawei" },
    { name: "Cen Lu", role: "Reviewer", aff: "EPFL" },
    { name: "Harry Dong", role: "Reviewer", aff: "Carnegie Mellon University" },
    { name: "Amrit Khera", role: "Reviewer", aff: "OpenAI" },
    { name: "Richard He Bai", role: "Reviewer", aff: "Apple" },
    { name: "Omid Ghahroodi", role: "Reviewer", aff: "QCRI" },
    { name: "Aref Jafari", role: "Meta-Reviewer", aff: "AMD" },
    { name: "Nan Qin", role: "Meta-Reviewer", aff: "AMD" },
    { name: "Habib Hosseini", role: "Meta-Reviewer", aff: "AMD" },
    { name: "Utkarsh Saxena", role: "Meta-Reviewer", aff: "AMD" },
    { name: "Mahdi Kamani", role: "Meta-Reviewer", aff: "AMD" },
    { name: "Mahdi Saeedi", role: "Meta-Reviewer", aff: "AMD" },
    { name: "Parsa Fashi", role: "Reviewer", aff: "AMD" },
    { name: "Vansh Bhatia", role: "Reviewer", aff: "AMD" },
    { name: "Akash Haridas", role: "Reviewer", aff: "AMD" },
    { name: "Ruijing Yang", role: "Reviewer", aff: "AMD" },
    { name: "Sharareh Younesian", role: "Reviewer", aff: "AMD" },
  ];

  /* ---------------------------------------------------------------
     HELPERS
  --------------------------------------------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const initials = (name) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  /* ---- photos ------------------------------------------------------
     Drop headshots in assets/img/people/<slug>.jpg (square works best).
     Missing files fall back to the gradient monogram, so a card never
     looks broken. See assets/img/people/README.md for the naming rule.
  ------------------------------------------------------------------- */
  const PHOTO_DIR = "assets/img/people/";
  const slug = (name) =>
    name.toLowerCase()
      .replace(/ü/g, "u").replace(/é/g, "e").replace(/ã/g, "a").replace(/ö/g, "o")
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const photoFor = (name) => PHOTO_DIR + slug(name) + ".jpg";

  /* ---------------------------------------------------------------
     RENDER PEOPLE
  --------------------------------------------------------------- */
  function renderPerson(p, opts) {
    opts = opts || {};
    const pending = p.status === "Pending";
    const card = el("article", "person reveal" + (pending ? " person--pending" : ""));

    const avatar = el("div", "person__avatar");
    if (pending) {
      avatar.textContent = "?";
    } else {
      const mono = initials(p.name);
      avatar.textContent = mono;
      const img = document.createElement("img");
      img.src = photoFor(p.name);
      img.alt = p.name;
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "person__photo";
      img.addEventListener("load", () => avatar.classList.add("person__avatar--has-photo"));
      img.addEventListener("error", () => img.remove());
      avatar.appendChild(img);
    }
    card.appendChild(avatar);

    card.appendChild(el("div", "person__name", p.name));
    card.appendChild(el("p", "person__aff", p.aff));
    if (p.role) card.appendChild(el("span", "person__role", p.role));
    if (opts.bio && p.bio) card.appendChild(el("p", "person__bio", p.bio));
    return card;
  }

  function mount(id, list, opts) {
    const host = document.getElementById(id);
    if (!host) return;
    list.forEach((p) => host.appendChild(renderPerson(p, opts)));
  }

  mount("speakers-sydney", speakersSydney);
  mount("speakers-paris", speakersParis);
  mount("panel-sydney", panelSydney);
  mount("panel-paris", panelParis);
  mount("organizers-grid", organizers, { bio: true });

  /* ---------------------------------------------------------------
     PROGRAM COMMITTEE (with live filter)
  --------------------------------------------------------------- */
  const pcGrid = document.getElementById("pc-grid");
  function renderPC(filter) {
    if (!pcGrid) return;
    const q = (filter || "").trim().toLowerCase();
    pcGrid.innerHTML = "";
    const rows = committee.filter(
      (m) => !q || m.name.toLowerCase().includes(q) || m.aff.toLowerCase().includes(q)
    );
    if (!rows.length) {
      pcGrid.appendChild(el("p", "pc-empty", "No members match “" + filter + "”."));
      return;
    }
    rows.forEach((m) => {
      const isMeta = /meta/i.test(m.role);
      const card = el("div", "pc" + (isMeta ? " pc--meta" : ""));
      card.appendChild(el("div", "pc__name", m.name));
      const meta = el("div", "pc__meta");
      meta.appendChild(el("span", "pc__aff", m.aff));
      meta.appendChild(el("span", "pc__role", m.role));
      card.appendChild(meta);
      pcGrid.appendChild(card);
    });
  }
  renderPC("");
  const pcSearch = document.getElementById("pcSearch");
  if (pcSearch) pcSearch.addEventListener("input", (e) => renderPC(e.target.value));

  /* ---------------------------------------------------------------
     NAV: scrolled state + mobile toggle
  --------------------------------------------------------------- */
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  const onScroll = () => {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
    const sp = document.getElementById("scrollProgress");
    if (sp) {
      const h = document.documentElement;
      const pct = (h.scrollTop || document.body.scrollTop) / (h.scrollHeight - h.clientHeight);
      sp.style.width = Math.min(100, pct * 100) + "%";
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------------------
     REVEAL ON SCROLL
  --------------------------------------------------------------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function observeReveals() {
    const items = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((i) => i.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((i) => io.observe(i));
  }
  // tag major blocks as reveal
  document
    .querySelectorAll(".section__head, .pillar, .topic, .tl, .card, .callout, .agenda__row, .stat")
    .forEach((n) => n.classList.add("reveal"));
  observeReveals();

  /* ---------------------------------------------------------------
     COUNT-UP STATS
  --------------------------------------------------------------- */
  function animateCount(node) {
    const target = parseFloat(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    if (reduceMotion) { node.textContent = target + suffix; return; }
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = Math.round(target * eased) + (t === 1 ? suffix : "");
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    const statIO = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { animateCount(e.target); statIO.unobserve(e.target); }
      }),
      { threshold: 0.6 }
    );
    document.querySelectorAll(".stat__n").forEach((n) => statIO.observe(n));
  } else {
    document.querySelectorAll(".stat__n").forEach((n) => {
      n.textContent = n.dataset.count + (n.dataset.suffix || "");
    });
  }

  /* ---------------------------------------------------------------
     HERO SCALING CURVES  —  O(n^2) vs sub-quadratic
  --------------------------------------------------------------- */
  (function curves() {
    const W = 1200, H = 600;
    const padX = 40, baseY = H - 60, topY = 60;
    const quadLine = $("#quadLine");
    const quadArea = $("#quadArea");
    const linLine = $("#linLine");
    const quadDot = $("#quadDot");
    const linDot = $("#linDot");
    if (!quadLine) return;

    const N = 60;
    const xs = [];
    for (let i = 0; i <= N; i++) xs.push(i / N);

    // y grows downward in SVG; map value[0..1] -> baseY..topY
    const px = (t) => padX + t * (W - padX * 2);
    const py = (v) => baseY - v * (baseY - topY);

    const quadPts = xs.map((t) => [px(t), py(t * t)]);
    const linPts = xs.map((t) => [px(t), py(t * 0.32 + (t * Math.log(1 + t * 4)) * 0.08)]);

    const toPath = (pts) =>
      pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");

    quadLine.setAttribute("d", toPath(quadPts));
    linLine.setAttribute("d", toPath(linPts));
    quadArea.setAttribute(
      "d",
      toPath(quadPts) + " L" + px(1).toFixed(1) + " " + baseY + " L" + padX + " " + baseY + " Z"
    );

    // draw-on animation via stroke-dash
    [quadLine, linLine].forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = path === linLine ? "2 9" : len;
      if (path !== linLine) {
        path.style.strokeDashoffset = len;
        if (!reduceMotion) {
          path.animate(
            [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
            { duration: 1800, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" }
          );
        } else {
          path.style.strokeDashoffset = 0;
        }
      }
    });

    // moving dots tracing the curves
    if (!reduceMotion) {
      let raf, t0 = null;
      const loop = (ts) => {
        if (t0 == null) t0 = ts;
        const cycle = 3200;
        const t = ((ts - t0) % cycle) / cycle;
        const qi = Math.min(N, Math.floor(t * N));
        const li = qi;
        if (quadPts[qi]) { quadDot.setAttribute("cx", quadPts[qi][0]); quadDot.setAttribute("cy", quadPts[qi][1]); }
        if (linPts[li]) { linDot.setAttribute("cx", linPts[li][0]); linDot.setAttribute("cy", linPts[li][1]); }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    } else {
      quadDot.setAttribute("cx", quadPts[N][0]); quadDot.setAttribute("cy", quadPts[N][1]);
      linDot.setAttribute("cx", linPts[N][0]); linDot.setAttribute("cy", linPts[N][1]);
    }
  })();

  /* ---------------------------------------------------------------
     YEAR / footer dynamic bits
  --------------------------------------------------------------- */
  const pcCount = document.getElementById("pc-count");
  if (pcCount) pcCount.textContent = "75";
})();
