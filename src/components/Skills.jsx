import React from "react";

const skills = [
  {
    group: "Frontend",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"]
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "MongoDB (basics)"]
  },
  {
    group: "Tools",
    items: ["Git & GitHub", "VS Code", "Figma", "Vite"]
  },
  {
    group: "Other",
    items: ["Legal Research", "Multilingual: Arabic, French, English"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills py-12 bg-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, idx) => (
            <div key={idx} className="bg-white/5 rounded-lg p-6 text-gray-300 border border-white/10">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">{group.group}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
