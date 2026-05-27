"use client";

import { useMemo, useState } from "react";

export default function WorksShowcase({ works }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedWork = useMemo(() => works[selectedIndex] ?? works[0], [selectedIndex, works]);

  return (
    <div className="worksLayout">
      <article className="featuredWork" data-parallax="0.025">
        <div className="featuredPreview">
          <div className="workBrowser large" aria-label={`${selectedWork.title}の作品ページプレビュー`}>
            <div className="workBrowserBar">
              <div className="browserDots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="workUrl">{selectedWork.url.replace("https://", "")}</span>
            </div>
            <div className="workBrowserPage">
              <iframe
                key={selectedWork.url}
                src={selectedWork.url}
                title={`${selectedWork.title} 作品ページ`}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="featuredCaption">
          <div className="tagRow">
            <span className="tag">{selectedWork.tag}</span>
            <span className="tag">Student Work</span>
            <span className="tag">Web View</span>
          </div>
          <h3>{selectedWork.title}</h3>
          <p>{selectedWork.text}</p>
          <a className="workLink" href={selectedWork.url}>
            公式作品ページを開く
          </a>
        </div>
      </article>

      <div className="workList" aria-label="学生作品リスト" data-parallax="-0.015">
        {works.map((work, index) => (
          <button
            className="workRow"
            type="button"
            key={work.title}
            aria-pressed={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="miniBrowser" aria-hidden="true">
              <div className="miniBrowserBar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img src={work.image} alt="" />
            </div>
            <div>
              <small>{work.tag}</small>
              <h3>{work.title}</h3>
              <p>{work.text}</p>
              <span className="workAuthor">{work.author}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
