import React from "react";

const BarshaPortfolio = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 20px;
          }
          
          .container {
              max-width: 900px;
              margin: auto;
              display: flex;
              flex-direction: column;
              gap: 25px;
          }

          .header {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 25px;
              padding: 25px;
              background: rgba(255,255,255,0.05);
              border-radius: 25px;
              backdrop-filter: blur(12px);
              box-shadow: 0 10px 25px rgba(0,0,0,0.1);
              transition: transform 0.3s;
          }

          .header:hover {
              transform: translateY(-5px);
          }

          .header img {
              width: 170px;
              height: 170px;
              border-radius: 50%;
              border: 4px solid gold;
              object-fit: cover;
          }

          .header .info h1 {
              margin: 0;
              color: gold;
              font-size: 2rem;
          }

          .header .info p {
              margin: 8px 0 0;
              color: #444;
              font-size: 1rem;
          }

          .section {
              padding: 20px;
              background: rgba(255,255,255,0.05);
              border-radius: 20px;
              border-left: 5px solid gold;
              backdrop-filter: blur(10px);
              box-shadow: 0 6px 20px rgba(0,0,0,0.1);
              transition: transform 0.3s;
          }

          .section:hover {
              transform: translateY(-3px);
          }

          .section h2 {
              margin: 0 0 10px;
              color: gold;
              font-size: 1.5rem;
          }

          .section p, .section ul {
              margin: 0;
              color: #333;
              line-height: 1.7;
          }

          ul {
              padding-left: 25px;
              list-style-type: disc;
          }

          a {
              color: goldenrod;
              text-decoration: none;
          }

          a:hover {
              text-decoration: underline;
          }

          @media(max-width: 768px){
              .header {
                  flex-direction: column;
                  text-align: center;
              }
              .header img {
                  width: 140px;
                  height: 140px;
              }
          }
        `,
        }}
      />

      <div className="container !py-10">
        <div className="header">
          <img
            src="https://i.imgur.com/8pQm0Vn.jpeg"
            alt="Nawshin Huda Barsha"
          />
          <div className="info">
            <h1>Nawshin Huda Barsha</h1>
            <p>
              Student | Learning Web Development | Creative Website Designer
            </p>
          </div>
        </div>

        <div className="section">
          <h2>About Me</h2>
          <p>
            I am a student learning web development and creating beautiful
            websites. I enjoy designing creative projects using HTML, CSS,
            JavaScript, and graphic design tools.
          </p>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Graphics Design</li>
            <li>MS Word & MS Excel</li>
          </ul>
        </div>

        <div className="section">
          <h2>Projects</h2>
          <p>No projects yet — but I am excited to start creating soon!</p>
        </div>

        <div className="section">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:nawshinhudab@gmail.com">nawshinhudab@gmail.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default BarshaPortfolio;
