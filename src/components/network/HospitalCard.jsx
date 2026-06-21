import { ArrowRight, Building2, MapPin, ShieldPlus } from "lucide-react";

export default function HospitalCard({ hospital, onClick }) {
  return (
    <button
      onClick={onClick}
      className="focus-ring group w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/[0.78] text-left shadow-glass backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-premium"
    >
      <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(15,31,61,.08), rgba(15,31,61,.45)), url(${hospital.banner})` }} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-extrabold text-care-navy">{hospital.name}</h3>
            <p className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <MapPin size={14} className="text-care-teal" />
              {hospital.address}
            </p>
          </div>
          <ArrowRight size={20} className="shrink-0 text-care-blue transition group-hover:translate-x-1 group-hover:text-care-teal" />
        </div>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">{hospital.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="flex items-center gap-2 text-xs font-bold text-slate-500"><Building2 size={14} /> Departments</p>
            <p className="mt-1 font-extrabold text-care-navy">{hospital.departments.length}</p>
          </div>
          <div className="rounded-2xl bg-care-mint p-3">
            <p className="flex items-center gap-2 text-xs font-bold text-care-teal"><ShieldPlus size={14} /> Emergency</p>
            <p className="mt-1 font-extrabold text-care-navy">{hospital.emergencyServices.length}</p>
          </div>
        </div>
      </div>
    </button>
  );
}
