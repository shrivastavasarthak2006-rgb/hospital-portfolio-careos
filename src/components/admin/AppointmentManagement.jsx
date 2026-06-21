import { Search, Trash2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function AppointmentManagement({
  appointments,
  fetchAppointments,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.patientName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      appointment.hospital
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Delete this appointment?"
    );

    if (!isConfirmed) return;

    try {
      await axios.delete(
        `https://hospital-portfolio-backend.vercel.appapi/appointments/${id}`
      );

      fetchAppointments();
    } catch (error) {
      console.error(error);
      alert("Failed to delete appointment");
    }
  };

  return (
    <section className="glass-card rounded-[2rem] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-care-navy">
            Appointment Management
          </h2>
          <p className="text-sm font-medium text-slate-500">
            Manage all booked appointments.
          </p>
        </div>

        <div className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-slate-400">
          <Search size={17} />
          <input
            className="w-44 bg-transparent text-sm outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-slate-100 bg-white">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <div
              key={appointment._id}
              className="grid items-center gap-3 border-b border-slate-100 p-4 last:border-b-0 sm:grid-cols-[1fr_1fr_1fr_1fr_auto]"
            >
              <span className="font-bold text-care-navy">
                {appointment.patientName}
              </span>

              <span className="text-sm text-slate-500">
                {appointment.hospital}
              </span>

              <span className="text-sm text-slate-500">
                {appointment.department}
              </span>

              <span className="text-sm text-slate-500">
                {appointment.appointmentDate}
              </span>

              <button
                onClick={() =>
                  handleDelete(appointment._id)
                }
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-sm text-slate-500">
            No appointments found.
          </div>
        )}
      </div>
    </section>
  );
}