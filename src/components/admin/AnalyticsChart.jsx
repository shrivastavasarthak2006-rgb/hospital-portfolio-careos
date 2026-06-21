import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartData } from "../../data/siteData";

export default function AnalyticsChart() {
  return (
    <section className="glass-card rounded-[2rem] p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-care-navy">Care Demand Intelligence</h2>
          <p className="text-sm font-medium text-slate-500">Appointments and AI alerts across connected hospitals.</p>
        </div>
        <span className="rounded-full bg-care-mint px-3 py-1 text-xs font-extrabold text-care-teal">Live model</span>
      </div>
      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="appointments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="alerts" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip
              contentStyle={{ border: "1px solid #e2e8f0", borderRadius: 18, boxShadow: "0 18px 45px rgba(15,31,61,.1)" }}
            />
            <Area type="monotone" dataKey="appointments" stroke="#2563eb" strokeWidth={3} fill="url(#appointments)" />
            <Area type="monotone" dataKey="aiAlerts" stroke="#14b8a6" strokeWidth={3} fill="url(#alerts)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
