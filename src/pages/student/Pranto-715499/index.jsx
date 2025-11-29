import React from "react";
import { useNavigate } from "react-router";

const PrantoPortfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* Banner Section */}
      <div className="relative h-[540px] md:h-[600px] lg:min-h-screen !py-10 !mb-10 md:!mb-0">
        <div
          className="absolute z-10 top-2 left-2 md:top-10 md:left-4 bg-amber-500 !p-2 md:!p-3 rounded-lg cursor-pointer hover:bg-amber-600 w-fit flex items-center"
          onClick={() => navigate(-1)}
        >
          <svg
            className="size-6 animate-bounce ... md:w-7 md:h-7"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />

            {/* Left arrow */}
            <path
              d="M16 12H8m0 0l4-4m-4 4l4 4"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative">
          <style>
            {`
      @keyframes moveAround {
        0%   { transform: translate(0px, 0px); }
        25%  { transform: translate(40px, -20px); }
        50%  { transform: translate(0px, -40px); }
        75%  { transform: translate(-40px, -20px); }
        100% { transform: translate(0px, 0px); }
      }
    `}
          </style>

          <div
            className="
      bg-amber-300 w-52 h-52 !ml-18 !mt- md:w-80 md:h-80 md:!ml-62 md:!mt-8 lg:w-[450px] lg:h-[450px] lg:!ml-[780px] lg:!mt-40 2xl:w-[700px] 2xl:h-[700px]
      2xl:!ml-[1050px] 2xl:!mt-[150px] rounded-full absolute inset-0
      animate-[moveAround_3s_ease-in-out_infinite]
    "
          ></div>
        </div>

        <div className="bg-amber-200 hidden md:block md:w-96 md:h-44 md:!ml-[400px] md:!mt-[400px] lg:w-80 lg:h-80 lg:!ml-[200px] lg:!mt-[300px] 2xl:w-96 2xl:h-96 2xl:!ml-[270px] 2xl:!mt-[500px] rounded-ss-full inset-0 absolute"></div>
        {/* Blurred background layer */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-2xl flex flex-col-reverse lg:flex-row justify-center items-center gap-y-10 lg:gap-20 2xl:gap-32">
          {/* Banner Text section */}
          <div className="text-center lg:text-left !p-2">
            <h5 className="text-xl font-semibold text-amber-500">
              👋 Hello, I'm
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">
              Pranto <span className="text-amber-500">Kumar</span>
            </h1>
            <p className=" text-lg lg:text-2xl font-medium !mt-4 text-slate-500">
              A Passionate Computer Science Student & Aspiring Web Developer{" "}
              <br className="hidden md:block" /> from Bogura, Bangladesh.
            </p>
            <div className="!mt-6 flex justify-center lg:justify-start gap-4">
              <button
                className="border-1 !p-2 text-white bg-amber-500 rounded-md hover:bg-amber-600 text-md cursor-pointer"
                onClick={() =>
                  window.scrollTo({ top: 2700, behavior: "smooth" })
                }
              >
                View my work
              </button>
              <button className="border-1 !p-2 text-white bg-amber-500 rounded-md hover:bg-amber-600 text-md cursor-pointer">
                <a
                  href="https://drive.google.com/uc?export=download&id=1OWHf6I_G3RAD_NABxb7NAZ_piajWv6UH"
                  className="!text-white"
                >
                  Download my Resume
                </a>
              </button>
            </div>
          </div>

          {/* Banner img section */}
          <div>
            <img
              className="w-60 md:w-80 xl:w-[400px] 2xl:w-[600px] rounded-full shadow-xl"
              src="https://i.ibb.co.com/W4FrTTdP/profilepic.png"
              alt="Pranto Kumar"
            />
          </div>
        </div>
        <svg
          className="size-6 animate-bounce ... w-10 h-10 !mx-auto !mt-128 md:hidden lg:block lg:!mt-140 2xl:!mt-180"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Downward arrow */}
          <path
            d="M12 8v8m0 0l4-4m-4 4l-4-4"
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* About me section */}
      <div className="lg:w-[85%] xl:w-[90%] 2xl:w-[60%] !p-5 lg:!p-20 !mx-auto">
        <div className="bg-white !p-2 lg:!p-10 text-center border-1 rounded-2xl border-amber-400 hover:border-amber-600 shadow-lg">
          <h3 className="text-black text-4xl lg:text-5xl !mb-3">
            About <span className="text-amber-500">Me</span>
          </h3>
          <p className="text-gray-500 lg:text-lg">
            Hi, I'm{" "}
            <span className="text-black font-semibold">
              Shovan Kumar Mandol Pranto
            </span>{" "}
            — a{" "}
            <span className="text-amber-500 font-semibold">
              MERN Stack Developer
            </span>{" "}
            from Bangladesh 🇧🇩. I'm passionate about building modern,
            user-friendly, and scalable web applications that make a real
            impact. I love turning ideas into digital experiences using
            technologies like
            <span className="text-amber-500 font-semibold">
              React, Node.js, Express, and MongoDB
            </span>
            . Currently, I’m focused on creating full-stack projects, improving
            UI/UX, and learning next-generation web technologies. <br /> 💡
            Let’s connect to collaborate on something amazing!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 !mt-5">
            <div>
              <h2 className="text-gray-500">Name :</h2>
              <h1 className="text-sm font-bold ">Shovan Kumar Mandol Pranto</h1>
            </div>
            <div>
              <h2 className="text-gray-500">Email :</h2>
              <h1 className="text-sm font-bold ">prantokumar3463@gmail.com</h1>
            </div>
            <div>
              <h2 className="text-gray-500">Date of Birth :</h2>
              <h1 className="text-sm font-bold ">21 March 2005</h1>
            </div>
            <div>
              <h2 className="text-gray-500">From :</h2>
              <h1 className="text-sm font-bold ">Dhaka, Bangladesh</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content for My Skills section goes here */}
      <div className="lg:w-[85%] xl:w-[90%] 2xl:w-[78%] !p-5 lg:!p-20 !mx-auto !mb-10">
        <h1 className="text-3xl 2xl:text-5xl text-center font-semibold">
          My <span className="text-amber-500">Skills</span>
        </h1>
        <p className="text-gray-600 text-lg 2xl:text-xl text-center !my-2">
          Technologies and expertise I bring to the table
        </p>
        {/*  */}
        <div className="border !mx-auto !p-5 lg:!p-10 rounded-lg border-amber-400 hover:border-amber-600 shadow-lg gap-5 !my-5">
          <h1 className="text-2xl 2xl:text-4xl font-semibold">
            Technical <span className="text-amber-500">Skills</span>
          </h1>
          <div className="flex flex-wrap !mb-5 !mt-2">
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              HTML5
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              CSS3
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              JAVASCRIPT (ES6+)
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              REACT.JS
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              NODE.JS
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              EXPRESS.JS
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              MONGODB
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              FIREBASE
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              TAILWINDCSS
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              DAISYUI
            </span>
            <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
              GIT & GITHUB
            </span>
          </div>
          <span className=" !p-2 rounded-4xl text-center font-bold bg-gray-300 !m-2 border border-white hover:border-amber-600 hover:bg-amber-100">
            STRIPE INTEGRARION
          </span>
        </div>
      </div>

      {/* Educational Qualifications */}
      <div>
        <h1 className="text-3xl 2xl:text-5xl text-center font-semibold">
          {" "}
          <span className="text-amber-500">Educational</span> Qualifications
        </h1>
        <p className="text-gray-600 text-lg 2xl:text-xl text-center !my-2">
          My educational background and certifications
        </p>

        <div>
          <div className="w-[93%] lg:w-[85%] xl:w-[78%] 2xl:w-[70%] border !mx-auto !p-2 lg:!p-7 rounded-lg border-amber-400 hover:border-amber-600 shadow-lg gap-5 !my-5 text-center md:text-left">
            <h1 className="text-[16px] lg:text-lg 2xl:text-2xl font-semibold">
              Diploma In Computer Science and Technology --{" "}
              <span className="font-semibold">Session 22-23</span>
            </h1>
            <h3 className="text-[15px] 2xl:text-lg text-gray-500 !my-1">
              Bogura Polytechnic Institute --{" "}
              <span className="text-black font-semibold">2023-2026</span>
            </h3>
            <h3 className="!my-1 2xl:text-[16px]">CGPA : Loading....</h3>
            <p className="2xl:text-[15px]">
              Studying Diploma in Computer Science and Technology with a focus
              on practical programming, software development, and modern
              computing skills.
            </p>
          </div>

          {/*  */}
          <div className="w-[93%] lg:w-[85%] xl:w-[78%] 2xl:w-[70%] border !mx-auto !p-2 lg:!p-7 rounded-lg border-amber-400 hover:border-amber-600 shadow-lg gap-5 !my-5 text-center md:text-left">
            <h1 className="text-[16px] lg:text-lg 2xl:text-2xl font-semibold">
              Complete Web Development --{" "}
              <span className="font-semibold">2025</span>
            </h1>
            <h3 className="text-[15px] 2xl:text-lg text-gray-500 !my-1">
              Programming Hero --{" "}
              <span className="text-black font-semibold">Batch 11</span>
            </h3>
            <a
              href="https://i.ibb.co.com/V0s0M01Z/PH-Hero-Course-certificate.jpg"
              target="_blank"
              className="!my-1 2xl:text-[16px] text-amber-500 font-semibold underline block"
            >
              My Certificate
            </a>
            <p className="2xl:text-[15px]">
              Trained in MERN Stack Web Development at Programming Hero with
              practical experience in creating dynamic, full-stack web projects.
            </p>
          </div>

          {/*  */}
          <div className="w-[93%] lg:w-[85%] xl:w-[78%] 2xl:w-[70%] border !mx-auto !p-2 lg:!p-7 rounded-lg border-amber-400 hover:border-amber-600 shadow-lg gap-5 !my-5 text-center md:text-left">
            <h1 className="text-[16px] lg:text-lg 2xl:text-2xl font-semibold">
              Secondary School Certificate{" "}
            </h1>
            <h3 className="text-[15px] 2xl:text-lg text-gray-500 !my-1">
              Beraiderchala Ideal School --{" "}
              <span className="text-black font-semibold">2022</span>
            </h3>
            <h3 className="!my-1 2xl:text-[16px]">GPA : 5 out of 5</h3>
            <p className="2xl:text-[15px]">
              Finished high school with excellent results in Science, building
              solid knowledge in math, physics, and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="lg:w-[85%] xl:w-[95%] !p-5 lg:!p-20 !mx-auto !mb-10">
        <h1 className="text-3xl 2xl:text-5xl text-center font-semibold">
          Featured <span className="text-amber-500">Projects</span>
        </h1>
        <p className="text-gray-600 text-lg 2xl:text-xl text-center !my-2">
          Explore some of my favorite works built with modern web technologies.
        </p>
        <div className="!my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 justify-items-center">
            {/* Projects no 01 */}
            <div className="rounded-2xl bg-base-100 2xl:w-96 h-[375px] shadow-2xl">
              <figure>
                <img
                  className="rounded-t-2xl h-[185px]"
                  src="https://i.ibb.co.com/0p5S0kTP/Screenshot-2025-10-15-221609.jpg"
                  alt="Image"
                />
              </figure>
              <div className="!px-5">
                <h2 className="!py-1 text-2xl font-semibold">Tap&Earn</h2>
                <p className="!py-1 text-[16px]">
                  Tap&Earn is a multitasking web application, where user can
                  earn money by completing task
                </p>
                <div className="md:!mt-8 lg:!mt-0 2xl:!mt-5">
                  <a
                    className=""
                    href="https://tap-and-earn-258dd.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-1 font-bold !my-2 !p-1 !text-white !bg-amber-500 rounded-md hover:!bg-amber-600 text-lg cursor-pointer w-full">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Project no 02 */}
            <div className="rounded-2xl bg-base-100 2xl:w-96 h-[375px] shadow-2xl ">
              <figure>
                <img
                  className="rounded-t-2xl"
                  src="https://i.ibb.co.com/KzL9JSHz/Screenshot-2025-10-17-181528.jpg"
                  alt="Image"
                />
              </figure>
              <div className="!px-5">
                <h2 className="!py-1 text-2xl font-semibold">
                  Artifacts Gallery
                </h2>
                <p className="!py-1 text-[16px]">
                  Artifacts Gallery is a web application where user can find
                  Artifacts and explore them.Also a user can add artifacts there
                </p>
                <div className="lg:!mt-6 2xl:!mt-0">
                  <a
                    className=""
                    href="https://artifacts-gallery.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-1 font-bold !my-2 !p-1 !text-white !bg-amber-500 rounded-md hover:!bg-amber-600 text-lg cursor-pointer w-full">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Project no 03 */}
            <div className="rounded-2xl bg-base-100 2xl:w-96 h-[375px] shadow-2xl ">
              <figure>
                <img
                  className="rounded-t-2xl  "
                  src="https://i.ibb.co.com/6c2ZBFH7/Screenshot-2025-10-17-181839.jpg"
                  alt="Image"
                />
              </figure>
              <div className="!px-5">
                <h2 className="!py-1 text-2xl font-semibold">Plant Care</h2>
                <p className="!py-1 text-[16px]">
                  Plant Care is a Web application based on Plant. User Can add
                  plant here and maintain the palnts
                </p>
                <div className="!mt-4">
                  <a
                    className=""
                    href="https://plant-care-web.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-1 font-bold !my-2 !p-1 !text-white !bg-amber-500 rounded-md hover:!bg-amber-600 text-lg cursor-pointer w-full">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            {/* Project no 04 */}
            <div className="rounded-2xl bg-base-100 2xl:w-96 h-[375px] shadow-2xl ">
              <figure>
                <img
                  className="rounded-t-2xl"
                  src="https://i.ibb.co.com/9kMZqhDg/Screenshot-2025-10-17-182216.jpg"
                  alt="Image"
                />
              </figure>
              <div className="!px-5">
                <h2 className="!py-1 text-2xl font-semibold">Event Explorer</h2>
                <p className="!py-1 text-[16px]">
                  Here User can explore events
                </p>
                <div className="!mt-10">
                  <a
                    className=""
                    href="https://event-explorer-91189.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-1 font-bold !my-2 !p-1 !text-white !bg-amber-500 rounded-md hover:!bg-amber-600 text-lg cursor-pointer w-full">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts section */}
      <div>
        <h1 className="text-3xl 2xl:text-5xl text-center font-semibold">
          Let't <span className="text-amber-500">Connect</span>
        </h1>
        <p className="text-gray-600 text-lg 2xl:text-xl text-center !my-2">
          I'm always open to new opportunities and collaborations. Let's create{" "}
          <br className="hidden md:block" />
          something amazing together! 💬
        </p>
        <div className="!my-15">
          <div className="bg-white w-[350px] md:w-[500px] !mx-auto rounded-2xl border !p-5 md:!p-10 text-lg md:text-xl border-amber-400 hover:border-amber-600 shadow-2xl ">
            <h2>
              Email :{" "}
              <span className="font-semibold">prantokumar3463@gmail.com</span>
            </h2>
            <h2>
              Phone : <span className="font-semibold">+880 1717-843463</span>
            </h2>
            <h2>
              Location :{" "}
              <span className="font-semibold">Dhaka, Bangladesh</span>
            </h2>
            <div className="flex !mt-5 gap-3">
              <a
                href="https://www.linkedin.com/in/pranto-kumar-/"
                target="_blank"
              >
                <img
                  className="w-20"
                  src="https://i.ibb.co.com/N2QMmYdD/linkedin-removebg.png"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://github.com/SKMPranto" target="_blank">
                <img
                  className="w-20 !mt-1 md:!ml-2"
                  src="https://i.ibb.co.com/0pSf3LTt/github-removebg.png"
                  alt="Github"
                />
              </a>
              <a
                href="https://www.facebook.com/skpranto.skpranto.71"
                target="_blank"
              >
                <img
                  className="w-11 !my-2 md:!ml-9"
                  src="https://i.ibb.co.com/20ThQvrG/Facebook.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/s_pranto_kumar/?hl=en"
                target="_blank"
              >
                <img
                  className="w-11 !mt-2 !ml-5 md:!ml-15"
                  src="https://i.ibb.co.com/1tXGG5ZB/insta-removebg.png"
                  alt="Instagram"
                />
              </a>
            </div>
            <aside className="text-sm text-center !mt-10 text-gray-500">
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved
                Pranto Kumar jr.MERN Stack Developer
              </p>
            </aside>
          </div>
        </div>
      </div>
      {/* End */}
    </div>
  );
};
export default PrantoPortfolio;
