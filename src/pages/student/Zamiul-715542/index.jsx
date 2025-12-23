import React from "react";

const ZamiulPortfolio = () => {
    return (
        <>
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
                .profile-img {
                    width: 140px;
                    height: 140px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 15px;
                    border: 4px solid #333;
                }
                .title { 
                    font-size: 30px; 
                    font-weight: bold; 
                    margin-bottom: 5px; 
                }
                .info { 
                    font-size: 18px; 
                    margin-bottom: 25px; 
                    color: #555; 
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
                .footer {
                    text-align: center;
                    margin-top: 20px;
                }
                .copy-btn {
                    background: none;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    color: #333;
                }
            `}</style>

            {/* Font Awesome CDN */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
            />

            <div className="container">

                <a href="https://ibb.co.com/3y2v06X9">
                    <img
                        src="https://i.ibb.co.com/wNV7KGHF/Whats-App-Image-2025-06-07-at-05-06-02-44dc42c1.jpg"
                        alt="Whats-App-Image"
                        className="profile-img !mx-auto"
                    />
                </a>

                <div className="title">Md Zamiul Hasan</div>
                <div className="info">
                    Roll: 715542 <br />
                    Institute: Bogura Polytechnic Institute
                </div>

                <div className="section">
                    <h2 className="font-bold">About Me</h2>
                    <p>
                        Hey, I'm Zami UL Zahid. I have been working as a graphic designer 
                        for more than three years, and I consider myself a professional. 
                        I am proficient in Adobe Photoshop and Illustrator. I provide logo 
                        design, business card layout, poster/banner design, and any other 
                        graphic design services you may need.
                    </p>
                </div>

                <div className="section">
                    <h2 className="font-bold">Skills</h2>
                    <span className="skills-box">Graphics Design</span>
                    <span className="skills-box">Photoshop</span>
                    <span className="skills-box">Illustrator</span>
                    <span className="skills-box">Canva</span>
                </div>

                <div className="section">
                    <h2 className="font-bold">Projects</h2>
                    <p>
                        1. Logo Design <br />
                        2. Business Card Template <br />
                        3. Poster & Banner Design
                    </p>
                </div>

                <div className="section">
                    <h2 className="font-bold">Contact</h2>
                    <p>
                        Email: jkzahid42@email.com <br />
                        Phone: 01776748177
                    </p>

                    <div className="social-icons">
                        <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" title="Behance"><i className="fab fa-behance"></i></a>
                        <a href="#" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ZamiulPortfolio;
