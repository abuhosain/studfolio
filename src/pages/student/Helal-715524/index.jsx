import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGlobe } from 'react-icons/fa';

const stats = [
    { label: 'Videos Edited', value: '150+' },
    { label: 'Brands Collaborated', value: '25+' },
    { label: 'Years Creating', value: '4' },
];

const skills = ['Adobe Premiere Pro', 'After Effects', 'Filmora', 'DaVinci Resolve', 'CapCut', 'Canva'];

const services = [
    'Storyboarding & shot planning',
    'Long-form edits & mini-docs',
    'Short-form social packages',
    'Motion graphics overlays',
    'Color + sound finishing',
    'Publishing-ready exports',
];

const workflow = [
    { title: 'Brief & Mood', desc: 'Align on story beats, references, and deliverable specs.' },
    { title: 'Assembly Cut', desc: 'Sort footage, rough in narrative, mark sound bites.' },
    { title: 'Polish Pass', desc: 'Color, motion graphics, SFX, and social cut-downs.' },
    { title: 'Hand-off', desc: 'Export requested ratios, prep editable project files.' },
];

const projects = [
    {
        title: 'NeexG Agency Showreel',
        description:
            'Lead editor for the 2024 showreel—cutting motion-driven stories for lifestyle, fitness, and tech clients.',
        stack: 'Premiere Pro · After Effects · Red Giant',
    },
    {
        title: 'VibeFest Campaign',
        description: 'Created energetic trailers, social teasers, and vertical shorts for a regional music festival.',
        stack: 'DaVinci Resolve · CapCut · Cinema 4D',
    },
    {
        title: 'Founder Stories Series',
        description:
            'Produced short documentaries spotlighting startup founders, blending interview audio with B-roll narratives.',
        stack: 'Premiere Pro · Audition · Photoshop',
    },
];

const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com/helal.edits', icon: FaFacebookF },
    { label: 'Instagram', href: 'https://instagram.com/helal.edits', icon: FaInstagram },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/helalhosen', icon: FaLinkedinIn },
    { label: 'Portfolio', href: 'https://helal-edits.com', icon: FaGlobe },
];

const contactInfo = [
    { label: 'Email', value: 'helal.edits@gmail.com', href: 'mailto:helal.edits@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/helalhosen', href: 'https://linkedin.com/in/helalhosen' },
    { label: 'Instagram', value: '@helal.edits', href: 'https://instagram.com/helal.edits' },
];

const HelalProfile = () => (
    <>
        <style>{`
            .helal-page {
                min-height: 100vh;
                padding: 48px 24px 80px;
                background: radial-gradient(circle at top, #0f172a 10%, #020617 70%);
                color: #e2e8f0;
                font-family: "Poppins", "Inter", system-ui, sans-serif;
                display: flex;
                justify-content: center;
            }
            .helal-container {
                width: min(1200px, 100%);
                display: flex;
                flex-direction: column;
                gap: 32px;
            }
            .section-card {
                background: rgba(255,255,255,0.03);
                border: 1px solid rgba(255,255,255,0.08);
                border-radius: 28px;
                padding: 32px;
                backdrop-filter: blur(12px);
                box-shadow: 0 24px 60px rgba(15,23,42,0.35);
            }
            .hero {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 32px;
                align-items: center;
            }
            .hero-title {
                font-size: clamp(36px, 5vw, 56px);
                color: #ffffff;
                margin: 12px 0;
            }
            .cta-group {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;
                margin-top: 24px;
            }
            .cta {
                text-decoration: none;
                padding: 12px 24px;
                border-radius: 999px;
                font-weight: 600;
                font-size: 14px;
            }
            .cta.primary {
                background: #f43f5e;
                color: white;
                box-shadow: 0 12px 30px rgba(244,63,94,0.45);
            }
            .cta.secondary {
                border: 1px solid rgba(255,255,255,0.35);
                color: white;
            }
            .stats-grid {
                margin-top: 24px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                text-align: center;
                gap: 16px;
            }
            .stat-value {
                font-size: 32px;
                font-weight: 700;
                color: #fb7185;
            }
            .stat-label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                color: #94a3b8;
            }
            .profile-card {
                background: rgba(255,255,255,0.08);
                border: 1px solid rgba(255,255,255,0.12);
                color: #e2e8f0;
                text-align: center;
                border-radius: 28px;
                padding: 28px;
                box-shadow: 0 24px 60px rgba(15,23,42,0.35);
            }
            .profile-img {
                width: 160px;
                height: 160px;
                border-radius: 24px;
                object-fit: cover;
                box-shadow: 0 20px 50px rgba(15,23,42,0.35);
                margin: 0 auto;
            }
            .section-heading {
                font-size: 28px;
                margin-bottom: 16px;
                color: #ffffff;
            }
            .skills-grid,
            .services-grid,
            .workflow-grid,
            .projects-grid,
            .contact-grid {
                display: grid;
                gap: 20px;
            }
            .skills-grid {
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            }
            .skill-pill {
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 999px;
                padding: 10px 16px;
                text-align: center;
            }
            .services-grid {
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }
            .service-card,
            .workflow-card {
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 20px;
                padding: 20px;
                background: rgba(255,255,255,0.03);
                text-align: center;
            }
            .workflow-grid {
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }
            .projects-grid {
                grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            }
            .project-card {
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 24px;
                background: rgba(255,255,255,0.05);
                color: #e2e8f0;
                padding: 24px;
                box-shadow: 0 18px 45px rgba(15,23,42,0.25);
            }
            .project-card p {
                margin-top: 8px;
                color: #cbd5f5;
            }
            .contact-grid {
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }
            .contact-card {
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 18px;
                padding: 18px;
                background: rgba(255,255,255,0.04);
            }
            a.contact-link {
                color: #fff;
                font-weight: 600;
                text-decoration: none;
            }
            @media (max-width: 640px) {
                .helal-page {
                    padding: 32px 16px 64px;
                }
                .section-card {
                    padding: 24px;
                }
                .cta-group {
                    flex-direction: column;
                }
            }
        `}</style>
        <div className="helal-page">
            <div className="helal-container">
                <div className="section-card hero">
                    <div>
                        <p className="stat-label" style={{ color: '#fbcfe8' }}>Video Storyteller</p>
                        <h1 className="hero-title">Helal Hosen</h1>
                        <p>
                            Video editor at NeexG Agency and Computer Science & Technology student (Roll 715524 · Reg 1502248893).
                            I craft fast-paced trailers, branded shorts, and documentary-style edits that keep viewers watching.
                        </p>
                        <div className="cta-group">
                            <a className="cta primary" href="#projects">Latest Cuts</a>
                            <a className="cta secondary" href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img
                            src="https://res.cloudinary.com/djqyb52xi/image/upload/v1764150802/IMG-20251017-WA0008_vcztlr.jpg"
                            alt="Helal Hosen"
                            className="profile-img"
                            loading="lazy"
                        />
                        <p style={{ marginTop: '16px', color: '#475569' }}>Bogura, Bangladesh</p>
                        <div style={{ marginTop: '12px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        style={{
                                            display: 'inline-flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            border: '1px solid rgba(244,114,182,0.5)',
                                            textDecoration: 'none',
                                            color: '#f472b6',
                                            fontSize: '18px',
                                        }}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                        <div className="stats-grid">
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <p className="stat-value">{item.value}</p>
                                    <p className="stat-label">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section-card">
                    <h2 className="section-heading">About Helal</h2>
                    <p>
                        I thrive in edit suites—combing through footage, pulling emotional beats, and mixing motion graphics
                        into cohesive stories. Outside client work I film campus events, experiment with AI-assisted workflows,
                        and mentor juniors on Premiere Pro shortcuts that speed up delivery.
                    </p>
                </div>

                <div className="section-card">
                    <h2 className="section-heading">Tools I Trust</h2>
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <span key={skill} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="section-card">
                    <h2 className="section-heading">Editing Stack</h2>
                    <ul style={{ lineHeight: 1.8 }}>
                        <li>• Color workflow in DaVinci Resolve for fast scene matching</li>
                        <li>• Motion graphics with After Effects + essential graphics templates</li>
                        <li>• Sound design pass in Audition to polish dialogue and impact hits</li>
                        <li>• Delivery prep for YouTube, TikTok, and broadcast specs</li>
                    </ul>
                </div>

                <div className="section-card">
                    <h2 className="section-heading">What I Deliver</h2>
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service} className="service-card">
                                {service}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section-card">
                    <h2 className="section-heading">Workflow at a Glance</h2>
                    <div className="workflow-grid">
                        {workflow.map((step) => (
                            <div key={step.title} className="workflow-card">
                                <p className="stat-label" style={{ color: '#f9a8d4' }}>{step.title}</p>
                                <p style={{ marginTop: '12px' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section-card projects-card" id="projects">
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', color: '#0f172a' }}>
                        <h2 className="section-heading" style={{ marginBottom: 0 }}>Recent Highlights</h2>
                        <span className="stat-label" style={{ color: '#f43f5e' }}>Video Cuts</span>
                    </div>
                    <div className="projects-grid" style={{ marginTop: '24px' }}>
                        {projects.map((project) => (
                            <div key={project.title} className="project-card">
                                <p className="stat-label" style={{ color: '#f43f5e' }}>{project.stack}</p>
                                <h3 style={{ marginTop: '12px' }}>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section-card" id="contact">
                    <h2 className="section-heading">Let's Collaborate</h2>
                    <p style={{ marginBottom: '16px' }}>
                        Open to freelance edits, collaboration on creative shoots, and remote agency work.
                    </p>
                    <div className="contact-grid">
                        {contactInfo.map((item) => (
                            <div key={item.label} className="contact-card">
                                <p className="stat-label" style={{ color: '#f9a8d4' }}>{item.label}</p>
                                <a className="contact-link" href={item.href}>{item.value}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default HelalProfile;

