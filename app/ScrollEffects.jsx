"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
    const revealItems = Array.from(document.querySelectorAll(".section, .learningCard, .sceneCard, .course, .workRow, .teacher, .voiceCard, .alumniCard"));
    let ticking = false;

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

      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    revealItems.forEach((item) => {
      item.classList.add("revealItem");
      observer.observe(item);
    });

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      observer.disconnect();
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true" />;
}
