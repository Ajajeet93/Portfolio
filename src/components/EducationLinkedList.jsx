import { motion } from "framer-motion";

export function EducationLinkedList({ items }) {
  return (
    <div className="linked-list-wrap mt-12">
      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${item.meta}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="linked-node"
        >
          <div className="linked-node-dot" />
          <div className="linked-node-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#7A0C0C]">
                  Node {index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-[#EAEAEA]">
                  {item.title}
                </h3>
              </div>
              <span className="rounded-full border border-[#7A0C0C]/35 bg-[#7A0C0C]/10 px-3 py-1 text-xs text-[#EAEAEA]/78">
                edu[{index}]
              </span>
            </div>
            <p className="mt-3 text-sm text-[#EAEAEA]/74">{item.meta}</p>
            <p className="mt-2 text-sm leading-6 text-[#EAEAEA]/62">{item.detail}</p>
          </div>
          {index < items.length - 1 ? (
            <div className="linked-pointer" aria-hidden="true">
              <span className="linked-pointer-line" />
              <span className="linked-pointer-arrow">→</span>
            </div>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
