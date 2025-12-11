import React from 'react';

const HanjalalPortfolio = () => {
    return (
        <>
            <style>{`
                .hanjalal-shell {
                    min-height: 100vh;
                    font-family: "Poppins", "Inter", system-ui, sans-serif;
                    background: radial-gradient(circle at 0% 0%, #cffafe 0%, #a5f3fc 40%, #e0f2fe 100%);
                    color: #0e7490;
                    padding: 48px 20px 80px;
                }
                .hanjalal-hero-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                    max-width: 1120px;
                    margin: 0 auto 64px;
                }
                .hanjalal-hero-card {
                    border-radius: 32px;
                    padding: 32px;
                    background: #ffffff;
                    border: 1px solid rgba(14,165,233,0.18);
                    box-shadow: 0 25px 60px rgba(14,165,233,0.18);
                    position: relative;
                    overflow: hidden;
                }
                .hanjalal-hero-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 16px;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    border-radius: 999px;
                    background: rgba(14,165,233,0.12);
                    color: #0369a1;
                    margin-bottom: 20px;
                }
                .hanjalal-hero-name {
                    font-size: clamp(38px, 5.6vw, 56px);
                    margin: 0;
                    color: #0c4a6e;
                    letter-spacing: -1px;
                }
                .hanjalal-hero-name span {
                    color: #0ea5e9;
                }
                .hanjalal-hero-meta {
                    margin: 12px 0 18px;
                    font-size: 18px;
                    color: #0284c7;
                }
                .hanjalal-hero-bio {
                    margin: 0 0 24px;
                    color: #0369a1;
                    line-height: 1.7;
                }
                .hanjalal-hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .hanjalal-hero-btn {
                    text-decoration: none;
                    padding: 12px 26px;
                    border-radius: 999px;
                    font-weight: 600;
                    font-size: 14px;
                    transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
                }
                .hanjalal-hero-btn.primary {
                    background: #0ea5e9;
                    color: #f0f9ff;
                    box-shadow: 0 12px 30px rgba(14,165,233,0.35);
                }
                .hanjalal-hero-btn.secondary {
                    border: 1px solid rgba(2,132,199,0.4);
                    color: #0369a1;
                    background: #e0f2fe;
                }
                .hanjalal-hero-btn:hover {
                    transform: translateY(-1px);
                    opacity: 0.9;
                }
                .hanjalal-stat-panel {
                    border-radius: 32px;
                    padding: 32px;
                    background: linear-gradient(135deg, #cffafe, #a5f3fc);
                    border: 1px solid rgba(14,165,233,0.18);
                    display: grid;
                    gap: 22px;
                }
                .hanjalal-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
                    gap: 18px;
                }
                .hanjalal-stat-block h3 {
                    margin: 0;
                    font-size: 34px;
                    color: #164e63;
                }
                .hanjalal-stat-block span {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-size: 12px;
                    color: #0ea5e9;
                    margin-top: 4px;
                }
                .hanjalal-stat-note {
                    font-size: 14px;
                    color: #075985;
                    line-height: 1.6;
                }

                .hanjalal-section {
                    max-width: 1120px;
                    margin: 0 auto 64px;
                    padding: 32px;
                    border-radius: 36px;
                    background: #ffffff;
                    border: 1px solid rgba(14,165,233,0.22);
                    box-shadow: 0 18px 45px rgba(14,165,233,0.14);
                }
                .hanjalal-section h2 {
                    margin: 0;
                    text-align: center;
                    font-size: 30px;
                    color: #0369a1;
                }
                .hanjalal-section p.hanjalal-lead {
                    margin-top: 14px;
                    text-align: center;
                    color: #0284c7;
                    line-height: 1.7;
                }

                .hanjalal-skill-list {
                    margin-top: 28px;
                    display: grid;
                    gap: 16px;
                }
                .hanjalal-skill-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .hanjalal-skill-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #0369a1;
                    font-weight: 600;
                }
                .hanjalal-skill-bar {
                    height: 10px;
                    border-radius: 999px;
                    background: rgba(14,165,233,0.18);
                    overflow: hidden;
                }
                .hanjalal-skill-bar span {
                    display: block;
                    height: 100%;
                    background: linear-gradient(90deg, #38bdf8, #0ea5e9);
                }

                .hanjalal-info-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .hanjalal-info-card {
                    border-radius: 24px;
                    padding: 20px;
                    background: #e0f2fe;
                    border: 1px solid rgba(14,165,233,0.25);
                }
                .hanjalal-info-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #0284c7;
                }
                .hanjalal-info-card p {
                    margin: 6px 0 0;
                    font-size: 16px;
                    color: #0c4a6e;
                    font-weight: 600;
                }

                .hanjalal-project-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 22px;
                }
                .hanjalal-project-card {
                    border-radius: 26px;
                    padding: 22px;
                    background: #f0f9ff;
                    border: 1px solid rgba(14,165,233,0.22);
                    box-shadow: 0 12px 30px rgba(14,165,233,0.12);
                    min-height: 200px;
                }
                .hanjalal-project-type {
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #38bdf8;
                    text-transform: uppercase;
                }
                .hanjalal-project-card h3 {
                    margin: 10px 0 8px;
                    color: #0369a1;
                    font-size: 18px;
                }
                .hanjalal-project-card p {
                    margin: 0 0 8px;
                    color: #0369a1;
                    line-height: 1.5;
                    font-size: 14px;
                }
                .hanjalal-project-stack {
                    font-size: 13px;
                    color: #0ea5e9;
                    font-weight: 500;
                }

                .hanjalal-testimonial-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 20px;
                }
                .hanjalal-testimonial-card {
                    padding: 22px;
                    border-radius: 24px;
                    background: #f0f9ff;
                    border: 1px solid rgba(14,165,233,0.28);
                    font-style: italic;
                    color: #0369a1;
                    box-shadow: 0 12px 30px rgba(14,165,233,0.14);
                }
                .hanjalal-testimonial-card span {
                    display: block;
                    margin-top: 10px;
                    color: #075985;
                    font-style: normal;
                    font-size: 14px;
                    font-weight: 600;
                }

                .hanjalal-contact-panel {
                    margin-top: 26px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .hanjalal-contact-card {
                    border-radius: 22px;
                    padding: 20px;
                    background: #a5f3fc;
                    border: 1px solid rgba(14,165,233,0.3);
                }
                .hanjalal-contact-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #0369a1;
                }
                .hanjalal-contact-card p {
                    margin: 6px 0 0;
                    font-size: 15px;
                    color: #0c4a6e;
                    font-weight: 600;
                }

                @media (max-width: 600px) {
                    .hanjalal-hero-actions { flex-direction: column; }
                    .hanjalal-section, .hanjalal-hero-card, .hanjalal-stat-panel { padding: 24px; }
                }
            `}</style>

            <div className="hanjalal-shell">
                <div className="hanjalal-hero-grid">
                    <div className="hanjalal-hero-card">
                        <div className="hanjalal-hero-pill">Focused Computer Science Student</div>
                        <h1 className="hanjalal-hero-name">
                            MD. <span>Abu Hanjalal</span>
                        </h1>
                        <p className="hanjalal-hero-meta">Roll 715546 · Reg 150224882</p>
                        <p className="hanjalal-hero-bio">
                            I am building a strong base in computer science—learning core theory, problem solving,
                            and how to express ideas clearly in both code and simple web pages using HTML and CSS.
                        </p>
                        <div className="hanjalal-hero-actions">
                            <a className="hanjalal-hero-btn primary" href="#academics">View Academic Profile</a>
                            <a className="hanjalal-hero-btn secondary" href="#contact">Contact Info</a>
                        </div>
                    </div>

                    <div className="hanjalal-stat-panel">
                        <div className="hanjalal-stat-grid">
                            <div className="hanjalal-stat-block">
                                <h3>1</h3>
                                <span>Roll Number</span>
                                <p className="hanjalal-stat-note">715546 · unique ID that tracks his academic journey.</p>
                            </div>
                            <div className="hanjalal-stat-block">
                                <h3>1</h3>
                                <span>Registration</span>
                                <p className="hanjalal-stat-note">150224882 · official registration for examination records.</p>
                            </div>
                            <div className="hanjalal-stat-block">
                                <h3>Student</h3>
                                <span>Current Status</span>
                                <p className="hanjalal-stat-note">Actively studying, learning, and preparing for examinations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="academics" className="hanjalal-section">
                    <h2>Academic Snapshot</h2>
                    <p className="hanjalal-lead">
                        A brief overview of MD. Abu Hanjalal's basic academic identity inside this portfolio.
                    </p>
                    <div className="hanjalal-info-grid">
                        <div className="hanjalal-info-card">
                            <label>Full Name</label>
                            <p>MD. Abu Hanjalal</p>
                        </div>
                        <div className="hanjalal-info-card">
                            <label>Roll</label>
                            <p>715546</p>
                        </div>
                        <div className="hanjalal-info-card">
                            <label>Registration</label>
                            <p>150224882</p>
                        </div>
                    </div>

                    <div className="hanjalal-skill-list">
                        <div className="hanjalal-skill-row">
                            <div className="hanjalal-skill-meta">
                                <span>HTML &amp; CSS Basics</span>
                                <span>Growing</span>
                            </div>
                            <div className="hanjalal-skill-bar">
                                <span style={{ width: '55%' }} />
                            </div>
                        </div>
                        <div className="hanjalal-skill-row">
                            <div className="hanjalal-skill-meta">
                                <span>Problem Solving</span>
                                <span>Improving</span>
                            </div>
                            <div className="hanjalal-skill-bar">
                                <span style={{ width: '50%' }} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="hanjalal-section">
                    <h2>Learning &amp; Projects</h2>
                    <p className="hanjalal-lead">
                        Simple learning tasks and practice projects that will slowly grow into a full portfolio.
                    </p>
                    <div className="hanjalal-project-grid">
                        <article className="hanjalal-project-card">
                            <p className="hanjalal-project-type">Practice</p>
                            <h3>Personal Portfolio Layout</h3>
                            <p>
                                A static HTML and CSS layout that introduces his name, roll, registration and academic
                                focus using clean sections.
                            </p>
                            <p className="hanjalal-project-stack">Built with: HTML · CSS</p>
                        </article>
                        <article className="hanjalal-project-card">
                            <p className="hanjalal-project-type">Study</p>
                            <h3>Notes &amp; Summaries</h3>
                            <p>
                                Organizing study notes into simple, readable pages to revise topics before exams and keep
                                track of progress.
                            </p>
                            <p className="hanjalal-project-stack">Focus: Clear Writing · Consistency</p>
                        </article>
                        <article className="hanjalal-project-card">
                            <p className="hanjalal-project-type">Goal</p>
                            <h3>Future Web Projects</h3>
                            <p>
                                Plans to expand this page with more detailed academic records, results and small web
                                experiments.
                            </p>
                            <p className="hanjalal-project-stack">Next: More HTML · More CSS</p>
                        </article>
                    </div>
                </section>

                <section className="hanjalal-section">
                    <h2>Character &amp; Support</h2>
                    <p className="hanjalal-lead">
                        A student identity is more than marks—it is also discipline, patience, and willingness to learn.
                    </p>
                    <div className="hanjalal-testimonial-grid">
                        <blockquote className="hanjalal-testimonial-card">
                            "Hanjalal is calm, careful, and consistent with his work—he asks questions when needed and
                            completes tasks with focus."
                            <span>Teacher's Observation</span>
                        </blockquote>
                        <blockquote className="hanjalal-testimonial-card">
                            "He keeps his study space organized and helps friends when they get stuck in small problems."
                            <span>Friend's Perspective</span>
                        </blockquote>
                    </div>
                </section>

                <section id="contact" className="hanjalal-section">
                    <h2>Contact &amp; Basic Info</h2>
                    <p className="hanjalal-lead">
                        Simple details to recognize MD. Abu Hanjalal in academic records and communication.
                    </p>
                    <div className="hanjalal-contact-panel">
                        <div className="hanjalal-contact-card">
                            <label>Student Name</label>
                            <p>MD. Abu Hanjalal</p>
                        </div>
                        <div className="hanjalal-contact-card">
                            <label>Roll Number</label>
                            <p>715546</p>
                        </div>
                        <div className="hanjalal-contact-card">
                            <label>Registration No.</label>
                            <p>150224882</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HanjalalPortfolio;