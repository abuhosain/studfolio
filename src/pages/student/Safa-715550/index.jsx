import React from "react";

const SafaPortfolio = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }

                    .main-container {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .profile-card {
                        display: flex;
                        width: 850px;
                        max-width: 100%;
                        background-color: white;
                        box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
                        overflow: hidden; 
                    }

                    .card-left {
                        background-color: #1a1a1a; 
                        color: white;
                        width: 40%;
                        padding: 50px 30px; 
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .img-box img {
                        width: 140px;
                        height: 140px;
                        border-radius: 50%;
                        border: 4px solid #ffffff;
                        object-fit: cover;
                        margin-bottom: 20px;
                    }

                    .card-left h2 {
                        font-size: 22px;
                        margin-bottom: 10px;
                        line-height: 1.4; 
                    }

                    .designation {
                        font-size: 14px;
                        color: #cccccc;
                        margin-bottom: 20px;
                        letter-spacing: 1px; 
                    }

                    .divider {
                        width: 40px;
                        height: 2px;
                        background: #ffffff;
                        margin: 0 auto 20px auto;
                    }

                    .quote {
                        font-style: italic;
                        font-size: 13px;
                        color: #dddddd;
                        line-height: 1.5;
                    }

                    .card-right {
                        width: 60%;
                        padding: 50px; 
                        background-color: #ffffff;
                        color: #333333;
                    }

                    .content-section {
                        margin-bottom: 30px; 
                    }

                    .content-section h3 {
                        border-bottom: 2px solid #333;
                        display: inline-block;
                        padding-bottom: 5px;
                        margin-bottom: 15px;
                        text-transform: uppercase;
                        font-size: 16px;
                        letter-spacing: 1px;
                    }

                    .content-section p, .info-list li {
                        font-size: 15px;
                        line-height: 1.8; 
                        color: #444; 
                    }

                    .skills-list span {
                        display: inline-block;
                        background: #333;
                        color: white;
                        padding: 8px 15px; 
                        margin: 5px 5px 5px 0;
                        font-size: 12px;
                        border-radius: 3px;
                    }

                    .info-list li {
                        list-style-type: square;
                        margin-left: 20px;
                        margin-bottom: 8px; 
                    }

                    @media (max-width: 768px) {
                        .profile-card {
                            flex-direction: column;
                            width: 100%;
                        }
                        .card-left, .card-right {
                            width: 100%;
                            padding: 40px 20px;
                        }
                    }
                `,
        }}
      />

      <div className="main-container !my-20">
        <div className="profile-card rounded-2xl">
          <div className="card-left">
            <div className="img-box">
              <img
                src="https://i.ibb.co.com/Nd5Cc9kt/image.png"
                alt="Safa Profile"
              />
            </div>
            <h2>Musab Us Sudais Safa</h2>
            <p className="designation">Department of CST</p>
            <div className="divider"></div>
            <p className="quote">"Coding is not easy as it seems"</p>
          </div>

          <div className="card-right">
            <div className="content-section">
              <h3>About Me</h3>
              <p>
                I am a regular student of Computer Science and Technology
                studying at Bogura Polytechnic Institute for over 3 years.
              </p>
            </div>

            <div className="content-section">
              <h3>My Skills</h3>
              <div className="skills-list">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Photography</span>
                <span>English</span>
              </div>
            </div>

            <div className="content-section">
              <h3>Education</h3>
              <ul className="info-list">
                <li>Got GPA 5.00 in SSC</li>
                <li>Diploma in Engineering (Running)</li>
              </ul>
            </div>

            <div className="content-section">
              <h3>Contact</h3>
              <p>
                <strong>Email:</strong> aassudaissafa@gmail.com
              </p>
              <p>
                <strong>Location:</strong> Bogura, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafaPortfolio;
