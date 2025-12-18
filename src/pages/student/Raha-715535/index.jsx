import React from "react";

const RahaPortfolio = () => {
  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: #e9ecef;
        }
        .container {
          width: 90%;
          max-width: 800px;
          margin: 40px auto;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
        }
        .header-container{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 50px;
        }
        .profile-img {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          margin-left: 10px;
          border: 4px solid #333;
        }
        .title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 5px;
          text-align: right;
        }
        .info {
          font-size: 18px;
          color: #555;
          text-align: right;
        }
        .section {
          text-align: left;
          margin-bottom: 25px;
        }
        .section h2 {
          font-size: 22px;
          border-left: 5px solid #333;
          padding-left: 10px;
          margin-bottom: 10px;
        }
        .skills-box {
          display: inline-block;
          padding: 8px 12px;
          background: #333;
          color: white;
          border-radius: 5px;
          margin: 5px 5px 0 0;
        }
        p {
          line-height: 1.6;
          color: #333;
        }
        .social-icons {
          margin-top: 10px;
          text-align: center;
        }
        .social-icons a {
          text-decoration: none;
          margin: 0 8px;
          font-size: 26px;
          color: #333;
          transition: 0.3s;
        }
        .social-icons a:hover {
          color: #ff6600;
          transform: scale(1.2);
        }
      `}</style>

      <div className="container">
        <div className="header-container">
          <a href="https://ibb.co.com/7JWVLgNK">
            <img
              src="https://i.ibb.co.com/Kjq7SNzW/profile.jpg"
              alt="profile"
              className="profile-img"
            />
          </a>

          <div>
            <div className="title">Md hafizul Islam Raha</div>
            <div className="info">
              Roll: 715535
              <br />
              Institute: Bogura Polytechnic Institute
            </div>
          </div>
        </div>

        <div className="section">
          <h2>About Me</h2>
          <p>
            Hey, I'm hafizulislamraha. I have been working as a game developer,
            and I consider myself a professional. I am proficient in Adobe
            Photoshop and Illustrator. I provide logo design, Animation makeing,
            Game Reviewing, and any other content makeing services you may need.
          </p>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <span className="skills-box">Computer hardware expart</span>
          <span className="skills-box">Photoshop</span>
          <span className="skills-box">Illustrator</span>
          <span className="skills-box">Animation creater</span>
        </div>

        <div className="section">
          <h2>Projects</h2>
          <p>
            1. Gaming Reviewer <br />
            2. Funny Carton makeing <br />
            3. Poster &amp; Banner Design <br />
          </p>
        </div>

        <div className="section">
          <h2>Contact</h2>
          <p>
            Email: hafizulislamraha6@email.com
            <br />
            Phone: 01821871075
          </p>

          <div className="social-icons">
            <a href="#" title="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" title="Behance">
              <i className="fab fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RahaPortfolio;
