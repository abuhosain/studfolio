import React, { useEffect } from "react";

const RobinPortfolio = () => {
  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <>
      {/* Injecting CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root{
              --bg:#0b0f19;
              --card:#11162a;
              --text:#f8fafc;
              --muted:#94a3b8;
              --accent:#38bdf8; 
              --accent-2:#6366f1; 
              --border:rgba(255,255,255,0.08);
              --radius:14px;
            }

            *{box-sizing:border-box}

            body{
              margin:0;
              font-family:Inter, sans-serif;
              background:radial-gradient(80% 60% at 50% 0%, #11183a 0%, var(--bg) 60%);
              color:var(--text);
              line-height:1.6;
            }

            .container{
              max-width:1100px;
              margin:auto;
              padding:48px 20px;
            }

            header{
              display:flex;
              justify-content:space-between;
              align-items:center;
              margin-bottom:100px;
            }

            .logo{
              font-weight:700;
              font-size:18px;
              letter-spacing:0.5px;
            }

            nav a{
              margin-left:28px;
              text-decoration:none;
              color:var(--muted);
              font-weight:500;
            }

            nav a:hover{color:var(--text)}

            .hero{
              max-width:760px;
            }

            h1{
              font-size:48px;
              line-height:1.15;
              margin:0 0 20px;
            }

            h1 span{
              background:linear-gradient(90deg,var(--accent),var(--accent-2));
              -webkit-background-clip:text;
              color:transparent;
            }

            .hero p{
              font-size:18px;
              color:var(--muted);
              margin-bottom:36px;
            }

            .btn{
              display:inline-block;
              padding:14px 30px;
              font-weight:600;
              text-decoration:none;
              color:#020617;
              background:linear-gradient(90deg,var(--accent),var(--accent-2));
              border-radius:var(--radius);
            }

            section{margin-top:140px}

            section h2{
              font-size:30px;
              margin-bottom:12px;
            }

            section > p{
              color:var(--muted);
              max-width:620px;
            }

            .services{
              margin-top:48px;
              display:grid;
              grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
              gap:28px;
            }

            .service{
              background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));
              border:1px solid var(--border);
              border-radius:var(--radius);
              padding:28px;
            }

            .service h3{margin:0 0 10px;font-size:18px}
            .service p{color:var(--muted);font-size:15px}

            .projects{
              margin-top:48px;
              display:grid;
              grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
              gap:28px;
            }

            .project{
              background:var(--card);
              border-radius:var(--radius);
              overflow:hidden;
              border:1px solid var(--border);
            }

            .project img{width:100%;display:block}

            .project div{
              padding:20px;
            }

            .project strong{display:block;margin-bottom:4px}

            .contact{
              margin-top:48px;
              background:linear-gradient(90deg,rgba(56,189,248,0.15),rgba(99,102,241,0.15));
              border:1px solid var(--border);
              border-radius:var(--radius);
              padding:40px;
              max-width:620px;
            }

            footer{
              margin-top:160px;
              color:var(--muted);
              font-size:14px;
            }

            @media(max-width:600px){
              h1{font-size:36px}
              header{flex-direction:column;align-items:flex-start;gap:16px}
              nav a{margin:0 18px 0 0}
            }
          `,
        }}
      />

      {/* HTML Converted to JSX */}
      <div className="bg-black">
      <div className="container">
        <header>
          <div className="logo text-white">Yeyan Islam Robin</div>
          <nav>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero">
          <h1 className="text-white">
            I design <span>clean & modern</span>
            <br />
            WordPress websites
          </h1>
          <p>
            WordPress Web Designer focused on simple UI, strong UX, and
            professional visuals that help businesses grow online.
          </p>
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </section>

        <section id="services">
          <h2 className="text-white font-bold">Services</h2>
          <p>Simple solutions with premium design quality and performance.</p>

          <div className="services">
            <div className="service">
              <h3 className="text-white font-bold">WordPress Design</h3>
              <p>
                High-quality layouts with clear structure, spacing, and modern
                typography.
              </p>
            </div>

            <div className="service">
              <h3 className="text-white font-bold">WooCommerce</h3>
              <p>
                Clean online stores designed to convert visitors into customers.
              </p>
            </div>

            <div className="service">
              <h3 className="text-white font-bold">Speed & SEO</h3>
              <p>
                Optimized performance, fast load times, and SEO-friendly builds.
              </p>
            </div>
          </div>
        </section>

        <section id="work">
          <h2 className="text-white font-bold">Selected Work</h2>
          <p>A small collection of recent WordPress projects.</p>

          <div className="projects">
            <div className="project">
              <img
                src="https://via.placeholder.com/600x400?text=Project+01"
                alt="Project 01"
              />
              <div>
                <strong className="text-white font-bold">Business Website</strong>
                <span style={{ color: "var(--muted)" }}>
                  UI redesign + speed
                </span>
              </div>
            </div>

            <div className="project">
              <img
                src="https://via.placeholder.com/600x400?text=Project+02"
                alt="Project 02"
              />
              <div>
                <strong className="text-white font-bold">E-commerce Store</strong>
                <span style={{ color: "var(--muted)" }}>WooCommerce</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-white font-bold">Let’s work together</h2>
          <p>Have a project in mind? I’m available for freelance work.</p>

          <div className="contact text-white font-bold">
            <p>
              <strong>Email:</strong> robin@email.com
            </p>
            <p>
              <strong>Location:</strong> Gaibandha, Bangladesh
            </p>
            <a href="mailto:your@email.com" className="btn">
              Contact Me
            </a>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default RobinPortfolio;
