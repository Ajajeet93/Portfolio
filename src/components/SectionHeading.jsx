import { motion } from "framer-motion";

export function SectionHeading({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="max-w-2xl"
    >
      <h2 className="font-display text-3xl font-semibold text-[#EAEAEA] md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-base leading-7 text-[#EAEAEA]/72">{text}</p>
      ) : null}
    </motion.div>
  );
}
