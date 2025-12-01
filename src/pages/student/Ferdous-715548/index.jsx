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
      </div>
    </div>
  );
};

export default FerdousPortfolio;
