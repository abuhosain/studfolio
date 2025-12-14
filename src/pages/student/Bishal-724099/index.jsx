import React from "react";

const BishalPortfolio = () => {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        :root{
          --primary-color:#db690ce3;
          --secondary-color:#ff4e05;
          --secondary-color-dark: #bf3900;
          --text-dark: #4d3333;
          --text-light: #ffffff;
          --white: #ffff;
          --max-width: 1200px;
        }
        *{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        .section__container{
          max-width: var(--max-width);
          margin: auto;
          padding: 5rem 1rem;
        }
        .section__title{ 
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
        }
        .section__title span {
          color: var(--white);
        }
        .section__subtitle {
          font-size: 2rem;
          font-weight: 600;
          text-align: center;
        }
        img {
          width: 100%;
        }
        .btn {
          padding: 1rem;
          font-size: 0.9rem;
          font-weight: 600;
          outline: none;
          border: none;
          border-radius: 5px;
          color: var(--white);
          background-color: var(--secondary-color);
          cursor: pointer;
          transition: 0.3s;
        }
        .btn:hover {
          background-color: var(--secondary-color-dark);
        }
        a {
          text-decoration: none;
          color: var(--white);
        }
        body {
          font-family: "Poppins", sans-serif;
        }
        nav .nav-logo a span {
          color: var(--secondary-color);
        }
        header {
          height: 100vh;
          background-image: url(https://i.ibb.co.com/nqk29kpc/header-bg.jpg);
          background-size: cover;
        }
        .header__container {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .header__container p {
          color: var(--text-light);
          max-width: 400px;
          margin: 1rem 0;
        }
        .header__container p span {
          color: var(--white);
          padding: 0.5rem 1rem;
          background-color: var(--secondary-color);
          border-radius: 5px;
          margin-right: 1rem;
        }
        .header__container h1 {
          font-size: 3rem;
          line-height: 3rem;
        }
        .action__btns {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .about, .project {
          background-color: var(--text-dark);
        }
        .about__container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .about__image img {
          max-width: 700px;
        }
        .about__details {
          padding: 2rem 0;
          color: var(--text-light);
          text-align: center;
        }
        .skills-title {
          text-align: center;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 30px;
        }
        .skills-section {
          text-align: center;
          padding: 80px 0;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
          width: 80%;
          margin: auto;
        }
        .skill-box {
          background: #d1cece;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
        .service, footer {
          background-color: var(--primary-color);
        }
        .service__grid,
        .project__grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1rem;
          margin-top: 5rem;
        }
        .service__card {
          display: grid;
          align-items: flex-start;
          gap: 1rem;
          padding: 2rem;
          background-color: var(--text-dark);
          border-radius: 5px;
        }
        .service__card i {
          font-size: 1.5rem;
        }
        .service__card h4 {
          font-size: 1.2rem;
          font-weight: 500;
        }
        .service__card p {
          color: var(--text-light);
        }
        .service__card .read__more {
          width: max-content;
          padding: 0.5rem 1rem;
          color: var(--text-light);
          font-size: 0.8rem;
          border-radius: 5px;
          background-color: rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .project__card {
          display: grid;
          place-content: center;
          border-radius: 5px;
          overflow: hidden;
          cursor: pointer;
        }
        .project__card img {
          transition: 0.3s;
        }
        .project__card:hover img {
          transform: scale(1.1);
        }
        .footer__container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        .footer__content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .footer__details {
          font-size: 0.8rem;
          color: var(--text-light);
          margin: 2rem 0;
          display: grid;
          gap: 1rem;
        }
        .social__icon {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .social__icon .icon {
          padding: 1.5rem;
          border-radius: 10px;
          font-size: 3rem;
          color: var(--white);
          background-color: var(--secondary-color);
          transition: 0.3s;
          cursor: pointer;
        }
        .social__icon .icon:hover {
          background-color: var(--secondary-color-dark);
          transform: scale(1.2);
        }
        .footer__form {
          display: grid;
          gap: 1rem;
        }
        .footer__form input,
        .footer__form textarea {
          padding: 1rem;
          background-color: var(--text-dark);
          outline: none;
          border: none;
          border-radius: 5px;
          color: var(--white);
        }
        .footer__form textarea {
          resize: none;
          font-family: "Poppins", sans-serif;
        }
        .footer__form button {
          width: max-content;
        }
        @media (min-width:640px) {
          .section__title { font-size: 2.5rem; }
          .header__container p { margin: 2rem 0; }
          .header__container h1 { font-size: 4rem; line-height: 4rem; }
          .action__btns { gap: 2rem; }
          .about__container{ flex-direction: row; }
          .about__content { align-items: flex-start; }
          .about__details { text-align: left; }
          .service__grid,
          .project__grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
          .footer__container { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 768px) {
          .header__container h1 { font-size: 5rem; line-height: 5rem; }
          .service__grid,
          .project__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width:768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header>
        <div className="section__container header__container">
          <p className="text-lg font-bold">
            <span>Hello</span> I'm
          </p>
          <h1 className="font-bold">Mrittunjoy Saha</h1>
          <h2 className="section__title">
            Web<span> Developer</span>
          </h2>
          <p className="text-lg font-bold">Welcome to my web developer portfolio!</p>
          <div className="action__btns">
            <button className="btn font-semibold">Say Hello</button>
          </div>
        </div>
      </header>

      <section className="about">
        <div className="section__container about__container">
          <div className="about__image">
            <img src="https://i.ibb.co.com/1YZTr2My/about-bg.jpg" alt="about" />
          </div>
          <div className="about__content">
            <h2 className="section__title">
              About <span>Me</span>
            </h2>
            <p className="section__subtitle text-white">
              Creative Web Developer
            </p>
            <p className="about__details">
              I'm Mrittunjoy Saha, a passionate PHP–Laravel and JavaScript Web
              Developer focused on building fast, secure and user-friendly web
              applications. I love turning ideas into efficient solutions — from
              backend architecture to dynamic, interactive front-end
              experiences. Constant learning, clean coding and problem-solving
              drive my development journey.
            </p>
          </div>
        </div>
      </section>

      <section className="skill-section !my-10">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">
            <h3 className="text-lg font-bold">Networking</h3>
            <p>
              Setup, Configuration, Troubleshooting, <br />
              Hardware Systems.
            </p>
          </div>
          <div className="skill-box">
            <h3 className="text-lg font-bold">Front-End</h3>
            <p>
              HTML, CSS3, JavaScript <br />
              Responsive Design.
            </p>
          </div>
          <div className="skill-box">
            <h3 className="text-lg font-bold">Programing</h3>
            <p>Basics of PHP–Laravel,c,c++,Python,Java.</p>
          </div>
        </div>
      </section>

      <section className="service">
        <div className="section__container service__container">
          <p className="section__subtitle text-lg">What I Offer!</p>
          <h2 className="section__title">
            {" "}
            <span>My</span> Service
          </h2>
          <div className="service__grid">
            <div className="service__card">
              <i className="ri-smartphone-line"></i>
              <h4>Web Developer</h4>
              <p>
                We use the latest web technologies and development tools to
                create websites that are fast, secure, and scalable.
              </p>
              <a href="#" className="read__more">
                Read more...
              </a>
            </div>
            <div className="service__card">
              <i className="ri-collage-fill"></i>
              <h4>Creative Design</h4>
              <p>
                I craft clean, modern, and visually striking designs that make
                brands stand out and deliver a memorable user experience.
              </p>
              <a href="#" className="read__more">
                Read more...
              </a>
            </div>
            <div className="service__card">
              <i className="ri-store-line"></i>
              <h4>E-commerce Solutions</h4>
              <p>
                I build fast and user-friendly e-commerce websites with product
                management, secure checkout, and seamless payment integration.
              </p>
              <a href="#" className="read__more">
                Read more...
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="project">
        <div className="section__container project__project">
          <p className="section__subtitle text-white">Portfolio</p>
          <h2 className="section__subtitle">
            <span className="text-2xl">Latest</span>
          </h2>
          <div className="project__grid">
            <div className="project__card">
              <img src="https://i.ibb.co.com/bgHjwx1X/project-1.png" alt="" />
            </div>
            <div className="project__card">
              <img src="https://i.ibb.co.com/5Wx0WxKV/project-2.png" alt="" />
            </div>
            <div className="project__card">
              <img src="https://i.ibb.co.com/dw27mTT6/project-3.png" alt="" />
            </div>
            <div className="project__card">
              <img src="https://i.ibb.co.com/Mk3WP9gv/project-4.png" alt="" />
            </div>
            <div className="project__card">
              <img src="https://i.ibb.co.com/50dLzxF/project-5.jpg" alt="" />
            </div>
            <div className="project__card">
              <img src="https://i.ibb.co.com/4Rq2j8Jg/project-6.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="section__container footer__container">
          <div className="footer__content">
            <h2 className="section__title">
              Connect <span>Me!</span>
            </h2>
            <p className="section__subtitle">
              If you have any project in your mind
            </p>
            <div className="footer__details">
              <p>
                You can reach me through the contact form provided on this
                website. Simply fill out the form with your name, email address,
                and message, and I will get back to you as soon as possible.
              </p>
              <p>Email/ mrittunjoysaha05@gmail.com</p>
              <p>WhatsApp/ +8801744328682</p>
              <p>Bogura, Bangladesh</p>
            </div>
            <div className="social__icon">
              <a
                href="https://www.linkedin.com/in/bishal-chandra-shaha-26570a351/"
                className="icon"
                target="_blank"
              ></a>
              <a
                href="https://github.com/settings/profile"
                className="icon"
                target="_blank"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/mrittunjoy__saha/"
                className="icon"
                target="_blank"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.facebook.com/mrittunjoy.shaha"
                className="icon"
                target="_blank"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
            </div>
          </div>

          <form className="footer__form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email Address" />
            <input type="text" placeholder="Your Phone Number" />
            <textarea cols="30" rows="10" placeholder="Your Idea"></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default BishalPortfolio;
