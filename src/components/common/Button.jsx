import { ArrowRight } from "lucide-react";

export default function Button({ children, variant = "primary", icon = true, className = "", as: Element = "button", ...props }) {
  const styles =
    variant === "secondary"
      ? "border border-slate-200 bg-white text-care-navy shadow-sm hover:border-care-teal/40 hover:bg-care-mint/60"
      : "bg-care-navy text-white shadow-xl shadow-care-blue/20 hover:-translate-y-0.5 hover:bg-slate-900";

  return (
    <Element
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold ${styles} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={17} />}
    </Element>
  );
}
