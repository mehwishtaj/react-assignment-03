import { courses } from "../data/coursesData";

export default function PopularCourses() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Most Popular Courses
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <img src="/course.jpg" className="rounded-lg mb-3" />
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-blue-600 font-bold mt-2">{course.price}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
