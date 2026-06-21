import { CalendarCheck, UserRound } from "lucide-react";

export default function DoctorCard({ doctor }) {
  return (
    <article className="glass-card rounded-[2rem] p-5 transition hover:-translate-y-1 hover:shadow-premium">
      <div className="flex items-start gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-care-blue/12 to-care-teal/20 text-care-blue">
          <UserRound size={28} />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-care-navy">{doctor.name}</h3>
          <p className="mt-1 text-sm font-bold text-care-teal">{doctor.specialization}</p>
          <p className="mt-2 text-xs font-semibold text-slate-500">{doctor.experience} experience</p>
        </div>
      </div>
      <div className="mt-5 rounded-2xl bg-white/75 p-3 text-xs font-bold text-slate-600">
        <span className="inline-flex items-center gap-2">
          <CalendarCheck size={15} className="text-care-blue" />
          {doctor.availability}
        </span>
      </div>
    </article>
  );
}
