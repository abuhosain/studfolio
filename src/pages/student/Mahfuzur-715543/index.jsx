import React from 'react';

const MahfuzurPortfolio = () => {
  return (
    <>
      {/* Dark/Light Mode Switch */}
      <input type="checkbox" id="theme-toggle" />
      <label htmlFor="theme-toggle" className="toggle-label">Switch Mode</label>


      {/* Hero Section */}
      <header>
        <div className="container text-white">
          <h1 className="fade-in title">
            Hi, I'm <span>Mahfuz</span>
          </h1>
          <p className="fade-in subtitle">Developer • Tech Enthusiast • Learner</p>
          <a href="#projects" className="btn fade-in">Explore Projects</a>
        </div>
      </header>

      {/* About */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-box">
          <img
            src="https://i.ibb.co.com/DHxL62s4/orca-image-1158172887-jpeg.jpg"
            alt="About"
          />
          <p>
            I am a passionate Computer Science student.  
            I love creating modern UI, solving problems and learning new technologies.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          <div className="project-card glow">
            <h3>Portfolio Website</h3>
            <p>Clean UI built using only HTML & CSS.</p>
          </div>

          <div className="project-card glow">
            <h3>Weather App UI</h3>
            <p>A simple modern interface design.</p>
          </div>

          <div className="project-card glow">
            <h3>Game Landing Page</h3>
            <p>Creative animated landing page design.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">Want to work with me? Feel free to reach me anytime.</p>
        <a href="mailto:kobiguru557@gmail.com" className="btn contact-btn">Send Email</a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Mahfuz | All Rights Reserved</p>
      </footer>

      {/* Inline CSS */}
      <style>{`
        *{
          margin: 0; padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        :root{
          --bg: #0a0f24;
          --text: #ffffff;
          --primary: #5f00ff;
          --card: #141a33;
        }

        /* Light Mode */
        #theme-toggle:checked ~ *{
          --bg: #f0f0ff;
          --text: #111;
          --card: #ffffff;
          --primary: #6a00ff;
        }

        body{
          background: var(--bg);
          color: var(--text);
        }

        .navbar{
          width: 100%;
          padding: 15px 10%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--card);
        }

        .nav-links{
          display: flex;
          gap: 25px;
          list-style-type: none;
        }

        .nav-links a{
          text-decoration: none;
          color: var(--text);
          font-weight: bold;
        }

        .menu-btn{
          display: none;
          font-size: 25px;
        }

        #nav-toggle{ display: none; }

        @media (max-width: 768px){
          .menu-btn{
            display: block;
            cursor: pointer;
          }
          .nav-links{
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: var(--card);
            flex-direction: column;
            text-align: center;
            display: none;
            padding: 20px 0;
          }
          #nav-toggle:checked ~ .nav-links{
            display: flex;
          }
        }

        #theme-toggle{
          display: none;
        }

        .toggle-label{
          position: fixed;
          right: 20px;
          bottom: 20px;
          padding: 10px 20px;
          background: var(--primary);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          z-index: 99;
        }

        header{
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(135deg, #0a0f24, #26004d);
          padding: 20px;
        }

        .title{ font-size: 3rem; }
        .title span{ color: var(--primary); }

        .subtitle{
          margin: 15px 0;
          font-size: 1.2rem;
        }

        .btn{
          padding: 12px 30px;
          background: var(--primary);
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          margin-top: 15px;
          transition: 0.3s;
        }

        .btn:hover{
          transform: scale(1.05);
        }

        .fade-in{
          animation: fade 1.5s ease;
        }

        @keyframes fade{
          from{ opacity: 0; transform: translateY(15px); }
          to{ opacity: 1; transform: translateY(0); }
        }

        .section-title{
          text-align: center;
          margin: 60px 0 30px;
          font-size: 2rem;
          color: var(--primary);
        }

        .about-box{
          display: flex;
          gap: 25px;
          align-items: center;
          width: 80%;
          margin: auto;
        }

        .about-box img{
          width: 140px;
          border-radius: 50%;
          border: 4px solid var(--primary);
        }

        .project-grid{
          width: 85%;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
        }

        .project-card{
          background: var(--card);
          padding: 25px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: 0.3s;
        }

        .glow:hover{
          box-shadow: 0 0 15px var(--primary);
          transform: translateY(-5px);
        }

        #contact{
          text-align: center;
          padding: 50px;
        }

        footer{
          text-align: center;
          padding: 20px;
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};

export default MahfuzurPortfolio;
