import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const courses = [
  {
    title: "Mastering Data Modeling ",
    price: "$30",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fcourses%2Fgrovemade-RvPDe41lYBA-unsplash.jpg&w=1920&q=75",
  },
  {
    title: "The Complete Guide Docker and Kubernetes",
    price: "$30",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fcourses%2Falvaro-reyes-qWwpHwip31M-unsplash.jpg&w=1920&q=75",
  },
  {
    title: "Modern React with MUI & Redux",
    price: "$35",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fcourses%2Fstillness-inmotion-YSCCnRGrD-4-unsplash.jpg&w=1920&q=75",
  },
  {
    title: "Ethical Hacking Bootcamp",
    price: "$40",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fcourses%2Ftrue-agency-o4UhdLv5jbQ-unsplash.jpg&w=1920&q=75",
  },
];

export default function PopularSlider() {
  return (
    <section className="bg-[#f6f6f6] py-16 px-6 md:px-12">
      <div className="grid lg:grid-cols-4 gap-6 items-center">
        {/* LEFT TITLE */}
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Most <br /> Popular <br /> Courses
          </h2>
        </div>

        {/* RIGHT AUTO SLIDER */}
        <div className="lg:col-span-3">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={800}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {courses.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl p-4 shadow">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-52 object-cover rounded-xl"
                  />

                  <h3 className="font-bold text-xl mt-4">{item.title}</h3>

                  <p className="text-yellow-500 mt-2">⭐⭐⭐⭐</p>

                  <div className="flex justify-between mt-4">
                    <p className="text-[#0F8C7C] font-bold text-2xl">
                      {item.price}
                    </p>

                    <span className="text-2xl text-[#0F8C7C]">→</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
