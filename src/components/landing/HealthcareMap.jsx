import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { divIcon } from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { motion } from "framer-motion";
import { Building2, Hospital, MapPin, ShieldPlus } from "lucide-react";
import { cityProfiles } from "../../data/siteData";
import SectionHeader from "../common/SectionHeader";
import { fadeUp } from "../../utils/motion";

export default function HealthcareMap() {
  const navigate = useNavigate();
  const markerIcon = useMemo(
    () =>
      divIcon({
        className: "careos-city-marker",
        html: `<span></span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      }),
    [],
  );

  return (
    <section id="network" className="hospital-bg-section py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Madhya Pradesh Healthcare Map"
          title="Explore city-level healthcare intelligence."
          text="Start with a real geographical map of Madhya Pradesh. City markers open dedicated intelligence pages with hospitals, doctors, specialties, and emergency coverage."
        />
        <div className="mt-12 grid gap-7 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card overflow-hidden rounded-[2.25rem] p-3 sm:p-4"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-100">
              <MapContainer center={[23.45, 77.45]} zoom={7} scrollWheelZoom={false} className="careos-map">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cityProfiles.map((city) => (
                  <Marker
                    key={city.slug}
                    position={city.coordinates}
                    icon={markerIcon}
                    eventHandlers={{ click: () => navigate(`/city/${city.slug}`) }}
                  >
                    <Tooltip direction="top" offset={[0, -16]} opacity={1} permanent>
                      <span className="font-bold text-care-navy">{city.name}</span>
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>
              <div className="pointer-events-none absolute left-4 top-4 z-[450] max-w-xs rounded-3xl border border-white/80 bg-white/85 p-4 shadow-premium backdrop-blur-xl">
                <div className="flex items-center gap-2 text-care-navy">
                  <ShieldPlus size={19} className="text-care-teal" />
                  <span className="text-sm font-extrabold">City network view</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600">Only city markers are shown. Select a city to open its dedicated healthcare profile.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-[2.25rem] p-5"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-care-navy text-white">
                <MapPin size={21} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-care-teal">Level 1</p>
                <h3 className="text-xl font-extrabold text-care-navy">City Markers</h3>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {cityProfiles.map((city) => (
                <button
                  key={city.slug}
                  onClick={() => navigate(`/city/${city.slug}`)}
                  className="focus-ring group w-full rounded-3xl border border-slate-100 bg-white/80 p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-care-teal/30 hover:shadow-premium"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-base font-extrabold text-care-navy">{city.name}</h4>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{city.summary}</p>
                    </div>
                    <Hospital size={20} className="shrink-0 text-care-blue transition group-hover:text-care-teal" />
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Building2 size={14} className="text-care-teal" />
                    {city.totalHospitals} hospitals · {city.totalDoctors} doctors
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
