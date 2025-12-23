import React from "react";

const ShriyarPortfolio = () => {
  return (
    <>
      {/* -------------------- START OF CSS STYLES -------------------- */}
      <style jsx="true">{`
        /* --- Variables & Reset --- */
        :root {
          --bg-color: #0f172a; /* Deep Slate Blue */
          --bg-darker: #020617; /* Darker Slate */
          --primary: #0ea5e9; /* Electric Blue (Tech vibe) */
          --text-color: #e2e8f0; /* Light Grey */
          --text-muted: #94a3b8; /* Muted Grey */
          --card-bg: #1e293b; /* Card Background */
          --font-main: "Poppins", sans-serif;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: var(--font-main);
          background-color: var(--bg-color);
          color: var(--text-color);
          line-height: 1.6;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        ul {
          list-style: none;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }
        /* Note: Header/Nav styles were present in the CSS but not the HTML. Kept here for completeness. */
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-color);
        }
        .logo span {
          color: var(--primary);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
        /* --- Hero Section --- */
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 60px; /* Offset for fixed nav */
        }
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          flex-wrap: wrap; /* For mobile */
        }
        .hero-text {
          flex: 1;
          min-width: 300px;
        }
        .greeting {
          color: var(--primary);
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }
        .hero-text h1 {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .hero-text h3 {
          font-size: 1.5rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }
        .hero-img {
          flex: 1;
          display: flex;
          justify-content: center;
          min-width: 300px;
        }
        .hero-img img {
          width: 350px;
          height: 350px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--primary);
          box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
        }
        /* --- Buttons --- */
        .btn {
          display: inline-block;
          padding: 0.8rem 2rem;
          border-radius: 5px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-primary {
          background-color: var(--primary);
          color: #fff;
        }
        .btn-primary:hover {
          background-color: #0284c7;
          transform: translateY(-2px);
        }
        /* --- General Section Styles --- */
        .section {
          padding: 80px 0;
        }
        .bg-darker {
          background-color: var(--bg-darker);
        }
        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 3rem;
          position: relative;
        }
        .section-title::after {
          content: "";
          width: 60px;
          height: 3px;
          background: var(--primary);
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        /* --- About --- */
        .bio-card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 10px;
          border-left: 5px solid var(--primary);
          max-width: 800px;
          margin: 0 auto;
          background-color: white;
        }
        /* --- Experience Timeline --- */
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          
        }
        .timeline-item {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 10px;
          position: relative;
          padding-left: 3rem;
          background-color: white;
        }
        .timeline-icon {
          position: absolute;
          left: 20px;
          top: 25px;
          color: var(--primary);
          font-size: 1.2rem;
        }
        .timeline-content h3 {
          color: var(--primary);
          
        }
        .timeline-content h4 {
          color: var(--text-muted);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        /* --- Skills Grid --- */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .skill-card {
          background: white;
          padding: 2rem;
          text-align: center;
          border-radius: 10px;
          transition: transform 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .skill-card:hover {
          transform: translateY(-5px);
          border-bottom: 3px solid var(--primary);
        }
        .skill-card i {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        /* --- Services --- */
        .service-wrapper {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .service-box {
          background: var(--bg-color);
          padding: 2rem;
          border-radius: 10px;
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          background-color: white;

        }
        .service-box h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        /* --- Portfolio Placeholder --- */
        .placeholder-box {
          text-align: center;
          padding: 4rem 2rem;
          border: 2px dashed var(--text-muted);
          border-radius: 10px;
          color: var(--text-muted);
        }
        .placeholder-box i {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        /* --- Contact --- */
        .contact-container {
          display: flex;
          gap: 3rem;
          flex-wrap: wrap;
        }
        .contact-info,
        .contact-form {
          flex: 1;
          min-width: 300px;
        }
        .social-icons {
          margin-top: 1.5rem;
          display: flex;
          gap: 1rem;
        }
        .social-icons a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--card-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }
        .social-icons a:hover {
          background: var(--primary);
          color: white;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 1rem;
          background: var(--card-bg);
          border: 1px solid transparent;
          border-radius: 5px;
          color: #fff;
          font-family: inherit;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: var(--primary);
        }
        /* --- Footer --- */
        /* --- Mobile Responsive --- */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          } /* Hide menu on mobile for simplicity */
          .hero {
            flex-direction: column-reverse;
            text-align: center;
            height: auto;
            padding-bottom: 4rem;
          }
          .hero-img {
            margin-bottom: 2rem;
            margin-top: 2rem;
          }
          .hero-img img {
            width: 250px;
            height: 250px;
          }
          .hero-text h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
      {/* -------------------- END OF CSS STYLES -------------------- */}

      {/* -------------------- START OF HTML/JSX STRUCTURE -------------------- */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I am</span>
            <h1>Md. Shahriyar Ahmed</h1>
            <h3>Networking Enthusiast & Front-End Designer</h3>
            <p>
              Specializing in network architecture, hardware systems, and modern
              web interfaces.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
          <div className="hero-img">
            <img
              src="https://i.ibb.co.com/DPfCGhB0/IMG-1992.jpg"
              alt="Md. Shahriyar Ahmed"
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="bio-card">
              <p>
                I am currently pursuing a{" "}
                <strong>Diploma in Computer Science</strong> at{" "}
                <strong>Bogura Polytechnic Institute</strong> (Batch 2022/23),
                with a strong focus on networking. Over time, I have gained
                solid hands-on knowledge in networking concepts, configuration,
                and troubleshooting.
              </p>
              <p>
                I am now actively applying these skills through practical work
                and real-world projects as I continue to grow in the field of
                computer and network technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section bg-darker">
        <div className="container">
          <h2 className="section-title text-white">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="timeline-content">
                <h3>Network Technician / Specialist</h3>
                <h4>Network Design Company, Bangladesh</h4>
                <p>
                  <strong>Responsibilities:</strong> Providing top-tier network
                  and hardware systems for SIM companies. My role includes
                  setup, intricate configuration, and troubleshooting of
                  enterprise-level hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fas fa-server"></i>
              <h3>Networking</h3>
              <p>Setup, Configuration, Troubleshooting, Hardware Systems</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-code"></i>
              <h3>Front-End</h3>
              <p>HTML5, CSS3, JavaScript, Responsive Design</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-terminal"></i>
              <h3>Programming</h3>
              <p>Basics of C, C++, Python, Java</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section bg-darker">
        <div className="container">
          <h2 className="section-title text-white">Services</h2>
          <div className="service-wrapper">
            <div className="service-box">
              <h3>Network Setup</h3>
              <p>
                Complete network architecture design and cable management for
                offices and homes.
              </p>
            </div>
            <div className="service-box">
              <h3>Hardware Configuration</h3>
              <p>
                Installation and maintenance of routers, switches, and server
                hardware.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="placeholder-box">
            <i className="fas fa-laptop-code"></i>
            <h3>Projects Coming Soon</h3>
            <p>
              I am currently working on documenting my recent network setups and
              coding projects. Stay tuned!
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-darker">
        <div className="container">
          <h2 className="section-title text-white">Contact Me</h2>
          <div className="contact-container">
            <div className="contact-info text-white">
              <h3>Let's Connect</h3>
              <p>
                Feel free to reach out for networking consultation or front-end
                collaborations.
              </p>
              <div className="social-icons">
                <a href="#">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="#">
                  <i className="fas fa-phone"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* -------------------- END OF HTML/JSX STRUCTURE -------------------- */}
    </>
  );
};

export default ShriyarPortfolio;
