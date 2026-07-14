"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Origami Education (School Management System)",
    description:
      "Origami Education is a school management system designed to help educational institutions manage their administrative tasks efficiently.",
    image: "/origami.png",
    tags: ["HTML", "CSS", "JQuery", "Javascript", "AJAX", "Bootstrap", "Codeigniter", "MySQL", "DataTables"],
    live: "https://demo.origami-freemium.com/",
    github: "#",
    featured: false,
    liveLink: true,
    githubLink: false,
  },
  {
    title: "United Pentagon Steel Forming & Trading Corp. (ERP System)",
    description: "An ERP system for United Pentagon Steel Forming & Trading Corp. that integrates various business processes and functions into a single comprehensive system.",
    image: "/upsftc.png",
    tags: ["RESTful API", "Laravel", "MySQL", "Docker/DockerHub"],
    live: "https://og-dev.cloud/login",
    github: "#",
    featured: false,
    liveLink: true,
    githubLink: false,
  },
  {
    title: "Dental Clinic Management System (EMR)",
    description: "A dental clinic management system (EMR) designed to streamline patient records, appointments, and billing processes.",
    image: "/dental-clinic.png",
    tags: ["RESTful API", "Laravel", "MySQL", "Docker/DockerHub"],
    live: "#",
    github: "#",
    featured: false,
    liveLink: false,
    githubLink: false,
  },
  {
    title: "Benrics CRM",
    description:
      "Benrics CRM is a customer relationship management system designed to help businesses manage interactions with current and potential customers.",
    image: "/benrics.png",
    tags: ["HTML", "CSS", "JQuery", "Javascript", "Axios", "Bootstrap", "Laravel", "MySQL", "DataTables"],
    live: "https://crm.benrics.com/",
    github: "#",
    featured: false,
    liveLink: true,
    githubLink: false,
  },
  {
    title: "Web App Monitoring System",
    description:
      "Web App Monitoring System is a platform designed to monitor the performance and availability of web applications in real-time.",
    image: "/web-monitoring.png",
    tags: ["HTML", "CSS", "JQuery", "Javascript", "Axios", "Bootstrap", "Laravel", "MySQL", "DataTables"],
    live: "#",
    github: "https://github.com/carlocano03/web-app-monitoring.git",
    featured: false,
    liveLink: false,
    githubLink: true,
  },
  {
    title: "Change Life Christian Church Portal",
    description:
      "Change Life Christian Church Portal is an online platform designed to manage church activities and member interactions efficiently.",
    image: "/clcc.png",
    tags: ["HTML", "CSS", "JQuery", "Javascript", "AJAX", "Bootstrap", "Codeigniter", "MySQL", "DataTables"],
    live: "https://changelife-christianchurch.org/",
    github: "https://github.com/carlocano03/clcc.git",
    featured: false,
    liveLink: true,
    githubLink: true,
  },
  {
    title: "NEQAS Online Registration (RITM)",
    description:
      "NEQAS evaluates the performance of participating laboratories by assessing the integrity of the entire testing from sample receipt to releasing of test results.",
    image: "/neqas.png",
    tags: ["HTML", "CSS", "JQuery", "Javascript", "AJAX", "Bootstrap", "Codeigniter", "MySQL"],
    live: "https://apps.ritm.gov.ph/neqas/user/login",
    github: "#",
    featured: false,
    liveLink: true,
    githubLink: false,
  },
  {
    title: "Inventory Management System (RITM-MMD)",
    description:
      "A detailed, itemized list, report, or record of things in one's possession, especially a periodic survey of all goods and materials in stock.",
    image: "/inv.png",
    tags: ["HTML", "CSS", "JQuery", "Javascript", "AJAX", "Bootstrap", "Codeigniter", "MySQL"],
    live: "#",
    github: "#",
    featured: false,
    liveLink: false,
    githubLink: false,
  },
  {
    title: "Excelsis Pharma Website",
    description:
      "Official website of Excelsis Pharma Inc. Including the chat support directed to the administrator of the website and viewing all the needed information of this company.",
    image: "/EP.png",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    live: "https://www.excelsispharma.com/",
    github: "#",
    featured: false,
    liveLink: true,
    githubLink: false,
  },
  {
    title: "Loan Management System",
    description:
      "Automate every step of loan servicing to cut costs. Digital statements to replace high cost paper statements and push account alerts and payment reminders.",
    image: "/onerise.png",
    tags: ["VB.NET", "Metro UI", "Bunifu", "ReportViewer", "MySQL"],
    live: "#",
    github: "#",
    featured: false,
    liveLink: false,
    githubLink: false,
  },
];

const INITIAL_COUNT = 2;

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            <span className="text-2xl mr-2">🚀</span>What I&apos;ve built
          </p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-400">A selection of things I&apos;ve worked on</p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {visible.map((project) => (
            <div
              key={project.title}
              className="group grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-emerald-400/15 hover:border-emerald-400/40 transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.05)] hover:shadow-[0_0_40px_rgba(52,211,153,0.12)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-900 min-h-65">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="eager"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  unoptimized
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-400 border border-emerald-400/30">
                    Featured
                  </span>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between gap-6 p-8 bg-gray-900/60">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-400 text-gray-950 text-sm font-semibold rounded-sm hover:bg-emerald-300 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-emerald-400 text-emerald-400 text-sm font-semibold rounded-sm hover:bg-emerald-400 hover:text-gray-950 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less */}
        {projects.length > INITIAL_COUNT && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 border border-emerald-400 text-emerald-400 text-sm font-semibold rounded-sm hover:bg-emerald-400 hover:text-gray-950 transition-colors"
            >
              {showAll ? "Show Less ↑" : `Show More (${projects.length - INITIAL_COUNT} more) ↓`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
