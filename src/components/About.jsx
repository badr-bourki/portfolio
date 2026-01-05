import React from "react";

export default function About() {
  return (
    <section id="about" className="about py-12 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">About Me</h2>
            <p className="text-gray-300 mb-4">
              I’m a 25-year-old law graduate from Casablanca, Morocco, now focused on web development. My legal background gives me strong analytical skills, attention to detail, and a structured approach to solving problems. I’m passionate about building clean, accessible, and modern web experiences.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Strong analytical and research skills</li>
              <li>Excellent written and verbal communication</li>
              <li>Quick learner, adaptable, and detail-oriented</li>
              <li>Fluent in Arabic, French, and English</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg mb-4">
              <img src="images/badr.jpg.jpeg" alt="Badr Bourki" className="object-cover w-full h-full" />
            </div>
            <div className="text-gray-400 text-center">
              <div className="font-semibold text-lg text-blue-500">Badr Bourki</div>
              <div className="text-sm">Casablanca, Morocco</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
