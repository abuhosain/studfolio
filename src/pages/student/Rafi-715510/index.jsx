import React, { useEffect } from "react";

const RafiPortfolio = () => {
  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        :root {
          --bg-dark: #05060b;
          --glass: rgba(255, 255, 255, 0.06);
          --border: rgba(255, 255, 255, 0.1);
          --accent: #7b5bff;
          --accent2: #00eaff;
          --muted: #a6b2c9;
          --text: #e8eeff;
          --radius: 18px;
          --shadow: 0 0 40px rgba(0, 189, 255, 0.15);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Poppins", sans-serif;
        }

        body {
          background: radial-gradient(circle at top, #0c0f1a, #05060b 60%);
          color: var(--text);
          line-height: 1.6;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 32px;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .logo {
          font-size: 26px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: white;
          padding: 12px 20px;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
        }

        nav a {
          margin-left: 20px;
          color: var(--muted);
          text-decoration: none;
          font-size: 15px;
          transition: 0.3s;
        }
        nav a:hover {
          color: var(--accent2);
          text-shadow: 0 0 10px var(--accent2);
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 330px;
          gap: 30px;
        }

        .glass {
          background: var(--glass);
          padding: 24px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          backdrop-filter: blur(14px);
          box-shadow: var(--shadow);
          transition: 0.3s;
        }

        .glass:hover {
          transform: translateY(-4px);
        }

        .hero h2 {
          font-size: 34px;
          margin-bottom: 10px;
          background: linear-gradient(to right, var(--accent), var(--accent2));
          -webkit-background-clip: text;
          color: transparent;
        }

        .cta {
          margin-top: 18px;
          display: flex;
          gap: 14px;
        }

        .btn {
          padding: 12px 16px;
          border-radius: var(--radius);
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: 0.3s;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: white;
        }
        .btn-primary:hover {
          opacity: 0.85;
        }
        .btn-ghost {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--muted);
        }
        .btn-ghost:hover {
          color: white;
          background: rgba(255,255,255,0.06);
        }

        .profile {
          text-align: center;
        }

        .avatar {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          margin: auto;
          margin-bottom: 14px;
          background: linear-gradient(135deg, var(--accent2), var(--accent));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
          color: white;
          font-weight: 700;
          box-shadow: 0 0 40px rgba(123, 91, 255, 0.3);
        }

        section {
          margin-top: 40px;
        }

        h3 {
          margin-bottom: 12px;
          font-size: 22px;
          color: var(--accent2);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .skills ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skills li {
          padding: 8px 14px;
          background: rgba(255,255,255,0.05);
          color: var(--muted);
          border-radius: 10px;
          font-size: 14px;
        }

        .project {
          margin-bottom: 16px;
        }
        .project h4 {
          font-size: 18px;
          margin-bottom: 4px;
          color: white;
        }
        .project-desc {
          color: var(--muted);
          font-size: 14px;
        }
        .tags {
          margin-top: 6px;
          font-size: 12px;
          color: var(--accent2);
        }

        input, textarea {
          padding: 12px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          color: white;
          resize: none;
        }

        footer {
          text-align: center;
          color: var(--muted);
          margin-top: 40px;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <div className="bg-black">
        <div className="container">
          <header>
            <div className="logo">Portfolio</div>
            <nav>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="hero">
            <div className="glass">
              <h2 className="font-bold">
                Hi, I'm <strong>Md. Reajul Zannat Rafi</strong>
              </h2>
              <p className="text-white">
                I create beautiful, modern and functional websites with clean UI
                and smooth UX. I focus on simplicity, performance, animations,
                and next-level UI craft.
              </p>

              <div className="cta">
                <button className="btn btn-primary">Contact With Me</button>
                <button className="btn btn-ghost">View Projects</button>
              </div>

              <section id="about">
                <h3 className="font-bold">About Me</h3>
                <p className="muted text-white">
                  I am Rafi. I am a student of <mark>CST</mark> depertment in{" "}
                  <mark>Bogra Polytechnic Institute</mark>.
                </p>

                <div
                  className="skills glass text-white font-bold"
                  style={{ marginTop: "18px" }}
                >
                  <strong>Skills</strong>
                  <ul style={{ marginTop: "12px" }}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Wordpress</li>
                    <li>Meta Ads</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="glass profile">
              <div className="avatar">Rafi Photo</div>
              <h3 className="font-bold" style={{ color: "white" }}>
                Md. Reajul Zannat Rafi
              </h3>
              <p className="muted text-white">Front-end Developer</p>

              <div className="glass text-white" style={{ marginTop: "18px" }}>
                <strong>Contact</strong>
                <p className="muted" style={{ marginTop: "6px" }}>
                  Email:mdreajulrafi@gmail.com
                </p>
                <p className="muted" style={{ marginTop: "6px" }}>
                  Phone: +8801765192666
                </p>
              </div>
            </div>
          </div>

          <section id="projects">
            <h3>Projects</h3>

            <div className="glass project">
              <h4>Landing Page Design</h4>
              <p className="project-desc">
                Modern, animated landing page with premium UI.
              </p>
              <div className="tags">HTML · CSS · Animation</div>
            </div>

            <div className="glass project">
              <h4>Mini Web App</h4>
              <p className="project-desc">
                Interactive small app built using vanilla JS.
              </p>
              <div className="tags">JavaScript · UI</div>
            </div>
          </section>

          <section id="contact">
            <h3>Contact</h3>
            <div className="glass">
              <form>
                <input type="text" placeholder="Your Name" />
                <br />
                <br />
                <input type="email" placeholder="Your Email" />
                <br />
                <br />
                <textarea rows="4" placeholder="Message"></textarea>
                <br />
                <br />
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </form>
            </div>
          </section>

          <footer>
            © <span id="year"></span> Md. Reajul Zannat Rafi — Portfolio.
          </footer>
        </div>
      </div>
    </>
  );
};

export default RafiPortfolio;
