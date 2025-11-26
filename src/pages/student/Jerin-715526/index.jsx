import React from 'react';

const JerinPortfolio = () => {
    return (
        <div style={styles.page}>
            <div style={styles.hero}>
                <div style={styles.heroText}>
                    <p style={styles.badge}>Front-End & MERN Enthusiast</p>
                    <h1 style={styles.name}>Jerin Akter</h1>
                    <p style={styles.meta}>Roll: 715526 · Reg: 1502248899</p>
                    <p style={styles.bio}>
                        I craft beautiful, responsive web experiences with a strong attention to detail and a love
                        for clean, accessible code.
                    </p>
                    <div style={styles.heroButtons}>
                        <a style={styles.primaryBtn} href="#projects">View Projects</a>
                        <a style={styles.secondaryBtn} href="#contact">Get in Touch</a>
                    </div>
                </div>
                <div style={styles.heroCard}>
                    <div style={styles.heroStat}>
                        <span style={styles.heroStatNumber}>3+</span>
                        <span style={styles.heroStatLabel}>Years Learning</span>
                    </div>
                    <div style={styles.heroStat}>
                        <span style={styles.heroStatNumber}>15+</span>
                        <span style={styles.heroStatLabel}>Projects Built</span>
                    </div>
                    <div style={styles.heroStat}>
                        <span style={styles.heroStatNumber}>5</span>
                        <span style={styles.heroStatLabel}>Live Demos</span>
                    </div>
                </div>
            </div>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>About Jerin</h2>
                <p style={styles.sectionLead}>
                    Passionate about translating ideas into intuitive products. I specialize in HTML, CSS, JavaScript,
                    and React, with a growing focus on Node.js and MongoDB for full-stack builds.
                </p>
                <div style={styles.aboutGrid}>
                    <div style={styles.infoCard}>
                        <h3 style={styles.cardTitle}>Education</h3>
                        <p style={styles.cardCopy}>Diploma in Computer Science</p>
                        <p style={styles.cardSub}>Bogura Polytechnic Institute</p>
                    </div>
                    <div style={styles.infoCard}>
                        <h3 style={styles.cardTitle}>Focus</h3>
                        <p style={styles.cardCopy}>Frontend Architecture</p>
                        <p style={styles.cardSub}>UI Systems · Design Systems · UX</p>
                    </div>
                    <div style={styles.infoCard}>
                        <h3 style={styles.cardTitle}>Stack</h3>
                        <p style={styles.cardCopy}>HTML · CSS · Tailwind · React · Node</p>
                        <p style={styles.cardSub}>MongoDB · Git · Figma</p>
                    </div>
                </div>
            </section>

            <section id="projects" style={styles.section}>
                <h2 style={styles.sectionTitle}>Selected Projects</h2>
                <div style={styles.projectGrid}>
                    {projects.map((project) => (
                        <article key={project.title} style={styles.projectCard}>
                            <div style={styles.projectTag}>{project.tag}</div>
                            <h3 style={styles.projectTitle}>{project.title}</h3>
                            <p style={styles.projectDescription}>{project.description}</p>
                            <ul style={styles.projectMeta}>
                                {project.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Experience Snapshot</h2>
                <div style={styles.timeline}>
                    {timeline.map((item) => (
                        <div key={item.title} style={styles.timelineItem}>
                            <div style={styles.timelineDot} />
                            <div style={styles.timelineContent}>
                                <p style={styles.timelineDate}>{item.period}</p>
                                <h3 style={styles.timelineTitle}>{item.title}</h3>
                                <p style={styles.timelineDesc}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" style={styles.section}>
                <h2 style={styles.sectionTitle}>Let’s Collaborate</h2>
                <p style={styles.sectionLead}>
                    I’m available for internships, collaborations, and freelance UI engineering projects.
                </p>
                <div style={styles.contactPanel}>
                    <div>
                        <p style={styles.contactLabel}>Email</p>
                        <p style={styles.contactValue}>jerinafrin305@email.com</p>
                    </div>
                    <div>
                        <p style={styles.contactLabel}>Portfolio</p>
                        <p style={styles.contactValue}>jerin-portfolio.dev</p>
                    </div>
                    <div>
                        <p style={styles.contactLabel}>Location</p>
                        <p style={styles.contactValue}>Bogura, Bangladesh</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const projects = [
    {
        title: 'EduSphere LMS',
        tag: 'Web App',
        description: 'A learning management interface with course tracking, lesson previews, and student dashboards.',
        points: ['React + Tailwind UI', 'Role-based dashboards', 'Real-time progress tracking'],
    },
    {
        title: 'Creative Studio Portfolio',
        tag: 'Case Study',
        description: 'Responsive agency website with hero sections, service cards, and testimonial sliders.',
        points: ['Glassmorphism styling', 'Fully responsive layout', 'GSAP micro-interactions'],
    },
    {
        title: 'Taskify Board',
        tag: 'Product',
        description: 'Kanban-inspired productivity board designed for small creative teams.',
        points: ['Drag-and-drop layout', 'Priority tagging system', 'Dark / Light mode'],
    },
];

const timeline = [
    {
        title: 'Frontend Intern · CreativeLab',
        period: '2024 — Present',
        description: 'Working on React component libraries, accessibility improvements, and design QA.',
    },
    {
        title: 'Campus Tech Club Lead',
        period: '2023 — 2024',
        description: 'Organized weekly code labs, mentored juniors, and led hackathon prep sessions.',
    },
    {
        title: 'Freelance UI Designer',
        period: '2022 — 2023',
        description: 'Delivered landing pages, brand style guides, and handoff-ready component specs.',
    },
];

const styles = {
    page: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0c111d 0%, #1b2337 60%, #101624 100%)',
        color: '#f8fbff',
        fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
        padding: '48px 20px 72px',
    },
    hero: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        maxWidth: '1080px',
        margin: '0 auto 64px',
        alignItems: 'center',
    },
    heroText: {
        padding: '32px',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '28px',
        border: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(16px)',
    },
    badge: {
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: '9999px',
        background: 'rgba(99,102,241,0.15)',
        color: '#c7d2fe',
        fontSize: '14px',
        marginBottom: '16px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
    },
    name: {
        fontSize: '48px',
        margin: '0 0 12px',
        color: '#f9fafb',
    },
    meta: {
        margin: '0 0 16px',
        color: '#9ca3af',
        fontSize: '18px',
    },
    bio: {
        color: '#d1d5db',
        lineHeight: 1.7,
        marginBottom: '24px',
        fontSize: '16px',
    },
    heroButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
    },
    primaryBtn: {
        textDecoration: 'none',
        background: '#6366f1',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '9999px',
        fontWeight: 600,
        transition: 'transform 0.2s ease, opacity 0.2s ease',
    },
    secondaryBtn: {
        textDecoration: 'none',
        border: '1px solid rgba(255,255,255,0.3)',
        color: '#f9fafb',
        padding: '12px 24px',
        borderRadius: '9999px',
        fontWeight: 600,
        transition: 'transform 0.2s ease, opacity 0.2s ease',
    },
    heroCard: {
        borderRadius: '28px',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '32px',
        background: 'radial-gradient(circle at top, rgba(99,102,241,0.25), rgba(15,23,42,0.9))',
        display: 'grid',
        gap: '20px',
    },
    heroStat: {
        display: 'flex',
        flexDirection: 'column',
    },
    heroStatNumber: {
        fontSize: '40px',
        fontWeight: 700,
        color: '#fff',
    },
    heroStatLabel: {
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        fontSize: '12px',
        color: '#9ca3af',
    },
    section: {
        maxWidth: '1080px',
        margin: '0 auto 64px',
        padding: '32px',
        borderRadius: '32px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
    },
    sectionTitle: {
        fontSize: '32px',
        margin: 0,
        color: '#f9fafb',
        textAlign: 'center',
    },
    sectionLead: {
        marginTop: '16px',
        color: '#d1d5db',
        textAlign: 'center',
        maxWidth: '720px',
        marginInline: 'auto',
        lineHeight: 1.8,
    },
    aboutGrid: {
        marginTop: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
    },
    infoCard: {
        padding: '24px',
        borderRadius: '24px',
        background: 'rgba(99,102,241,0.08)',
        border: '1px solid rgba(255,255,255,0.05)',
    },
    cardTitle: {
        color: '#c7d2fe',
        fontSize: '18px',
        marginBottom: '8px',
    },
    cardCopy: {
        margin: 0,
        fontSize: '16px',
        color: '#f3f4f6',
        fontWeight: 600,
    },
    cardSub: {
        marginTop: '6px',
        color: '#9ca3af',
        fontSize: '14px',
    },
    projectGrid: {
        marginTop: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
    },
    projectCard: {
        padding: '24px',
        borderRadius: '28px',
        background: 'rgba(15,23,42,0.7)',
        border: '1px solid rgba(255,255,255,0.06)',
        minHeight: '260px',
    },
    projectTag: {
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '9999px',
        background: 'rgba(129,140,248,0.15)',
        color: '#a5b4fc',
        fontSize: '12px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '12px',
    },
    projectTitle: {
        margin: '0 0 8px',
        color: '#f9fafb',
        fontSize: '20px',
    },
    projectDescription: {
        margin: '0 0 12px',
        color: '#cbd5f5',
        lineHeight: 1.6,
        fontSize: '15px',
    },
    projectMeta: {
        listStyle: 'disc',
        paddingLeft: '20px',
        color: '#94a3b8',
        lineHeight: 1.6,
        fontSize: '14px',
        margin: 0,
    },
    timeline: {
        marginTop: '32px',
        borderLeft: '2px solid rgba(255,255,255,0.1)',
        paddingLeft: '28px',
    },
    timelineItem: {
        position: 'relative',
        paddingBottom: '24px',
    },
    timelineDot: {
        position: 'absolute',
        left: '-35px',
        top: '8px',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: '#6366f1',
        boxShadow: '0 0 12px rgba(99,102,241,0.6)',
    },
    timelineContent: {
        padding: '12px 16px',
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.04)',
    },
    timelineDate: {
        margin: 0,
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        fontSize: '12px',
        color: '#a5b4fc',
    },
    timelineTitle: {
        margin: '6px 0',
        fontSize: '18px',
        color: '#f1f5f9',
    },
    timelineDesc: {
        margin: 0,
        color: '#cbd5f5',
        fontSize: '15px',
        lineHeight: 1.6,
    },
    contactPanel: {
        marginTop: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        padding: '24px',
        borderRadius: '28px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
    },
    contactLabel: {
        textTransform: 'uppercase',
        fontSize: '12px',
        letterSpacing: '0.15em',
        color: '#94a3b8',
        marginBottom: '4px',
    },
    contactValue: {
        margin: 0,
        fontSize: '16px',
        color: '#f8fafc',
        fontWeight: 600,
    },
};

export default JerinPortfolio;