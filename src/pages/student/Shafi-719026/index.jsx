import React from 'react';

const impactStats = [
    { label: 'Campaigns Directed', value: '95+' },
    { label: 'Average CPM Drop', value: '42%' },
    { label: 'Audience Reach', value: '18M' },
];

const services = [
    {
        title: 'Media Command',
        detail: 'Cross-channel planning, buying, and real-time budget optimizations for launch moments.',
    },
    {
        title: 'Narrative Systems',
        detail: 'Brand storytelling that syncs broadcast, digital, and experiential touchpoints with one tone.',
    },
    {
        title: 'Analytics Ops',
        detail: 'Dashboarding, lift studies, and attribution modeling so every dollar shows impact.',
    },
];

const platforms = ['Google Ads', 'Meta Suite', 'YouTube', 'TikTok Pulse', 'Spotify', 'OOH Programmatic'];

const campaignShots = [
    {
        title: 'BlueNote Tech Summit',
        result: 'Live stream + OOH spike lifted RSVPs 2.1x',
        description:
            'Orchestrated a three-wave media drop with teaser drones, live micro-influencers, and in-event social control rooms.',
    },
    {
        title: 'AquaRide Mobility',
        result: 'Reduced CAC 31% in 60 days',
        description:
            'Unified paid social, podcast sponsorships, and ambient lighting billboards for a premium EV launch.',
    },
    {
        title: 'Horizon Finance Rebrand',
        result: 'Grew organic mentions 4.5x',
        description:
            'Built a newsroom-style content hub, seeded visual stories to business media, and synced with earned TV hits.',
    },
];

const testimonials = [
    {
        quote: 'Shafi built an integrated control room for our product reveal that made us feel like a global network.',
        author: 'Noor Hasan · CMO, BlueNote',
    },
    {
        quote: 'His dashboards gave every exec clarity. We always knew what was live, trending, or stalling.',
        author: 'Eva Lira · Founder, AquaRide',
    },
];

const contact = [
    { label: 'Email', value: 'shafi.mediaops@studio.fm' },
    { label: 'Portfolio', value: 'shafimedia.com' },
    { label: 'Based In', value: 'Chattogram · Remote' },
];

const ShafiPortfolio = () => {
    return (
        <div className="shafi-page">
            <style>{`
                :root {
                    color-scheme: dark;
                }
                .shafi-page {
                    min-height: 100vh;
                    padding: 56px 20px 90px;
                    background: radial-gradient(circle at 15% 15%, rgba(56, 189, 248, 0.2), transparent 60%), #030712;
                    color: #e0f2fe;
                    font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                .shafi-container {
                    width: min(1200px, 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }
                .hero-shell {
                    border-radius: 36px;
                    border: 1px solid rgba(148, 163, 184, 0.18);
                    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(3, 7, 18, 0.9));
                    padding: clamp(24px, 5vw, 60px);
                    box-shadow: 0 40px 80px rgba(2, 6, 23, 0.8);
                    position: relative;
                    overflow: hidden;
                }
                .hero-shell::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 75% 10%, rgba(14, 165, 233, 0.3), transparent 50%);
                }
                .hero-grid {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 36px;
                    align-items: center;
                }
                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 8px 18px;
                    border-radius: 999px;
                    border: 1px solid rgba(59, 130, 246, 0.4);
                    color: #bae6fd;
                    text-transform: uppercase;
                    letter-spacing: 0.35em;
                    font-size: 0.7rem;
                }
                .hero-title {
                    font-size: clamp(2.8rem, 5vw, 4rem);
                    margin: 18px 0 10px;
                }
                .hero-highlight {
                    color: #38bdf8;
                }
                .hero-copy p {
                    margin: 0;
                    line-height: 1.7;
                    color: #cbd5f5;
                }
                .hero-meta {
                    margin-top: 24px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .hero-meta span {
                    padding: 10px 18px;
                    border-radius: 999px;
                    border: 1px solid rgba(148, 163, 184, 0.3);
                    font-size: 0.85rem;
                }
                .hero-visual {
                    border-radius: 28px;
                    border: 1px solid rgba(148, 163, 184, 0.18);
                    background: rgba(8, 47, 73, 0.5);
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }
                .hero-stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 16px;
                }
                .hero-stat {
                    border-radius: 18px;
                    border: 1px solid rgba(59, 130, 246, 0.25);
                    padding: 16px;
                    background: rgba(15, 23, 42, 0.7);
                    text-align: center;
                }
                .hero-stat h3 {
                    margin: 0;
                    font-size: 1.6rem;
                    color: #7dd3fc;
                }
                .section {
                    display: flex;
                    flex-direction: column;
                    gap: 26px;
                }
                .section-header {
                    text-align: center;
                    max-width: 640px;
                    margin: 0 auto;
                }
                .section-kicker {
                    text-transform: uppercase;
                    letter-spacing: 0.35em;
                    font-size: 0.75rem;
                    color: #bae6fd;
                }
                .section-title {
                    font-size: clamp(2rem, 4vw, 2.8rem);
                    margin: 16px 0 10px;
                    color: #f8fafc;
                }
                .section-description {
                    color: #cbd5f5;
                    line-height: 1.7;
                }
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 18px;
                }
                .service-card {
                    border-radius: 22px;
                    border: 1px solid rgba(148, 163, 184, 0.2);
                    background: rgba(2, 6, 23, 0.75);
                    padding: 24px;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
                }
                .platform-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    justify-content: center;
                }
                .platform-pill {
                    padding: 10px 18px;
                    border-radius: 999px;
                    border: 1px solid rgba(59, 130, 246, 0.5);
                    color: #e0f2fe;
                    font-size: 0.9rem;
                }
                .campaign-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 22px;
                }
                .campaign-card {
                    border-radius: 26px;
                    border: 1px solid rgba(59, 130, 246, 0.25);
                    background: linear-gradient(155deg, rgba(8, 47, 73, 0.8), rgba(2, 6, 23, 0.9));
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .campaign-card span {
                    color: #67e8f9;
                    letter-spacing: 0.12em;
                    font-size: 0.85rem;
                }
                .testimonial-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 18px;
                }
                .testimonial-card {
                    border-radius: 22px;
                    border: 1px solid rgba(148, 163, 184, 0.18);
                    background: rgba(5, 8, 20, 0.82);
                    padding: 24px;
                    line-height: 1.7;
                    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.7);
                }
                .testimonial-author {
                    margin-top: 14px;
                    color: #bae6fd;
                    font-weight: 600;
                }
                .contact-strip {
                    border-radius: 24px;
                    border: 1px solid rgba(59, 130, 246, 0.35);
                    background: rgba(2, 6, 23, 0.8);
                    padding: 24px;
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
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    font-size: 0.7rem;
                    color: #94a3b8;
                }
                .contact-item strong {
                    color: #f8fafc;
                }
                @media (max-width: 720px) {
                    .hero-meta {
                        flex-direction: column;
                    }
                }
            `}</style>
            <div className="shafi-container">
                <section className="hero-shell">
                    <div className="hero-grid">
                        <div className="hero-copy">
                            <span className="hero-badge">Media Manager</span>
                            <h1 className="hero-title">
                                Md Shafiul Islam <span className="hero-highlight">Shafi · 719026</span>
                            </h1>
                            <p>
                                I lead media ecosystems that sync live broadcasts, digital hype, and post-moment storytelling so brands
                                feel cinematic everywhere.
                            </p>
                            <div className="hero-meta">
                                <span>Roll: 719026</span>
                                <span>Role: Media Manager</span>
                                <span>Experience: 6+ Years</span>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-stat-grid">
                                {impactStats.map((stat) => (
                                    <article key={stat.label} className="hero-stat">
                                        <h3>{stat.value}</h3>
                                        <small>{stat.label}</small>
                                    </article>
                                ))}
                            </div>
                            <p>
                                Blue is the frequency I work in—calm control rooms, data-rich dashboards, and confident decisions even
                                when timelines compress.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="section-header">
                        <p className="section-kicker">Capabilities</p>
                        <h2 className="section-title">Coverage from Strategy to Spotlight</h2>
                        <p className="section-description">
                            Every program I lead blends data intuition with editorial instincts, ensuring media spends amplify the
                            narrative arc we promise audiences.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service) => (
                            <article key={service.title} className="service-card">
                                <h3>{service.title}</h3>
                                <p>{service.detail}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section">
                    <div className="section-header">
                        <p className="section-kicker">Toolset</p>
                        <h2 className="section-title">Channels & Control Panels</h2>
                    </div>
                    <div className="platform-wrap">
                        {platforms.map((item) => (
                            <span key={item} className="platform-pill">
                                {item}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="section" id="campaigns">
                    <div className="section-header">
                        <p className="section-kicker">Campaigns</p>
                        <h2 className="section-title">Moments I’ve Orchestrated</h2>
                    </div>
                    <div className="campaign-grid">
                        {campaignShots.map((campaign) => (
                            <article key={campaign.title} className="campaign-card">
                                <span>{campaign.result}</span>
                                <h3>{campaign.title}</h3>
                                <p>{campaign.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="section">
                    <div className="section-header">
                        <p className="section-kicker">Testimonials</p>
                        <h2 className="section-title">Partners Talk Blue</h2>
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

                <section className="section" id="contact">
                    <div className="section-header">
                        <p className="section-kicker">Connect</p>
                        <h2 className="section-title">Let’s Coordinate Your Next Launch</h2>
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

export default ShafiPortfolio;