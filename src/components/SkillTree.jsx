import { motion } from "framer-motion";

function groupSkills(skills) {
  return [
    { title: "Languages", items: skills.filter((item) => ["C++", "JavaScript"].includes(item.name)) },
    { title: "Frontend", items: skills.filter((item) => ["React.js", "Tailwind CSS"].includes(item.name)) },
    { title: "Backend", items: skills.filter((item) => ["Express.js", "MongoDB", "MySQL"].includes(item.name)) },
    { title: "Tools", items: skills.filter((item) => ["Git & GitHub"].includes(item.name)) },
  ];
}

export function SkillTree({ skills }) {
  const groups = groupSkills(skills);

  return (
    <div className="skill-tree mt-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="skill-root"
      >
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#7A0C0C]">Root</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-[#EAEAEA]">MERN Skill Tree</h3>
      </motion.div>
      <div className="skill-trunk" />
      <div className="skill-branches">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
            className="skill-branch"
          >
            <div className="skill-branch-line" />
            <div className="skill-branch-card">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#7A0C0C]">{group.title}</p>
              <div className="mt-4 grid gap-3">
                {group.items.map((item) => (
                  <div key={item.name} className="skill-leaf">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-[#EAEAEA]">{item.name}</span>
                      <span className="text-xs text-[#EAEAEA]/56">{item.level}%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/6">
                      <div
                        className="h-1.5 rounded-full bg-[linear-gradient(90deg,#7A0C0C,#A11212,#0A192F)]"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
