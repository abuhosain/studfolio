import React from "react";

const SoseePortfolio = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            header {
              text-align: center;
              padding: 80px 20px 40px;
              background: linear-gradient(135deg, #7F00FF, #E100FF);
              color: #fff;
              width: 100%;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              position: relative;
              overflow: hidden;
            }
            header h1 {
              font-size: 2.5rem;
              margin-bottom: 10px;
              letter-spacing: 1px;
            }
            header p {
              font-size: 1.1rem;
              opacity: 0.9;
            }
            .header-accent {
              position: absolute;
              bottom: -30px;
              left: 50%;
              transform: translateX(-50%);
              width: 120px;
              height: 120px;
              background: rgba(255,255,255,0.15);
              border-radius: 50%;
              filter: blur(10px);
            }
            #about {
              max-width: 800px;
              background: #f3e8ff;
              padding: 60px 40px;
              margin-top: 40px;
              border-radius: 30px;
              box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
              text-align: center;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            #about:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 30px rgba(0,0,0,0.09);
            }
            #about h2 {
              font-size: 2rem;
              color: #7F00FF;
              margin-bottom: 20px;
            }
            #about p {
              font-size: 1.1rem;
              color: #555;
              line-height: 1.8;
            }
          `,
        }}
      />

      <header className="rounded-bl-[40px] rounded-br-[40px]">
        <h1>Hello, I'm Sadiya Jahan Sosse</h1>
        <p>Web Developer |</p>
        <div className="header-accent"></div>
      </header>

      <section id="about" className="!mx-auto !mb-20">
        <h2>About Me</h2>
        <p>
          I love building web applications. I enjoy learning new design
          techniques and creating user-friendly interfaces that feel smooth and
          modern. My focus is on clean design, simplicity, and improving the
          user experience.
        </p>
      </section>
    </>
  );
};

export default SoseePortfolio;
