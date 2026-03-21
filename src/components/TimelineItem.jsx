import { motion } from "framer-motion";

export function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative pl-8"
    >
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#7A0C0C] shadow-[0_0_18px_rgba(122,12,12,0.8)]" />
      <span className="absolute left-[5px] top-6 h-[calc(100%-0.1rem)] w-px bg-gradient-to-b from-[#7A0C0C]/70 to-transparent" />
      <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-md">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <h3 className="font-display text-xl font-semibold text-[#EAEAEA]">{item.title}</h3>
          <p className="text-sm text-[#7A0C0C]">{item.meta}</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#EAEAEA]/72">{item.detail}</p>
      </div>
    </motion.div>
  );
}
