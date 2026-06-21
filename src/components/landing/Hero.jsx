import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import Button from "../common/Button";
import DashboardMockup from "./DashboardMockup";
import { fadeUp, stagger } from "../../utils/motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-care-navy pb-20 pt-14 text-white sm:pb-28 lg:pt-20"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(15,31,61,.92), rgba(15,31,61,.76) 46%, rgba(15,31,61,.45)), url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=82)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-care-navy/35 via-transparent to-care-navy/45" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-xl">
            <Sparkles size={16} className="text-care-teal" />
            Enterprise AI for connected care systems
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            CareOS - Smart AI Healthcare Management System
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
            Connecting hospitals, cities, and healthcare data through AI
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#network">
              <Button as="span" className="w-full sm:w-auto">Explore Hospitals</Button>
            </a>
            <a href="#contact">
              <Button as="span" variant="secondary" className="w-full sm:w-auto">Contact Us</Button>
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/78">
            {["HIPAA-ready architecture", "Live city intelligence", "Executive reporting"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur-xl">
                <ShieldCheck size={16} className="text-care-teal" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <DashboardMockup />
      </div>
    </section>
  );
}
