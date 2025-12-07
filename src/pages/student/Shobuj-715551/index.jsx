import React from 'react';

const ShobujPortfolio = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
:root {
  --primary-color: #1a73e8;
  --accent-color: #6e51d8;
  --text-color: #333;
  --light-bg: #f5f5f5;
  --card-bg: white;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--light-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

ul {
  list-style: none;
}
/* Common Styles */

.section {
  padding: 60px 0;
}

.section-title {
  font-size: 2.5em;
  font-weight: 700;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 10px;
}

.accent-title {
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 5px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

.card {
  background-color: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-3px);
}
/* Buttons */

.btn {
  display: inline-block;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s, color 0.3s;
}

.primary-btn {
  background-color: var(--primary-color);
  color: white;
}

.primary-btn:hover {
  background-color: #145cb8;
}

.secondary-btn {
  background-color: var(--accent-color);
  color: rgb(54, 35, 35);
  margin-top: 15px;
}

.secondary-btn:hover {
  background-color: #ffffff;
}
/* 2. Hero Section */

.hero-section {
  background-color: var(--light-bg);
  padding: 80px 0;
  overflow: hidden;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.text-content {
  flex: 1;
}

.greeting {
  font-size: 1.1em;
  font-weight: 500;
  color: #666;
}

.text-content h1 {
  font-size: 3.5em;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
}

.text-content .title {
  font-size: 1.3em;
  color: var(--accent-color);
  margin-bottom: 25px;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

.profile-frame {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 0 10px rgb(228, 224, 24), 0 0 0 20px hsl(225, 8%, 91%);
  /* Multiple Rings */
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
/* 3. About Me */

.about-section {
  padding-top: 20px;
}

.about-card {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--card-bg);
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.about-card p {
  margin-bottom: 25px;
  font-size: 1.1em;
}

.about-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.about-link {
  color: var(--primary-color);
  font-weight: 600;
}

.about-link i {
  margin-right: 5px;
}
/* 4. Technical Skills */

.skills-grid {
  background-color: var(--card-bg);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--shadow);
  border-radius: 10px;
  padding: 40px;
}

.skill-tag {
  background-color: #e8f0fe;
  /* Light Blue/Gray */
  color: var(--primary-color);
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.95em;
  font-weight: 600;
  transition: background-color 0.3s;
}

.skill-tag:hover {
  background-color: var(--primary-color);
  color: white;
}
/* 5. Educational Qualifications */

.education-item {
  max-width: 900px;
  margin: 20px auto;
}

.education-item h3 {
  color: var(--primary-color);
  margin-bottom: 5px;
}

.education-item .institution {
  font-weight: 600;
  color: #666;
  margin-bottom: 10px;
}
/* 6. Featured Projects */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.project-info {
  padding: 15px;
}

.project-info h3 {
  font-size: 1.4em;
  color: var(--accent-color);
  margin-bottom: 5px;
}
/* 7. Let's Connect / Contact */

.contact-section {
  background-color: var(--card-bg);
}

.contact-card {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #ddd;
}

.social-icons {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 1.2em;
  transition: background-color 0.3s, color 0.3s;
}

.social-icon:hover {
  background-color: var(--primary-color);
  color: white;
}
/* 9. Media Queries (Responsiveness) */

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
  }
  .text-content h1 {
    font-size: 2.5em;
  }
  .text-content .title {
    font-size: 1.1em;
  }
  .profile-frame {
    width: 200px;
    height: 200px;
    box-shadow: 0 0 0 8px white, 0 0 0 15px #e8f0fe;
    margin-bottom: 30px;
  }
  .about-links {
    flex-direction: column;
    gap: 10px;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .navbar ul {
    gap: 15px;
  }
}

@media (max-width: 500px) {
  .nav-content {
    flex-direction: column;
    gap: 10px;
  }
  .navbar ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  .btn {
    padding: 8px 15px;
  }
}
      `}</style>

      <section id="home" className="hero-section">
        <div className="container hero-content">
          <div className="text-content">
            <p className="greeting">👋 Hello, I'm</p>
            <h1>Shobuj Islam</h1>
            <p className="title">
              A Computer Science Student & Aspiring Web Developer from Bogura,
              Bangladesh.
            </p>
            <a href="#contact " className="btn primary-btn">Contact Me</a>
          </div>
          <div className="image-content">
            <div className="profile-frame">
              <img
                src="https://i.ibb.co.com/DfkhnJ0R/Screenshot-20251202-000031-2.jpg"
                alt="Shobuj Islam Profile "
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about " className="section about-section">
        <div className="container">
          <div className="about-card">
            <h2 className="section-title">About Me</h2>
            <p>
              Hi, I'm Shobuj Islam from Bangladesh. I build modern, scalable web
              applications designed to deliver a measurable, positive impact on
              users' lives. My expertise includes full-stack development with an
              emphasis on performance optimization and user experience (UX). I
              actively seek out best practices for writing clean, efficient code
              and embracing new technologies. Ready to turn ambitious ideas into
              functional, real-world products!
            </p>
          </div>
        </div>
      </section>

      <section id="skills " className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <p className="subtitle">Technologies and tools I bring to the table</p>

          <div className="skills-grid">
            <div className="skill-tag">HTML5</div>
            <div className="skill-tag">CSS3</div>
            <div className="skill-tag">JavaScript (ES6+)</div>
            <div className="skill-tag">React JS</div>
            <div className="skill-tag">NodeJS</div>
            <div className="skill-tag">Firebase</div>
            <div className="skill-tag">Git & GitHub</div>
          </div>
        </div>
      </section>

      <section id="education " className="section education-section">
        <div className="container">
          <h2 className="section-title">Educational Qualifications</h2>
          <p className="subtitle">My academic achievements and journey</p>

          <div className="education-item card">
            <h3>Diploma in Computer Science and Technology - Session 22-23</h3>
            <p className="institution">
              Bogura Polytechnic Institute, Bogura | 2022 - 2026
            </p>
            <p className="details">
              Goal: Building a strong foundation in Computer Science and
              technology with a blend of practical programming, software
              development, and modern computing skills.
            </p>
          </div>

          <div className="education-item card">
            <h3>Primary School Certification- 2016</h3>
            <p className="institution">
              Nakua Government Primary School,Sherpur Bogura | 2011-2016
            </p>
            <p className="details">
              Nakua Government Primary School,Sherpur,Bogura*Primary School
              Certificate (PSC). * Achieved a GPA of 4.90/5.00.
            </p>
          </div>

          <div className="education-item card">
            <h3>Secondary School Certificate -2022</h3>
            <p className="institution">Betkhoir High School | 2017-2022</p>
            <p className="details">
              Betkhoir High School,Sherpur,Bogura* Completed Secondary School
              Certificate (SSC) in the Science stream. * Achieved a GPA of
              5.00/5.00. * Actively participated in the Debating Club and Science
              Club activities.
            </p>
          </div>
        </div>
      </section>

      <section id="projects " className="section projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="subtitle">
            Explore some of my favorite work built with modern web technologies
          </p>

          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://i.ibb.co.com/hxWQPvWX/the-calculator-2019-08-28.webp"
                alt="Simple Calculator Project Image "
              />
              <div className="project-info">
                <h3>Simple Calculator</h3>
                <p>
                  Create a functional calculator that handles basic arithmetic
                  operations (addition, subtraction, multiplication, division).
                  This project is great for practicing UI design and event
                  handling.
                </p>
                <a href="# " className="btn secondary-btn">Live Site</a>
              </div>
            </div>

            <div className="project-card">
              <img
                src="https://i.ibb.co.com/YTJZkVCF/photo-1705077689363-76d4424a13c7.jpg "
                alt="Weather App Project Image "
              />
              <div className="project-info">
                <h3>Weather App</h3>
                <p>
                  Display current weather data by utilizing a third-party API
                  (like OpenWeatherMap). This teaches you how to fetch data from
                  an external source (API Fetching) and display it dynamically.
                </p>
                <a href="# " className="btn secondary-btn">Live Site</a>
              </div>
            </div>

            <div className="project-card">
              <img
                src="https://i.ibb.co.com/RkQ6KWKW/ecommerce-product-upload-and-listing.webp "
                alt=" E-commerce Product Listing Page Project Image "
              />
              <div className="project-info">
                <h3>E-commerce Product Listing Page</h3>
                <p>
                  Build a single page showcasing various products with images,
                  descriptions, and prices. Focus on responsive design and
                  advanced CSS layouts like Grid or Flexbox..
                </p>
                <a href="# " className="btn secondary-btn">Live Site</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact " className="section contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="subtitle">
            I'm always open to discussing new project collaborations. Let's create
            something amazing together! 🤝
          </p>

          <div className="contact-card">
            <p>Email:mdshobujislam951@gmail.com</p>
            <p>Phone:+8801797784447</p>
            <p>Location Bogura,Dhaka, Bangladesh</p>

            <div className="social-icons">
              <a href="# " className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="# " className="social-icon"><i className="fab fa-github"></i></a>
              <a
                href="https://www.facebook.com/m.s.o.j.is.547561 "
                className="social-icon"
              ><i className="fab fa-facebook-f"></i></a>
              <a
                href="https://www.instagram.com/_shobuj_islam_?igsh=MXI0cHo5bTBoZzdhcQ=="
                className="social-icon"
              ><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShobujPortfolio;
