import React from "react";

const FerdousPortfolio = () => {
  return (
    <div className="bg-white">
      {/* Banner section */}
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center md:min-h-screen text-center gap-6 2xl:gap-x-30 !p-4">
          <img
            className="h-96 2xl:h-[500px]"
            src="https://i.ibb.co.com/Q79mHYS0/Freepik.jpg"
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
              src="https://i.ibb.co.com/6JTNxP0f/avatar.jpg"
              alt="Image"
            />
          </div>
          <img
            className="!mx-auto !mt-2 md:!mt-20 lg:!mt-0 2xl:!mt-20"
            src="https://i.ibb.co.com/67mcvcZR/downarrow-removebg.png"
            alt="Image"
          />
        </div>

        {/* Projects section */}
        <section class="max-w-7xl !mx-auto !mt-20 md:!mt-0 !mb-30 lg:!mb-45 !px-4">
          <div class="text-center !mb-12">
            <h5 className="md:text-lg font-semibold text-gray-500">
              Browse My Recent Works
            </h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Projects
            </h1>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {/* CARD 1 */}
            <article class="border rounded-3xl shadow-md !p-6 flex flex-col items-center text-center !mb-6">
              <img
                src="https://i.ibb.co.com/hxwDnHFY/nature-s-platter.jpg"
                class="rounded-xl !w-full !h-60 object-fit !mb-5"
                alt="Project Image"
              />

              <h2 class="text-xl font-bold !mb-6 leading-tight">
                Nature's <br /> Platter
              </h2>

              <div class="flex gap-4 !mt-2">
                <a
                  target="_blank"
                  href="https://skmpranto.github.io/B11A03-Category-0002/"
                  class="border !px-6 !py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </article>

            {/* <!-- CARD 2 --> */}
            <article class="border rounded-3xl shadow-md !p-6 flex flex-col items-center text-center !mb-6">
              <img
                src="https://i.ibb.co.com/S7WVVSyM/English-Janala.jpg"
                class="rounded-xl !w-full !h-60 object-cover !mb-5"
                alt="Project Image"
              />

              <h2 class="text-xl font-bold !mb-6 leading-tight">
                English <br /> Janala
              </h2>

              <div class="flex gap-4 !mt-2">
                <a
                  target="_blank"
                  href="https://assignment-006-b11a6.netlify.app/"
                  class="border !px-6 !py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </article>

            {/* <!-- CARD 3 --> */}
            <article class="border rounded-3xl shadow-md !p-6 flex flex-col items-center text-center !mb-6">
              <img
                src="https://i.ibb.co.com/ZpNBDKWB/Auction-Gallery.jpg"
                class="rounded-xl !w-full !h-60 object-cover !mb-5"
                alt="Project Image"
              />

              <h2 class="text-xl font-bold !mb-6 leading-tight">
                Auction <br /> Gallery
              </h2>

              <div class="flex gap-4 !mt-2">
                <a
                  target="_blank"
                  href="https://assignment-007-b11a7.netlify.app/"
                  class="border !px-6 !py-2 rounded-full font-medium hover:bg-black hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>
          <img
            className="!mx-auto !mt-2 md:!mt-0 lg:!mt-10 2xl:!mt-20"
            src="https://i.ibb.co.com/67mcvcZR/downarrow-removebg.png"
            alt="Image"
          />
        </section>

        {/* Contact Section */}
        <div className="!mt-20 md:!mt-0 md:min-h-screen !pb-20 !px-4">
          <div className="text-center">
            <h4 className="md:text-lg font-semibold text-gray-500">
              Get in Touch
            </h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Contact Me
            </h1>
          </div>
          <div className="max-w-3xl !mx-auto !mt-10 !p-6 rounded-3xl shadow-lg border border-gray-200">
            {/* <!-- Row 1 --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Salutation */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold !mb-1">
                  Salutation
                </label>
                <select className="border border-gray-300 rounded-lg !p-3 outline-none focus:ring-2 focus:ring-black/40">
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Dr.</option>
                </select>
              </div>

              {/* <!-- First Name --> */}
              <div class="flex flex-col">
                <label class="text-sm font-semibold !mb-1">First Name</label>
                <input
                  type="text"
                  class="border border-gray-300 rounded-lg !p-3 outline-none focus:ring-2 focus:ring-black/40"
                />
              </div>
            </div>

            {/* <!-- Row 2 --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 !mt-5">
              <div class="flex flex-col">
                <label class="text-sm font-semibold !mb-1">Last Name</label>
                <input
                  type="text"
                  class="border border-gray-300 rounded-lg !p-3 outline-none focus:ring-2 focus:ring-black/40"
                />
              </div>

              <div class="flex flex-col">
                <label class="text-sm font-semibold !mb-1">Email</label>
                <input
                  type="email"
                  class="border border-gray-300 rounded-lg !p-3 outline-none focus:ring-2 focus:ring-black/40"
                />
              </div>
            </div>

            {/* <!-- Row 3 --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 !mt-5">
              <div class="flex flex-col">
                <label class="text-sm font-semibold !mb-1">Company</label>
                <input
                  type="text"
                  class="border border-gray-300 rounded-lg !p-3 outline-none focus:ring-2 focus:ring-black/40"
                />
              </div>

              <div class="flex flex-col">
                <label class="text-sm font-semibold !mb-1">Mobile</label>
                <input
                  type="text"
                  class="border border-gray-300 rounded-lg !p-3 outline-none focus:ring-2 focus:ring-black/40"
                />
              </div>
            </div>

            {/* <!-- Message --> */}
            <div class="!mt-5">
              <label class="text-sm font-semibold !mb-1">Message</label>
              <textarea
                rows="4"
                class="border border-gray-300 rounded-lg !p-3 w-full outline-none focus:ring-2 focus:ring-black/40"
                placeholder="Tell me about your project, timeline, or how I can help."
              ></textarea>
            </div>

            {/* <!-- Button --> */}
            <button class="!mt-6 !px-6 !py-3 bg-black text-white rounded-full hover:bg-black/80 transition cursor-pointer">
              Send Message
            </button>
          </div>
          <img
            className="!mx-auto !mt-10 md:!mt-20 lg:!mt-15 2xl:!mt-20"
            src="https://i.ibb.co.com/67mcvcZR/downarrow-removebg.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default FerdousPortfolio;
