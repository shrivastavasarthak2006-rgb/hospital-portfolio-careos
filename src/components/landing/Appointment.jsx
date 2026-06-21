import { useState } from "react";
import axios from "axios";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import SectionHeader from "../common/SectionHeader";

const initialForm = {
  patientName: "",
  email: "",
  phone: "",
  hospital: "",
  department: "",
  appointmentDate: "",
};

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://hospital-portfolio-backend.vercel.app",
        form
      );

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      alert("Failed to book appointment");
    }
  };

  return (
    <section className="hospital-bg-section py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Appointment"
          title="Book Your Appointment"
          text="Schedule an appointment with your preferred hospital."
        />

        <motion.form
          onSubmit={submit}
          className="glass-card mt-8 rounded-[2rem] p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Patient Name"
              value={form.patientName}
              onChange={update("patientName")}
            />

            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={update("email")}
            />

            <Field
              label="Phone"
              value={form.phone}
              onChange={update("phone")}
            />

            <Field
              label="Hospital"
              value={form.hospital}
              onChange={update("hospital")}
            />

            <Field
              label="Department"
              value={form.department}
              onChange={update("department")}
            />

            <Field
              label="Appointment Date"
              type="date"
              value={form.appointmentDate}
              onChange={update("appointmentDate")}
            />
          </div>

          {submitted && (
            <div className="mt-4 rounded-xl bg-green-100 p-3 text-green-700 font-semibold">
              Appointment booked successfully.
            </div>
          )}

          <Button type="submit" className="mt-6 w-full">
            <CalendarCheck size={18} />
            Book Appointment
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-bold text-care-navy">
        {label}
      </label>

      <input
        {...props}
        placeholder={label}
        className="focus-ring mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4"
      />
    </div>
  );
}