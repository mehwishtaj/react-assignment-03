// import { Play } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="bg-[#f7f7f7] px-6 md:px-12 lg:px-20 pt-10 pb-16">
//       <div className="grid lg:grid-cols-2 items-center gap-10">

//         {/* LEFT SIDE */}
//         <div>
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#111]">
//             <span className="text-[#0F8C7C]">Improve</span> your Skill
//             <br />
//             with Different Way
//           </h1>

//           <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
//             Let's take an online course to improve your skills in a different way,
//             you can set your own study time according to your learning speed.
//             So you can study comfortable and absorb material easily.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-8">
//             <button className="bg-[#0F8C7C] text-white px-7 py-3 rounded-xl font-semibold hover:opacity-90">
//               Get Started
//             </button>

//             <button className="border-2 border-[#0F8C7C] text-[#0F8C7C] px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
//               <Play size={18} />
//               Watch Video
//             </button>
//           </div>

//           {/* SMALL CARD */}
//           <div className="bg-white mt-10 p-5 rounded-xl shadow-sm max-w-sm flex gap-4">
//             <div className="bg-[#F5F9FF] p-3 rounded-lg">📜</div>
//             <div>
//               <h4 className="font-bold text-[#F59E0B] text-xl">Certificate</h4>
//               <p className="text-gray-600 text-sm">
//                 There are certificates for all courses.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <div className="relative">
//           <img
//             src="/hero.png"
//             alt="hero"
//             className="w-full max-w-[520px] mx-auto"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }



import React from "react";
import heroImg from "../assets/hero.png"; // apni image ka path

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
            src="src/assets/home-hero11-removebg-preview.png"
            alt="student"
             className="w-80 md:w-[420px] lg:w-[500px]  "
          />

          {/* Certificate Floating Card */}
          <div className="absolute bottom-2 left-2 bg-white p-5 rounded-xl shadow-xl flex items-center gap-4 w-64">
            <div className="text-2xl" text-teal-700>📜</div>
            <div>
              <h4 className="text-yellow-500 font-semibold">Certificate</h4>
              <p className="text-gray-500 text-sm">
                There are certificates for all courses.
              </p>
            </div>
          </div>

        </div>

      </section>
{/* 
      ===== STATS SECTION ===== */}
      {/* <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-10">

          <div>
            <h2 className="text-5xl font-bold text-orange-500">10K+</h2>
            <p className="mt-3 text-gray-700 text-lg">Students</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">20+</h2>
            <p className="mt-3 text-gray-700 text-lg">Quality Course</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-orange-500">10+</h2>
            <p className="mt-3 text-gray-700 text-lg">Experience Mentors</p>
          </div>

        </div>
      </section> */}

    </div>
  );
};

export default Hero;
