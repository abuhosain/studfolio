import React from 'react';
import { useNavigate } from 'react-router';

const stats = [
    { label: 'Projects', value: '12' },
    { label: 'Hackathons', value: '06' },
    { label: 'Repos', value: '18' },
];

const socials = [
    { label: 'GitHub', href: 'https://github.com/abuhosain', icon: '💻' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/abuhosain25', icon: '🔗' },
    { label: 'Portfolio', href: 'https://abuhosain.com', icon: '🌐' },
    { label: 'Email', href: 'mailto:abuhosainmin@gmail.com', icon: '✉️' },
];

const skillGroups = [
    {
        title: 'Programming',
        items: [
            { name: 'JavaScript', value: '90%' },
            { name: 'Python', value: '80%' },
            { name: 'Java', value: '70%' },
            { name: 'PHP', value: '65%' },
        ],
    },
    {
        title: 'Web Stack',
        items: [
            { name: 'React', value: '85%' },
            { name: 'Node.js', value: '80%' },
            { name: 'HTML & CSS', value: '95%' },
            { name: 'Tailwind CSS', value: '75%' },
        ],
    },
    {
        title: 'Databases',
        items: [
            { name: 'MongoDB', value: '70%' },
            { name: 'MySQL', value: '75%' },
            { name: 'PostgreSQL', value: '60%' },
        ],
    },
];

const projects = [
    {
        title: 'E-Commerce Platform',
        status: 'Live',
        description:
            'Full-stack marketplace with role-based dashboards, secure checkout, and analytics widgets.',
        stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { code: 'https://github.com/abuhosain', live: 'https://abuhosain.com/ecommerce' },
    },
    {
        title: 'Student Management System',
        status: 'Building',
        description:
            'Admin portal that tracks attendance, grades, and exam performance across multiple campuses.',
        stack: ['Laravel', 'MySQL', 'Bootstrap'],
        links: { code: 'https://github.com/abuhosain', live: 'https://abuhosain.com/sms' },
    },
    {
        title: 'Weather Intelligence',
        status: 'Shipped',
        description:
            'Real-time weather dashboard with hourly forecasts, charts, and geolocation search.',
        stack: ['React', 'OpenWeather API', 'Chart.js'],
        links: { code: 'https://github.com/abuhosain', live: 'https://abuhosain.com/weather' },
    },
];

const achievements = [
    { title: 'Best Project Award', detail: 'CST Department Project Competition 2023' },
    { title: 'Hackathon Winner', detail: 'TechFest 2023 Rapid Prototype' },
    { title: 'Academic Excellence', detail: 'GPA 3.9 for three consecutive semesters' },
    { title: 'Leadership Award', detail: 'Lead, BPI Coding Club' },
];

const certifications = [
    { title: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: '2024' },
    { title: 'Meta React Developer', org: 'Meta', year: '2023' },
    { title: 'Python Programming', org: 'Python Institute', year: '2023' },
];

const contacts = [
    { label: 'Email', value: 'abuhosainmin@gmail.com', href: 'mailto:abuhosainmin@gmail.com' },
    { label: 'Portfolio', value: 'abuhosain.com', href: 'https://abuhosain.com' },
    { label: 'LinkedIn', value: '/in/abuhosain25', href: 'https://linkedin.com/in/abuhosain25' },
];

const AbuHosainProfile = () => {
    const navigate = useNavigate();

    return (
        <>
            <style>{`
                .abu-page {
                    min-height: 100vh;
                    margin: 0;
                    padding: 48px 20px 80px;
                    background: radial-gradient(circle at top, #0f172a 15%, #020617);
                    color: #e2e8f0;
                    font-family: "Inter", "DM Sans", system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                }
                .abu-shell {
                    width: min(1100px, 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 28px;
                }
                .abu-back {
                    align-self: flex-start;
                    border: 1px solid rgba(226,232,240,0.3);
                    border-radius: 999px;
                    background: transparent;
                    color: inherit;
                    padding: 10px 18px;
                    font-size: 14px;
                    letter-spacing: 0.08em;
                    cursor: pointer;
                }
                .abu-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 28px;
                    padding: 32px;
                    box-shadow: 0 20px 60px rgba(15,23,42,0.5);
                    backdrop-filter: blur(20px);
                }
                .abu-hero {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 28px;
                }
                .hero-title {
                    font-size: clamp(36px, 5vw, 54px);
                    line-height: 1.1;
                    color: #fff;
                    margin: 8px 0 12px;
                }
                .hero-tags {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .hero-tag {
                    border: 1px solid rgba(226,232,240,0.4);
                    border-radius: 999px;
                    padding: 8px 16px;
                    text-transform: uppercase;
                    font-size: 11px;
                    letter-spacing: 0.2em;
                }
                .hero-cta {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-top: 24px;
                }
                .hero-cta a {
                    text-decoration: none;
                    padding: 12px 22px;
                    border-radius: 999px;
                    font-weight: 600;
                    font-size: 14px;
                }
                .hero-cta a.primary {
                    background: #38bdf8;
                    color: #0f172a;
                    box-shadow: 0 10px 35px rgba(56,189,248,0.4);
                }
                .hero-cta a.secondary {
                    border: 1px solid rgba(255,255,255,0.3);
                    color: #cbd5f5;
                }
                .hero-profile {
                    text-align: center;
                }
                .hero-img {
                    width: 160px;
                    height: 160px;
                    border-radius: 24px;
                    object-fit: cover;
                    margin: 0 auto 16px;
                    box-shadow: 0 20px 50px rgba(15,23,42,0.4);
                }
                .hero-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
                    gap: 16px;
                    margin: 20px 0;
                }
                .hero-stat-value {
                    font-size: 26px;
                    font-weight: 700;
                    color: #38bdf8;
                }
                .hero-socials {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .hero-socials a {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    border: 1px solid rgba(56,189,248,0.5);
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    color: #38bdf8;
                    text-decoration: none;
                    font-size: 16px;
                }
                .grid-two {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 24px;
                }
                .skills-list {
                    display: grid;
                    gap: 18px;
                }
                .skill-group h3 {
                    margin-bottom: 12px;
                    color: #bae6fd;
                }
                .skill-row {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    font-size: 14px;
                }
                .skill-track {
                    flex: 1;
                    height: 8px;
                    border-radius: 999px;
                    background: rgba(148,163,184,0.2);
                    overflow: hidden;
                }
                .skill-progress {
                    height: 100%;
                    border-radius: inherit;
                    background: linear-gradient(90deg, #22d3ee, #3b82f6);
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 18px;
                }
                .project-card {
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 22px;
                    padding: 22px;
                    background: rgba(15,23,42,0.55);
                }
                .project-header {
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                }
                .project-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 12px;
                    font-size: 12px;
                    color: #94a3b8;
                }
                .project-links {
                    margin-top: 16px;
                    display: flex;
                    gap: 10px;
                }
                .project-links a {
                    flex: 1;
                    text-align: center;
                    padding: 8px 0;
                    border-radius: 14px;
                    text-decoration: none;
                    font-size: 13px;
                    border: 1px solid rgba(148,163,184,0.4);
                    color: #e2e8f0;
                }
                .achievements-list,
                .certifications-list {
                    display: grid;
                    gap: 14px;
                }
                .achievement-item,
                .certification-item {
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 18px;
                    padding: 16px 20px;
                    background: rgba(255,255,255,0.02);
                }
                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 16px;
                }
                .contact-card {
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    padding: 16px;
                    text-align: center;
                }
                .contact-card a {
                    color: #38bdf8;
                    text-decoration: none;
                    font-weight: 600;
                }
                @media (max-width: 640px) {
                    .abu-card {
                        padding: 22px;
                    }
                }
            `}</style>
            <main className="abu-page">
                <div className="abu-shell">
                    <button className="abu-back" onClick={() => navigate('/students')}>
                        ← Back to Students
                    </button>

                    <section className="abu-card abu-hero">
                        <div>
                            <p className="hero-tag" style={{ border: 'none', color: '#60a5fa' }}>
                                CST · Bogura Polytechnic Institute
                            </p>
                            <h1 className="hero-title">Md. Abu Hosain</h1>
                            <p>
                                Computer Science student passionate about full-stack problem solving, hackathons,
                                and shipping polished digital experiences.
                            </p>
                            <div className="hero-tags">
                                <span className="hero-tag">Roll 715534</span>
                                <span className="hero-tag">Session 2223</span>
                                <span className="hero-tag">Bogura, Bangladesh</span>
                            </div>
                            <div className="hero-cta">
                                <a className="primary" href="#projects">
                                    View Projects
                                </a>
                                <a className="secondary" href="#contact">
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="hero-profile">
                            <img
                                className="hero-img"
                                src="https://res.cloudinary.com/djqyb52xi/image/upload/v1760463479/IMG_20250716_002919_chcmji.jpg"
                                alt="Md. Abu Hosain"
                                loading="lazy"
                            />
                            <div className="hero-stats">
                                {stats.map((item) => (
                                    <div key={item.label}>
                                        <div className="hero-stat-value">{item.value}</div>
                                        <p className="stat-label">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="hero-socials">
                                {socials.map((social) => (
                                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="abu-card">
                        <h2 className="section-heading">About Abu</h2>
                        <p>
                            I build thoughtful products for the web—balancing accessible UI work with scalable backend
                            systems. When I am not coding, you will find me mentoring classmates, fine-tuning study plans,
                            or planning the next hackathon trip.
                        </p>
                    </section>

                    <section className="abu-card">
                        <h2 className="section-heading">Skill Snapshot</h2>
                        <div className="skills-list">
                            {skillGroups.map((group) => (
                                <div key={group.title} className="skill-group">
                                    <h3>{group.title}</h3>
                                    {group.items.map((skill) => (
                                        <div key={skill.name} className="skill-row">
                                            <span style={{ width: '110px' }}>{skill.name}</span>
                                            <div className="skill-track">
                                                <div className="skill-progress" style={{ width: skill.value }} />
                                            </div>
                                            <span style={{ width: '40px', textAlign: 'right' }}>{skill.value}</span>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="abu-card">
                        <h2 className="section-heading">Recent Projects</h2>
                        <div className="projects-grid" id="projects">
                            {projects.map((project) => (
                                <article key={project.title} className="project-card">
                                    <div className="project-header">
                                        <h3>{project.title}</h3>
                                        <span className="hero-tag" style={{ color: '#22d3ee', borderColor: 'rgba(34,211,238,0.5)' }}>
                                            {project.status}
                                        </span>
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="project-stack">
                                        {project.stack.map((tech) => (
                                            <span key={tech}>#{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.links.code} target="_blank" rel="noreferrer">
                                            Code
                                        </a>
                                        <a href={project.links.live} target="_blank" rel="noreferrer">
                                            Live
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="grid-two">
                        <div className="abu-card">
                            <h2 className="section-heading">Achievements</h2>
                            <div className="achievements-list">
                                {achievements.map((item) => (
                                    <div key={item.title} className="achievement-item">
                                        <strong>{item.title}</strong>
                                        <p style={{ marginTop: '6px', color: '#94a3b8' }}>{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="abu-card">
                            <h2 className="section-heading">Certifications</h2>
                            <div className="certifications-list">
                                {certifications.map((cert) => (
                                    <div key={cert.title} className="certification-item">
                                        <strong>{cert.title}</strong>
                                        <p style={{ margin: '4px 0', color: '#94a3b8' }}>{cert.org}</p>
                                        <span style={{ fontSize: '12px', color: '#38bdf8' }}>{cert.year}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="abu-card" id="contact">
                        <h2 className="section-heading">Get in touch</h2>
                        <div className="contact-grid">
                            {contacts.map((item) => (
                                <div key={item.label} className="contact-card">
                                    <p className="stat-label" style={{ color: '#94a3b8' }}>
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
};

export default AbuHosainProfile;

