import React from 'react';

const AnnanaPortfolio = () => {
    return (
        <>
            <style>{`
                .annana-shell {
                    min-height: 100vh;
                    font-family: "Poppins", "Inter", system-ui, sans-serif;
                    background: radial-gradient(circle at 0% 0%, #ddd6fe 0%, #e9d5ff 40%, #f3e8ff 100%);
                    color: #1e1b4b;
                    padding: 48px 20px 80px;
                }
                .annana-hero-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                    max-width: 1120px;
                    margin: 0 auto 64px;
                }
                .annana-hero-card {
                    border-radius: 32px;
                    padding: 32px;
                    background: #ffffff;
                    border: 1px solid rgba(139,92,246,0.18);
                    box-shadow: 0 25px 60px rgba(139,92,246,0.18);
                    position: relative;
                    overflow: hidden;
                }
                .annana-hero-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 16px;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    border-radius: 999px;
                    background: rgba(139,92,246,0.12);
                    color: #6b21a8;
                    margin-bottom: 20px;
                }
                .annana-hero-name {
                    font-size: clamp(38px, 5.6vw, 56px);
                    margin: 0;
                    color: #4c1d95;
                    letter-spacing: -1px;
                }
                .annana-hero-name span {
                    color: #8b5cf6;
                }
                .annana-hero-meta {
                    margin: 12px 0 18px;
                    font-size: 18px;
                    color: #7c3aed;
                }
                .annana-hero-bio {
                    margin: 0 0 24px;
                    color: #6b21a8;
                    line-height: 1.7;
                }
                .annana-hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .annana-hero-btn {
                    text-decoration: none;
                    padding: 12px 26px;
                    border-radius: 999px;
                    font-weight: 600;
                    font-size: 14px;
                    transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
                }
                .annana-hero-btn.primary {
                    background: #8b5cf6;
                    color: #faf5ff;
                    box-shadow: 0 12px 30px rgba(139,92,246,0.35);
                }
                .annana-hero-btn.secondary {
                    border: 1px solid rgba(124,58,237,0.4);
                    color: #6b21a8;
                    background: #f3e8ff;
                }
                .annana-hero-btn:hover {
                    transform: translateY(-1px);
                    opacity: 0.9;
                }
                .annana-stat-panel {
                    border-radius: 32px;
                    padding: 32px;
                    background: linear-gradient(135deg, #ddd6fe, #e9d5ff);
                    border: 1px solid rgba(139,92,246,0.18);
                    display: grid;
                    gap: 22px;
                }
                .annana-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
                    gap: 18px;
                }
                .annana-stat-block h3 {
                    margin: 0;
                    font-size: 34px;
                    color: #312e81;
                }
                .annana-stat-block span {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-size: 12px;
                    color: #8b5cf6;
                    margin-top: 4px;
                }
                .annana-stat-note {
                    font-size: 14px;
                    color: #5b21b6;
                    line-height: 1.6;
                }

                .annana-section {
                    max-width: 1120px;
                    margin: 0 auto 64px;
                    padding: 32px;
                    border-radius: 36px;
                    background: #ffffff;
                    border: 1px solid rgba(139,92,246,0.22);
                    box-shadow: 0 18px 45px rgba(139,92,246,0.14);
                }
                .annana-section h2 {
                    margin: 0;
                    text-align: center;
                    font-size: 30px;
                    color: #6b21a8;
                }
                .annana-section p.annana-lead {
                    margin-top: 14px;
                    text-align: center;
                    color: #7c3aed;
                    line-height: 1.7;
                }

                .annana-skill-list {
                    margin-top: 28px;
                    display: grid;
                    gap: 16px;
                }
                .annana-skill-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .annana-skill-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #6b21a8;
                    font-weight: 600;
                }
                .annana-skill-bar {
                    height: 10px;
                    border-radius: 999px;
                    background: rgba(139,92,246,0.18);
                    overflow: hidden;
                }
                .annana-skill-bar span {
                    display: block;
                    height: 100%;
                    background: linear-gradient(90deg, #a78bfa, #8b5cf6);
                }

                .annana-info-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .annana-info-card {
                    border-radius: 24px;
                    padding: 20px;
                    background: #f3e8ff;
                    border: 1px solid rgba(139,92,246,0.25);
                }
                .annana-info-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #7c3aed;
                }
                .annana-info-card p {
                    margin: 6px 0 0;
                    font-size: 16px;
                    color: #4c1d95;
                    font-weight: 600;
                }

                .annana-project-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 22px;
                }
                .annana-project-card {
                    border-radius: 26px;
                    padding: 22px;
                    background: #faf5ff;
                    border: 1px solid rgba(139,92,246,0.22);
                    box-shadow: 0 12px 30px rgba(124,58,237,0.12);
                    min-height: 200px;
                }
                .annana-project-type {
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #a78bfa;
                    text-transform: uppercase;
                }
                .annana-project-card h3 {
                    margin: 10px 0 8px;
                    color: #6b21a8;
                    font-size: 18px;
                }
                .annana-project-card p {
                    margin: 0 0 8px;
                    color: #6b21a8;
                    line-height: 1.5;
                    font-size: 14px;
                }
                .annana-project-stack {
                    font-size: 13px;
                    color: #8b5cf6;
                    font-weight: 500;
                }

                .annana-testimonial-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 20px;
                }
                .annana-testimonial-card {
                    padding: 22px;
                    border-radius: 24px;
                    background: #faf5ff;
                    border: 1px solid rgba(139,92,246,0.28);
                    font-style: italic;
                    color: #6b21a8;
                    box-shadow: 0 12px 30px rgba(139,92,246,0.14);
                }
                .annana-testimonial-card span {
                    display: block;
                    margin-top: 10px;
                    color: #5b21b6;
                    font-style: normal;
                    font-size: 14px;
                    font-weight: 600;
                }

                .annana-contact-panel {
                    margin-top: 26px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .annana-contact-card {
                    border-radius: 22px;
                    padding: 20px;
                    background: #e9d5ff;
                    border: 1px solid rgba(139,92,246,0.3);
                }
                .annana-contact-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #6b21a8;
                }
                .annana-contact-card p {
                    margin: 6px 0 0;
                    font-size: 15px;
                    color: #4c1d95;
                    font-weight: 600;
                }

                @media (max-width: 600px) {
                    .annana-hero-actions { flex-direction: column; }
                    .annana-section, .annana-hero-card, .annana-stat-panel { padding: 24px; }
                }
            `}</style>

            <div className="annana-shell">
                <div className="annana-hero-grid">
                    <div className="annana-hero-card">
                        <div className="annana-hero-pill">Focused Computer Science Student</div>
                        <h1 className="annana-hero-name">
                            Mst. <span>Annana Akter</span>
                        </h1>
                        <p className="annana-hero-meta">Roll 715508 · Reg 1502248913</p>
                        <p className="annana-hero-bio">
                            I am building a strong base in computer science—learning core theory, problem solving,
                            and how to express ideas clearly in both code and simple web pages using HTML and CSS.
                        </p>
                        <div className="annana-hero-actions">
                            <a className="annana-hero-btn primary" href="#academics">View Academic Profile</a>
                            <a className="annana-hero-btn secondary" href="#contact">Contact Info</a>
                        </div>
                    </div>

                    <div className="annana-stat-panel">
                        <div className="annana-stat-grid">
                            <div className="annana-stat-block">
                                <h3>1</h3>
                                <span>Roll Number</span>
                                <p className="annana-stat-note">715508 · unique ID that tracks her academic journey.</p>
                            </div>
                            <div className="annana-stat-block">
                                <h3>1</h3>
                                <span>Registration</span>
                                <p className="annana-stat-note">1502248913 · official registration for examination records.</p>
                            </div>
                            <div className="annana-stat-block">
                                <h3>Student</h3>
                                <span>Current Status</span>
                                <p className="annana-stat-note">Actively studying, learning, and preparing for examinations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="academics" className="annana-section">
                    <h2>Academic Snapshot</h2>
                    <p className="annana-lead">
                        A brief overview of Mst. Annana Akter's basic academic identity inside this portfolio.
                    </p>
                    <div className="annana-info-grid">
                        <div className="annana-info-card">
                            <label>Full Name</label>
                            <p>Mst. Annana Akter</p>
                        </div>
                        <div className="annana-info-card">
                            <label>Roll</label>
                            <p>715508</p>
                        </div>
                        <div className="annana-info-card">
                            <label>Registration</label>
                            <p>1502248913</p>
                        </div>
                    </div>

                    <div className="annana-skill-list">
                        <div className="annana-skill-row">
                            <div className="annana-skill-meta">
                                <span>HTML &amp; CSS Basics</span>
                                <span>Growing</span>
                            </div>
                            <div className="annana-skill-bar">
                                <span style={{ width: '55%' }} />
                            </div>
                        </div>
                        <div className="annana-skill-row">
                            <div className="annana-skill-meta">
                                <span>Problem Solving</span>
                                <span>Improving</span>
                            </div>
                            <div className="annana-skill-bar">
                                <span style={{ width: '50%' }} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="annana-section">
                    <h2>Learning &amp; Projects</h2>
                    <p className="annana-lead">
                        Simple learning tasks and practice projects that will slowly grow into a full portfolio.
                    </p>
                    <div className="annana-project-grid">
                        <article className="annana-project-card">
                            <p className="annana-project-type">Practice</p>
                            <h3>Personal Portfolio Layout</h3>
                            <p>
                                A static HTML and CSS layout that introduces her name, roll, registration and academic
                                focus using clean sections.
                            </p>
                            <p className="annana-project-stack">Built with: HTML · CSS</p>
                        </article>
                        <article className="annana-project-card">
                            <p className="annana-project-type">Study</p>
                            <h3>Notes &amp; Summaries</h3>
                            <p>
                                Organizing study notes into simple, readable pages to revise topics before exams and keep
                                track of progress.
                            </p>
                            <p className="annana-project-stack">Focus: Clear Writing · Consistency</p>
                        </article>
                        <article className="annana-project-card">
                            <p className="annana-project-type">Goal</p>
                            <h3>Future Web Projects</h3>
                            <p>
                                Plans to expand this page with more detailed academic records, results and small web
                                experiments.
                            </p>
                            <p className="annana-project-stack">Next: More HTML · More CSS</p>
                        </article>
                    </div>
                </section>

                <section className="annana-section">
                    <h2>Character &amp; Support</h2>
                    <p className="annana-lead">
                        A student identity is more than marks—it is also discipline, patience, and willingness to learn.
                    </p>
                    <div className="annana-testimonial-grid">
                        <blockquote className="annana-testimonial-card">
                            "Annana is calm, careful, and consistent with her work—she asks questions when needed and
                            completes tasks with focus."
                            <span>Teacher's Observation</span>
                        </blockquote>
                        <blockquote className="annana-testimonial-card">
                            "She keeps her study space organized and helps friends when they get stuck in small problems."
                            <span>Friend's Perspective</span>
                        </blockquote>
                    </div>
                </section>

                <section id="contact" className="annana-section">
                    <h2>Contact &amp; Basic Info</h2>
                    <p className="annana-lead">
                        Simple details to recognize Mst. Annana Akter in academic records and communication.
                    </p>
                    <div className="annana-contact-panel">
                        <div className="annana-contact-card">
                            <label>Student Name</label>
                            <p>Mst. Annana Akter</p>
                        </div>
                        <div className="annana-contact-card">
                            <label>Roll Number</label>
                            <p>715508</p>
                        </div>
                        <div className="annana-contact-card">
                            <label>Registration No.</label>
                            <p>1502248913</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default AnnanaPortfolio;