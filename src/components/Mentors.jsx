const mentors = [
  {
    name: "Rizki Known",
    role: "Fullstack Development",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fmentors%2Fchristian-buehner-DItYlc26zVI-unsplash.jpg&w=1200&q=75",
    company: "Microsoft",
  },
  {
    name: "Jhon Dwirian",
    role: "UI/UX Design",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fmentors%2Fphilip-martin-5aGUyCW_PJw-unsplash.jpg&w=1200&q=75",
    company: "Grab",
  },
  {
    name: "Leon S Kennedy",
    role: "Machine Learning",
    img: "https://coursespace.vercel.app/_next/image?url=%2Fimages%2Fmentors%2Fjonas-kakaroto-KIPqvvTOC1s-unsplash.jpg&w=1200&q=75",
    company: "Google",
  },
];

export default function Mentors() {
  return (
    <section className="bg-[#eef3f1] px-6 md:px-12 lg:px-20 py-16">
      
      {/* TITLE */}
      <h2 className="text-5xl font-semibold mb-12">
        Our Expert Mentors
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {mentors.map((mentor, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            {/* IMAGE */}
            <img
              src={mentor.img}
              alt=""
              className="w-full h-64 object-cover rounded-xl"
            />

            {/* CONTENT */}
            <h3 className="text-2xl font-semibold mt-5">{mentor.name}</h3>
            <p className="text-gray-400 text-2xl mt-1">{mentor.role}</p>

            <p className="text-gray-500 mt-4 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            {/* COMPANY */}
            <p className="text-3xl font-bold mt-5 text-gray-700">
              {mentor.company}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}