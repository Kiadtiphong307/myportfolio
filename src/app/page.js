import Navbar from "./components/navbar.js";
import Skills from "./components/skills.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";
import Contact from "./components/contact.js";
import Profile from "./components/profile.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="pl-20 pb-20 p-10 ">
        <p id="profile" />
        <Profile />
      </section>
      <section className="bg-black pl-20 p-10 shadow-2xl ">
        <p id="about" />
        <About />
      </section>
      <section className="pl-20 p-10  ">
        <p id="skills" />
        <Skills />
      </section>
      <section className="bg-black pl-20 p-10 p-10 shadow-2xl">
        <p id="experience" />
        <Experience />
      </section>
      <section className=" pl-20 p-10">
        <p id="contact" />
        <Contact />
      </section>
    </div>
  );
}
