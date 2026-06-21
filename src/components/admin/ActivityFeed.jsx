import { activityFeed } from "../../data/siteData";

export default function ActivityFeed() {
  return (
    <section className="glass-card rounded-[2rem] p-5">
      <h2 className="text-xl font-extrabold text-care-navy">Activity Feed</h2>
      <div className="mt-5 space-y-4">
        {activityFeed.map((item, index) => (
          <div key={item} className="flex gap-3">
            <div className="mt-1 h-3 w-3 rounded-full bg-care-teal ring-4 ring-care-teal/15" />
            <div>
              <p className="text-sm font-bold text-care-navy">{item}</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{index + 2} min ago</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
