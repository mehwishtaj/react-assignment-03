
import React from "react";
import heroImage from "../assets/home-hero11-removebg-preview.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#f5f7f6]">
      {/* ===== HERO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16 flex flex-col lg:flex-row items-center justify-between relative">
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            <span className="text-teal-700 relative inline-block">
              Improve
              <span className="absolute left-0 -bottom-2 w-50 h-2 bg-yellow-400 rounded-full"></span>
            </span>{" "}
            your Skill <br />
            with Different Way
          </h1>

          <p className="text-gray-600 max-w-lg">
            Let's take an online course to improve your skills in a different
            way, you can set your own study time according to your learning
            speed. So you can study comfortably and absorb the material easily.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-800 transition duration-300">
              Get Started
            </button>

            <button className="border-2 border-teal-700 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-700 hover:text-white transition duration-300">
              ▶ Watch Video
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 mt-10 lg:mt-0 left-10 flex justify-center relative">
          <img
            src={heroImage}
            alt="student"
            className="w-80 md:w-[420px] lg:w-[500px]"
          />

          {/* Certificate Floating Card */}
          <div className="absolute bottom-2 left-2 bg-white p-5 rounded-xl shadow-xl flex items-center gap-4 w-64">
            <div className="text-2xl text-teal-700">📜</div>

            <div>
              <h4 className="text-yellow-500 font-semibold">Certificate</h4>
              <p className="text-gray-500 text-sm">
                There are certificates for all courses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
   
    </div>
  );
};

export default Hero;
