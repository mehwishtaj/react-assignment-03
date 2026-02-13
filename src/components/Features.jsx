import React from "react";
import { DollarSign, BookOpen, MessageCircle, Settings } from "lucide-react";

import girl from "../assets/home-feature.webp";

const Features = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* ===== LEFT SIDE IMAGE ===== */}
        <div className="relative flex-1 flex justify-center">
          {/* Background Shape */}
          <div className="absolute w-[420px] h-[420px] bg-orange-200 rounded-[40%] -z-10"></div>

          <img src={girl} alt="student" className="w-[380px] relative z-10" />

          {/* Top Card */}
          <div className="absolute top-10 right-0 bg-white p-6 rounded-xl shadow-lg ">
            <h4 className="font-semibold mb-4">Lorem ipsum dolor</h4>

            <div className="space-y-3 text-sm">
              <div>
                <p>UI/UX Design</p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-pink-500 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <p>Mobile Development</p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-400 rounded-full w-[60%]"></div>
                </div>
              </div>

              <div>
                <p>Web Development</p>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Circle Card */}
          <div className="absolute bottom-0 left-0 bg-white p-6 rounded-xl shadow-lg w-44 text-center">
            <h4 className="font-semibold">Lorem ipsum</h4>
            <p className="text-sm text-gray-500">Lorem ipsum</p>

            <div className="mt-4 relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-full border-8 border-green-400"></div>
              <div className="absolute inset-3 rounded-full border-8 border-gray-200"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-green-500 text-lg">
                75%
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE CONTENT ===== */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Make your{" "}
            <span className="text-teal-700 relative inline-block">
              Learning
              <span className="absolute left-8 -bottom-2 w-38 h-2 bg-yellow-400 rounded-full"></span>
            </span>
            <br /> Enjoyable
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl">
            Set the way of learning according to your wishes with some of the
            benefits that you get us, so you on enjoy the lessons that we
            provide.
          </p>

          {/* Features Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-full">
            <Feature icon={<Settings />} title="Easy Accessable" />

            <Feature icon={<DollarSign />} title="More Affordable Cost" />

            <Feature icon={<BookOpen />} title="Flexible Study Time" />

            <Feature
              icon={<MessageCircle />}
              title="Consultation With Mentor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title }) => (
  <div className="bg-white p-6 rounded-xl shadow-md flex gap-4">
    <div className="w-12 h-12 flex items-center justify-center bg-teal-700 text-white rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-yellow-400">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore
      </p>
    </div>
  </div>
);

export default Features;
