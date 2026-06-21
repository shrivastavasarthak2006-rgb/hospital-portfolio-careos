import { Link, useLocation } from "react-router-dom";
import { BarChart3, Building2, LayoutDashboard, LogOut, MessageSquare, Settings } from "lucide-react";
import Logo from "../common/Logo";

const links = [
  { label: "Overview", icon: LayoutDashboard },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden flex-col min-h-screen w-72 border-r border-slate-100 bg-white/86 p-5 backdrop-blur-xl lg:flex">
      <Logo />
      <div className="mt-9 space-y-2 flex-1">
        {links.map(({ label, icon: Icon }, index) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
              index === 0 && location.pathname.includes("dashboard")
                ? "bg-care-navy text-white shadow-lg shadow-care-blue/20"
                : "text-slate-600 hover:bg-slate-50 hover:text-care-blue"
            }`}
          >
            <Icon size={19} />
            {label}
          </button>
        ))}
      </div>
      
      {/* Admin Profile Section */}
      <div className="mb-4 mt-auto rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-care-teal text-sm font-bold text-white shadow-sm">
            AD
          </div>
          <div className="overflow-hidden">
            <p className="truncate text-sm font-bold text-care-navy">CareOS Admin</p>
            <p className="truncate text-xs font-semibold text-slate-500">System Lead</p>
          </div>
        </div>
      </div>

      <Link to="/" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-red-500 transition-colors">
        <LogOut size={19} />
        Back to Website
      </Link>
    </aside>
  );
}