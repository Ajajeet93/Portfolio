import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group rounded-[28px] border border-white/8 bg-white/[0.03] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.26)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#7A0C0C]/60"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold text-[#EAEAEA]">
            {project.name}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#EAEAEA]/72">
            {project.description}
          </p>
        </div>
        <div className="h-3 w-3 rounded-full bg-[#7A0C0C] shadow-[0_0_24px_rgba(122,12,12,0.85)]" />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#7A0C0C]/35 bg-[#7A0C0C]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#EAEAEA]/80"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-7 flex items-center gap-5 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[#EAEAEA]/76 transition hover:text-[#EAEAEA]"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[#EAEAEA]/76 transition hover:text-[#EAEAEA]"
        >
          <ArrowUpRight className="h-4 w-4" />
          Live
        </a>
      </div>
    </motion.article>
  );
}
