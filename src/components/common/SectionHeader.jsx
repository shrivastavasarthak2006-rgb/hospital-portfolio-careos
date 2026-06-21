import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motion";

export default function SectionHeader({ eyebrow, title, text, centered = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-care-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>
    </motion.div>
  );
}
