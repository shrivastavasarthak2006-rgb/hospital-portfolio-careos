import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <p className="text-sm font-medium text-slate-500">© 2026 CAREOS. Built for connected healthcare infrastructure.</p>
      </div>
    </footer>
  );
}
