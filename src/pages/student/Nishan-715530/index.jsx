import React from "react";

const NishanPortfolio = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    body{
      font-family: Arial, sans-serif;
      background: #d7f0ff;
      margin: 0;
      padding: 0;
    }
    .container{
      width: 80%;
      margin: 30px auto;
      background: #ffffff;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    .profile{
      text-align: center;
    }
    .emoji-profile{
      font-size: 120px;
      display: inline-block;
      margin-bottom: 10px;
    }
    h1{
      text-align: center;
      color: #222;
      margin-top: 10px;
    }
    h2{
      margin-top: 30px;
      color: #444;
    }
    .skills span{
      display: inline-block;
      padding: 6px 14px;
      background: #ddd;
      border-radius: 20px;
      margin: 5px;
    }
    .project{
      margin-bottom: 20px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      background: #fafafa;
    }
    .project h3{
      margin: 5px 0;
    }
          `,
        }}
      />

      <div className="container">
        <div className="profile">
          <div className="emoji-profile">😊</div>
          <h1 className="text-2xl font-bold">MD Naimur Rahman Nishan</h1>
          <p className="text-lg">Web Development Student</p>
        </div>

        <h2 className="text-[22px] font-bold">About Me</h2>
        <p>
          My name is MD Naimur Rahman Nishan. I am from Natore, Rajshahi. I am
          currently studying Computer Science & Technology (CST) at Bogura
          Polytechnic Institute. My academic session is 2022–23.
        </p>
        <p>
          I enjoy creating simple and clean web designs using raw HTML and CSS.
          I also love learning new things related to web development and
          creative design.
        </p>

        <h2 className="text-[22px] font-bold">Contact</h2>
        <p>Email: g93702720@gmail.com</p>

        <h2 className="text-[22px] font-bold">Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>Basic JavaScript</span>
          <span>Creative Design</span>
        </div>

        <h2 className="text-[22px] font-bold">Projects</h2>

        <div className="project">
          <h3 className="text-lg font-bold">Project 1: Simple Website</h3>
          <p>A static website built using only HTML and CSS.</p>
        </div>

        <div className="project">
          <h3 className="text-lg font-bold">Project 2: Student Bio Page</h3>
          <p>A simple biography page containing basic information.</p>
        </div>

        <div className="project">
          <h3 className="text-lg font-bold">Project 3: Image Gallery</h3>
          <p>An image gallery layout designed using CSS Grid.</p>
        </div>
      </div>
    </>
  );
};

export default NishanPortfolio;
