import React from "react";

const NuhasPortfolio = () => {
  return (
    <>
      {/* CSS */}
      <style>{`
:root {
  --bg: #0b0c17;
  --card-bg: rgba(255,255,255,0.02);
  --neon-1: #57f0c6;
  --neon-2: #4da6ff;
  --muted: #9aa3b2;
  --glass-blur: 12px;
  --radius: 14px;
}

* {margin:0; padding:0; box-sizing:border-box;}
body {font-family: 'Poppins', sans-serif; background: var(--bg); color: #e6eef6; line-height:1.5;}

.hero {display:flex; justify-content:space-between; align-items:center; padding:60px 6%; min-height:80vh; position:relative;}
.hero-left {flex:1;}
.eyebrow {text-transform:uppercase; letter-spacing:2px; color:var(--neon-2); font-weight:700; margin-bottom:10px;}
.name {font-size:3rem; font-weight:800; display:flex; align-items:center; gap:10px;}
.neon {font-size:2.5rem; color: var(--neon-1);}
.desc {margin-top:14px; color:var(--muted); max-width:600px;}
.actions {margin-top:20px; display:flex; gap:12px;}
.btn {padding:10px 18px; border-radius:10px; font-weight:700; font-size:14px; text-decoration:none; cursor:pointer; border:1px solid transparent; transition:all .2s ease;}
.btn.primary {background: linear-gradient(90deg, var(--neon-2), var(--neon-1)); color:#fff; box-shadow:0 6px 20px rgba(77,166,255,0.2);}
.btn.primary:hover {transform:translateY(-4px);}
.btn.glass {background: rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); backdrop-filter: blur(var(--glass-blur)); color:var(--neon-2);}
.btn.glass:hover {transform:translateY(-2px);}

.quick-meta {list-style:none; display:flex; gap:20px; margin-top:12px; flex-wrap:wrap;}
.quick-meta li {color:var(--muted); font-size:13px;}

.hero-right {width:220px; display:flex; flex-direction:column; align-items:center;}
.profile-frame {width:180px; height:180px; border-radius:var(--radius); background: var(--card-bg); border:1px solid rgba(255,255,255,0.06); backdrop-filter:blur(var(--glass-blur)); display:flex; justify-content:center; align-items:center; position:relative;}
.initials {font-size:3rem; font-weight:800; color: var(--neon-1);}
.glow-ring {position:absolute; width:220px; height:220px; border-radius:50%; filter:blur(40px); background:conic-gradient(var(--neon-1), var(--neon-2)); animation:spin 6s linear infinite;}
@keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}

.section {max-width:1100px; margin:36px auto; padding:26px 6%;}
.card {background:var(--card-bg); border-radius:var(--radius); border:1px solid rgba(255,255,255,0.06); padding:20px; box-shadow:0 10px 30px rgba(0,0,0,0.6);}
h2 {margin-bottom:12px; color:#eaf8f2;}
p {color:var(--muted); font-size:15px;}

.skills-grid {display:grid; grid-template-columns:repeat(2,1fr); gap:18px; margin-top:14px;}
.skill {background:rgba(255,255,255,0.01); padding:14px; border-radius:12px; border:1px solid rgba(255,255,255,0.02);}
.skill h3 {color:#dff7ff; margin-bottom:8px; font-size:14px;}
.skill-bar {height:12px; background:rgba(255,255,255,0.02); border-radius:10px; overflow:hidden;}
.skill-bar span {display:block; height:100%; background:linear-gradient(90deg,var(--neon-1),var(--neon-2));}

.projects-grid {display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:14px;}
.project-card {padding:16px; border-radius:12px; background: rgba(255,255,255,0.01); border:1px solid rgba(255,255,255,0.02); transition: all .22s ease;}
.project-card:hover {transform:translateY(-8px); border-color:var(--neon-2); box-shadow:0 20px 50px rgba(77,166,255,0.1);}
.project-card h3 {margin-bottom:8px; color:#e7fbf6;}
.tags {margin-top:10px;}
.tags span {display:inline-block; padding:6px 8px; border-radius:8px; background: rgba(77,166,255,0.05); color:var(--neon-1); font-size:12px; margin-right:6px;}

.contact-form {margin-top:12px;}
.contact-form label {display:block; margin-bottom:10px; color:var(--muted); font-size:14px;}
.contact-form input, .contact-form textarea {width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,0.04); background: rgba(255,255,255,0.01); color:#e6eef6; resize:vertical;}
.form-actions {display:flex; gap:12px; margin-top:8px;}

.footer-note {text-align:center; color:var(--muted); margin:28px 0 64px; font-size:13px;}

@media(max-width:1024px){.projects-grid{grid-template-columns:repeat(2,1fr);}.skills-grid{grid-template-columns:1fr;}}
@media(max-width:640px){.hero{flex-direction:column; text-align:center; gap:24px;}.hero-right{width:160px;}.profile-frame{width:140px;height:140px;}.projects-grid{grid-template-columns:1fr;}}
      `}</style>

      {/* HTML Converted to JSX */}
      <div className="bg-black">
        <header className="hero">
          <div className="hero-left">
            <div className="eyebrow">Wellcome To My Personal Portfolio</div>
            <h1 className="name">
              <span className="text-white">Hello, I'm</span> <span className="neon">Nuhas Mahmud</span>
            </h1>

            <p className="desc">Cyber Security learner</p>

            <div className="actions">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn glass">
                Contact Me
              </a>
            </div>

            <ul className="quick-meta">
              <li>
                <strong>Location:</strong> Bogura, Bangladesh
              </li>
            </ul>
          </div>
        </header>

        <section className="about card" id="about">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>
            “I am a Cyber Security learner, passionate about exploring web
            vulnerabilities like SQLi and XSS, and creating secure, modern web
            pages using only HTML & CSS. I am continuously learning and
            practicing to understand real-world security challenges and improve
            my skills in web security and secure development.”
          </p>
        </section>

        <section className="skills section" id="skills">
          <h2 className="text-2xl font-bold">Skills</h2>

          <div className="skills-grid">
            <div className="skill">
              <h3>HTML</h3>
              <div className="skill-bar">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>

            <div className="skill">
              <h3>CSS</h3>
              <div className="skill-bar">
                <span style={{ width: "50%" }}></span>
              </div>
            </div>

            <div className="skill">
              <h3>Web Security</h3>
              <div className="skill-bar">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>

            <div className="skill">
              <h3>Cyber Security</h3>
              <div className="skill-bar">
                <span style={{ width: "55%" }}></span>
              </div>
            </div>

            <div className="skill">
              <h3>Networking</h3>
              <div className="skill-bar">
                <span style={{ width: "50%" }}></span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <h2 className="text-2xl font-bold">Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Cyber Portfolio</h3>
              <p>learning</p>
              <div className="tags">
                <span>Cyber Security</span>
                <span>Penetration tester</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Testing Lab</h3>
              <p>Safe local lab environment to practice all vulnerabilities.</p>
              <div className="tags">
                <span>Security</span>
                <span>Lab</span>
                <span>XSS</span>
                <span>SQLi</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact card section" id="contact">
          <h2 className="text-2xl font-bold">Contact</h2>

          <p>
            <strong>Email:</strong> mdnuhasmahmud20@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +8801405947018
          </p>

          <form className="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your Name" />
            </label>

            <label>
              Message
              <textarea placeholder="Your Message"></textarea>
            </label>

            <div className="form-actions">
              <button type="submit" className="btn primary">
                Send
              </button>
              <button type="reset" className="btn glass">
                Reset
              </button>
            </div>
          </form>
        </section>

        <footer className="footer-note">Copyright © 2025</footer>
      </div>
    </>
  );
};

export default NuhasPortfolio;
