import { motion } from "framer-motion";

export default function StatCard({ stat }) {
  const Icon = stat?.icon;

  const changeValue = stat?.change || "";

  const isNegative = changeValue.startsWith?.("-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-[2rem] p-5"
    >
      {/* Top Row */}
      <div className="flex items-start justify-between">
        
        {/* Icon */}
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-care-navy text-white">
          {Icon ? <Icon size={22} /> : null}
        </div>

        {/* Change Badge */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-extrabold ${
            isNegative
              ? "bg-teal-50 text-care-teal"
              : "bg-blue-50 text-care-blue"
          }`}
        >
          {changeValue}
        </span>
      </div>

      {/* Value */}
      <div className="mt-5 text-3xl font-extrabold text-care-navy">
        {stat?.value || 0}
      </div>

      {/* Label */}
      <div className="mt-1 text-sm font-semibold text-slate-500">
        {stat?.label || ""}
      </div>
    </motion.div>
  );
}