import React from 'react';

const heroStats = [
    { label: 'Campaigns Launched', value: '120+' },
    { label: 'Avg. CTR Boost', value: '38%' },
    { label: 'Brands Partnered', value: '45' },
];

const expertise = [
    { title: 'Growth Strategy', detail: 'Lifecycle funnels, performance dashboards, and always-on A/B pipelines.' },
    { title: 'Content Systems', detail: 'Persona-first storytelling with modular micro-copy for every channel.' },
    { title: 'Automation', detail: 'CRM triggers, nurture journeys, and AI-assisted personalization flows.' },
];

const skillPills = ['Paid Media', 'SEO & SEM', 'Email Journeys', 'Funnel Analytics', 'Brand Narratives', 'Community Ops'];

const caseStudies = [
    {
        title: 'Duskwear Apparel',
        result: 'Scaled ROAS 4.2x',
        summary: 'Unified paid social + email sequencing to relaunch their seasonal drop with waitlist momentum.',
    },
    {
        title: 'Glowcraft Beauty',
        result: 'Grew MRR 63%',
        summary: 'Built an owned media engine, layered UGC ads, and automated retention with loyalty tiers.',
    },
    {
        title: 'Heritage Travel Co.',
        result: 'Cut CAC 28%',
        summary: 'Mapped a new attribution model and rebuilt top-of-funnel storytelling for premium trips.',
    },
];

const testimonials = [
    {
        quote: 'Sharmin turned our scattered channels into a cohesive growth engine that finally matched our brand tone.',
        author: 'Maya Rahman · CXO, Glowcraft',
    },
    {
        quote: 'Her dashboards made it easy for leadership to see momentum and place bold bets with confidence.',
        author: 'Rafiul Karim · Founder, Heritage Travel',
    },
];

const contact = [
    { label: 'Email', value: 'hello.sharmin@studio.fm' },
    { label: 'Portfolio', value: 'sharminmarketer.com' },
    { label: 'Location', value: 'Dhaka · Remote' },
];

const ShrminPortfolio = () => {
    return (
        <div className="sharmin-page">
            <style>{`
                :root {
                    color-scheme: dark;
                }
                .sharmin-page {
                    min-height: 100vh;
                    background: linear-gradient(145deg, #0d0f1a 10%, #051826 60%, #101011 100%);
                    padding: 48px 20px 80px;
                    color: #f8fafc;
                    font-family: "Space Grotesk", "Inter", system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                .sharmin-container {
                    width: min(1100px, 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }
                .glass-panel {
                    border-radius: 32px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: linear-gradient(120deg, rgba(255, 255, 255, 0.05), rgba(15, 23, 42, 0.35));
                    backdrop-filter: blur(28px);
                    padding: clamp(24px, 5vw, 50px);
                    position: relative;
                    overflow: hidden;
                }
                .glass-panel::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 20% 20%, rgba(246, 114, 128, 0.35), transparent 50%);
                    pointer-events: none;
                }
                .hero-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 30px;
                    position: relative;
                    z-index: 1;
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.35em;
                    font-size: 0.7rem;
                    padding: 8px 16px;
                    border-radius: 999px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: #fbd5ff;
                }
                .hero-title {
                    font-size: clamp(2.8rem, 5vw, 4rem);
                    margin: 18px 0 12px;
                }
                .hero-highlight {
                    color: #fca5ff;
                }
                .hero-copy p {
                    line-height: 1.7;
                    color: #dbeafe;
                }
                .hero-cta {
                    margin-top: 26px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 14px;
                }
                .hero-cta a {
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 999px;
                    font-weight: 600;
                    transition: transform 0.2s ease, background 0.2s ease;
                }
                .hero-cta a.primary {
                    background: linear-gradient(120deg, #f472b6, #fb923c);
                    color: #0f172a;
                }
                .hero-cta a.secondary {
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    color: #f8fafc;
                }
                .hero-cta a:hover {
                    transform: translateY(-3px);
                }
                .hero-visual {
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }
                .hero-visual-card {
                    border-radius: 26px;
                    padding: 20px;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    background: rgba(7, 10, 25, 0.75);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .hero-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 16px;
                }
                .hero-stat {
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 18px;
                    background: rgba(255, 255, 255, 0.03);
                }
                .hero-stat h3 {
                    font-size: 1.6rem;
                    margin: 0;
                }
                .section-header {
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto 28px;
                }
                .section-kicker {
                    text-transform: uppercase;
                    letter-spacing: 0.35em;
                    font-size: 0.75rem;
                    color: #a5f3fc;
                }
                .section-title {
                    font-size: clamp(2rem, 4vw, 2.8rem);
                    margin: 14px 0;
                }
                .section-description {
                    color: #cbd5f5;
                    line-height: 1.7;
                }
                .expertise-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 20px;
                }
                .expertise-card {
                    border-radius: 22px;
                    padding: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: rgba(5, 9, 20, 0.75);
                }
                .skills-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    justify-content: center;
                }
                    .skills-pill {
                        padding: 10px 18px;
                        border-radius: 999px;
                        border: 1px solid rgba(148, 163, 184, 0.3);
                        font-size: 0.9rem;
                        color: #fef3c7;
                    }
                .case-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 24px;
                }
                .case-card {
                    border-radius: 26px;
                    padding: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.14);
                    background: linear-gradient(140deg, rgba(254, 215, 170, 0.12), rgba(8, 12, 24, 0.85));
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .case-card h3 {
                    margin: 0;
                }
                .case-result {
                    color: #fbbf24;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                }
                .testimonial-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 20px;
                }
                .testimonial-card {
                    border-radius: 24px;
                    padding: 26px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(9, 10, 26, 0.8);
                    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.8);
                }
                .testimonial-card p {
                    margin: 0;
                    line-height: 1.7;
                }
                .testimonial-author {
                    margin-top: 14px;
                    color: #e2e8f0;
                    font-weight: 600;
                }
                .contact-strip {
                    border-radius: 24px;
                    padding: 24px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: rgba(6, 10, 18, 0.8);
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 16px;
                }
                .contact-item {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .contact-item span {
                    font-size: 0.75rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: #94a3b8;
                }
                .contact-item strong {
                    font-size: 1rem;
                    color: #f8fafc;
                }
                @media (max-width: 720px) {
                    .hero-cta {
                        flex-direction: column;
                    }
                }
            `}</style>
            <div className="sharmin-container">
                <section className="glass-panel">
                    <div className="hero-content">
                        <div className="hero-copy">
                            <span className="hero-badge">Digital Marketer</span>
                            <h1 className="hero-title">
                                Sharmin Akter <span className="hero-highlight">715553</span>
                            </h1>
                            <p>
                                I help founders orchestrate magnetic campaigns, pair data with storytelling, and ship community-led growth
                                strategies that feel human.
                            </p>
                            <div className="hero-cta">
                                <a href="#cases" className="primary">
                                    View Case Studies
                                </a>
                                <a href="#contact" className="secondary">
                                    Collaborate
                                </a>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-visual-card">
                                <p>RolL: 715553</p>
                                <p>Reg: 1502255523</p>
                                <p>Focus: Digital Marketing & Growth Ops</p>
                            </div>
                            <div className="hero-stat-grid">
                                {heroStats.map((stat) => (
                                    <div key={stat.label} className="hero-stat">
                                        <h3>{stat.value}</h3>
                                        <small>{stat.label}</small>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="section-header">
                        <p className="section-kicker">Skill Stack</p>
                        <h2 className="section-title">Systems with Spark</h2>
                        <p className="section-description">
                            Balanced left-brain analytics with right-brain curiosity to ship campaigns that convert and communities that stay.
                        </p>
                    </div>
                    <div className="skills-wrap">
                        {skillPills.map((pill) => (
                            <span key={pill} className="skills-pill">
                                {pill}
                            </span>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="section-header">
                        <p className="section-kicker">Expertise</p>
                        <h2 className="section-title">Where I Thrive</h2>
                    </div>
                    <div className="expertise-grid">
                        {expertise.map((item) => (
                            <article key={item.title} className="expertise-card">
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="cases">
                    <div className="section-header">
                        <p className="section-kicker">Case Studies</p>
                        <h2 className="section-title">Campaigns with Impact</h2>
                    </div>
                    <div className="case-grid">
                        {caseStudies.map((study) => (
                            <article key={study.title} className="case-card">
                                <span className="case-result">{study.result}</span>
                                <h3>{study.title}</h3>
                                <p>{study.summary}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="section-header">
                        <p className="section-kicker">Social Proof</p>
                        <h2 className="section-title">Partner Voices</h2>
                    </div>
                    <div className="testimonial-grid">
                        {testimonials.map((item) => (
                            <article key={item.author} className="testimonial-card">
                                <p>“{item.quote}”</p>
                                <p className="testimonial-author">{item.author}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="contact">
                    <div className="section-header">
                        <p className="section-kicker">Connect</p>
                        <h2 className="section-title">Open to Collaborations</h2>
                    </div>
                    <div className="contact-strip">
                        {contact.map((item) => (
                            <div key={item.label} className="contact-item">
                                <span>{item.label}</span>
                                <strong>{item.value}</strong>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShrminPortfolio;