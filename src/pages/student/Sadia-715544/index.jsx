 

const SadiaPortfolio = () => {
    return (
        <>
            <style>{`
                .sadia-shell {
                    min-height: 100vh;
                    font-family: "Poppins", "Inter", system-ui, sans-serif;
                    background: radial-gradient(circle at 0% 0%, #bbf7d0 0%, #dcfce7 40%, #ecfdf5 100%);
                    color: #052e16;
                    padding: 48px 20px 80px;
                }
                .sadia-hero-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                    max-width: 1120px;
                    margin: 0 auto 64px;
                }
                .sadia-hero-card {
                    border-radius: 32px;
                    padding: 32px;
                    background: #ffffff;
                    border: 1px solid rgba(22,163,74,0.18);
                    box-shadow: 0 25px 60px rgba(22,163,74,0.18);
                    position: relative;
                    overflow: hidden;
                }
                .sadia-hero-pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 16px;
                    font-size: 13px;
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    border-radius: 999px;
                    background: rgba(22,163,74,0.12);
                    color: #166534;
                    margin-bottom: 20px;
                }
                .sadia-hero-name {
                    font-size: clamp(38px, 5.6vw, 56px);
                    margin: 0;
                    color: #064e3b;
                    letter-spacing: -1px;
                }
                .sadia-hero-name span {
                    color: #16a34a;
                }
                .sadia-hero-meta {
                    margin: 12px 0 18px;
                    font-size: 18px;
                    color: #15803d;
                }
                .sadia-hero-bio {
                    margin: 0 0 24px;
                    color: #166534;
                    line-height: 1.7;
                }
                .sadia-hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .sadia-hero-btn {
                    text-decoration: none;
                    padding: 12px 26px;
                    border-radius: 999px;
                    font-weight: 600;
                    font-size: 14px;
                    transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
                }
                .sadia-hero-btn.primary {
                    background: #16a34a;
                    color: #ecfdf5;
                    box-shadow: 0 12px 30px rgba(22,163,74,0.35);
                }
                .sadia-hero-btn.secondary {
                    border: 1px solid rgba(21,128,61,0.4);
                    color: #166534;
                    background: #f0fdf4;
                }
                .sadia-hero-btn:hover {
                    transform: translateY(-1px);
                    opacity: 0.9;
                }
                .sadia-stat-panel {
                    border-radius: 32px;
                    padding: 32px;
                    background: linear-gradient(135deg, #bbf7d0, #dcfce7);
                    border: 1px solid rgba(22,163,74,0.18);
                    display: grid;
                    gap: 22px;
                }
                .sadia-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px,1fr));
                    gap: 18px;
                }
                .sadia-stat-block h3 {
                    margin: 0;
                    font-size: 34px;
                    color: #022c22;
                }
                .sadia-stat-block span {
                    display: block;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-size: 12px;
                    color: #16a34a;
                    margin-top: 4px;
                }
                .sadia-stat-note {
                    font-size: 14px;
                    color: #14532d;
                    line-height: 1.6;
                }

                .sadia-section {
                    max-width: 1120px;
                    margin: 0 auto 64px;
                    padding: 32px;
                    border-radius: 36px;
                    background: #ffffff;
                    border: 1px solid rgba(22,163,74,0.22);
                    box-shadow: 0 18px 45px rgba(22,163,74,0.14);
                }
                .sadia-section h2 {
                    margin: 0;
                    text-align: center;
                    font-size: 30px;
                    color: #166534;
                }
                .sadia-section p.sadia-lead {
                    margin-top: 14px;
                    text-align: center;
                    color: #15803d;
                    line-height: 1.7;
                }

                .sadia-skill-list {
                    margin-top: 28px;
                    display: grid;
                    gap: 16px;
                }
                .sadia-skill-row {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .sadia-skill-meta {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: #166534;
                    font-weight: 600;
                }
                .sadia-skill-bar {
                    height: 10px;
                    border-radius: 999px;
                    background: rgba(22,163,74,0.18);
                    overflow: hidden;
                }
                .sadia-skill-bar span {
                    display: block;
                    height: 100%;
                    background: linear-gradient(90deg, #22c55e, #16a34a);
                }

                .sadia-info-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .sadia-info-card {
                    border-radius: 24px;
                    padding: 20px;
                    background: #f0fdf4;
                    border: 1px solid rgba(22,163,74,0.25);
                }
                .sadia-info-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #15803d;
                }
                .sadia-info-card p {
                    margin: 6px 0 0;
                    font-size: 16px;
                    color: #064e3b;
                    font-weight: 600;
                }

                .sadia-project-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 22px;
                }
                .sadia-project-card {
                    border-radius: 26px;
                    padding: 22px;
                    background: #f9fafb;
                    border: 1px solid rgba(22,163,74,0.22);
                    box-shadow: 0 12px 30px rgba(15,118,110,0.12);
                    min-height: 200px;
                }
                .sadia-project-type {
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #22c55e;
                    text-transform: uppercase;
                }
                .sadia-project-card h3 {
                    margin: 10px 0 8px;
                    color: #047857;
                    font-size: 18px;
                }
                .sadia-project-card p {
                    margin: 0 0 8px;
                    color: #166534;
                    line-height: 1.5;
                    font-size: 14px;
                }
                .sadia-project-stack {
                    font-size: 13px;
                    color: #16a34a;
                    font-weight: 500;
                }

                .sadia-testimonial-grid {
                    margin-top: 28px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                    gap: 20px;
                }
                .sadia-testimonial-card {
                    padding: 22px;
                    border-radius: 24px;
                    background: #ecfdf5;
                    border: 1px solid rgba(22,163,74,0.28);
                    font-style: italic;
                    color: #166534;
                    box-shadow: 0 12px 30px rgba(22,163,74,0.14);
                }
                .sadia-testimonial-card span {
                    display: block;
                    margin-top: 10px;
                    color: #14532d;
                    font-style: normal;
                    font-size: 14px;
                    font-weight: 600;
                }

                .sadia-contact-panel {
                    margin-top: 26px;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                    gap: 18px;
                }
                .sadia-contact-card {
                    border-radius: 22px;
                    padding: 20px;
                    background: #dcfce7;
                    border: 1px solid rgba(22,163,74,0.3);
                }
                .sadia-contact-card label {
                    text-transform: uppercase;
                    letter-spacing: 0.18em;
                    font-size: 11px;
                    color: #166534;
                }
                .sadia-contact-card p {
                    margin: 6px 0 0;
                    font-size: 15px;
                    color: #064e3b;
                    font-weight: 600;
                }

                @media (max-width: 600px) {
                    .sadia-hero-actions { flex-direction: column; }
                    .sadia-section, .sadia-hero-card, .sadia-stat-panel { padding: 24px; }
                }
            `}</style>

            <div className="sadia-shell">
                <div className="sadia-hero-grid">
                    <div className="sadia-hero-card">
                        <div className="sadia-hero-pill">Focused Computer Science Student</div>
                        <h1 className="sadia-hero-name">
                            Mst. <span>Sadia Akter</span>
                        </h1>
                        <p className="sadia-hero-meta">Roll 715544 · Reg 1502248884</p>
                        <p className="sadia-hero-bio">
                            I am building a strong base in computer science—learning core theory, problem solving,
                            and how to express ideas clearly in both code and simple web pages using HTML and CSS.
                        </p>
                        <div className="sadia-hero-actions">
                            <a className="sadia-hero-btn primary" href="#academics">View Academic Profile</a>
                            <a className="sadia-hero-btn secondary" href="#contact">Contact Info</a>
                        </div>
                    </div>

                    <div className="sadia-stat-panel">
                        <div className="sadia-stat-grid">
                            <div className="sadia-stat-block">
                                <h3>1</h3>
                                <span>Roll Number</span>
                                <p className="sadia-stat-note">715544 · unique ID that tracks her academic journey.</p>
                            </div>
                            <div className="sadia-stat-block">
                                <h3>1</h3>
                                <span>Registration</span>
                                <p className="sadia-stat-note">1502248884 · official registration for examination records.</p>
                            </div>
                            <div className="sadia-stat-block">
                                <h3>Student</h3>
                                <span>Current Status</span>
                                <p className="sadia-stat-note">Actively studying, learning, and preparing for examinations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="academics" className="sadia-section">
                    <h2>Academic Snapshot</h2>
                    <p className="sadia-lead">
                        A brief overview of Mst. Sadia Akter’s basic academic identity inside this portfolio.
                    </p>
                    <div className="sadia-info-grid">
                        <div className="sadia-info-card">
                            <label>Full Name</label>
                            <p>Mst. Sadia Akter</p>
                        </div>
                        <div className="sadia-info-card">
                            <label>Roll</label>
                            <p>715544</p>
                        </div>
                        <div className="sadia-info-card">
                            <label>Registration</label>
                            <p>1502248884</p>
                        </div>
                    </div>

                    <div className="sadia-skill-list">
                        <div className="sadia-skill-row">
                            <div className="sadia-skill-meta">
                                <span>HTML &amp; CSS Basics</span>
                                <span>Growing</span>
                            </div>
                            <div className="sadia-skill-bar">
                                <span style={{ width: '55%' }} />
                            </div>
                        </div>
                        <div className="sadia-skill-row">
                            <div className="sadia-skill-meta">
                                <span>Problem Solving</span>
                                <span>Improving</span>
                            </div>
                            <div className="sadia-skill-bar">
                                <span style={{ width: '50%' }} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sadia-section">
                    <h2>Learning &amp; Projects</h2>
                    <p className="sadia-lead">
                        Simple learning tasks and practice projects that will slowly grow into a full portfolio.
                    </p>
                    <div className="sadia-project-grid">
                        <article className="sadia-project-card">
                            <p className="sadia-project-type">Practice</p>
                            <h3>Personal Portfolio Layout</h3>
                            <p>
                                A static HTML and CSS layout that introduces her name, roll, registration and academic
                                focus using clean sections.
                            </p>
                            <p className="sadia-project-stack">Built with: HTML · CSS</p>
                        </article>
                        <article className="sadia-project-card">
                            <p className="sadia-project-type">Study</p>
                            <h3>Notes &amp; Summaries</h3>
                            <p>
                                Organizing study notes into simple, readable pages to revise topics before exams and keep
                                track of progress.
                            </p>
                            <p className="sadia-project-stack">Focus: Clear Writing · Consistency</p>
                        </article>
                        <article className="sadia-project-card">
                            <p className="sadia-project-type">Goal</p>
                            <h3>Future Web Projects</h3>
                            <p>
                                Plans to expand this page with more detailed academic records, results and small web
                                experiments.
                            </p>
                            <p className="sadia-project-stack">Next: More HTML · More CSS</p>
                        </article>
                    </div>
                </section>

                <section className="sadia-section">
                    <h2>Character &amp; Support</h2>
                    <p className="sadia-lead">
                        A student identity is more than marks—it is also discipline, patience, and willingness to learn.
                    </p>
                    <div className="sadia-testimonial-grid">
                        <blockquote className="sadia-testimonial-card">
                            “Sadia is calm, careful, and consistent with her work—she asks questions when needed and
                            completes tasks with focus.”
                            <span>Teacher’s Observation</span>
                        </blockquote>
                        <blockquote className="sadia-testimonial-card">
                            “She keeps her study space organized and helps friends when they get stuck in small problems.”
                            <span>Friend’s Perspective</span>
                        </blockquote>
                    </div>
                </section>

                <section id="contact" className="sadia-section">
                    <h2>Contact &amp; Basic Info</h2>
                    <p className="sadia-lead">
                        Simple details to recognize Mst. Sadia Akter in academic records and communication.
                    </p>
                    <div className="sadia-contact-panel">
                        <div className="sadia-contact-card">
                            <label>Student Name</label>
                            <p>Mst. Sadia Akter</p>
                        </div>
                        <div className="sadia-contact-card">
                            <label>Roll Number</label>
                            <p>715544</p>
                        </div>
                        <div className="sadia-contact-card">
                            <label>Registration No.</label>
                            <p>1502248884</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SadiaPortfolio;