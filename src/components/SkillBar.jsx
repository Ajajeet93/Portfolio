import { motion } from "framer-motion";

export function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4"
    >
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="font-medium text-[#EAEAEA]">{skill.name}</span>
        <span className="text-[#EAEAEA]/58">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/6">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 + index * 0.05 }}
          className="h-2 rounded-full bg-[linear-gradient(90deg,#7A0C0C,#A11212,#0A192F)] shadow-[0_0_18px_rgba(122,12,12,0.45)]"
        />
      </div>
    </motion.div>
  );
}
