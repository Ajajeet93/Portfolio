import { motion } from "framer-motion";

export function CertificateArray({ items }) {
  return (
    <div className="certificate-array mt-12">
      {items.map((item, index) => {
        const [issuer, title] = item.split(": ");

        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="certificate-cell"
          >
            <div className="certificate-index">cert[{index}]</div>
            <div className="certificate-body">
              <p className="text-xs uppercase tracking-[0.26em] text-[#7A0C0C]">{issuer}</p>
              <p className="mt-3 text-sm leading-6 text-[#EAEAEA]/76">{title ?? issuer}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
