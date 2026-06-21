import { motion } from "framer-motion";
import { Activity, BrainCircuit, Building2, CalendarDays, HeartPulse } from "lucide-react";
import { fadeUp } from "../../utils/motion";

const rows = [
  ["Bhopal", "86%", "Stable"],
  ["Indore", "74%", "Rising"],
  ["Ujjain", "62%", "Normal"],
];

export default function DashboardMockup() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="glass-card relative rounded-[2.25rem] p-4 sm:p-5"
    >
      <div className="rounded-[1.75rem] border border-slate-100 bg-white p-4 shadow-premium">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-care-teal">Command Center</p>
            <h3 className="mt-1 text-lg font-extrabold text-care-navy">AI Healthcare Grid</h3>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-care-navy text-white">
            <BrainCircuit size={23} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            [Building2, "128", "Hospitals"],
            [CalendarDays, "2.4k", "Visits"],
            [Activity, "36", "Alerts"],
          ].map(([Icon, value, label]) => (
            <div key={label} className="rounded-3xl bg-slate-50 p-3">
              <Icon className="text-care-blue" size={19} />
              <div className="mt-3 text-xl font-extrabold text-care-navy">{value}</div>
              <div className="text-xs font-medium text-slate-500">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-3xl bg-gradient-to-br from-care-blue to-care-teal p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-white/70">AI utilization forecast</p>
              <p className="mt-1 text-2xl font-extrabold">91.8%</p>
            </div>
            <HeartPulse size={34} />
          </div>
          <div className="mt-5 flex h-20 items-end gap-2">
            {[38, 54, 48, 68, 58, 76, 88, 72, 92].map((height, index) => (
              <motion.div
                key={height + index}
                initial={{ height: 8 }}
                animate={{ height }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                className="flex-1 rounded-t-xl bg-white/75"
              />
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {rows.map(([city, load, state]) => (
            <div key={city} className="flex items-center justify-between rounded-2xl border border-slate-100 p-3">
              <div>
                <p className="text-sm font-bold text-care-navy">{city}</p>
                <p className="text-xs text-slate-500">Network load {load}</p>
              </div>
              <span className="rounded-full bg-care-mint px-3 py-1 text-xs font-bold text-care-teal">{state}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
