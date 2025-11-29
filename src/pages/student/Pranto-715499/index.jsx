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
                  window.scrollTo({ top: 500, behavior: "smooth" })
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
        <div className="bg-white !p-2 lg:!p-10 text-center border-2 rounded-2xl border-amber-400 hover:border-amber-600 shadow-lg">
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
    </div>
  );
};
export default PrantoPortfolio;
