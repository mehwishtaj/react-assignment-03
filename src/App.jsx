import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import PopularCourses from "./components/PopularCourses";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Mentors from "./components/Mentors";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import PopularSlider from "./components/PopularSlider";

function App() {
  return (
    <div className="bg-[#F9FAFF]">
      <Navbar />
      <Hero />
      <Stats />
      {/* <PopularCourses /> */}
       <PopularSlider />
      <Features />
      <Testimonials />
      <Mentors />
      <Newsletter/>
      <Footer />
     
    </div>
  );
}

export default App;