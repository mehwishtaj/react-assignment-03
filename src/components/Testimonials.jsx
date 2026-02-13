export default function Testimonials() {
  return (
    <section className="bg-[#f6f6f6] px-6 md:px-12 lg:px-20 py-16">
      <div className="grid lg:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE */}
        <div>

          {/* TITLE */}
          <h2 className="text-5xl font-bold leading-tight">
            Testimonial What our <br />
            <span className="text-[#0F8C7C] relative inline-block">
              Students
              <span className="absolute left-0 -bottom-3 w-full h-2 bg-yellow-400 rounded-full"></span>
            </span>{" "}
            Say
          </h2>

          {/* TEXT */}
          <h3 className="text-3xl font-bold mt-12">Great Quality!</h3>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* USER CARD */}
          <div className="bg-white mt-8 p-4 rounded-xl shadow-sm flex justify-between items-center max-w-md">

            <div className="flex items-center gap-3">
              <img
                src="https://coursespace.vercel.app/_next/image?url=%2Fimages%2Favatars%2F4.jpg&w=256&q=97"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h4 className="font-bold text-xl">Diana Jordan</h4>
                <p className="text-gray-500">SEO Expert</p>
              </div>
            </div>

            {/* ARROWS */}
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-[#f6f6f6] rounded-full text-[#0F8C7C] text-xl">
                ←
              </button>

              <button className="w-10 h-10 bg-[#f6f6f6] rounded-full text-[#0F8C7C] text-xl">
                →
              </button>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fhome-testimonial.png&w=1080&q=97"
            alt=""
            className="w-full max-w-[550px]"
          />
        </div>

      </div>
    </section>
  );
}