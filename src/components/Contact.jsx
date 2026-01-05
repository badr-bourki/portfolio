import React, { useRef, useState } from "react";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email.");
      return;
    }
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent — thank you!");
      form.reset();
    }, 900);
  }

  return (
    <section id="contact" className="contact py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
              <input id="name" name="name" type="text" className="w-full px-3 py-2 rounded bg-transparent border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
              <input id="email" name="email" type="email" className="w-full px-3 py-2 rounded bg-transparent border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 rounded bg-transparent border border-white/10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">Send</button>
              <span className="form-status text-blue-400 text-sm">{status}</span>
            </div>
          </form>
          <div className="contact-info text-gray-400">
            <div className="mb-4">
              <div className="font-semibold text-lg text-blue-500">Badr Bourki</div>
              <div className="text-sm">Casablanca, Morocco</div>
              <div className="text-sm">Email: <a href="mailto:badrbourki456@gmail.com" className="text-blue-400 hover:underline">badrbourki456@gmail.com</a></div>
            </div>
            <div className="socials flex gap-3 mt-2">
              <a href="#" className="text-blue-400 hover:text-blue-300" aria-label="GitHub"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg></a>
              <a href="#" className="text-blue-400 hover:text-blue-300" aria-label="LinkedIn"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
