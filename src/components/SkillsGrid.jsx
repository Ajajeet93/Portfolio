import { motion } from "framer-motion";

export function SkillsGrid({ groups }) {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-md"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#7A0C0C]">
            {group.title}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-black/18 px-3 py-1.5 text-sm text-[#EAEAEA]/82"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
