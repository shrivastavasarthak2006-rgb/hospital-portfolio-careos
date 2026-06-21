import { Plus ,Trash2,Search} from "lucide-react";
import { useState } from "react";
import axios from "axios";
import Button from "../common/Button";

export default function HospitalManagement({
  hospitalsData,
  fetchHospitals,
}) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    address: "",
    type: "",
    rating: "",
  });

  const handleAddHospital = async () => {
    try {
      await axios.post(
        "https://hospital-portfolio-backend.vercel.app",
        form
      );

      setForm({
        name: "",
        city: "",
        address: "",
        type: "",
        rating: "",
      });

      fetchHospitals();
    } catch (error) {
      console.error(error);
      alert("Failed to add hospital");
    }
  };

  const handleDeleteHospital = async (id) => {
  try {
    await axios.delete(
      `http://hospital-portfolio-backend.vercel.app/api/hospitals/${id}`
    );

    fetchHospitals();
  } catch (error) {
    console.error(error);
    alert("Failed to delete hospital");
  }
};
const [searchTerm, setSearchTerm] = useState("");

const filteredHospitals = (hospitalsData || []).filter((hospital) =>
  hospital.name?.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <section className="glass-card rounded-[2rem] p-5">
      <div className="flex flex-col gap-4">

        <div>
          <h2 className="text-xl font-extrabold text-care-navy">
            Hospital Management
          </h2>
          <p className="text-sm font-medium text-slate-500">
            Directory, onboarding and operational status.
          </p>
        </div>
        <div className="mt-5 flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-slate-400">
          <Search size={17} />
          <input
            className="w-44 bg-transparent text-sm outline-none"
            placeholder="Search hospital"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>

        <div className="grid gap-3 md:grid-cols-5">
          <input
            placeholder="Hospital Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="border rounded-xl p-2"
          />

          <input
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            className="border rounded-xl p-2"
          />

          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
            className="border rounded-xl p-2"
          />

          <input
            placeholder="Type"
            value={form.type}
            onChange={(e) =>
              setForm({ ...form, type: e.target.value })
            }
            className="border rounded-xl p-2"
          />

          <input
            placeholder="Rating"
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: e.target.value })
            }
            className="border rounded-xl p-2"
          />
        </div>

        <Button
          icon={false}
          className="min-h-11 w-fit"
          onClick={handleAddHospital}
        >
          <Plus size={18} /> Add Hospital
        </Button>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-slate-100 bg-white">
  {filteredHospitals.length > 0 ? (
    filteredHospitals.map((hospital) => (
      <div
        key={hospital._id}
        className="grid items-center gap-3 border-b border-slate-100 p-4 last:border-b-0 sm:grid-cols-[1.2fr_1fr_1fr_1.5fr_0.8fr_auto]"
      >
        <span className="font-bold text-care-navy">
          {hospital.name}
        </span>

        <span className="text-sm text-slate-500">
          {hospital.city}
        </span>

        <span className="text-sm text-slate-500">
          {hospital.type}
        </span>

        <span className="text-sm text-slate-500 truncate">
          {hospital.address}
        </span>

        <span className="text-sm font-semibold text-slate-500">
          ⭐ {hospital.rating}
        </span>

        <button
          onClick={() => handleDeleteHospital(hospital._id)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>
    ))
  ) : (
    <div className="p-8 text-center text-sm font-medium text-slate-500">
      No hospitals found.
    </div>
  )}
</div>
    </section>
  );
}