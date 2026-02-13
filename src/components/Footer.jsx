import React from "react";
import { Instagram, Youtube, Twitter, Dribbble, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Column 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Coursespace</h2>
          <p className="text-gray-200 leading-relaxed mb-6">
            Coursespace is an online learning platform that has
            been operating since 2018 until now.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-gray-300" />
            <Youtube className="cursor-pointer hover:text-gray-300" />
            <Twitter className="cursor-pointer hover:text-gray-300" />
            <Dribbble className="cursor-pointer hover:text-gray-300" />
            <Github className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Course</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white cursor-pointer">UI/UX Design</li>
            <li className="hover:text-white cursor-pointer">Mobile Development</li>
            <li className="hover:text-white cursor-pointer">Machine Learning</li>
            <li className="hover:text-white cursor-pointer">Web Development</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Menu</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Testimonial</li>
            <li className="hover:text-white cursor-pointer">Mentor</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold mb-6">About</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy & Policy</li>
            <li className="hover:text-white cursor-pointer">Term & Condition</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
