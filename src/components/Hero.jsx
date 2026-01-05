import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="flex-1 space-y-4">
          <p className="uppercase tracking-widest text-blue-600 font-semibold">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Badr Bourki</h1>
          <p className="text-xl text-blue-700 font-medium">Junior Web Developer</p>
          <p className="text-gray-700 max-w-xl">
            I'm a 25-year-old law graduate from Casablanca, Morocco, transitioning from Private Law to software development. My background gives me strong analytical skills, attention to detail, and a structured approach to solving problems — all of which I apply to building clean, accessible web experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <a className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition" href="#projects">View Projects</a>
            <a className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition" href="#contact">Contact Me</a>
          </div>
        </div>
        <aside className="flex-1 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-blue-100">
            <img src="images/badr.jpg.jpeg" alt="Badr Bourki" className="object-cover w-full h-full" />
          </div>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><strong>Nationality:</strong> Moroccan</li>
            <li><strong>City:</strong> Casablanca</li>
            <li><strong>Age:</strong> 25</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
