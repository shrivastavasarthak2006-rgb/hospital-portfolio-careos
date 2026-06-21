import { motion } from "framer-motion";
import { services } from "../../data/siteData";
import SectionHeader from "../common/SectionHeader";
import { fadeUp, stagger } from "../../utils/motion";

export default function Services() {
  return (
    <section id="services" className="hospital-bg-section py-20 sm:py-28">

      <div className="section-shell">
        <SectionHeader
          centered
          eyebrow="Services"
          title="Built for hospitals, administrators, and healthcare planners."
          text="Every module is designed to make care infrastructure more visible, searchable, measurable, and easier to operate at scale."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ title, description, icon: Icon, metric }) => (
            <motion.article key={title} variants={fadeUp} className="group glass-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-premium">
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-care-navy text-white shadow-lg shadow-care-blue/20">
                  <Icon size={25} />
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-care-teal shadow-sm">{metric}</span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-care-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-care-blue to-care-teal transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
