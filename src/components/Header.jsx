import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a className="text-2xl font-bold text-gray-900 flex items-center" href="#home">
          Badr Bourki<span className="text-blue-600">.</span>
        </a>
        <button id="nav-toggle" className="md:hidden text-gray-700 focus:outline-none" aria-expanded="false" aria-controls="primary-nav">
          Menu
        </button>
        <nav id="primary-nav" className="hidden md:flex space-x-6" aria-label="Primary">
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
