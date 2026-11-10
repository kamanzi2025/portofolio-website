/* Smooth, momentum-based wheel scrolling with Lenis.
 * The page keeps scrolling natively: Lenis only eases wheel/trackpad input and
 * drives window.scrollTo. Scrollbar, keyboard, touch and find-in-page are untouched.
 * Nothing else depends on Lenis: other code checks window.lenis first.
 */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NAV_OFFSET = -80;
  var pendingFocus = null;
  var lenis = null;

  // How far below the top a section should land: the nav's real height (it wraps to
  // two rows on phones), never less than NAV_OFFSET.
  function navOffset() {
    var nav = document.getElementById("nav");
    var navH = nav ? nav.getBoundingClientRect().height : 0; // 0 while the nav is hidden
    return -Math.max(-NAV_OFFSET, navH + 8);
  }

  function targetFromHash(hash) {
    var id = hash && decodeURIComponent(hash.slice(1));
    return id ? document.getElementById(id) : null;
  }

  function focusSection(el) {
    if (!el) return;
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }

  // ?smooth=0 turns Lenis off, to compare against native scrolling.
  var disabled = /[?&]smooth=0(&|$)/.test(window.location.search);

  // With GSAP present, Lenis runs on GSAP's ticker so scroll and the scene
  // animations share one frame loop; otherwise it drives itself (autoRaf).
  var gsap = window.gsap, ST = window.ScrollTrigger;
  var onTicker = !!(gsap && ST);

  if (!reduce && !disabled && typeof Lenis !== "undefined") {
    try {
      lenis = new Lenis({
        autoRaf: !onTicker,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,          // phones keep their own native momentum
        anchors: {
          offset: NAV_OFFSET,      // updated to the nav's real height on each click
          onComplete: function () { focusSection(pendingFocus); pendingFocus = null; }
        },
        allowNestedScroll: true,   // poster rows and tab strips keep their own sideways scrolling
        stopInertiaOnNavigate: true,
        autoResize: true
      });
      if (onTicker) {
        lenis.on("scroll", ST.update);
        gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
        gsap.ticker.lagSmoothing(0);
      }
    } catch (e) {
      lenis = null;
    }
  }
  window.lenis = lenis;

  // The scene stage (js/stage.js) owns in-page navigation while it's active.
  function stageKey(id) {
    var st = window.GolbertStage;
    return st && st.active ? st.keyFor(id) : null;
  }

  // Shift + wheel over a sideways row: let the browser scroll the row natively.
  // (Lenis skips events flagged with lenisStopPropagation.) Passive, no layout reads.
  if (lenis) {
    document.addEventListener("wheel", function (e) {
      if (e.shiftKey && e.target.closest && e.target.closest(".row-track, .genre-tabs")) e.lenisStopPropagation = true;
    }, { passive: true });
  }

  // main.js runs first. If it's showing the full-screen intro, hold the page still.
  if (lenis && document.body.getAttribute("data-screen") === "intro") lenis.stop();

  // Same-page anchor links stay plain href="#id" links (they work without JS).
  // With Lenis on: cancel the browser's instant jump so Lenis's anchor handler can glide,
  // keep the URL hash in sync, and move focus to the section when the glide ends.
  // With Lenis off: the browser scrolls natively; we only move focus.
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!link) return;
    var id = decodeURIComponent(link.getAttribute("href").slice(1));
    var key = id && stageKey(id);
    if (key) {
      e.preventDefault();
      if (window.location.hash !== "#" + id) {
        try { history.pushState(null, "", "#" + id); } catch (err) { /* file:// or sandboxed */ }
      }
      window.GolbertStage.go(key);
      return;
    }
    var target = id && document.getElementById(id);
    if (!target) return;

    if (lenis && !lenis.isStopped) {
      e.preventDefault();
      lenis.options.anchors.offset = navOffset();
      pendingFocus = target;
      if (window.location.hash !== "#" + id) {
        try { history.pushState(null, "", "#" + id); } catch (err) { /* file:// or sandboxed */ }
      }
    } else {
      window.requestAnimationFrame(function () { focusSection(target); });
    }
  });

  // Hashes that don't come from a click (typed in the address bar, or present when the
  // page loads) jump natively; with Lenis on, settle them below the nav too.
  if (lenis) {
    var settleOnHash = function (immediate) {
      var key = stageKey(decodeURIComponent(window.location.hash.slice(1)));
      if (key) { window.GolbertStage.go(key, immediate); return; }
      var target = targetFromHash(window.location.hash);
      if (!target || lenis.isStopped) return;
      // The browser has already jumped, but Lenis hasn't seen that scroll event yet:
      // sync it to the real position first, then settle from the live layout.
      var y = window.scrollY;
      var to = target.getBoundingClientRect().top + y + navOffset();
      lenis.scrollTo(y, { immediate: true });
      lenis.scrollTo(to, { immediate: immediate, onComplete: function () { focusSection(target); } });
    };
    window.addEventListener("hashchange", function () { settleOnHash(false); });
    if (window.location.hash) {
      if (document.readyState === "complete") settleOnHash(true);
      else window.addEventListener("load", function () { settleOnHash(true); });
    }
  }
})();
