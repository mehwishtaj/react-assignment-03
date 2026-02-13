export default function Stats() {
  const stats = [
    { num: "10K+", title: "Students" },
    { num: "20+", title: "Quality Course" },
    { num: "10+", title: "Experience Mentors" },
  ];

  return (
    <section className="grid md:grid-cols-3 text-center py-10 mx-10 bg-white">
      {stats.map((item, i) => (
        <div key={i}>
          <h2 className="text-4xl font-extrabold text-yellow-400">{item.num}</h2>
          <p className="text-gray-600">{item.title}</p>
        </div>
      ))}
    </section>
  );
}