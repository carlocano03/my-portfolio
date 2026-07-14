import Image from "next/image";

const categories = [
  {
    label: "Frontend",
    color: "from-sky-500/10 to-transparent border-sky-400/20 hover:border-sky-400/50",
    dot: "bg-sky-400",
    skills: [
      { name: "HTML",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "ReactJs",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NextJs",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Bootstrap",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    label: "Backend",
    color: "from-emerald-500/10 to-transparent border-emerald-400/20 hover:border-emerald-400/50",
    dot: "bg-emerald-400",
    skills: [
      { name: "NodeJs",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PHP",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Codeigniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" },
      { name: "Laravel",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    ],
  },
  {
    label: "Database",
    color: "from-orange-500/10 to-transparent border-orange-400/20 hover:border-orange-400/50",
    dot: "bg-orange-400",
    skills: [
      { name: "MySQL",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLServer",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    label: "Tools & DevOps",
    color: "from-purple-500/10 to-transparent border-purple-400/20 hover:border-purple-400/50",
    dot: "bg-purple-400",
    skills: [
      { name: "Docker",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Linux / VPS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Github",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
      { name: "Photoshop",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-2">
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">
            <span className="text-2xl mr-2">💻</span>What I work with
          </p>
          <h2 className="text-4xl font-bold text-white">Skills</h2>
          <p className="text-gray-400">These are the technologies I&apos;ve worked with</p>
        </div>

        {/* Category cards */}
        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={`rounded-xl border bg-linear-to-r ${cat.color} p-6 transition-all duration-300`}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                <span className="text-white font-semibold tracking-wide">
                  {cat.label}
                </span>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={20}
                      height={20}
                      className={`group-hover:scale-110 transition-transform duration-200 ${"invert" in skill && skill.invert ? "invert" : ""}`}
                      unoptimized
                    />
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
