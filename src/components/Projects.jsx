import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind CSS, featuring responsive design and smooth navigation.",
    image: "images/portfolio-sample.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/badrbourki/portfolio" },
      { label: "Live Demo", url: "#" },
    ],
    tech: "React, Tailwind CSS, Vite"
  },
  {
    title: "Legal Research Tool",
    description: "A web app to help law students organize and search legal documents efficiently.",
    image: "images/legal-tool.jpg",
    links: [
      { label: "GitHub", url: "#" }
    ],
    tech: "React, Node.js, MongoDB"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="projects py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Projects</h2>
        <p className="text-gray-400 mb-6">A selection of my recent work.</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl overflow-hidden shadow-lg flex flex-col hover:-translate-y-2 transition-transform border border-white/10">
              <div className="h-40 bg-gray-900 flex items-center justify-center overflow-hidden">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-blue-400 mb-1">{project.title}</h3>
                <p className="text-gray-300 flex-1">{project.description}</p>
                <div className="text-xs text-gray-500 mt-2">{project.tech}</div>
                <div className="mt-4 flex gap-3">
                  {project.links.map((link, lidx) => (
                    <a key={lidx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline text-sm font-medium">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
