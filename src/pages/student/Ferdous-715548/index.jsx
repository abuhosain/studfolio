import React from "react";

const FerdousPortfolio = () => {
  return (
    <div className="bg-white">
      {/* Banner section */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center md:min-h-screen text-center gap-6 2xl:gap-x-30 !p-4">
          <img
            className="h-96 2xl:h-[500px]"
            src="https://i.ibb.co/Q79mHYS0/Freepik.jpg"
            alt="Image"
          />
          <div>
            <h5 className="text-lg font-semibold">Hi, I'm</h5>
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold">
              Ferdous Hasan
            </h1>
            <p className="text-lg font-medium md:!py-2 text-gray-500">
              Diploma student passionate about practical <br /> learning and
              modern technology
            </p>
            <div className="flex justify-center items-center gap-x-5 !pr-5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-20"
                  src="https://i.ibb.co/0pSf3LTt/github-removebg.png"
                  alt="Image"
                />
              </a>
              <a
                href="https://www.facebook.com/ferdous.hasan.186215"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10"
                  src="https://i.ibb.co/20ThQvrG/Facebook.png"
                  alt="Image"
                />
              </a>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="!mt-20 md:min-h-screen text-center">
          <h5 className="md:text-lg font-semibold text-gray-500">
            Get To Know More
          </h5>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            About Me
          </h1>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:!mt-30 lg:!mt-2 !p-4">
            <div className="flex flex-col items-center">
              {/* cards */}
              <div className="lg:w-[600px] grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
                <div className="border !p-5 rounded-4xl">
                  <h1 className="text-lg font-semibold">Education</h1>
                  <h3>
                    Diploma in <br />{" "}
                    <span className="font-bold">
                      Computer Science and technology
                    </span>
                  </h3>
                  <h3 className="text-gray-500">
                    Bogura Polytechnic Institute -- Session 22-23
                  </h3>
                </div>
                <div className="border !p-5 rounded-4xl">
                  <h1 className="text-lg font-semibold">
                    Academic Achievements
                  </h1>
                  <h3>
                    Maintained GPA <br />{" "}
                    <span className="font-bold">
                      3.8+ for 4 consecutive semesters
                    </span>
                  </h3>
                  <h3 className="text-gray-500">
                    Bogura Polytechnic Institute -- Session 22-23
                  </h3>
                </div>
              </div>
              <p className="text-center lg:text-left font-semibold !my-4 md:w-80 lg:w-[600px] ">
                I’m Ferdous Hasan, a dedicated diploma student and beginner web
                developer who loves learning new technologies and building
                simple, meaningful projects. I’m focused on growing my skills,
                staying consistent in my studies, and building a strong
                foundation for my future in tech.
              </p>
            </div>
            <img
              className="w-64 md:w-76 lg:w-80 rounded-4xl md:!mb-8"
              src="https://i.ibb.co/6JTNxP0f/avatar.jpg"
              alt="Image"
            />
          </div>
          <img
            className="!mx-auto !mt-2 md:!mt-20 lg:!mt-0 2xl:!mt-20"
            src="https://i.ibb.co/67mcvcZR/downarrow-removebg.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default FerdousPortfolio;
