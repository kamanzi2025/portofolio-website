/* GOLBERT: The Series — scene transitions.
 *
 * The browse page becomes a sticky full-screen stage (html.staged). One GSAP timeline,
 * scrubbed by ScrollTrigger, hands each scene over to the next: the current scene's pieces
 * animate out and the next scene's pieces animate in, in the same spot. Scrolling up
 * rewinds it exactly. The hero photo card travels between scenes that have a "lead" element.
 *
 * Built per profile from SITE.profiles[].order: hero → each section → finale.
 * Skipped entirely for reduced motion or when GSAP fails to load: the sections then stay
 * stacked as a normal page (main.js renders them either way).
 *
 * Every tween is an explicit "set the start state, then animate" (or fromTo from the rest
 * state for exits), so any jump or reverse lands on exactly the right frame.
 */
(function () {
  "use strict";

  var api = window.GolbertStage = {
    active: false,
    build: function () {}, teardown: function () {},
    go: function () {}, keyFor: function () { return null; }
  };

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  if (reduce || !gsap || !ST || typeof SITE === "undefined") return; // stacked layout stays
  gsap.registerPlugin(ST);

  var SCENE_VH = 120;   // scroll length per scene
  var HOLD = 0.8;       // how long each scene settles before the next transition
  var OVERLAP = 0.4;    // the next scene starts entering this long before the exit ends

  var NAMES = {
    hero: "Home", "continue": "Continue Exploring", story: "The Full Story", moments: "Top Moments",
    certs: "Certified", skills: "My Skill Universe", originals: "Golbert Originals",
    journey: "My Journey", picks: "Highlights", finale: "To be continued..."
  };
  var ID_TO_KEY = {
    top: "hero", "continue": "continue", story: "story", moments: "moments", certificates: "certs",
    skills: "skills", projects: "originals", journey: "journey", picks: "picks", contact: "finale"
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  var root = document.documentElement;
  var series = $("#series"), stage = $("#stage"), card = $("#card");
  var rings = $("#rings"), burst = $("#burst"), bg = $("#stage-bg");
  var heroFig = $("#hero-photo");

  var tl = null, st = null, scenes = [], profile = null;
  var touched = new Set(), cache = new Map(), layers = {};
  var curIdx = -1, pendingFocus = null, focusTries = 0, savedAnchors;
  var scatter = [], cardStart = 0;

  /* ---------- geometry (layout only, never transforms; cached per refresh) ---------- */

  function W() { return stage.clientWidth; }
  function H() { return stage.clientHeight; }
  function box(el) {
    var b = cache.get(el);
    if (b) return b;
    var x = 0, y = 0, n = el;
    while (n && n !== stage) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    for (var p = el.parentElement; p && p !== stage; p = p.parentElement) { x -= p.scrollLeft; y -= p.scrollTop; }
    b = { x: x, y: y, w: el.offsetWidth, h: el.offsetHeight, cx: x + el.offsetWidth / 2, cy: y + el.offsetHeight / 2 };
    cache.set(el, b);
    return b;
  }
  function toCenterX(el) { return W() / 2 - box(el).cx; }
  function toCenterY(el) { return H() / 2 - box(el).cy; }

  /* ---------- timeline helpers ---------- */

  var REST = { x: 0, y: 0, xPercent: 0, yPercent: 0, scale: 1, scaleY: 1, rotation: 0, rotationY: 0, autoAlpha: 1, opacity: 1, "--p": 1 };
  function rec(t) { gsap.utils.toArray(t).forEach(function (el) { if (el && el.nodeType === 1) touched.add(el); }); }
  function set(t, vars, at) { rec(t); tl.set(t, vars, at); }
  // enter: put the pieces in their start state at `at`, then animate them to `to`
  // The start state is applied as soon as the scene becomes visible (sceneIn), not when
  // this piece's own tween begins, so nothing flashes at its final spot first.
  var sceneIn = 0;
  function enter(t, from, to, at) {
    if (!t || (t.length === 0)) return;
    rec(t);
    tl.set(t, from, Math.min(at, sceneIn));
    tl.fromTo(t, from, Object.assign({ immediateRender: false }, to), at);
  }
  // exit: from the rest state to `to`
  function exit(t, to, at) {
    if (!t || (t.length === 0)) return;
    rec(t);
    var from = {};
    Object.keys(to).forEach(function (k) { if (k in REST) from[k] = REST[k]; });
    tl.fromTo(t, from, Object.assign({ immediateRender: false }, to), at);
  }
  function move(t, from, to, at) {
    rec(t);
    tl.fromTo(t, from, Object.assign({ immediateRender: false }, to), at);
  }

  function heads(el) { return $$(":scope > .block-head, :scope > .cert-filters", el); }
  function headIn(el, at) { enter(heads(el), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06 }, at); }
  function headOut(el, at) { exit(heads(el), { y: -30, autoAlpha: 0, duration: 0.4 }, at); }
  function rowItems(el) { return $$(".row-track > li", el); }

  /* ---------- scenes ---------- */
  // enter(el, at, handover): handover = time the travelling card lands on this scene's lead (or null)
  // exit(el, at): returns its duration; should leave the centre of the stage roughly empty

  var DEFS = {
    hero: {
      exit: function (el, at) {
        exit($$(".hero-copy > *", el), { x: -90, autoAlpha: 0, stagger: 0.05, duration: 0.6, ease: "power2.in" }, at);
        exit(bg, { autoAlpha: 0, duration: 0.8 }, at + 0.2);
        return 1.0;
      }
    },

    "continue": {
      lead: function (el) { return $(".row-track > li > .tile", el); },
      layer: function () { return "episode"; },
      enter: function (el, at, handover) {
        headIn(el, at);
        var items = rowItems(el);
        enter(handover != null ? items.slice(1) : items,
          { x: function () { return W() * 0.55; }, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, stagger: 0.08, duration: 0.7, ease: "power3.out" }, at + 0.1);
      },
      exit: function (el, at) {
        headOut(el, at);
        exit(rowItems(el), { x: function () { return -W() * 0.6; }, autoAlpha: 0, stagger: 0.05, duration: 0.6, ease: "power2.in" }, at);
        return 0.85;
      }
    },

    story: {
      lead: function (el) { return $(".story-card", el); },
      layer: function () { return "story-card"; },
      enter: function (el, at, handover) {
        headIn(el, at);
        var lead = $(".story-card", el), chips = $$(".story-chip", el);
        set(rings, { x: function () { return box(lead).cx; }, y: function () { return box(lead).cy; } }, at);
        enter($$(".ring", rings), { scale: 0.3, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.06, duration: 0.7, ease: "power3.out" }, at + 0.35);
        if (handover == null) enter(lead, { scale: 0.8, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.6 }, at);
        enter(chips, {
          x: function (i, c) { return box(lead).cx - box(c).cx; },
          y: function (i, c) { return box(lead).cy - box(c).cy; },
          scale: 0.2, autoAlpha: 0
        }, { x: 0, y: 0, scale: 1, autoAlpha: 1, stagger: 0.07, duration: 0.7, ease: "power3.out" },
        handover != null ? handover - 0.25 : at + 0.4);
      },
      exit: function (el, at) {
        headOut(el, at);
        var lead = $(".story-card", el);
        exit($$(".story-chip", el), {
          x: function (i, c) { return box(lead).cx - box(c).cx; },
          y: function (i, c) { return box(lead).cy - box(c).cy; },
          scale: 0.2, autoAlpha: 0, stagger: 0.04, duration: 0.55, ease: "power2.in"
        }, at);
        exit($$(".ring", rings), { scale: 1.5, autoAlpha: 0, stagger: 0.04, duration: 0.6 }, at + 0.1);
        exit(lead, { scale: 0.6, autoAlpha: 0, duration: 0.45, ease: "power2.in" }, at + 0.35);
        return 0.9;
      }
    },

    moments: {
      enter: function (el, at) {
        headIn(el, at);
        enter(rowItems(el), { rotationY: 90, autoAlpha: 0, transformOrigin: "50% 50%" },
          { rotationY: 0, autoAlpha: 1, stagger: 0.09, duration: 0.7, ease: "power3.out" }, at + 0.1);
        enter($$(".shine", el), { xPercent: -130 }, { xPercent: 260, stagger: 0.09, duration: 0.9, ease: "power1.inOut" }, at + 0.45);
      },
      exit: function (el, at) {
        headOut(el, at);
        exit(rowItems(el), { y: 90, autoAlpha: 0, stagger: 0.05, duration: 0.55, ease: "power2.in" }, at);
        return 0.8;
      }
    },

    certs: {
      enter: function (el, at) {
        headIn(el, at);
        var tiles = $$(".cert-grid > li", el);
        enter(tiles, {
          x: function (i) { return scatter[i].x * W(); },
          y: function (i) { return scatter[i].y * H(); },
          rotation: function (i) { return scatter[i].r; },
          scale: 0.6, autoAlpha: 0
        }, {
          x: 0, y: 0, rotation: 0, scale: 1, autoAlpha: 1, duration: 0.8, ease: "power3.out",
          stagger: function (i) { return scatter[i].d; }       // a fixed random order, so it rewinds identically
        }, at + 0.05);
        var count = $(".count", el), c = { v: 0 }, n = SITE.certs.length;
        if (count) tl.fromTo(c, { v: 0 }, { v: n, duration: 1, ease: "none", immediateRender: false,
          onUpdate: function () { count.textContent = Math.round(c.v); } }, at + 0.05);
      },
      exit: function (el, at) {
        headOut(el, at);
        exit($$(".cert-grid > li", el), {
          x: function (i, t) { return toCenterX(t); }, y: function (i, t) { return toCenterY(t); },
          scale: 0.15, autoAlpha: 0, stagger: { each: 0.012, from: "center" }, duration: 0.6, ease: "power2.in"
        }, at);
        return 0.9;
      }
    },

    skills: {
      enter: function (el, at) {
        headIn(el, at);
        enter($$(".genre-tab", el), { x: -60, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.05, duration: 0.5, ease: "power3.out" }, at + 0.05);
        enter($$(".skill", el), { scale: 0.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.04, duration: 0.45, ease: "back.out(1.6)" }, at + 0.35);
      },
      exit: function (el, at) {
        headOut(el, at);
        function tab() { return $('.genre-tab[aria-selected="true"]', el) || $(".genre-tab", el); }
        exit($$(".skill", el), {
          x: function (i, c) { return box(tab()).cx - box(c).cx; },
          y: function (i, c) { return box(tab()).cy - box(c).cy; },
          scale: 0.1, autoAlpha: 0, stagger: 0.02, duration: 0.5, ease: "power2.in"
        }, at);
        exit($$(".genre-tab", el), { x: -40, autoAlpha: 0, stagger: 0.03, duration: 0.4 }, at + 0.25);
        return 0.8;
      }
    },

    originals: {
      lead: function (el) { return $(".row-track > li .poster", el); },
      layer: function (lead) { return lead.className.replace(/\btile\b/, "").trim(); },
      enter: function (el, at, handover) {
        headIn(el, at);
        var items = rowItems(el), first = items[0], actions = $(".poster-actions", first);
        set(first, { zIndex: 2 }, at);
        if (handover == null) enter(first, { scale: 0.9, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5 }, at);
        else if (actions) { set(actions, { autoAlpha: 0 }, at); set(actions, { autoAlpha: 1 }, handover); }
        // the other posters slide out from under the first one
        enter(items.slice(1), {
          x: function (i, it) { return box(first).x - box(it).x; }, scale: 0.92, autoAlpha: 0
        }, { x: 0, scale: 1, autoAlpha: 1, stagger: 0.08, duration: 0.7, ease: "power3.out" },
        handover != null ? handover : at + 0.3);
      },
      exit: function (el, at) {
        headOut(el, at);
        var items = rowItems(el), mid = (items.length - 1) / 2;
        exit(items, {
          x: function (i, it) { return toCenterX(it); },
          y: function (i, it) { return toCenterY(it) - H() * 0.12; },
          rotation: function (i) { return (i - mid) * 7; },
          scale: 0.5, autoAlpha: 0, stagger: 0.05, duration: 0.7, ease: "power2.in"
        }, at);
        return 0.95;
      }
    },

    journey: {
      enter: function (el, at) {
        headIn(el, at);
        var line = $(".rail-line", el);
        set(line, { "--o": "0%" }, at);
        enter(line, { "--p": 0 }, { "--p": 1, duration: 0.8, ease: "power2.out" }, at + 0.05);
        enter($$(".season-tab", el), { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.12, duration: 0.45 }, at + 0.1);
        enter($$(".rail-dot", el), { scale: 0 }, { scale: 1, stagger: 0.12, duration: 0.35, ease: "back.out(3)" }, at + 0.2);
        enter($(".season-panel", el), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5 }, at + 0.45);
      },
      exit: function (el, at) {
        headOut(el, at);
        var line = $(".rail-line", el);
        exit($(".season-panel", el), { y: -20, autoAlpha: 0, duration: 0.4 }, at);
        exit($$(".rail-dot", el), { scale: 0, stagger: 0.04, duration: 0.3 }, at + 0.05);
        exit($$(".season-tab", el), { scaleY: 0.2, autoAlpha: 0, stagger: 0.04, duration: 0.35 }, at + 0.1);
        set(line, { "--o": "50%" }, at + 0.3);   // the line shrinks to its centre
        exit(line, { "--p": 0, duration: 0.5 }, at + 0.3);
        return 0.85;
      }
    },

    picks: {
      enter: function (el, at) {
        headIn(el, at);
        enter($$(".pick-num", el), { y: 160, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" }, at + 0.05);
        enter($$(".pick-poster", el), { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" }, at + 0.3);
      },
      exit: function (el, at) {
        headOut(el, at);
        exit($$(".pick-num", el), { y: 160, autoAlpha: 0, stagger: 0.05, duration: 0.5, ease: "power2.in" }, at);
        exit($$(".pick-poster", el), { autoAlpha: 0, duration: 0.4 }, at + 0.15);
        return 0.7;
      }
    },

    finale: {
      showsItself: true,
      enter: function (el, at) {
        // a red disc grows from the centre to cover the screen, then fades to reveal the finale
        set(burst, { autoAlpha: 1, scale: 0 }, at);
        move(burst, { scale: 0 }, { scale: function () { return Math.hypot(W(), H()) / 20 * 1.05; }, duration: 0.7, ease: "power3.in" }, at);
        set(el, { autoAlpha: 1 }, at + 0.7);
        move(burst, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.5 }, at + 0.7);
        enter($$(".footer-inner > *", el), { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.6, ease: "power3.out" }, at + 0.75);
      }
    }
  };

  /* ---------- the travelling card ---------- */

  function poseOf(el) {
    return {
      x: function () { return box(el).x; }, y: function () { return box(el).y; },
      width: function () { return box(el).w; }, height: function () { return box(el).h; },
      scale: 1, autoAlpha: 1
    };
  }
  function goneAt(el) { // shrunk at the centre, sized like `el`
    return {
      x: function () { return W() / 2 - box(el).w / 2; }, y: function () { return H() / 2 - box(el).h / 2; },
      width: function () { return box(el).w; }, height: function () { return box(el).h; },
      scale: 0.5, autoAlpha: 0
    };
  }
  function heroPose() {
    var b = box(heroFig);
    gsap.set(card, { x: b.x, y: b.y, width: b.w, height: b.h, scale: 1, autoAlpha: 1 });
  }

  function addLayer(key, html, cls) {
    var div = document.createElement("div");
    div.className = "card-layer " + cls;
    div.innerHTML = html;
    $$("[id]", div).forEach(function (n) { n.removeAttribute("id"); });
    card.appendChild(div);
    layers[key] = div;
    gsap.set(div, { autoAlpha: key === "photo" ? 1 : 0 });
  }
  function buildCard() {
    card.innerHTML = "";
    layers = {};
    card.inert = true;
    addLayer("photo", heroFig.innerHTML, "card-photo");
    scenes.forEach(function (s) {
      var d = DEFS[s.key], lead = d.lead && d.lead(s.el);
      if (lead) addLayer(s.key, lead.innerHTML, d.layer(lead));
    });
  }

  // Moves the card for the hand-over a → b. Returns the time it lands on b's lead (or null).
  function cardFor(a, b, t0, tIn) {
    var d = DEFS[b.key], lead = d.lead && d.lead(b.el), fromHero = a.key === "hero";
    if (!lead && !fromHero) return null;
    var start = fromHero ? t0 + 0.15 : tIn, dur = 1.0;
    if (fromHero) cardStart = start;
    move(card, fromHero ? poseOf(heroFig) : goneAt(lead),
      Object.assign({ duration: dur, ease: "power2.inOut" }, lead ? poseOf(lead) : goneAt(heroFig)), start);
    if (!lead) return null;
    var target = layers[b.key];
    if (fromHero) {
      move(layers.photo, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.4 }, start + 0.4);
      move(target, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.4 }, start + 0.4);
    } else {
      Object.keys(layers).forEach(function (k) { set(layers[k], { autoAlpha: layers[k] === target ? 1 : 0 }, start); });
    }
    // hand-over: the real element replaces the card in the same frame
    set(lead, { autoAlpha: 0 }, tIn);
    set(card, { autoAlpha: 0 }, start + dur);
    set(lead, { autoAlpha: 1 }, start + dur);
    return start + dur;
  }

  /* ---------- building ---------- */

  function sceneEl(key) {
    if (key === "hero") return $("#top");
    if (key === "finale") return $("#contact");
    return $('#rows > [data-section="' + key + '"]');
  }

  function transition(a, b) {
    var t0 = tl.duration();
    tl.addLabel("to-" + b.key, t0);
    var dur = DEFS[a.key].exit(a.el, t0);
    var tIn = t0 + Math.max(0.2, dur - OVERLAP);
    sceneIn = tIn;
    if (!DEFS[b.key].showsItself) set(b.el, { autoAlpha: 1 }, tIn);
    var handover = cardFor(a, b, t0, tIn);
    DEFS[b.key].enter(b.el, tIn, handover);
    set(a.el, { autoAlpha: 0 }, t0 + dur);
    tl.addLabel(b.key);              // the scene has fully arrived
    tl.to({}, { duration: HOLD });   // …and holds for a moment
  }

  function buildRings() {
    if ($(".ring", rings)) return;
    rings.innerHTML = '<div class="rings-inner">' + [26, 42, 58, 74, 92, 112].map(function (v) {
      return '<div class="ring" style="width:' + v + "vmin;height:" + v + "vmin;margin:" + (-v / 2) + "vmin 0 0 " + (-v / 2) + 'vmin"></div>';
    }).join("") + "</div>";
  }

  function build(profileId) {
    teardown();
    profile = SITE.profiles.filter(function (p) { return p.id === profileId; })[0] || SITE.profiles[0];
    scenes = ["hero"].concat(profile.order, ["finale"])
      .map(function (k) { return { key: k, el: sceneEl(k) }; })
      .filter(function (s) { return s.el && DEFS[s.key]; });
    if (scenes.length < 2) return;

    root.classList.add("staged");
    series.style.height = scenes.length * SCENE_VH + "vh";
    cache.clear();
    touched = new Set();
    curIdx = -1;
    $$(".row-track", stage).forEach(function (r) { r.scrollLeft = 0; });

    var nCerts = $$("#certificates .cert-grid > li").length;
    var order = gsap.utils.shuffle(Array.from({ length: nCerts }, function (_, i) { return i; }));
    scatter = Array.from({ length: nCerts }, function (_, i) {
      return { x: gsap.utils.random(-0.7, 0.7), y: gsap.utils.random(-0.8, 0.8), r: gsap.utils.random(-40, 40), d: order[i] * 0.022 };
    });

    buildRings();
    buildCard();

    // starting state: only the hero is on stage
    scenes.forEach(function (s, i) { rec(s.el); gsap.set(s.el, { autoAlpha: i === 0 ? 1 : 0 }); });
    rec([bg, card, burst, rings]);
    gsap.set(bg, { autoAlpha: 1 });
    // layers that CSS hides at rest get an explicit hidden state, so rewinding restores "hidden"
    rec($$(".ring", rings));
    gsap.set($$(".ring", rings), { autoAlpha: 0 });
    gsap.set(burst, { autoAlpha: 0, scale: 0 });
    rec($$(".rail-line", stage));
    gsap.set($$(".rail-line", stage), { "--p": 1 });
    heroPose();

    tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" }, onUpdate: onUpdate });
    tl.addLabel("hero", 0);
    tl.to({}, { duration: 0.5 });
    for (var i = 1; i < scenes.length; i++) transition(scenes[i - 1], scenes[i]);

    st = ST.create({
      trigger: series, start: "top top", end: "bottom bottom",
      // Lenis already eases the scroll; a scrub delay on top of it makes scenes trail behind.
      // Without Lenis (touch, ?smooth=0) a short catch-up keeps native scroll from looking steppy.
      animation: tl, scrub: window.lenis ? true : 0.3, invalidateOnRefresh: true,
      onRefresh: function () { if (tl.time() <= cardStart) heroPose(); }
    });

    api.active = true;
    var lenis = window.lenis;
    if (lenis) {
      savedAnchors = lenis.options.anchors;
      lenis.options.anchors = false;   // the stage handles in-page links (js/smooth-scroll.js)
      lenis.resize();
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }
    ST.refresh();
    onUpdate();
  }

  function teardown() {
    if (!api.active) return;
    api.active = false;
    pendingFocus = null;
    if (st) st.kill();
    if (tl) tl.kill();
    st = tl = null;
    var els = Array.from(touched);
    gsap.set(els, { clearProps: "transform,opacity,visibility,zIndex" });
    gsap.set(card, { clearProps: "width,height" });
    els.forEach(function (el) { el.style.removeProperty("--p"); el.style.removeProperty("--o"); });
    scenes.forEach(function (s) { s.el.inert = false; s.el.removeAttribute("aria-hidden"); });
    root.classList.remove("staged");
    series.style.height = "";
    card.innerHTML = "";
    var count = $("#certificates .count");
    if (count) count.textContent = SITE.certs.length;
    $$("#nav-links a").forEach(function (a) { a.removeAttribute("aria-current"); });
    if (window.lenis && savedAnchors !== undefined) window.lenis.options.anchors = savedAnchors;
    curIdx = -1;
  }

  /* ---------- current scene: indicator, nav, accessibility ---------- */

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function onUpdate() {
    if (!tl) return;
    var t = tl.time(), idx = 0;
    for (var i = 1; i < scenes.length; i++) {
      var k = scenes[i].key;
      if (t >= (tl.labels["to-" + k] + tl.labels[k]) / 2) idx = i;
    }
    if (idx !== curIdx) {
      curIdx = idx;
      var key = scenes[idx].key;
      scenes.forEach(function (s, j) {
        s.el.inert = j !== idx;                         // hidden scenes leave the tab order
        if (j !== idx) s.el.setAttribute("aria-hidden", "true"); else s.el.removeAttribute("aria-hidden");
      });
      $("#now-ep").textContent = "EP " + pad(idx);
      $("#now-name").textContent = NAMES[key];
      $$("#nav-links a").forEach(function (a) {
        if (a.getAttribute("data-scene") === key) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }
  }

  /* ---------- navigation: jump to a scene's label ---------- */

  function headingOf(key) {
    if (key === "hero") return $("#hero-title");
    if (key === "finale") return $("#footer-title");
    var s = sceneEl(key);
    return s && $(".block-title", s);
  }

  // Move focus once the scrubbed timeline has caught up with the scroll position.
  function settleFocus() {
    if (!pendingFocus || !tl) return;
    var k = pendingFocus;
    if (Math.abs(tl.time() - tl.labels[k]) > 0.05 && focusTries++ < 25) { gsap.delayedCall(0.12, settleFocus); return; }
    pendingFocus = null;
    var h = headingOf(k);
    if (h) h.focus({ preventScroll: true });
  }

  function go(key, immediate) {
    if (!api.active || !tl || !(key in tl.labels)) return;
    var y = st.start + (tl.labels[key] / tl.duration()) * (st.end - st.start);
    pendingFocus = key;
    focusTries = 0;
    var lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(y, { duration: immediate ? 0 : 1.6, immediate: !!immediate, force: true, onComplete: settleFocus });
    } else {
      try { window.scrollTo({ top: y, behavior: immediate ? "instant" : "smooth" }); } catch (e) { window.scrollTo(0, y); }
      gsap.delayedCall(immediate ? 0.1 : 1.2, settleFocus);
    }
  }

  function keyFor(id) {
    if (!api.active || !tl) return null;
    var key = id === "rows" ? profile.order[0] : ID_TO_KEY[id];
    return key && key in tl.labels ? key : null;
  }

  api.build = build;
  api.teardown = teardown;
  api.debug = function () { return { tl: tl, st: st, scenes: scenes }; }; // read-only, for testing
  api.go = go;
  api.keyFor = keyFor;

  ST.addEventListener("refreshInit", function () { cache.clear(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { if (api.active) ST.refresh(); });
  }

  // main.js may have shown the browse page before this script loaded.
  if (document.body.getAttribute("data-screen") === "browse") build(document.body.getAttribute("data-profile"));
})();
