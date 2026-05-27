"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    document.body.classList.add("motionReady");
    const scrollEase = (value) => 1 - Math.pow(1 - value, 3);
    const lenis = new Lenis({
      duration: 1.05,
      easing: scrollEase,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
      infinite: false,
      autoRaf: false,
    });
    let lenisFrame = 0;

    const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
    const revealItems = Array.from(
      new Set(
        document.querySelectorAll(
          [
            ".hero .eyebrow",
            ".hero h1",
            ".heroCopy",
            ".heroActions",
            ".heroFacts",
            ".kineticRail",
            ".heroVisual",
            ".section",
            ".sectionHead",
            ".targetPanel",
            ".learningCard",
            ".sceneCard",
            ".roadmapItem",
            ".course",
            ".featuredWork",
            ".workRow",
            ".exhibitionStrip",
            ".teacherMessage",
            ".teacher",
            ".voiceCard",
            ".employmentCard",
            ".companyPanel",
            ".alumniCard",
            ".cta",
          ].join(", "),
        ),
      ),
    );
    let ticking = false;
    const revealStates = new WeakMap();

    const setRevealState = (item, nextState) => {
      const currentState = revealStates.get(item);
      if (currentState === nextState) {
        return;
      }

      revealStates.set(item, nextState);

      if (nextState === "visible") {
        item.classList.add("isVisible");
        item.classList.remove("isLeaving");
        return;
      }

      if (nextState === "leaving") {
        item.classList.remove("isVisible");
        item.classList.add("isLeaving");
        return;
      }

      item.classList.remove("isVisible", "isLeaving");
    };

    const update = () => {
      const scrollTop = window.scrollY;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll-progress", `${scrollTop / maxScroll}`);

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallax || 0.12);
        const rect = item.getBoundingClientRect();
        const offset = (rect.top - window.innerHeight / 2) * speed;
        item.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });

      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const entersView = rect.top < window.innerHeight * 0.88 && rect.bottom > window.innerHeight * 0.12;
        const fullyLeftView = rect.bottom < -window.innerHeight * 0.14 || rect.top > window.innerHeight * 1.14;
        const state = revealStates.get(item) || "hidden";

        if (entersView) {
          setRevealState(item, "visible");
        } else if (state === "visible" && fullyLeftView) {
          setRevealState(item, "leaving");
        }
      });

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const scrollToHash = (hash) => {
      const target = hash === "#top" ? document.body : document.querySelector(hash);

      if (!target) {
        return;
      }

      const headerOffset = hash === "#top" ? 0 : 82;
      lenis.scrollTo(target, {
        offset: -headerOffset,
        duration: 1.05,
        easing: scrollEase,
      });
    };

    const handleAnchorClick = (event) => {
      const clickedElement = event.target instanceof Element ? event.target : event.target.parentElement;
      const link = clickedElement?.closest("a[href^='#']");
      if (!link) {
        return;
      }

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      scrollToHash(hash);
      window.history.pushState(null, "", hash);
    };

    revealItems.forEach((item, index) => {
      item.classList.add("revealItem");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
      revealStates.set(item, "hidden");
    });

    const runLenis = (time) => {
      lenis.raf(time);
      requestUpdate();
      lenisFrame = window.requestAnimationFrame(runLenis);
    };

    update();
    lenis.on("scroll", requestUpdate);
    lenisFrame = window.requestAnimationFrame(runLenis);
    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(lenisFrame);
      lenis.off("scroll", requestUpdate);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      document.body.classList.remove("motionReady");
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true" />;
}
