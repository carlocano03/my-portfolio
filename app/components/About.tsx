"use client";

const info = [
  { key: "name",     value: "Carlo Cano" },
  { key: "role",     value: "Full Stack Developer" },
  { key: "birthday", value: "January 3, 1994" },
  { key: "location", value: "San Antonio, Nueva Ecija" },
  { key: "mobile",   value: "+63 906 1798 559" },
  { key: "email",    value: "carlocano03@gmail.com" },
  { key: "degree",   value: "BS Information Technology" },
  { key: "major",    value: "Programming" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 items-center">

        {/* Left — bio */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            <span className="text-2xl mr-2">🤙🏻</span>Get to know me
          </p>
          <h2 className="text-4xl font-bold text-white leading-tight">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Seeking a challenging career with a progressive organization that
            provides an opportunity to capitalize my technical skills and
            abilities in the field of Information Technology.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Specializing in front-end development. Experienced with all stages
            of the development cycle for dynamic web projects. Well-versed in
            HTML, PHP OOP, JavaScript, jQuery, AJAX, ReactJS, NextJS, NodeJS, Python,
            MySQL, Codeigniter, Laravel, CSS, Bootstrap, Tailwind CSS, Docker and VPS.
          </p>
          <a
            href="#contact"
            className="self-start px-6 py-3 bg-emerald-400 text-gray-950 font-semibold rounded-sm hover:bg-emerald-300 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Right — terminal card */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden border border-emerald-400/20 shadow-[0_0_40px_rgba(52,211,153,0.08)]">

            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-emerald-400/10">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-xs text-gray-500 font-mono">carlo.config.ts</span>
            </div>

            {/* Code body */}
            <div className="bg-gray-900/60 px-6 py-5 font-mono text-sm leading-7">
              <p className="text-purple-400">const <span className="text-white">developer</span> <span className="text-gray-400">=</span> <span className="text-yellow-400">{"{"}</span></p>

              {info.map(({ key, value }, i) => (
                <p key={i} className="pl-6">
                  <span className="text-sky-400">{key}</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-emerald-400">&quot;{value}&quot;</span>
                  <span className="text-gray-400">,</span>
                </p>
              ))}

              <p className="text-yellow-400">{"}"}</p>
              <p className="mt-2 text-gray-600">{"//"} available for work 🚀</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
