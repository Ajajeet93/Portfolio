import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function FloatingNav({ items, activeSection }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.35 }}
      className="fixed bottom-5 left-1/2 z-50 w-auto max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-[28px] border border-white/10 bg-white/8 px-2 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-1 overflow-x-auto">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "flex min-w-fit items-center gap-2 rounded-[22px] px-3 py-2 text-sm text-[#EAEAEA]/72 transition duration-300 hover:text-[#EAEAEA]",
                activeSection === item.id && "bg-[#7A0C0C]/55 text-[#EAEAEA]",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden md:inline">{item.label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
