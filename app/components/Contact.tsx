"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "carlocano03@gmail.com",
    href: "mailto:carlocano03@gmail.com",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  },
  {
    label: "Mobile",
    value: "+63 906 1798 559",
    href: "tel:+639061798559",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    ),
  },
  {
    label: "Location",
    value: "San Antonio, Nueva Ecija",
    href: "#",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:carlocano03@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            <span className="text-2xl mr-2">✉️</span>Get in touch
          </p>
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <p className="text-gray-400">Have a project in mind? Let&apos;s talk about it</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Left — contact info */}
          <div className="w-full md:w-2/5 flex flex-col gap-6">
            <p className="text-gray-400 leading-relaxed">
              I&apos;m currently open to new opportunities and freelance work.
              Whether you have a question or just want to say hi, my inbox is
              always open.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-emerald-400/15 hover:border-emerald-400/40 bg-gray-900/60 transition-all duration-300"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-400/10 text-emerald-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</span>
                    <span className="text-gray-200 group-hover:text-emerald-400 transition-colors">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-3/5 flex flex-col gap-5 p-8 rounded-xl border border-emerald-400/15 bg-gray-900/60"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-gray-500 uppercase tracking-widest">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="px-4 py-3 rounded-sm bg-white/5 border border-white/10 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-400/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-gray-500 uppercase tracking-widest">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="px-4 py-3 rounded-sm bg-white/5 border border-white/10 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-400/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs text-gray-500 uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="px-4 py-3 rounded-sm bg-white/5 border border-white/10 text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-emerald-400/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-start flex items-center gap-2 px-6 py-3 bg-emerald-400 text-gray-950 font-semibold rounded-sm hover:bg-emerald-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
