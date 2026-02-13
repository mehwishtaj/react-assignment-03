export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white">
      <h1 className="text-2xl font-semibold mx-10 ">Course<span className="text-teal-700">space</span></h1>

      <div className="hidden md:flex gap-8 font-semibold text-gray-400 ">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Testimonial</a>
        <a href="#">Mentor</a>
      </div>

      <div className="space-x-3">
        <button className="text-teal-700">Sign In</button>
        <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
          Sign Up
        </button>
      </div>
    </nav>
  );
}