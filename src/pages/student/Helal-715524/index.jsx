const HelalProfile = () => {
    return (
        <div className="bg-gray-100  p-6">
      <div className="max-w-full mx-auto text-center">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Helal Hosen"
            className="w-36 h-36 mx-auto rounded-full border-4 border-blue-500 "
          />
          <h1 className="mt-4 text-3xl font-bold text-gray-800">
            Hi, I'm Helal Hosen 👋
          </h1>
          <p className="text-xl text-blue-600 font-medium">
            Video Editor at NeexG Agency
          </p>
          <p className="text-gray-600 mt-2">📌 Bogura, Bangladesh</p>
        </div>

        {/* Bio Section */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-600">
            I am currently studying Computer Science & Technology at Bogura Polytechnic Institute. 
            Along with my studies, I work as a professional video editor at NeexG Agency.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
          <ul className="text-gray-700 self-start grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li>Adobe Premiere Pro - 90%</li>
            <li>After Effects - 75%</li>
            <li>Capcut - 80%</li>
            <li>Filmora - 85%</li>
            <li>Canva - 90%</li>
            <li>DaVinci Resolve - 65%</li>
          </ul>
        </div>

        {/* Stats Section */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-4xl font-bold text-blue-600">100+</p>
            <p className="text-gray-600">Videos Edited</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">3+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p>Email: <a href="mailto:yourmail@gmail.com" className="text-blue-600">yourmail@gmail.com</a></p>
          <p>LinkedIn: <a href="#" className="text-blue-600">linkedin.com/in/helalhosen</a></p>
          <p>GitHub: <a href="#" className="text-blue-600">github.com/helalhosen</a></p>
        </div>
      </div>
    </div>
    )
};

export default HelalProfile;