import React from "react";

const ShoumitPortfolio = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: "Poppins", sans-serif;
            }

            body{
                background: linear-gradient(135deg, #1b1b1b, #0f0f0f);
                color: #fff;
                overflow-x: hidden;
            }

            .bg-glow{
                position: fixed;
                width: 600px;
                height: 600px;
                background: radial-gradient(circle, rgba(120,60,255,0.5), rgba(0,0,0,0));
                filter: blur(120px);
                top: -150px;
                right: -150px;
                pointer-events: none;
            }

            .container{
                width: 90%;
                max-width: 1200px;
                margin: auto;
                padding: 80px 0;
            }

            .hero{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 40px;
                flex-wrap: wrap;
                padding: 80px 0;
            }

            .hero-text{
                flex: 1;
                min-width: 300px;
            }

            .hero-text h1{
                font-size: 55px;
                font-weight: 700;
                line-height: 1.2;
                background: linear-gradient(45deg, #b06cff, #5bb5ff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                margin-bottom: 20px;
            }

            .hero-text p{
                font-size: 18px;
                opacity: .8;
                line-height: 1.6;
                margin-bottom: 30px;
            }

            .btn{
                display: inline-block;
                padding: 12px 28px;
                background: linear-gradient(45deg, #b06cff, #5bb5ff);
                border-radius: 12px;
                color: #fff;
                font-weight: 600;
                text-decoration: none;
                box-shadow: 0 0 20px rgba(130,90,255,0.5);
                transition: .3s;
            }

            .btn:hover{
                transform: translateY(-4px);
                box-shadow: 0 0 30px rgba(150,120,255,0.7);
            }

            .hero-img img{
                width: 330px;
                height: 330px;
                border-radius: 50%;
                object-fit: cover;
                border: 6px solid #ffffff25;
                box-shadow: 0 0 40px rgba(120,60,255,0.4);
            }

            .section-title{
                font-size: 32px;
                margin-top: 80px;
                margin-bottom: 25px;
                font-weight: 600;
                color: #5bb5ff;
            }

            .projects{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 25px;
            }

            .project-card{
                background: rgba(255,255,255,0.05);
                padding: 25px;
                border-radius: 18px;
                border: 1px solid rgba(255,255,255,0.12);
                backdrop-filter: blur(12px);
                transition: 0.3s;
                box-shadow: 0 0 25px rgba(0,0,0,0.2);
            }

            .project-card:hover{
                transform: translateY(-8px);
                border-color: #5bb5ff;
                box-shadow: 0 0 30px rgba(90,140,255,0.3);
            }

            .project-card h3{
                font-size: 22px;
                margin-bottom: 10px;
                color: #b06cff;
            }

            .project-card p{
                opacity: .8;
                line-height: 1.6;
            }

            .footer{
                text-align: center;
                padding: 40px;
                margin-top: 60px;
                opacity: .7;
                font-size: 15px;
            }

            @media(max-width: 900px){
                .hero{
                    text-align: center;
                    flex-direction: column;
                }
                .hero-img img{
                    width: 260px;
                    height: 260px;
                }
            }
          `,
        }}
      />

      <div className="bg-glow"></div>

      <div className="container">
        <div className="hero">
          <div className="hero-text">
            <h1>
              Hello, I'm <br /> Soumit Saha
            </h1>
            <p>
              Professional <b>Video Editor</b> &{" "}
              <b>Post Production Specialist</b>. I create cinematic cuts, smooth
              transitions, storytelling edits, color grading, motion graphics,
              and short-form viral content. My goal is to transform raw footage
              into powerful visual stories.
            </p>

            <a href="#" className="btn">
              Hire Me
            </a>
          </div>

          <div className="hero-img">
            <img src="soumit.jpg" alt=" " />
          </div>
        </div>

        <h2 className="section-title">My Editing Work</h2>

        <div className="projects">
          <div className="project-card">
            <h3>Cinematic Travel Edit</h3>
            <p>
              Beautiful cinematic edit with LUT-based color grading, motion cuts
              & smooth transitions.
            </p>
          </div>

          <div className="project-card">
            <h3>Short Form Reels Edit</h3>
            <p>
              High-energy reels with fast cuts, captions, sound sync & viral
              hook flow.
            </p>
          </div>

          <div className="project-card">
            <h3>Brand Promo Video</h3>
            <p>
              Professional brand promotional edit with text animations & modern
              transitions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoumitPortfolio;
