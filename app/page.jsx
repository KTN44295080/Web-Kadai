import WorksShowcase from "./WorksShowcase";

const entryPoints = [
  {
    title: "デザインも、コードも試せる",
    text: "最初から専門をひとつに絞らず、画面設計、ビジュアル、実装、企画を横断して触れる。",
  },
  {
    title: "作品を作りながら得意を見つける",
    text: "課題制作や発表を通して、自分が楽しいと思える作り方や向いている役割が見えてくる。",
  },
  {
    title: "将来の職種までつながる",
    text: "Webデザイナー、UI/UXデザイナー、フロントエンドエンジニア、Webディレクターなど、進路の幅を知れる。",
  },
];

const learningAreas = [
  {
    index: "01",
    title: "Design",
    text: "見やすさ、わかりやすさ、ブランドらしさを画面に落とし込む。",
  },
  {
    index: "02",
    title: "UI / UX",
    text: "ユーザーの行動を考え、使いやすく続けたくなる体験を設計する。",
  },
  {
    index: "03",
    title: "Frontend",
    text: "HTML、CSS、JavaScriptで操作感とWebならではの表現を実装する。",
  },
  {
    index: "04",
    title: "Backend",
    text: "PHPやデータベースを理解し、サービスの仕組みをつくる。",
  },
  {
    index: "05",
    title: "Marketing",
    text: "SEO、SNS、アナリティクスを使い、作ったものを届けて改善する。",
  },
];

const roadmap = [
  {
    year: "1年次",
    title: "基礎をつかむ",
    text: "デザインツール、HTML/CSS、情報設計の考え方を学び、Web制作の入口に立つ。",
    outputs: ["静的サイト", "デザインカンプ"],
  },
  {
    year: "2年次",
    title: "表現を広げる",
    text: "JavaScriptの動き、UI/UX、コンテンツ設計を課題制作で試す。",
    outputs: ["インタラクション", "UIプロトタイプ"],
  },
  {
    year: "3年次",
    title: "サービスにする",
    text: "バックエンド、データ、分析を組み合わせて、使われるWebサービスに近づける。",
    outputs: ["Webアプリ", "改善提案"],
  },
  {
    year: "4年次",
    title: "社会へ出す",
    text: "卒業制作、企業ゼミ、インターンを通じて、作品をポートフォリオとして磨く。",
    outputs: ["卒業制作", "ポートフォリオ"],
  },
];

const campusScenes = [
  {
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2023/07/DSC04555.jpg",
    title: "講義で考える",
    text: "企画やUIの意図を言語化し、講師や仲間からフィードバックを受ける。",
  },
  {
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2023/07/DSC04287.jpg",
    title: "制作しながら学ぶ",
    text: "PCを開き、デザインと実装を行き来しながら手を動かして身につける。",
  },
  {
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2023/07/DSC00595.jpg",
    title: "発表して磨く",
    text: "完成物だけでなく、狙い、改善点、ユーザーへの届け方まで発表する。",
  },
];

const courses = [
  {
    visual: "<layout />",
    title: "Webサイトスタイリング演習",
    text: "CSSレイアウトと再現力を学び、デザインを実装できる状態まで磨く。",
  },
  {
    visual: "motion.add()",
    title: "Webサイト表現演習",
    text: "JavaScriptで操作性とエンタテインメント性のあるWeb表現をつくる。",
  },
  {
    visual: "user flow",
    title: "UI / UX",
    text: "体験の全体像を捉え、使いやすさと価値がつながる画面を考える。",
  },
];

const works = [
  {
    title: "Que",
    text: "未来と今を繋ぐ、自己調整型時間ブリーフィングアプリ。",
    tag: "Service UI",
    author: "LEE JUN SUNG",
    url: "https://www.dhw.ac.jp/gallery/queapp/",
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2026/05/res2-A1B01151-1100x733.jpg",
  },
  {
    title: "Kotoful",
    text: "吃音とともに生きる人たちの声を集めた冊子作品。",
    tag: "Web",
    author: "松橋彩音",
    url: "https://www.dhw.ac.jp/gallery/kotoful/",
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2026/04/res-A1B01063-1100x733.jpg",
  },
  {
    title: "廣東道",
    text: "広東語文化を発信するプロジェクト。",
    tag: "Culture",
    author: "張 敏徳",
    url: "https://www.dhw.ac.jp/gallery/cantonese/",
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2024/03/image13.jpeg",
  },
  {
    title: "居酒屋ウェブサイトの在り方",
    text: "飲食店Webサイトの役割を問い直す研究・制作。",
    tag: "Research",
    author: "笹沼 凜生",
    url: "https://www.dhw.ac.jp/gallery/izakaya_website/",
    image: "https://www.dhw.ac.jp/wp/wp-content/uploads/2024/03/image18.jpg",
  },
];

const studentVoices = [
  {
    name: "坂上緋南さん / 2020年入学",
    label: "Webサイトスタイリング演習",
    text: "CSSの基礎だけでなく、デザインカンプを実装へつなげる再現力やプロジェクトの進め方を学んだ授業として紹介。",
    source: "公式学部ページ掲載",
  },
  {
    name: "NOW / 受験生のリアル",
    label: "入試前の本音",
    text: "秋トラ合格者が入試前の迷いや準備を語る記事を導線化し、高校生が自分ごと化できる入口にする。",
    source: "在学生のいま",
  },
  {
    name: "NOW / 初心者からのスタート",
    label: "未経験からの成長",
    text: "未経験でも挑戦できることを伝える在学生記事を配置し、入学前の不安を下げる役割を持たせる。",
    source: "在学生のいま",
  },
];

const teachers = [
  {
    label: "Technology",
    name: "杉本 展将 教授",
    title: "テクノロジーで価値を創造するITアーキテクト",
    text: "サービスの構造、データ、仕組みを理解し、Webを支える技術視点を学ぶ。",
  },
  {
    label: "Design",
    name: "栗谷 幸助 教授",
    title: "Webデザイン業界への夢先案内人",
    text: "画面設計、ビジュアル表現、制作現場で必要な判断力を学ぶ。",
  },
  {
    label: "Media",
    name: "占部 雅一 特任教授",
    title: "雑誌からWeb、モバイルへと遷移するメディアプロデューサー",
    text: "メディアやSNSの変化を捉え、ユーザーとの接点を考える。",
  },
  {
    label: "Development",
    name: "小松 学史 特任准教授",
    title: "デザインから開発まで横断するエンジニア",
    text: "企画、UI、実装を横断し、作品を社会に出す視点を身につける。",
  },
];

const careerPaths = [
  "Web制作会社",
  "IT企業",
  "広告・マーケティング",
  "事業会社のデザイン職",
  "UI/UXデザイナー",
  "フロントエンドエンジニア",
  "Webディレクター",
  "サービス企画職",
];

const alumniVoices = [
  {
    role: "ZOZO / サービスデザイナー内定",
    text: "DHU在学中の学びをキャリアへつなげた卒業生記事を、進路の具体例として紹介。",
    source: "卒業生の声",
  },
  {
    role: "LINEヤフー / UI・UXデザイナー",
    text: "作りたいデザインを追い求めた日々を語る卒業生記事を、Web系進路の実例として配置。",
    source: "卒業生の声",
  },
  {
    role: "ITエンジニア / 大手企業就職",
    text: "就活の経験から必要なマインドを語る記事を添え、職種の幅を伝える。",
    source: "卒業生の声",
  },
];

const employmentHighlights = [
  {
    value: "97.0%",
    label: "2024年度卒業生 就職内定率",
    note: "就職希望者167名 / 内定者162名",
  },
  {
    value: "Web・IT",
    label: "関連企業実績",
    note: "pixiv、Goodpatch、LINEヤフー、GMOインターネットグループなど",
  },
];

const companyGroups = [
  {
    label: "Web・グラフィック",
    names: ["dip", "ピクシブ", "Live2D", "キノトロープ", "グッドパッチ"],
  },
  {
    label: "IT・情報・通信",
    names: ["GMOインターネットグループ", "LINEヤフー", "ソニー", "ソフトバンクグループ"],
  },
  {
    label: "広告",
    names: ["楽天グループ", "サイバーエージェント", "電通", "博報堂プロダクツ"],
  },
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="DHU Web Renewal Concept">
          <span className="brandMark">DHU</span>
          <span>Web Category</span>
        </a>
        <nav className="nav" aria-label="ページ内ナビゲーション">
          <a href="#target">入口</a>
          <a href="#learn">学び</a>
          <a href="#campus">講義風景</a>
          <a href="#works">学生作品</a>
          <a href="#voices">声と進路</a>
          <a href="#entry">資料請求</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroInner">
            <div>
              <span className="eyebrow">DHU Web category</span>
              <h1 id="hero-title" className="heroTitle">
                <span>Webで、</span>
                <span>体験を</span>
                <span>設計する</span>
              </h1>
              <p className="heroCopy">
                デザインも、コードも、企画も気になる。そんな高校生へ。
                Webカテゴリーでは、アイデアを画面にし、サービスとして人に届ける力を実践的に学びます。
              </p>
              <div className="heroActions">
                <a className="button" href="#learn">学びを見る</a>
                <a className="button secondary" href="#works">成果物を見る</a>
              </div>
              <div className="heroFacts" aria-label="学びの特徴">
                <div className="fact">
                  <strong>Design</strong>
                  <span>情報設計、UI、ビジュアル表現</span>
                </div>
                <div className="fact">
                  <strong>Code</strong>
                  <span>HTML、CSS、JavaScript、PHP</span>
                </div>
                <div className="fact">
                  <strong>Career</strong>
                  <span>作品制作、発表、ポートフォリオ</span>
                </div>
              </div>
              <div className="kineticRail" aria-hidden="true">
                <span>Design</span>
                <span>UX</span>
                <span>Code</span>
                <span>Service</span>
                <span>Portfolio</span>
              </div>
            </div>

            <div className="heroVisual" aria-label="制作現場を表すビジュアル" data-parallax="0.04">
              <img src="https://www.dhw.ac.jp/wp/wp-content/uploads/2023/08/main-web.jpg" alt="Web制作画面を見ている学生" data-parallax="0.02" />
              <div className="screenStack" data-parallax="-0.08">
                <div className="browserWindow">
                  <div className="browserBar">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="browserBody">
                    <div className="uiPanel">
                      <div className="uiChipRow">
                        <span className="uiChip">UI/UX</span>
                        <span className="uiChip">Frontend</span>
                        <span className="uiChip">Portfolio</span>
                      </div>
                      <div className="uiTitle">Idea to Web Service</div>
                      <div className="miniGrid">
                        <div className="miniCard">ユーザー調査</div>
                        <div className="miniCard">情報設計</div>
                        <div className="miniCard">実装</div>
                        <div className="miniCard">発表</div>
                      </div>
                    </div>
                    <div className="codePanel" aria-hidden="true">
                      <div><span className="cyan">const</span> idea = <span className="lime">&quot;future&quot;</span>;</div>
                      <div><span className="cyan">design</span>(user.needs);</div>
                      <div><span className="magenta">build</span>(prototype);</div>
                      <div>share();</div>
                      <div>improve();</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="target" className="section compactSection" aria-labelledby="target-title">
          <div className="sectionInner">
            <div className="targetPanel">
              <div>
                <span className="eyebrow">For future creators</span>
                <h2 id="target-title">迷いを、制作に変える</h2>
                <p>
                  デザイン、コード、企画。
                  まだ選びきれない興味を、作品づくりの入口にします。
                </p>
              </div>
              <ul className="targetList">
                {entryPoints.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="learn" className="section" aria-labelledby="learn-title">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 id="learn-title">Webの5つの力</h2>
              <p className="sectionLead">
                デザインから実装、届け方まで。
                Web制作の流れをひと通り学びます。
              </p>
            </div>
            <div className="learningGrid fiveColumns">
              {learningAreas.map((area) => (
                <article className="learningCard" key={area.title}>
                  <span className="cardIndex">{area.index}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="campus" className="section photoSection" aria-labelledby="campus-title">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 id="campus-title">授業の空気</h2>
              <p className="sectionLead">
                考える、作る、発表する。
                授業の流れを写真で確認できます。
              </p>
            </div>
            <div className="sceneGrid">
              {campusScenes.map((scene) => (
                <article className="sceneCard" key={scene.title} data-parallax="0.025">
                  <img src={scene.image} alt={scene.title} />
                  <div>
                    <h3>{scene.title}</h3>
                    <p>{scene.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="section dark" aria-labelledby="roadmap-title">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 id="roadmap-title">4年間の道筋</h2>
              <p className="sectionLead">
                基礎から卒業制作まで。
                学年ごとの学びを追えます。
              </p>
            </div>
            <div className="roadmap">
              {roadmap.map((item) => (
                <article className="roadmapItem" key={item.title}>
                  <span className="roadmapYear">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <div className="roadmapOutput">
                    {item.outputs.map((output) => (
                      <span key={output}>{output}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="section" aria-labelledby="courses-title">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 id="courses-title">授業から作品へ</h2>
              <p className="sectionLead">
                授業で学んだことを、
                課題制作として形にします。
              </p>
            </div>
            <div className="courses">
              {courses.map((course) => (
                <article className="course" key={course.title}>
                  <div className="courseVisual">{course.visual}</div>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="section dark" aria-labelledby="works-title">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 id="works-title">学生作品を見る</h2>
              <p className="sectionLead">
                気になる作品を選ぶと、
                左のWebプレビューが切り替わります。
              </p>
            </div>
            <WorksShowcase works={works} />
            <div className="exhibitionStrip" aria-label="成果物展示の見せ方">
              <span>Digital Exhibition</span>
              <strong>作品名、作者、学習領域、使用技術まで確認できる。授業の成果が、そのままポートフォリオにつながります。</strong>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="teacher-title">
          <div className="sectionInner">
            <div className="teacherGrid">
              <div className="teacherMessage">
                <span className="eyebrow">Teachers</span>
                <h2 id="teacher-title">現役プロに学ぶ</h2>
                <p>
                  技術、デザイン、メディア、開発を、
                  現場目線で学びます。
                </p>
              </div>
              <div className="teacherList">
                {teachers.map((teacher) => (
                  <article className="teacher" key={teacher.label}>
                    <div className="teacherTop">
                      <span className="teacherAvatar">{teacher.name.slice(0, 1)}</span>
                      <small>{teacher.label}</small>
                    </div>
                    <strong>{teacher.name}</strong>
                    <h3>{teacher.title}</h3>
                    <p>{teacher.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="voices" className="section voiceSection" aria-labelledby="voices-title">
          <div className="sectionInner">
            <div className="sectionHead">
              <h2 id="voices-title">在学生のリアル</h2>
              <p className="sectionLead">
                先輩の声から、
                入学後の学びが見えてきます。
              </p>
            </div>
            <div className="voiceGrid">
              {studentVoices.map((voice) => (
                <article className="voiceCard" key={voice.label}>
                  <small>{voice.label}</small>
                  <p>{voice.text}</p>
                  <div>
                    <strong>{voice.name}</strong>
                    <span>{voice.source}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark" aria-labelledby="career-title">
          <div className="sectionInner">
            <div className="careerLayout">
              <div>
                <span className="eyebrow light">Career</span>
                <h2 id="career-title">学びの先へ</h2>
                <p className="sectionLead">
                  制作会社、IT企業、広告、事業会社へ。
                  Webの学びは進路の幅につながります。
                </p>
                <div className="employmentGrid">
                  {employmentHighlights.map((item) => (
                    <article className="employmentCard" key={item.value}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                      <p>{item.note}</p>
                    </article>
                  ))}
                </div>
                <div className="careerTags" aria-label="想定される進路">
                  {careerPaths.map((path) => (
                    <span key={path}>{path}</span>
                  ))}
                </div>
              </div>
              <div className="alumniList" data-parallax="-0.02">
                <div className="companyPanel">
                  <h3>内定企業実績の抜粋</h3>
                  {companyGroups.map((group) => (
                    <div className="companyGroup" key={group.label}>
                      <small>{group.label}</small>
                      <p>{group.names.join(" / ")}</p>
                    </div>
                  ))}
                </div>
                {alumniVoices.map((voice) => (
                  <article className="alumniCard" key={voice.role}>
                    <small>{voice.role}</small>
                    <p>{voice.text}</p>
                    <span>{voice.source}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="entry" className="section" aria-labelledby="entry-title">
          <div className="sectionInner">
            <div className="cta">
              <div>
                <h2 id="entry-title">実際に見てみる</h2>
                <p>
                  資料請求、オープンキャンパス、
                  入試情報へ。
                </p>
              </div>
              <div className="ctaActions">
                <a className="button" href="https://www.dhw.ac.jp/form/shiryo/" target="_blank" rel="noreferrer">資料請求</a>
                <a className="button secondary" href="https://www.dhw.ac.jp/oc/" target="_blank" rel="noreferrer">オープンキャンパス</a>
                <a className="button secondary" href="https://www.dhw.ac.jp/admission/" target="_blank" rel="noreferrer">入試情報</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="siteFooter">
        <div className="siteFooterInner">
          <span>DHU Web Category promotional landing page</span>
          <span>Source: dhw.ac.jp/faculty/web/</span>
        </div>
      </footer>
    </>
  );
}
