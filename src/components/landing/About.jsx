import { motion } from "framer-motion";
import { aboutPoints } from "../../data/siteData";
import SectionHeader from "../common/SectionHeader";
import { fadeUp, stagger } from "../../utils/motion";

export default function About({ variant }) {
  return (
    <section
      id="about"
      className={variant === "with-bg" ? "hospital-bg-section py-20 sm:py-28" : "py-20 sm:py-28"}
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="About CAREOS"
            title="An intelligent operating layer for modern healthcare networks."
            text="CareOS brings hospital operations, city discovery, patient coordination, and leadership analytics into a single AI-powered healthcare ecosystem."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {aboutPoints.map(({ title, text, icon: Icon }) => (
              <motion.article key={title} variants={fadeUp} className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-premium">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-care-blue/12 to-care-teal/18 text-care-blue">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-care-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
