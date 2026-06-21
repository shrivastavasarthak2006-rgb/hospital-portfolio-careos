import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Ambulance, Building2, Mail, MapPin, Phone, ShieldPlus } from "lucide-react";
import EmptyState from "../components/common/EmptyState";
import DoctorCard from "../components/network/DoctorCard";
import PageTopbar from "../components/network/PageTopbar";
import { getHospitalBySlug } from "../data/siteData";

export default function HospitalDetails() {
  const { hospitalSlug } = useParams();
  const hospital = getHospitalBySlug(hospitalSlug);

  if (!hospital) {
    return (
      <main className="min-h-screen bg-care-radial">
        <PageTopbar />
        <div className="section-shell py-16">
          <EmptyState title="Hospital not found" text="The selected CAREOS hospital profile is not available." />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-care-radial">
      <PageTopbar backTo={`/city/${hospital.citySlug}`} backLabel={`Back to ${hospital.city}`} />
      <section className="section-shell py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-care-navy shadow-premium"
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${hospital.banner})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-care-navy via-care-navy/82 to-care-navy/35" />
          <div className="relative p-6 text-white sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-care-teal">Hospital Details</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{hospital.name}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/75">{hospital.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur-xl">
                <MapPin size={16} /> {hospital.address}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur-xl">
                <Phone size={16} /> {hospital.phone}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur-xl">
                <Mail size={16} /> {hospital.email}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <InfoPanel icon={Building2} title="Departments" items={hospital.departments} />
          <InfoPanel icon={ShieldPlus} title="Facilities" items={hospital.facilities} />
        </div>

        <section className="mt-7 rounded-[2.25rem] border border-white/70 bg-white/[0.72] p-5 shadow-glass backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-rose-50 text-rose-500">
              <Ambulance size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-care-teal">Emergency Services</p>
              <h2 className="text-xl font-extrabold text-care-navy">Rapid response coverage</h2>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {hospital.emergencyServices.map((service) => (
              <div key={service} className="rounded-2xl bg-white p-4 text-sm font-bold text-slate-600 shadow-sm">
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-care-teal">Doctor Section</p>
              <h2 className="text-2xl font-extrabold text-care-navy">Available Specialists</h2>
            </div>
            <Link to={`/city/${hospital.citySlug}`} className="text-sm font-bold text-care-blue hover:text-care-teal">
              View all {hospital.city} hospitals
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {hospital.doctors.map((doctor) => (
              <DoctorCard key={doctor.name} doctor={doctor} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function InfoPanel({ icon: Icon, title, items }) {
  return (
    <section className="glass-card rounded-[2.25rem] p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-care-mint text-care-teal">
          <Icon size={22} />
        </div>
        <h2 className="text-xl font-extrabold text-care-navy">{title}</h2>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-600 shadow-sm">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
