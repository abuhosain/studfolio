import React from "react";

export default function Portfolio() {
  const year = new Date().getFullYear();

  return (
    <div className="main-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html,body{height:100%;overflow-x:hidden}
        body{
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
          }
          
          .main-wrapper{
            background: #000;
            padding: 60px 0
            }
            
        .wrap{
          color: #e2e8f0;
          max-width:1080px;
          margin:0 auto;
          background: rgba(15,17,26,0.65);
          backdrop-filter: blur(20px);
          border-radius:20px;
          border:1px solid rgba(60,70,100,0.3);
          overflow:hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          position:relative;
        }

        .hero{
          display:grid;
          grid-template-columns:1fr 360px;
          gap:40px;
          align-items:center;
          padding:48px;
        }

        .badge{
          display:inline-block;
          font-size:13px;
          font-weight:600;
          border-radius:999px;
          padding:8px 14px;
          background: rgba(100,110,255,0.15);
          color:#a0a8ff;
        }

        .name{
          font-size:32px;
          font-weight:700;
          background:linear-gradient(90deg,#c0c7ff,#a0f0ff);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          margin:12px 0 8px;
        }

        .title{color:#94a3b8;margin-bottom:16px}
        .lead{max-width:580px;margin-bottom:20px}
        .actions{display:flex;gap:12px;margin-top:20px}

        .btn{
          padding:12px 20px;
          border-radius:12px;
          font-weight:600;
          text-decoration:none;
        }

        .btn-primary{
          background:linear-gradient(90deg,#5ee7df,#b4e4ff);
          color:#0f172a;
        }

        .btn-ghost{
          border:1px solid rgba(100,130,255,0.3);
          color:#c0c7ff;
        }

        .avatar{
          width:360px;
          height:360px;
          border-radius:18px;
          overflow:hidden;
        }

        .avatar img{
          width:100%;
          height:100%;
          object-fit:cover;
        }

        section{padding:36px 48px;border-top:1px solid rgba(60,70,100,0.3)}
        h2{margin-bottom:16px}
        .chips{display:flex;flex-wrap:wrap;gap:10px}
        .chip{padding:9px 16px;border-radius:999px}
        .projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}
        .card{padding:20px;border-radius:16px}
        footer{text-align:center;padding:24px}
      `}</style>

      <div className="wrap">
        {/* HERO */}
        <header className="hero">
          <div>
            <div className="badge">Full Stack Web Developer</div>
            <h1 className="name">Rohan Emam Roni</h1>
            <div className="title">
              Full Stack Web Developer — CST, Bogura Polytechnic Institute
            </div>
            <p className="lead">
              I build minimal, accessible, and fast web using clean HTML, CSS and
              modern JavaScript. Backend-first on Python with REST & API
              experience.
            </p>

            <div className="actions">
              <a href="#projects" className="btn btn-primary">
                Selected projects
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact
              </a>
            </div>
          </div>

          <div className="avatar">
            <img
              src="https://i.ibb.co.com/FLmdVCBF/Picture.jpg"
              alt="Rohan Emam Roni"
            />
          </div>
        </header>

        {/* ABOUT */}
        <section>
          <h2>About me</h2>
          <p>
            Hi — I'm Rohan, a CST student at Bogura Polytechnic Institute. I focus
            on frontend polish and backend features using Python.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2>Skills</h2>
          <div className="chips">
            {[
              "HTML5",
              "CSS",
              "JavaScript",
              "React",
              "Python",
              "Django",
              "FastAPI",
              "Git & GitHub",
              "C++",
              "Unreal Engine",
            ].map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Selected projects</h2>
          <div className="projects">
            <div className="card">
              <h3>Taskify — Task Manager</h3>
              <p>React SPA with accessibility and UX focus.</p>
            </div>
            <div className="card">
              <h3>PriceTracker</h3>
              <p>FastAPI backend with PostgreSQL.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: rohan@example.com</p>
          <p>Location: Bogura, Bangladesh</p>
        </section>

        <footer>© {year} Rohan — Full Stack Web Developer</footer>
      </div>
    </div>
  );
}