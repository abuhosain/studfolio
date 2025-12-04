import React from "react";

const highlights = [
  { label: "Roll", value: "724098" },
  { label: "Reg", value: "1502254520" },
  { label: "Discipline", value: "Graphics Design" },
];

const sparks = [
  "Brand systems & guidelines",
  "Creative direction for social",
  "Print & packaging mockups",
  "UI mood boards & prototypes",
];

const projects = [
  {
    title: "Lumen Festival",
    note: "Poster suite + animated teaser frames for an immersive art event.",
  },
  {
    title: "Bloom Botanicals",
    note: "Logo refresh with palette exploration for a minimalist skincare line.",
  },
  {
    title: "Wildcrafted",
    note: "Packaging concept photographed & composited for a boutique tea brand.",
  },
];

const tools = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Blender",
  "Lightroom",
  "InDesign",
];

const contact = [
  {
    label: "Email",
    value: "ayesha.designs@gmail.com",
    href: "mailto:ayesha.designs@gmail.com",
  },
  {
    label: "Behance",
    value: "behance.net/ayesha",
    href: "https://behance.net/ayesha",
  },
  {
    label: "Portfolio",
    value: "ayesha-creative.com",
    href: "https://ayesha-creative.com",
  },
];

const AyeshaPortfolio = () => (
  <>
    <style>{`
            .ayesha-wrap {
                min-height: 100vh;
                padding: 48px 18px 64px;
                background: #f4f1ec;
                color: #1e1b16;
                font-family: "DM Sans", "Inter", system-ui, sans-serif;
                display: flex;
                justify-content: center;
            }
            .ayesha-grid {
                width: min(1120px, 100%);
                display: grid;
                gap: 32px;
            }
            .hero-sheet {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                border-radius: 32px;
                background: #fff7f0;
                border: 1px solid #f0dcd0;
                box-shadow: 0 20px 50px rgba(30,27,22,0.08);
                overflow: hidden;
            }
            .hero-left {
                padding: 36px;
            }
            .hero-title {
                font-size: clamp(32px, 5vw, 56px);
                margin: 0;
                line-height: 1.1;
            }
            .hero-sub {
                margin-top: 8px;
                color: #8c6c5c;
                letter-spacing: 0.3em;
                font-size: 12px;
                text-transform: uppercase;
            }
            .hero-bio {
                margin-top: 18px;
                color: #4a3d36;
                line-height: 1.7;
            }
            .hero-tags {
                margin-top: 24px;
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
            }
            .hero-tags span {
                border: 1px dashed #ba8b70;
                padding: 6px 16px;
                border-radius: 999px;
                font-size: 13px;
                color: #8c6c5c;
            }
            .hero-right {
                background: #1e1b16;
                color: #f6efe6;
                padding: 36px;
                display: flex;
                flex-direction: column;
                gap: 18px;
                justify-content: center;
                align-items: center;
            }
            .hero-badge {
                width: 170px;
                height: 170px;
                border-radius: 32px;
                background: linear-gradient(135deg, #ec4899, #f9a8d4);
                box-shadow: 0 20px 60px rgba(236,72,153,0.35);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 64px;
                color: #1e1b16;
            }
            .hero-right p {
                margin: 0;
                color: #d7cdc2;
                text-align: center;
            }
            .hero-links {
                display: flex;
                gap: 12px;
                flex-wrap: wrap;
                justify-content: center;
            }
            .hero-links a {
                text-decoration: none;
                color: #1e1b16;
                background: #f8d8a8;
                padding: 10px 18px;
                border-radius: 999px;
                font-weight: 600;
                font-size: 14px;
            }
            .glass {
                background: #fffdf9;
                border: 1px solid #f0dcd0;
                border-radius: 30px;
                padding: 32px;
                box-shadow: 0 18px 40px rgba(30,27,22,0.06);
            }
            .section-heading {
                margin: 0 0 16px;
                font-size: 26px;
                color: #2d241f;
            }
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 20px;
            }
            .info-card {
                border-radius: 26px;
                padding: 24px;
                border: 1px solid #f0dcd0;
                background: #fffdf9;
                box-shadow: 0 8px 20px rgba(30,27,22,0.05);
            }
            .info-card h4 {
                margin: 0;
                font-size: 14px;
                color: #a87c69;
                text-transform: uppercase;
                letter-spacing: 0.3em;
            }
            .spark-list {
                margin-top: 12px;
                color: #5c4b43;
                line-height: 1.6;
            }
            .tools-list {
                margin-top: 12px;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            .tools-list span {
                border: 1px solid #e8d1be;
                padding: 8px 14px;
                border-radius: 14px;
                font-size: 13px;
                color: #6f5a50;
            }
            .project-board {
                display: grid;
                gap: 18px;
            }
            .project-row {
                border: 1px solid #f0dcd0;
                border-radius: 24px;
                padding: 20px 24px;
                background: #fffaf4;
            }
            .project-row h3 {
                margin: 0;
                font-size: 20px;
            }
            .project-row p {
                margin: 8px 0 0;
                color: #6d574f;
            }
            .highlight-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 16px;
            }
            .highlight-card {
                border: 1px solid #f0dcd0;
                border-radius: 20px;
                padding: 18px;
                background: #fffefb;
            }
            .contact-strip {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 16px;
            }
            .contact-card {
                border: 1px solid #efdfcf;
                border-radius: 18px;
                padding: 16px;
                background: #fffefb;
            }
            .contact-card a {
                color: #c17b5e;
                text-decoration: none;
                font-weight: 600;
            }
            @media (max-width: 640px) {
                .hero-left,
                .hero-right,
                .glass {
                    padding: 24px;
                }
            }
        `}</style>
    <main className="ayesha-wrap">
      <div className="ayesha-grid">
        <section className="hero-sheet">
          <div className="hero-left">
            <p className="hero-sub">Graphics Designer</p>
            <h1 className="hero-title">Mst Ayesha Khatun</h1>
            <p className="hero-bio">
              Crafting tactile stories with gradients, texture, and type.
              Pairing brand strategy with playful experimentation for prints,
              posts, and digital moods.
            </p>
            <div className="hero-tags">
              {highlights.map((item) => (
                <span key={item.label}>
                  {item.label}: {item.value}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-badge" aria-hidden="true">
              ✦
            </div>
            <p>Chittagong, Bangladesh</p>
            <div className="hero-links">
              <a href="#projects">Case Studies</a>
              <a href="#contact">Say Hi</a>
            </div>
          </div>
        </section>

        <section className="info-grid">
          <div className="info-card">
            <h4>What sparks joy</h4>
            <div className="spark-list">
              {sparks.map((item) => (
                <div key={item}>• {item}</div>
              ))}
            </div>
          </div>
          <div className="info-card">
            <h4>Tools & textures</h4>
            <div className="tools-list">
              {tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
          <div className="info-card">
            <h4>Currently exploring</h4>
            <p style={{ marginTop: "12px", color: "#5c4b43" }}>
              The intersection of 3D fabrics, gentle gradients, and tactile
              typography.
            </p>
          </div>
        </section>

        <section className="glass" id="projects">
          <h2 className="section-heading">Selected Works</h2>
          <div className="project-board">
            {projects.map((project) => (
              <div key={project.title} className="project-row">
                <h3>{project.title}</h3>
                <p>{project.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass">
          <h2 className="section-heading">Highlights</h2>
          <div className="highlight-grid">
            <div className="highlight-card">
              <strong>Freelance Designer · 2 yrs</strong>
              <p style={{ marginTop: "8px", color: "#6f5a50" }}>
                Packaging, social kits, and pitch visuals for local founders.
              </p>
            </div>
            <div className="highlight-card">
              <strong>Design Club Lead · BPI</strong>
              <p style={{ marginTop: "8px", color: "#6f5a50" }}>
                Hosting critiques, hands-on workshops, and brand jams.
              </p>
            </div>
            <div className="highlight-card">
              <strong>Adobe Certified Professional</strong>
              <p style={{ marginTop: "8px", color: "#6f5a50" }}>
                Illustrator + Photoshop tracks.
              </p>
            </div>
          </div>
        </section>

        <section className="glass" id="contact">
          <h2 className="section-heading">Let’s build together</h2>
          <div className="contact-strip">
            {contact.map((item) => (
              <div key={item.label} className="contact-card">
                <p
                  style={{
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    color: "#a87c69",
                  }}>
                  {item.label}
                </p>
                <a href={item.href}>{item.value}</a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  </>
);

export default AyeshaPortfolio;
