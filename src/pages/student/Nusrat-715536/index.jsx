import React from 'react';

const skills = [
    { label: 'HTML & CSS', value: '95%' },
    { label: 'Java', value: '85%' },
    { label: 'Python', value: '80%' },
    { label: 'Digital Marketing', value: '88%' },
];

const projects = [
    {
        title: 'BrandWave Campaign',
        type: 'Campaign',
        blurb: '360° digital launch for a lifestyle label—social drip, email funnels, and seasonal microsite.',
        stack: 'HTML · CSS · Meta Ads',
    },
    {
        title: 'Code & Canvas Blog',
        type: 'Content Hub',
        blurb: 'Story-driven blog that mixes Python tutorials with creative strategy breakdowns.',
        stack: 'Python · Markdown · SEO',
    },
    {
        title: 'PulseFit Landing',
        type: 'Landing Page',
        blurb: 'Responsive lead-gen page for a wellness program with interactive form logic.',
        stack: 'HTML · CSS · Java',
    },
];

const timeline = [
    {
        title: 'Digital Marketing Associate · BrightLeaf',
        period: '2024 — Present',
        description: 'Builds HTML/CSS landing pages, tunes ad spend, and parses campaign analytics with Python dashboards.',
    },
    {
        title: 'Campus Brand Lead · BPI',
        period: '2023 — 2024',
        description: 'Coordinated ambassador content calendars and prototyped Java kiosks for recruitment events.',
    },
    {
        title: 'Freelance Creator',
        period: '2021 — 2023',
        description: 'Delivered social kits, nurture emails, and lightweight marketing sites for local founders.',
    },
];

const testimonials = [
    {
        quote: 'Nusrat rebuilt our email journey in HTML/CSS and doubled our click-through rate inside three weeks.',
        author: 'R. Alam · Marketing Manager',
    },
    {
        quote: 'She blends storytelling with clean code—our launch microsite felt premium without heavy tooling.',
        author: 'T. Naeem · Startup Founder',
    },
];

const NusratPortfolio = () => (
    <>
        <style>{`
            .nusrat-shell {
                min-height: 100vh;
                font-family: "Poppins", "Inter", system-ui, sans-serif;
                background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #fbcfe8 100%);
                color: #3b0a28;
                padding: 48px 20px 80px;
            }
            .hero-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 32px;
                max-width: 1120px;
                margin: 0 auto 64px;
            }
            .hero-card {
                border-radius: 32px;
                padding: 32px;
                background: #fff;
                border: 1px solid rgba(190,24,93,0.15);
                box-shadow: 0 25px 60px rgba(190,24,93,0.15);
            }
            .hero-pill {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 8px 16px;
                font-size: 13px;
                text-transform: uppercase;
                letter-spacing: 0.18em;
                border-radius: 999px;
                background: rgba(244,63,94,0.15);
                color: #be185d;
                margin-bottom: 20px;
            }
            .hero-name {
                font-size: clamp(40px, 6vw, 58px);
                margin: 0;
                color: #831843;
                letter-spacing: -1px;
            }
            .hero-meta {
                margin: 12px 0 24px;
                font-size: 18px;
                color: #9d174d;
            }
            .hero-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
            }
            .hero-btn {
                text-decoration: none;
                padding: 12px 28px;
                border-radius: 999px;
                font-weight: 600;
                transition: transform 0.2s ease, opacity 0.2s ease;
            }
            .hero-btn.primary {
                background: #ec4899;
                color: #fff;
            }
            .hero-btn.secondary {
                border: 1px solid rgba(190,24,93,0.35);
                color: #be185d;
            }
            .stat-panel {
                border-radius: 32px;
                padding: 32px;
                background: linear-gradient(135deg, #ffe4e6, #fbcfe8);
                border: 1px solid rgba(190,24,93,0.15);
                display: grid;
                gap: 24px;
            }
            .stat-block h3 {
                margin: 0;
                font-size: 36px;
                color: #0f172a;
            }
            .stat-block span {
                text-transform: uppercase;
                letter-spacing: 0.25em;
                font-size: 12px;
                color: #2563eb;
            }
            .section {
                max-width: 1120px;
                margin: 0 auto 64px;
                padding: 32px;
                border-radius: 36px;
                background: #fff;
                border: 1px solid rgba(236,72,153,0.2);
                box-shadow: 0 18px 45px rgba(236,72,153,0.12);
            }
            .section h2 {
                margin: 0;
                text-align: center;
                font-size: 32px;
                color: #9d174d;
            }
            .section p.lead {
                margin-top: 14px;
                text-align: center;
                color: #be185d;
                line-height: 1.7;
            }
            .skill-list {
                margin-top: 32px;
                display: grid;
                gap: 18px;
            }
            .skill-row {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .skill-meta {
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #be185d;
                font-weight: 600;
            }
            .skill-bar {
                height: 10px;
                border-radius: 999px;
                background: rgba(236,72,153,0.15);
                overflow: hidden;
            }
            .skill-bar span {
                display: block;
                height: 100%;
                background: linear-gradient(90deg, #f472b6, #ec4899);
            }
            .project-grid {
                margin-top: 32px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                gap: 24px;
            }
            .project-card {
                border-radius: 28px;
                padding: 24px;
                background: #fff;
                border: 1px solid rgba(244,63,94,0.2);
                min-height: 220px;
                box-shadow: 0 12px 30px rgba(244,63,94,0.12);
            }
            .project-type {
                letter-spacing: 0.2em;
                font-size: 11px;
                color: #fb7185;
            }
            .project-card h3 {
                margin: 12px 0 8px;
                color: #831843;
            }
            .project-card p {
                margin: 0 0 10px;
                color: #9d174d;
                line-height: 1.5;
            }
            .project-stack {
                font-size: 13px;
                color: #db2777;
            }
            .testimonial-grid {
                margin-top: 32px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
                gap: 20px;
            }
            .testimonial-card {
                padding: 24px;
                border-radius: 24px;
                background: #fff0f6;
                border: 1px solid rgba(236,72,153,0.3);
                font-style: italic;
                color: #9d174d;
                box-shadow: 0 12px 30px rgba(236,72,153,0.12);
            }
            .testimonial-card span {
                display: block;
                margin-top: 12px;
                color: #be185d;
                font-style: normal;
                font-size: 14px;
            }
            .contact-panel {
                margin-top: 28px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px,1fr));
                gap: 18px;
            }
            .contact-card {
                border-radius: 24px;
                padding: 20px;
                background: #ffe4e6;
                border: 1px solid rgba(236,72,153,0.25);
            }
            .contact-card label {
                text-transform: uppercase;
                letter-spacing: 0.2em;
                font-size: 11px;
                color: #be185d;
            }
            .contact-card p {
                margin: 6px 0 0;
                font-size: 16px;
                color: #831843;
                font-weight: 600;
            }
            @media (max-width: 600px) {
                .hero-actions { flex-direction: column; }
                .section, .hero-card { padding: 24px; }
            }
        `}</style>

        <div className="nusrat-shell">
            <div className="hero-grid">
                <div className="hero-card">
                    <div className="hero-pill">Creative Digital Marketer</div>
                    <h1 className="hero-name">Nusrat Sultana</h1>
                    <p className="hero-meta">Roll 715536 · Reg 1502248891 · Bogura, Bangladesh</p>
                    <p className="hero-bio">
                        I build responsive pages with HTML/CSS, automate insights in Python, prototype ideas in Java,
                        and wrap everything in campaigns that feel human and useful.
                    </p>
                    <div className="hero-actions">
                        <a className="hero-btn primary" href="#projects">Explore Work</a>
                        <a className="hero-btn secondary" href="#contact">Contact</a>
                    </div>
                </div>

                <div className="stat-panel">
                    <div className="stat-block">
                        <h3>18+</h3>
                        <span>Campaigns Delivered</span>
                    </div>
                    <div className="stat-block">
                        <h3>12</h3>
                        <span>Email Funnels</span>
                    </div>
                    <div className="stat-block">
                        <h3>8</h3>
                        <span>Brand Collaborations</span>
                    </div>
                </div>
            </div>

            <section className="section">
                <h2>Skill Focus</h2>
                <p className="lead">
                    Translating briefs into clean HTML/CSS builds, Python and Java helpers, and marketing narratives that resonate.
                </p>
                <div className="skill-list">
                    {skills.map((skill) => (
                        <div key={skill.label} className="skill-row">
                            <div className="skill-meta">
                                <span>{skill.label}</span>
                                <span>{skill.value}</span>
                            </div>
                            <div className="skill-bar">
                                <span style={{ width: skill.value }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className="section">
                <h2>Signature Work</h2>
                <p className="lead">
                    Selected projects that showcase systems thinking, component craft, and clean hand-offs.
                </p>
                <div className="project-grid">
                    {projects.map((project) => (
                        <article key={project.title} className="project-card">
                            <p className="project-type">{project.type}</p>
                            <h3>{project.title}</h3>
                            <p>{project.blurb}</p>
                            <p className="project-stack">{project.stack}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2>Experience & Voices</h2>
                <p className="lead">
                    Rooted in campaign testing, hands-on coding, and listening to customers before iterating.
                </p>
                <div className="timeline">
                    {timeline.map((item) => (
                        <div key={item.title} className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-content">
                                <p className="timeline-date">{item.period}</p>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testimonial-grid">
                    {testimonials.map((testimony) => (
                        <blockquote key={testimony.author} className="testimonial-card">
                            “{testimony.quote}”
                            <span>{testimony.author}</span>
                        </blockquote>
                    ))}
                </div>
            </section>

            <section id="contact" className="section">
                <h2>Let’s Build Together</h2>
                <p className="lead">
                    Available for internships, freelance products, and collaborative research projects.
                </p>
                <div className="contact-panel">
                    <div className="contact-card">
                        <label>Email</label>
                        <p>nusrat.sultana715536@mail.com</p>
                    </div>
                    <div className="contact-card">
                        <label>Portfolio</label>
                        <p>nusrat-creative.dev</p>
                    </div>
                    <div className="contact-card">
                        <label>Location</label>
                        <p>Bogura · Bangladesh</p>
                    </div>
                </div>
            </section>
        </div>
    </>
    );

export default NusratPortfolio;