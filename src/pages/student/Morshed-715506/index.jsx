import React, { useEffect } from "react";

const MorshedPortfolio = () => {
  useEffect(() => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    const form = document.getElementById("contact");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert(
          "Thanks! This form is a demo — hook it up to your backend or use Formspree."
        );
      });
    }
  }, []);

  return (
    <>
      <style>{`
        :root{
          --bg:#0f1724;
          --card:#0b1220;
          --muted:#94a3b8;
          --accent:#7c3aed;
          --glass: rgba(255,255,255,0.04);
          --radius:12px;
          --max-width:1100px;
          color-scheme: dark;
        }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{
          margin:0;
          font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          background:linear-gradient(180deg,#071025 0%, #081126 60%);
          color:#e6eef8;
          -webkit-font-smoothing:antialiased;
          -moz-osx-font-smoothing:grayscale;
          line-height:1.45;
          padding:40px 20px;
          display:flex;
          justify-content:center;
        }
        .container{
          width:100%;
          max-width:var(--max-width);
        }

        header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:20px;
          margin-bottom:28px;
        }
        .brand{
          display:flex;align-items:center;gap:12px;font-weight:700;
        }
        .brand .logo{
          width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#4f46e5);display:flex;align-items:center;justify-content:center;font-weight:800;color:white;font-size:18px;box-shadow:0 6px 18px rgba(124,58,237,0.18)
        }
        nav a{color:var(--muted);text-decoration:none;margin-left:18px;font-weight:600}
        nav a:hover{color:#fff}

        .hero{
          display:grid;grid-template-columns:1fr 340px;gap:28px;align-items:center;margin-bottom:28px
        }
        .card{
          background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border-radius:var(--radius);
          padding:28px;
          box-shadow: 0 6px 20px rgba(2,6,23,0.6);
          border:1px solid rgba(255,255,255,0.03);
        }
        .hero .intro h1{font-size:28px;margin:0 0 8px}
        .hero .intro p{color:var(--muted);margin:0 0 18px}
        .cta{display:inline-block;padding:10px 16px;border-radius:10px;background:linear-gradient(90deg,var(--accent),#5b21b6);color:white;text-decoration:none;font-weight:600}

        .profile{display:flex;gap:14px;align-items:center}
        .avatar{width:84px;height:84px;border-radius:14px;background:linear-gradient(135deg,#0ea5a4,#7c3aed);display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:700}
        .meta small{color:var(--muted)}

        .projects{
          margin-top:18px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px
        }
        .project{padding:14px;border-radius:12px;background:var(--glass);border:1px solid rgba(255,255,255,0.02)}
        .project h3{margin:0 0 6px;font-size:16px}
        .project p{margin:0;color:var(--muted);font-size:14px}

        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:18px}
        .skills{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
        .skill{background:rgba(255,255,255,0.03);padding:8px 10px;border-radius:999px;font-weight:600;color:var(--muted);font-size:13px}

        footer{margin-top:26px;color:var(--muted);font-size:14px;text-align:center}

        @media (max-width:900px){
          .hero{grid-template-columns:1fr}
          .projects{grid-template-columns:repeat(2,1fr)}
          .two-col{grid-template-columns:1fr}
        }
        @media (max-width:560px){
          .projects{grid-template-columns:1fr}
          nav a{margin-left:10px;font-size:14px}
          body{padding:22px}
        }
      `}</style>

      <div className="container">


        <section className="hero">
          <div className="card intro">
            <h1>
              Hi!My name is Morshed Mahbub. I build beautiful, usable
              interfaces.
            </h1>
            <p>
              I’m a frontend developer focusing on clean UI, accessibility, and
              performance. I turn ideas into delightful products.
            </p>
            <a className="cta" href="#contact">
              Get in touch
            </a>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div className="profile">
                <div className="avatar">MM</div>
                <div className="meta">
                  <div style={{ fontWeight: 700 }}>MORSHED MAHBUB</div>
                  <small>freelancer</small>
                </div>
              </div>
            </div>

            <div
              className="projects"
              id="projects"
              style={{ marginTop: "18px" }}
            >
              <div className="project">
                <h3>Project One</h3>
                <p>parsonal portfolio website</p>
              </div>
              <div className="project">
                <h3>Project Two</h3>
                <p>Weather Apps</p>
              </div>
              <div className="project">
                <h3>Project Three</h3>
                <p>Travel Bokking UI</p>
              </div>
              <div className="project">
                <h3>Project other</h3>
                <p>50+</p>
              </div>
            </div>
          </div>

          <aside className="card">
            <h3>Contact</h3>
            <form id="contact">
              <div style={{ marginTop: "12px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    marginBottom: "6px",
                    color: "var(--muted)",
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "transparent",
                    color: "inherit",
                  }}
                />
              </div>

              <div style={{ marginTop: "10px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    marginBottom: "6px",
                    color: "var(--muted)",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  placeholder="you@mail.com"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "transparent",
                    color: "inherit",
                  }}
                />
              </div>

              <div style={{ marginTop: "10px" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    marginBottom: "6px",
                    color: "var(--muted)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Hi!"
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "transparent",
                    color: "inherit",
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: "12px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  border: "none",
                  background: "linear-gradient(90deg,var(--accent),#4f46e5)",
                  color: "white",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </form>

            <hr
              style={{
                margin: "16px 0",
                border: "none",
                borderTop: "1px solid rgba(255,255,255,0.03)",
              }}
            />

            <div style={{ fontSize: "14px", color: "var(--muted)" }}>
              <div>
                <strong>Email:</strong> mahbub1924366@gmail.com
              </div>
              <div style={{ marginTop: "6px" }}>
                <strong>Phone:</strong> +880 1540580866
              </div>
            </div>
          </aside>
        </section>

        <section className="two-col card" id="about">
          <div>
            <h3>About me</h3>
            <p
              style={{
                color: "var(--muted)",
                marginTop: "8px",
              }}
            >
              My name is Morshed Mahbub.I am fronted Developer with a possion
              for creating clean,responsive and user friendly website. I love
              working with modern technologies likeHTML,CSS,JavaScript and React
              to build smooth and visually appealing user interface. I enjoy
              learning new skills and improving my work every day.
            </p>

            <div className="skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
            </div>
          </div>

          <div>
            <h3>Experience</h3>
            <div style={{ marginTop: "8px", color: "var(--muted)" }}>
              <p style={{ margin: 0 }}>
                Frontend Developer student of Bogura Pollytechnic Institute
              </p>
            </div>
          </div>
        </section>

        <footer>
          © <span id="year"></span> Your Name — Built with ❤️ •{" "}
          <a href="#" style={{ color: "var(--muted)", textDecoration: "none" }}>
            GitHub
          </a>
        </footer>
      </div>
    </>
  );
};

export default MorshedPortfolio;
