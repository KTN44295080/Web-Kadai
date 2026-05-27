"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    document.body.classList.add("motionReady");

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
            entry.target.classList.remove("isLeaving");
          } else if (entry.target.classList.contains("isVisible")) {
            entry.target.classList.remove("isVisible");
            entry.target.classList.add("isLeaving");
          }
        });
      },
      { rootMargin: "-6% 0px -10% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item, index) => {
      item.classList.add("revealItem");
      item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 45}ms`);
      observer.observe(item);
    });

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      observer.disconnect();
      document.body.classList.remove("motionReady");
    };
  }, []);

  return <div className="scrollProgress" aria-hidden="true" />;
}
