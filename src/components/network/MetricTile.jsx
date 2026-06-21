export default function MetricTile({ icon: Icon, label, value, tone = "blue" }) {
  const tones = {
    blue: "bg-blue-50 text-care-blue",
    teal: "bg-teal-50 text-care-teal",
    indigo: "bg-indigo-50 text-care-indigo",
    slate: "bg-slate-50 text-care-navy",
  };

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-glass backdrop-blur-xl">
      <div className={`grid h-11 w-11 place-items-center rounded-2xl ${tones[tone]}`}>
        <Icon size={21} />
      </div>
      <p className="mt-5 text-2xl font-extrabold text-care-navy">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
    </div>
  );
}
