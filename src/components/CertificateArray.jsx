import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CertificateArray({ items }) {
  return (
    <div className="certificate-array mt-12">
      {items.map((item, index) => {
        const label = typeof item === "string" ? item : item.label;
        const href = typeof item === "string" ? null : item.href;
        const [issuer, title] = label.split(": ");
        const Card = href ? motion.a : motion.div;
        const cardProps = href
          ? { href, target: "_blank", rel: "noreferrer" }
          : {};

        return (
          <Card
            key={label}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="certificate-cell no-underline"
            {...cardProps}
          >
            <div className="certificate-index">cert[{index}]</div>
            <div className="certificate-body">
              <div className="certificate-header-row">
                <p className="text-xs uppercase tracking-[0.26em] text-[#7A0C0C]">{issuer}</p>
                {href ? (
                  <span className="certificate-open-indicator" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                ) : null}
              </div>
              <p className="mt-3 text-sm leading-6 text-[#EAEAEA]/76">{title ?? issuer}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
