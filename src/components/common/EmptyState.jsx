import { ClipboardList } from "lucide-react";

export default function EmptyState({ title, text }) {
  return (
    <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white/60 p-8 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-care-mint text-care-teal">
        <ClipboardList size={26} />
      </div>
      <h3 className="mt-4 text-lg font-bold text-care-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}
