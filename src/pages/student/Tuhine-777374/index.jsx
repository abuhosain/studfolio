import React from "react";

const TuhinePortfolio = () => {
  return (
    <>
      <style>{`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
        background: linear-gradient(135deg, #e0eafc, #cfdef3);
        color: #333;
        transition: background 0.5s ease;
        animation: bodyGradient 15s ease infinite;
        background-size: 400% 400%;
    }

    @keyframes bodyGradient {
        0% {background-position:0% 50%;}
        50% {background-position:100% 50%;}
        100% {background-position:0% 50%;}
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 25px;
        margin-bottom: 35px;
    }

    .card {
        background: linear-gradient(145deg, #ffffff, #f0f3f7);
        padding: 25px;
        border-radius: 15px;
        box-shadow: 0 6px 25px rgba(0,0,0,0.08);
        flex: 1;
        min-width: 300px;
        transition: transform 0.5s, box-shadow 0.5s, background 0.5s;
        position: relative;
        overflow: hidden;
    }

    .card::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(60deg, #ff6ec4, #7873f5, #4ade80, #facc15);
        opacity: 0;
        transition: opacity 0.5s;
        z-index: 0;
        filter: blur(15px);
    }

    .card:hover::before {
        opacity: 0.4;
    }

    .card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        background: linear-gradient(145deg, #f0f3f7, #ffffff);
    }

    .profile {
        text-align: center;
        position: relative;
        z-index: 1;
    }

    .profile img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #4A90E2;
        margin-bottom: 20px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.12);
        transition: transform 0.5s, box-shadow 0.5s;
        animation: profilePulse 3s infinite alternate;
    }

    @keyframes profilePulse {
        0% { transform: scale(1); }
        100% { transform: scale(1.03); }
    }

    .profile img:hover {
        transform: scale(1.1) rotate(3deg);
        box-shadow: 0 15px 35px rgba(0,0,0,0.25);
    }

    h2 {
        margin-bottom: 12px;
        font-size: 26px;
        color: #222;
        position: relative;
        background: linear-gradient(90deg, #ff6ec4, #7873f5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: h2Gradient 5s ease infinite;
    }

    @keyframes h2Gradient {
        0% { background-position:0% 50%; }
        50% { background-position:100% 50%; }
        100% { background-position:0% 50%; }
    }

    h2::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: #4A90E2;
        margin-top: 6px;
        border-radius: 3px;
        transition: width 0.3s ease;
    }

    h2:hover::after {
        width: 100px;
    }

    p, li {
        font-size: 15px;
        line-height: 1.7;
        color: #555;
        position: relative;
        z-index: 1;
    }

    ul {
        margin-top: 10px;
        padding-left: 22px;
    }

    .tag {
        display: inline-block;
        background: #4A90E2;
        color: #fff;
        padding: 7px 15px;
        font-size: 13px;
        border-radius: 25px;
        margin: 5px 5px 0 0;
        box-shadow: 0 3px 8px rgba(0,0,0,0.12);
        transition: transform 0.4s, box-shadow 0.4s, background 0.4s;
        cursor: pointer;
    }

    .tag:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 15px rgba(0,0,0,0.18);
        background: #357ABD;
    }

    .contact-info p {
        margin-bottom: 6px;
    }

    @media(max-width: 768px){
        .row {
            flex-direction: column;
        }
    }
`}</style>

      <div className="row !mt-10">
        <div className="card profile">
          <img src="https://i.ibb.co.com/HDns5NHj/profile.jpg" alt="profile" />
          <h2 className="font-bold">MD:HASIBUL ISLAM TUHINE</h2>
          <p>Student | Data Analytics Learner</p>
        </div>

        <div className="card">
          <h2 className="font-bold">About Me</h2>
          <p>
            I am a student currently learning <strong>Data Analytics</strong>. I
            enjoy working with data, finding patterns, creating insights, and
            visualizing information clearly.
          </p>
          <p>
            My goal is to become skilled in tools such as Excel, SQL, Python,
            Power BI, and develop strong analytical thinking.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="card">
          <h2 className="font-bold">Skills</h2>
          <span className="tag">Excel</span>
          <span className="tag">SQL</span>
          <span className="tag">Python (Basics)</span>
          <span className="tag">Data Cleaning</span>
          <span className="tag">Data Visualization</span>
          <span className="tag">Power BI</span>
          <span className="tag">Pandas</span>
          <span className="tag">numpay</span>
        </div>

        <div className="card">
          <h2 className="font-bold">Projects</h2>
          <ul>
            <li>
              Projects coming soon. I'm still learning because I can create high
              quality professional projects so stay tuned!
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="card">
          <h2 className="font-bold">Education</h2>
          <p>
            <strong>semester:</strong> 6th (Roll:777374) (Session:22-23)
          </p>
          <p>
            <strong>Department:</strong> Computer Science & Technology (CST)
          </p>
          <p>
            <strong>Institution:</strong> Bogura Polytechnic Institute,Bogura
          </p>
        </div>

        <div className="card">
          <h2 className="font-bold">Goals</h2>
          <p>✔ Master Excel for professional data work</p>
          <p>✔ Learn SQL for database querying</p>
          <p>✔ Improve Python for data analysis</p>
          <p>✔ Create dashboards using Power BI</p>
          <p>✔ Build a strong Data Analytics AI</p>
        </div>
      </div>

      <div className="row">
        <div className="card contact-info">
          <h2 className="font-bold">Contact</h2>
          <p>
            <strong>Email:</strong> titvdragon@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +8801922512015
          </p>
          <p>
            <strong>Location:</strong> JOYPUR-HAT, BANGLADESH
          </p>
        </div>
      </div>
    </>
  );
};

export default TuhinePortfolio;
