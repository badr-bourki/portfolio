// Main App component (to be filled with React structure)

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
