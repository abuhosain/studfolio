import {
  FiSmile,
  FiBriefcase,
  FiTrendingUp,
  FiGithub,
  FiLinkedin,
  FiGlobe,
} from "react-icons/fi";

const RakibulProfile = () => {
  const skills = [
    "html",
    "css",
    "tailwindcss",
    "javascript",
    "typescript",
    "reactjs",
    "nextjs",
    "nodejs",
    "expressjs",
    "mongodb",
  ];
  const stats = [
    { label: "Client Satisfaction", value: "98%", icon: FiSmile },
    { label: "Completed Projects", value: "35+", icon: FiBriefcase },
    { label: "Running Products", value: "4", icon: FiTrendingUp },
  ];
  const socialLinks = [
    { label: "GitHub", icon: FiGithub, href: "#" },
    { label: "LinkedIn", icon: FiLinkedin, href: "#" },
    { label: "Portfolio", icon: FiGlobe, href: "#" },
  ];
  const projects = [
    {
      title: "Card Dealer",
      description: "This is description",
      image: "https://i.ibb.co.com/39CRH9Sp/MOTORX.png",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Sky Fighter Game",
      description: "This is description",
      image: "https://i.ibb.co.com/pkTNCTM/sky-fight.jpg",
      codeUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Event Aura",
      description: "This is description",
      image: "https://i.ibb.co.com/27FSkHFZ/eventaura.png",
      codeUrl: "#",
      liveUrl: "#",
    },
  ];
  const stack = [
    {
      title: "Experience Layer",
      list: [
        "Next.js App Router",
        "Framer Motion",
        "Radix UI",
        "Design Tokens",
      ],
    },
    {
      title: "Core APIs",
      list: ["Node.js", "tRPC / GraphQL", "Postgres + Prisma", "Redis Streams"],
    },
    {
      title: "DevOps & Cloud",
      list: ["AWS CDK", "Docker", "Vercel / Fly.io", "GitHub Actions"],
    },
  ];
  const rituals = [
    {
      title: "Blueprint Sessions",
      detail:
        "Whiteboard flows, align on success metrics, and freeze contracts before sprint zero.",
    },
    {
      title: "Atomic Delivery",
      detail:
        "Ship vertical slices with contract tests, feature flags, and automated rollbacks wired into CI/CD.",
    },
    {
      title: "Pulse Reviews",
      detail:
        "Stream logs + metrics, run chaos drills, and iterate based on user signals every cycle.",
    },
  ];

  return (
    <div className="rakibul-page">
      <style>{`
                :root {
                    color-scheme: dark;
                }
                .rakibul-page {
                    background: radial-gradient(circle at 15% 15%, rgba(37, 99, 235, 0.15), transparent 55%), #020617;
                    min-height: 100vh;
                    padding: 48px 20px 80px;
                    font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
                    display: flex;
                    justify-content: center;
                    color: #e2e8f0;
                }
                .rakibul-container {
                    width: min(1180px, 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }
                .hero-cluster {
                    border-radius: 32px;
                    overflow: hidden;
                    border: 1px solid rgba(148, 163, 184, 0.12);
                }
                .hero {
                    position: relative;
                    padding: clamp(24px, 4vw, 56px);
                    background: linear-gradient(135deg, rgba(2, 6, 23, 0.95), rgba(15, 23, 42, 0.9));
                }
                .hero::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2), transparent 55%);
                    z-index: 0;
                }
                .hero-content {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 40px;
                    align-items: center;
                }
                .hero-copy h1 {
                    font-size: clamp(2.4rem, 5vw, 3.8rem);
                    margin: 12px 0;
                    font-weight: 600;
                }
                .hero-badges {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    font-size: 0.7rem;
                    letter-spacing: 0.35em;
                    text-transform: uppercase;
                    border-radius: 999px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.04);
                }
                .hero-actions {
                    margin-top: 24px;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 14px;
                }
                .hero-actions a {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 150px;
                    padding: 12px 28px;
                    border-radius: 999px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: transform 0.2s ease, background 0.2s ease;
                }
                .hero-actions a.primary {
                    background: white;
                    color: #0f172a;
                    box-shadow: 0 10px 55px rgba(255, 255, 255, 0.15);
                }
                .hero-actions a.secondary {
                    border: 1px solid rgba(148, 163, 184, 0.4);
                    color: white;
                }
                .hero-actions a:hover {
                    transform: translateY(-2px);
                }
                .hero-media {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }
                .portrait-frame {
                    width: 260px;
                    height: 260px;
                    border-radius: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    background: rgba(255, 255, 255, 0.05);
                    padding: 12px;
                    box-shadow: 0 25px 80px rgba(15, 23, 42, 0.8);
                    position: relative;
                }
                .portrait-frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 20px;
                }
                .social-row {
                    display: flex;
                    gap: 14px;
                }
                .social-row a {
                    width: 50px;
                    height: 50px;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    background: rgba(255, 255, 255, 0.05);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    transition: border 0.2s ease, color 0.2s ease, transform 0.2s ease;
                }
                .social-row a:hover {
                    border-color: rgba(255, 255, 255, 0.4);
                    color: white;
                    transform: translateY(-4px);
                }
                .skills-marquee {
                    border: 0;
                    background: rgba(0, 0, 0, 0.7);
                }
                .skills-marquee marquee {
                    height: 60px;
                    display: flex;
                    align-items: center;
                    text-transform: uppercase;
                    font-size: 1rem;
                    letter-spacing: 0.2em;
                }
                .skills-list {
                    display: flex;
                    gap: 48px;
                }
                .section {
                    padding-top: 16px;
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 32px;
                }
                .section-kicker {
                    font-size: 0.8rem;
                    letter-spacing: 0.35em;
                    text-transform: uppercase;
                    color: #94a3b8;
                }
                .section-title {
                    font-size: clamp(2rem, 3vw, 2.6rem);
                    margin-top: 12px;
                    color: white;
                    font-weight: 600;
                }
                .section-description {
                    color: #94a3b8;
                    margin-top: 16px;
                    max-width: 620px;
                    margin-left: auto;
                    margin-right: auto;
                    line-height: 1.6;
                }
                .stat-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                }
                .stat-card {
                    padding: 32px 24px;
                    border-radius: 24px;
                    text-align: center;
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    background: linear-gradient(145deg, rgba(15, 23, 42, 0.85), rgba(2, 6, 23, 0.95));
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
                }
                .stat-card h3 {
                    font-size: 2.5rem;
                    margin: 12px 0 4px;
                }
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 28px;
                }
                .project-card {
                    border-radius: 28px;
                    border: 1px solid rgba(148, 163, 184, 0.12);
                    background: rgba(2, 6, 23, 0.92);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 30px 40px rgba(2, 6, 23, 0.85);
                    transition: transform 0.25s ease, border-color 0.25s ease;
                }
                .project-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(255, 255, 255, 0.25);
                }
                .project-media {
                    height: 200px;
                    overflow: hidden;
                }
                .project-media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .project-card:hover .project-media img {
                    transform: scale(1.08);
                }
                .project-body {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    flex: 1;
                }
                .project-actions {
                    margin-top: auto;
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                .project-actions a {
                    flex: 1;
                    min-width: 120px;
                    padding: 12px 0;
                    border-radius: 999px;
                    text-align: center;
                    font-weight: 600;
                    text-decoration: none;
                    border: 1px solid transparent;
                    transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;
                }
                .project-actions a.code {
                    background: white;
                    color: #0f172a;
                }
                .project-actions a.code:hover {
                    background: transparent;
                    color: white;
                    border-color: rgba(255, 255, 255, 0.4);
                }
                .project-actions a.live {
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    color: white;
                }
                .project-actions a.live:hover {
                    background: rgba(255, 255, 255, 0.08);
                }
                .stack-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                }
                .stack-card {
                    padding: 24px;
                    border-radius: 22px;
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    background: linear-gradient(160deg, rgba(15, 23, 42, 0.8), rgba(2, 6, 23, 0.95));
                }
                .stack-card ul {
                    margin-top: 16px;
                    padding-left: 18px;
                    line-height: 1.8;
                    color: #cbd5f5;
                }
                .ritual-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 18px;
                }
                .ritual-card {
                    padding: 24px;
                    border-radius: 22px;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                    background: rgba(6, 11, 25, 0.85);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
                }
                .ritual-title {
                    font-size: 0.8rem;
                    letter-spacing: 0.3em;
                    color: #93c5fd;
                    text-transform: uppercase;
                }
                .ritual-card p {
                    margin-top: 14px;
                    color: #cbd5f5;
                    line-height: 1.6;
                }
                @media (max-width: 720px) {
                    .hero-actions {
                        flex-direction: column;
                    }
                    .social-row {
                        justify-content: center;
                    }
                    .skills-list {
                        gap: 24px;
                        letter-spacing: 0.1em;
                    }
                }
            `}</style>
      <div className="rakibul-container">
        <div className="hero-cluster">
          <section className="hero">
            <div className="hero-content">
              <div className="hero-copy">
                <span className="hero-badges">Full Stack Developer</span>
                <h1>Rakibul Hasan</h1>
                <p>
                  I architect resilient APIs, craft polished interfaces, and
                  ship features across the stack using Next.js, Node.js, and
                  cloud-native pipelines.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="primary">
                    View Projects
                  </a>
                  <a href="#contact" className="secondary">
                    Work With Me
                  </a>
                </div>
              </div>
              <div className="hero-media">
                <div className="portrait-frame">
                  <img
                    src="https://images.unsplash.com/photo-1506765515384-028b60a9709b?auto=format&fit=crop&w=800&q=80"
                    alt="Rakibul Hasan portrait"
                  />
                </div>
                <div className="social-row">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}>
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="skills-marquee">
            <marquee>
              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </marquee>
          </div>
        </div>

        <section className="section">
          <div className="section-header">
            <p className="section-kicker">About</p>
            <h2 className="section-title">Beyond the Code</h2>
            <p className="section-description">
              I partner with product teams to design APIs, craft immersive UIs,
              and automate delivery pipelines. My goal: ship bold customer
              experiences without sacrificing stability or performance.
            </p>
          </div>
          <div className="stat-grid">
            {stats.map((card) => (
              <article key={card.label} className="stat-card">
                <card.icon size={36} />
                <h3>{card.value}</h3>
                <p>{card.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <p className="section-kicker">Ship</p>
            <h2 className="section-title">Project Samples</h2>
            <p className="section-description">
              A snapshot of recent full-stack initiatives blending Next.js
              frontends, resilient APIs, and cloud workflows.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <a href={project.codeUrl} className="code">
                      Code
                    </a>
                    <a href={project.liveUrl} className="live">
                      Live Preview
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="section-kicker">Stack</p>
            <h2 className="section-title">Tech Focus</h2>
          </div>
          <div className="stack-grid">
            {stack.map((group) => (
              <article key={group.title} className="stack-card">
                <p className="section-kicker">{group.title}</p>
                <ul>
                  {group.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-header">
            <p className="section-kicker">Process</p>
            <h2 className="section-title">Delivery Rituals</h2>
          </div>
          <div className="ritual-grid">
            {rituals.map((step) => (
              <article key={step.title} className="ritual-card">
                <p className="ritual-title">{step.title}</p>
                <p>{step.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RakibulProfile;
