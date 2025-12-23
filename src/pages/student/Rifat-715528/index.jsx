import React from "react";

const CyberPortfolio = () => {
  return (
    <div className="portfolio-wrapper">
      {/* EMBEDDED CSS 
        Scoped to .portfolio-wrapper to act as a single-file component 
      */}
      <style>{`
        /* BASE RESET SCOPED */
        .portfolio-wrapper {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Consolas", monospace;
          background: #030303;
          color: #0affea;
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }

        .portfolio-wrapper * {
          box-sizing: border-box;
        }

        /* CYBER GRID BACKGROUND */
        .portfolio-wrapper::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(#0affea22 1px, transparent 1px),
            linear-gradient(90deg, #0affea22 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        /* SCANLINE EFFECT */
        .portfolio-wrapper::after {
          content: "";
          position: fixed;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, #00ffee11, #00ffee00);
          animation: scan 5s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes scan {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        /* HEADER */
        .portfolio-header {
          padding: 20px;
          text-align: center;
          border-bottom: 2px solid #0affea55;
          backdrop-filter: blur(5px);
          position: relative;
          z-index: 2;
        }

        .portfolio-header h1 {
          font-size: 35px;
          letter-spacing: 2px;
          color: #0affea;
          text-shadow: 0 0 10px #0affea;
          margin-bottom: 30px;
        }

        .portfolio-nav a {
          color: #0affea;
          margin: 0 15px;
          text-decoration: none;
          font-weight: bold;
        }

        .portfolio-nav a:hover {
          color: #fff;
          text-shadow: 0 0 10px #00ffee;
        }

        /* HERO SECTION */
        .hero {
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero h2 {
          font-size: 45px;
          text-shadow: 0 0 15px #0affea;
        }

        .hero span {
          color: #00ffee;
          text-shadow: 0 0 20px #00ffee;
        }

        /* TYPING EFFECT */
        .typing-text {
          color: #8affff;
          font-size: 20px;
          margin-top: 10px;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid #00ffee;
          width: 22ch;
          animation: typing 3s steps(22) forwards,
            blink 0.7s step-end infinite alternate;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 22ch; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        /* HERO BUTTONS */
        .hero-buttons {
          margin-top: 20px;
        }

        .hero-buttons .btn {
          margin: 0 10px;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 30px;
          background: #00ffee22;
          border: 1px solid #00ffee;
          color: #00ffee;
          text-decoration: none;
          font-weight: bold;
          border-radius: 5px;
          backdrop-filter: blur(5px);
          transition: 0.3s;
          cursor: pointer;
        }

        .btn:hover {
          background: #00ffee;
          color: #000;
          box-shadow: 0 0 20px #00ffee;
        }

        /* SECTIONS */
        .section {
          padding: 60px 8%;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .section h2 {
          font-size: 32px;
          margin-bottom: 20px;
          color: #00ffee;
          text-shadow: 0 0 10px #00ffee;
        }

        .section p {
          color: #b7ffff;
          line-height: 1.6;
        }

        /* SKILLS */
        .skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 18px;
          margin-top: 30px;
        }

        .skill-box {
          padding: 15px 25px;
          background: #021f1f;
          border: 1px solid #00ffee55;
          border-radius: 5px;
          color: #00ffee;
          text-shadow: 0 0 5px #00ffee;
          box-shadow: 0 0 8px #00ffee44;
        }

        /* EDUCATION */
        .edu-box {
          background: #022222;
          padding: 25px;
          border-radius: 8px;
          border: 1px solid #00ffee55;
          margin: 20px auto;
          width: 70%;
          color: #b7ffff;
          box-shadow: 0 0 10px #00ffee33;
        }

        /* FOOTER */
        .portfolio-footer {
          margin-top: 30px;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #00ffee55;
          color: #88ffff;
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* HEADER */}
      <header className="portfolio-header">
        <h1>Rakibul Hasan Rifat</h1>
        <nav className="portfolio-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>
          I Am <span>Ethical Hacker</span>
        </h2>
        <p className="typing-text">
          Web Pentester
          <br />
          Bug Hunter
        </p>
        <div className="hero-buttons">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            className="btn"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <a href="#skills" className="btn">
          Access Skills
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Cyber Security Researcher specializing in Web Pentesting,
          Ethical Hacking, Bug Bounty Hunting, and WordPress Malware Removal. My
          mission is to identify vulnerabilities, secure systems, and protect
          digital assets.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills">
          <div className="skill-box">Web Pentesting</div>
          <div className="skill-box">Bug Hunting</div>
          <div className="skill-box">Ethical Hacking</div>
          <div className="skill-box">Malware Removal</div>
          <div className="skill-box">WordPress Cleaning</div>
          <div className="skill-box">Burp Suite</div>
          <div className="skill-box">OWASP Top 10</div>
          <div className="skill-box">Linux</div>
          <div className="skill-box">Recon & Enumeration</div>
          <div className="skill-box">Web Application Security</div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="edu-box">
          <h3>Diploma in Computer Science & Technology</h3>
          <p>Completed from Bogura Polytechnic Institute.</p>
        </div>

        <div className="edu-box">
          <h3>HSC</h3>
          <p>Completed successfully.</p>
        </div>

        <div className="edu-box">
          <h3>SSC</h3>
          <p>Completed successfully.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Email: <strong>yourmail@example.com</strong>
        </p>
        <p>
          Phone: <strong>+8801XXXXXXXXX</strong>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        © 2025 Rakibul Hasan Rifat — Cyber Security Specialist
      </footer>
    </div>
  );
};

export default CyberPortfolio;
