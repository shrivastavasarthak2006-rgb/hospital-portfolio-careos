import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Building2, Search, ShieldPlus, Stethoscope } from "lucide-react";
import EmptyState from "../components/common/EmptyState";
import HospitalCard from "../components/network/HospitalCard";
import MetricTile from "../components/network/MetricTile";
import PageTopbar from "../components/network/PageTopbar";
import { getCityBySlug, getHospitalsByCity } from "../data/siteData";

export default function CityDetails() {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const city = getCityBySlug(citySlug);
  const [query, setQuery] = useState("");

  const hospitals = useMemo(() => getHospitalsByCity(citySlug), [citySlug]);
  const filteredHospitals = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return hospitals;
    return hospitals.filter((hospital) =>
      [hospital.name, hospital.address, hospital.description, hospital.departments.join(" "), hospital.facilities.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [hospitals, query]);

  if (!city) {
    return (
      <main className="min-h-screen bg-care-radial">
        <PageTopbar />
        <div className="section-shell py-16">
          <EmptyState title="City not found" text="The selected CAREOS city profile is not available." />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-care-radial">
      <PageTopbar />
      <section className="section-shell py-10 sm:py-14">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2.5rem] bg-care-navy p-6 text-white shadow-premium sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-care-teal">City Details</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{city.name}</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/72">{city.summary}</p>
            </div>
            <Link to="/#network" className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/18">
              Back to map
            </Link>
          </div>
        </motion.div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricTile icon={Building2} label="Total Hospitals" value={city.totalHospitals} tone="blue" />
          <MetricTile icon={Stethoscope} label="Total Doctors" value={city.totalDoctors} tone="teal" />
          <MetricTile icon={Activity} label="Specialties Available" value={city.specialtiesAvailable.length} tone="indigo" />
          <MetricTile icon={ShieldPlus} label="Emergency Centers" value={city.emergencyCenters} tone="slate" />
        </div>

        <section className="mt-7 rounded-[2.25rem] border border-white/70 bg-white/[0.72] p-5 shadow-glass backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-care-teal">Specialties Available</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {city.specialtiesAvailable.map((specialty) => (
                  <span key={specialty} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 shadow-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-slate-400">
              <Search size={17} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent text-sm outline-none sm:w-72"
                placeholder="Search hospitals, departments, facilities"
              />
            </div>
          </div>
        </section>

        <section className="mt-7">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-care-teal">Level 2</p>
              <h2 className="mt-2 text-2xl font-extrabold text-care-navy">Hospitals in {city.name}</h2>
            </div>
            <p className="text-sm font-bold text-slate-500">{filteredHospitals.length} results</p>
          </div>
          {filteredHospitals.length === 0 ? (
            <EmptyState title="No hospitals match your search" text="Try searching by hospital name, department, specialty, or facility." />
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredHospitals.map((hospital) => (
                <HospitalCard key={hospital.slug} hospital={hospital} onClick={() => navigate(`/hospital/${hospital.slug}`)} />
              ))}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
