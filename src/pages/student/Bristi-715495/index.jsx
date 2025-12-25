import React from "react";

const BristiPortfolio = () => {
  return (
    <>
      <style>{`
                .bristi-shell {
                    min-height: 100vh;
                    font-family: "Poppins", "Inter", system-ui, sans-serif;
                    background: radial-gradient(circle at 0% 0%, #fed7aa 0%, #fdba74 40%, #fef3c7 100%);
                    color: #9a3412;
                    padding: 48px 20px 80px;
                }
                .bristi-hero-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                    max-width: 1120px;
                    margin: 0 auto 64px;
                }
                .bristi-hero-card {
                    border-radius: 32px;
                    padding: 32px;
                    background: #ffffff;
                    border: 1px solid rgba(234,88,12,0.18);
                    box-shadow: 0 25px 60px rgba(234,88,12,0.18);
                    position: relative;
                    overflow: hidden;
                }
                .bristi-hero-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 16px;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    border-radius: 999px;
                    background: rgba(234,88,12,0.12);
                    color: #c2410c;
                    margin-bottom: 20px;
                }
                .bristi-hero-name {
                    font-size: clamp(38px, 5.6vw, 56px);
                    margin: 0;
                    color: #7c2d12;
                    letter-spacing: -1px;
                }
                .bristi-hero-name span {
                    color: #ea580c;
                }
                .bristi-hero-meta {
                    margin: 12px 0 18px;
                    font-size: 18px;
                    color: #d97706;
                }
                .bristi-hero-bio {
                    margin: 0 0 24px;
                    color: #c2410c;
                    line-height: 1.7;
                }
                .bristi-hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .bristi-hero-btn {
                    text-decoration: none;
                    padding: 12px 26px;
                    border-radius: 999px;
                    font-weight: 600;
                    font-size: 14px;
                    transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
                }
                .bristi-hero-btn.primary {
                    background: #ea580c;
                    color: #fff7ed;
                    box-shadow: 0 12px 30px rgba(234,88,12,0.35);
                }
                .bristi-hero-btn.secondary {
                    border: 1px solid rgba(217,119,6,0.4);
                    color: #c2410c;
                    background: #fef3c7;
                }
                .bristi-hero-btn:hover {
                    transform: translateY(-1px);
                    opacity: 0.9;
                }
                .bristi-stat-panel {
                    border-radius: 32px;
                    padding: 32px;
                    background: linear-gradient(135deg, #fed7aa, #fdba74);
                    border: 1px solid rgba(234,88,12,0.18);
                    display: grid;
                    gap: 22px;
                }
                .bristi-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
                    gap: 18px;
                }
                .bristi-stat-block h3 {
                    margin: 0;
                    font-size: 34px;
                    color: #7c2d12;
                }
                .bristi-stat-block span {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-size: 12px;
                    color: #ea580c;
                    margin-top: 4px;
                }
                .bristi-stat-note {
                    font-size: 14px;
                    color: #9a3412;
                    line-height: 1.6;
                }

                .bristi-section {
                    max-width: 1120px;
                    margin: 0 auto 64px;
                    padding: 32px;
                    border-radius: 36px;
                    background: #ffffff;
                    border: 1px solid rgba(234,88,12,0.22);
                    box-shadow: 0 18px 45px rgba(234,88,12,0.14);
                }
                .bristi-section h2 {
                    margin: 0;
                    text-align: center;
                    font-size: 30px;
                    color: #c2410c;
                }
                .bristi-section p.bristi-lead {
                    margin-top: 14px;
                    text-align: center;
                    color: #d97706;
                    line-height: 1.7;
                }

                .bristi-skill-list {
                    margin-top: 28px;
                    display: grid;
                    gap: 16px;
                }
                .bristi-skill-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .bristi-skill-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #c2410c;
                    font-weight: 600;
                }
                .bristi-skill-bar {
                    height: 10px;
                    border-radius: 999px;
                    background: rgba(234,88,12,0.18);
                    overflow: hidden;
                }
                .bristi-skill-bar span {
                    display: block;
                    height: 100%;
                    background: linear-gradient(90deg, #fb923c, #ea580c);
                }

                .bristi-info-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .bristi-info-card {
                    border-radius: 24px;
                    padding: 20px;
                    background: #fef3c7;
                    border: 1px solid rgba(234,88,12,0.25);
                }
                .bristi-info-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #d97706;
                }
                .bristi-info-card p {
                    margin: 6px 0 0;
                    font-size: 16px;
                    color: #7c2d12;
                    font-weight: 600;
                }

                .bristi-project-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 22px;
                }
                .bristi-project-card {
                    border-radius: 26px;
                    padding: 22px;
                    background: #fff7ed;
                    border: 1px solid rgba(234,88,12,0.22);
                    box-shadow: 0 12px 30px rgba(234,88,12,0.12);
                    min-height: 200px;
                }
                .bristi-project-type {
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #fb923c;
                    text-transform: uppercase;
                }
                .bristi-project-card h3 {
                    margin: 10px 0 8px;
                    color: #c2410c;
                    font-size: 18px;
                }
                .bristi-project-card p {
                    margin: 0 0 8px;
                    color: #c2410c;
                    line-height: 1.5;
                    font-size: 14px;
                }
                .bristi-project-stack {
                    font-size: 13px;
                    color: #ea580c;
                    font-weight: 500;
                }

                .bristi-testimonial-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 20px;
                }
                .bristi-testimonial-card {
                    padding: 22px;
                    border-radius: 24px;
                    background: #fff7ed;
                    border: 1px solid rgba(234,88,12,0.28);
                    font-style: italic;
                    color: #c2410c;
                    box-shadow: 0 12px 30px rgba(234,88,12,0.14);
                }
                .bristi-testimonial-card span {
                    display: block;
                    margin-top: 10px;
                    color: #9a3412;
                    font-style: normal;
                    font-size: 14px;
                    font-weight: 600;
                }

                .bristi-contact-panel {
                    margin-top: 26px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .bristi-contact-card {
                    border-radius: 22px;
                    padding: 20px;
                    background: #fdba74;
                    border: 1px solid rgba(234,88,12,0.3);
                }
                .bristi-contact-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #c2410c;
                }
                .bristi-contact-card p {
                    margin: 6px 0 0;
                    font-size: 15px;
                    color: #7c2d12;
                    font-weight: 600;
                }

                @media (max-width: 600px) {
                    .bristi-hero-actions { flex-direction: column; }
                    .bristi-section, .bristi-hero-card, .bristi-stat-panel { padding: 24px; }
                }
            `}</style>

      <div className="bristi-shell">
        <div className="bristi-hero-grid">
          <div className="bristi-hero-card">
            <div className="bristi-hero-pill">
              Focused Computer Science Student
            </div>
            <h1 className="bristi-hero-name">
              <span>Osna Akter Bristi</span>
            </h1>
            <p className="bristi-hero-meta">Roll 715495</p>
            <p className="bristi-hero-bio">
              I am building a strong base in computer science—learning core
              theory, problem solving, and how to express ideas clearly in both
              code and simple web pages using HTML and CSS.
            </p>
            <div className="bristi-hero-actions">
              <a className="bristi-hero-btn primary" href="#academics">
                View Academic Profile
              </a>
              <a className="bristi-hero-btn secondary" href="#contact">
                Contact Info
              </a>
            </div>
          </div>

          {/* <div className="bristi-stat-panel">
                        <div className="bristi-stat-grid">
                            <div className="bristi-stat-block">
                                <h3>1</h3>
                                <span>Roll Number</span>
                                <p className="bristi-stat-note">715495 · unique ID that tracks her academic journey.</p>
                            </div>
                            <div className="bristi-stat-block">
                                <h3>Student</h3>
                                <span>Current Status</span>
                                <p className="bristi-stat-note">Actively studying, learning, and preparing for examinations.</p>
                            </div>
                            <div className="bristi-stat-block">
                                <h3>Growing</h3>
                                <span>Learning Path</span>
                                <p className="bristi-stat-note">Building skills in web development and problem solving.</p>
                            </div>
                        </div>
                    </div> */}
        </div>

        <section className="bristi-section">
          <h2>Learning &amp; Projects</h2>
          <p className="bristi-lead">
            Simple learning tasks and practice projects that will slowly grow
            into a full portfolio.
          </p>
          <div className="bristi-project-grid">
            <article className="bristi-project-card">
              <p className="bristi-project-type">Practice</p>
              <h3>Personal Portfolio Layout</h3>
              <p>
                A static HTML and CSS layout that introduces her name, roll, and
                academic focus using clean sections.
              </p>
              <p className="bristi-project-stack">Built with: HTML · CSS</p>
            </article>
            <article className="bristi-project-card">
              <p className="bristi-project-type">Study</p>
              <h3>Notes &amp; Summaries</h3>
              <p>
                Organizing study notes into simple, readable pages to revise
                topics before exams and keep track of progress.
              </p>
              <p className="bristi-project-stack">
                Focus: Clear Writing · Consistency
              </p>
            </article>
            <article className="bristi-project-card">
              <p className="bristi-project-type">Goal</p>
              <h3>Future Web Projects</h3>
              <p>
                Plans to expand this page with more detailed academic records,
                results and small web experiments.
              </p>
              <p className="bristi-project-stack">Next: More HTML · More CSS</p>
            </article>
          </div>
        </section>

        <section id="academics" className="bristi-section">
          <h2>Academic Snapshot</h2>
          <p className="bristi-lead">
            A brief overview of Osna Akter Bristi's basic academic identity
            inside this portfolio.
          </p>
          <div className="bristi-info-grid">
            <div className="bristi-info-card">
              <label>Full Name</label>
              <p>Osna Akter Bristi</p>
            </div>
            <div className="bristi-info-card">
              <label>Roll</label>
              <p>715495</p>
            </div>
          </div>

          <div className="bristi-skill-list">
            <div className="bristi-skill-row">
              <div className="bristi-skill-meta">
                <span>HTML &amp; CSS Basics</span>
                <span>Growing</span>
              </div>
              <div className="bristi-skill-bar">
                <span style={{ width: "55%" }} />
              </div>
            </div>
            {/* <div className="bristi-skill-row">
              <div className="bristi-skill-meta">
                <span>Problem Solving</span>
                <span>Improving</span>
              </div>
              <div className="bristi-skill-bar">
                <span style={{ width: "50%" }} />
              </div>
            </div> */}
          </div>
        </section>

        <section className="bristi-section">
          <h2>Character &amp; Support</h2>
          <p className="bristi-lead">
            A student identity is more than marks—it is also discipline,
            patience, and willingness to learn.
          </p>
          <div className="bristi-testimonial-grid">
            <blockquote className="bristi-testimonial-card">
              "Bristi is calm, careful, and consistent with her work—she asks
              questions when needed and completes tasks with focus."
              <span>Teacher's Observation</span>
            </blockquote>
            <blockquote className="bristi-testimonial-card">
              "She keeps her study space organized and helps friends when they
              get stuck in small problems."
              <span>Friend's Perspective</span>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
};

export default BristiPortfolio;
