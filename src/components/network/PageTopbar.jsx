import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Logo from "../common/Logo";

export default function PageTopbar({ backTo = "/", backLabel = "Back to CAREOS" }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/78 backdrop-blur-xl">
      <nav className="section-shell flex h-[4.5rem] items-center justify-between py-3">
        <Link to="/" aria-label="CAREOS home">
          <Logo />
        </Link>
        <Link to={backTo} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-care-navy shadow-sm transition hover:border-care-teal/40 hover:text-care-blue">
          <ArrowLeft size={16} />
          {backLabel}
        </Link>
      </nav>
    </header>
  );
}
