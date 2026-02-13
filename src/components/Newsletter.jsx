import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      
      <div className="max-w-6xl mx-auto bg-yellow-500 rounded-[40px] py-16 px-6 md:px-16 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-800">
          Subscribe to Our News Letter
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 text-lg">
          Subscribe to our newsletter to get information about our courses.
        </p>

        {/* Input + Button */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">

          <input
            type="email"
            placeholder="Enter your Email Address"
            className="w-full md:w-[500px] px-4 py-4 rounded-xl outline-none text-gray-700 bg-amber-50"
          />

          <button className="bg-teal-700 text-white px-8 py-4 rounded-xl hover:bg-teal-800 transition duration-300">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;
