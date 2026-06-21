import { Link } from "react-router-dom";
import { navLinks } from "../../data/siteData";
import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#" aria-label="CAREOS home">
          <Logo />
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-care-blue">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link to="/admin/login" className="hidden text-sm font-semibold text-slate-600 transition hover:text-care-blue sm:block">
            Admin
          </Link>
          <a href="#contact">
            <Button as="span" icon={false} className="min-h-11 px-4">
              Contact
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
