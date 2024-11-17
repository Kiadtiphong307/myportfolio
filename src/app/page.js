"use client";

import { useEffect } from "react";
import Navbar from "./components/navbar.js";
import Skills from "./components/skills.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";
import Contact from "./components/contact.js";
import Profile from "./components/profile.js";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Clean up the observer
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans  text-white">
      <Navbar />
      <section className="pl-10 pb-20 p-10 fade-in md:pl-20 md:pb-20">
        <p id="profile" />
        <Profile />
      </section>
      <section className="bg-black pl-10 p-10 shadow-2xl fade-in md:pl-20 md:p-10">
        <p id="about" />
        <About />
      </section>
      <section className="pl-10 p-10 fade-in md:pl-20 md:p-10">
        <p id="skills" />
        <Skills />
      </section>
      <section className="bg-black pl-10 p-10 shadow-2xl fade-in md:pl-20 md:p-10">
        <p id="experience" />
        <Experience />
      </section>
      <section className="pl-10 p-10 fade-in md:pl-20 md:p-10">
        <p id="contact" />
        <Contact />
      </section>
    </div>
  );
}
