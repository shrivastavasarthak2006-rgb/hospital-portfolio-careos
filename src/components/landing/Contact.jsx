import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, Send } from "lucide-react";
import Button from "../common/Button";
import SectionHeader from "../common/SectionHeader";
import axios from "axios";

const initialForm = {
  fullName: "",
  age: "",
  gender: "",
  phone: "",
  email: "",
  address: "",
  bloodGroup: "",
  disease: "",
  message: "",
};
export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (form.fullName.trim().length < 2) next.fullName = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!/^[0-9+\-\s()]{8,16}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.age) next.age = "Enter your age.";
    if (!form.gender) next.gender = "Select your gender.";
    if (form.message.trim().length < 12) next.message = "Message must be at least 12 characters.";
    if (form.address.trim().length < 3) next.address = "Enter your address.";
    if (form.bloodGroup.trim().length < 2) next.bloodGroup = "Enter your blood group.";
    if (form.disease.trim().length < 3) next.disease = "Enter your disease.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event) => {
  event.preventDefault();

  if (!validate()) return;

  try {
    const response = await axios.post("https://hospital-portfolio-backend.onrender.com",form);

    console.log(response.data);

    setSubmitted(true);
    setForm(initialForm);
  } catch (error) {
    console.error(error);
    alert("Failed to submit form");
  }
};

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  return (
    <section id="contact" className="hospital-bg-section py-20 sm:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Bring CAREOS to your healthcare network."
            text="Talk to our team about hospital onboarding, city-level dashboards, analytics pilots, and enterprise implementation."
          />
          <div className="mt-8 grid gap-4 text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-3"><Mail className="text-care-blue" /> partnerships@careos.ai</div>
            <div className="flex items-center gap-3"><PhoneCall className="text-care-teal" /> +91 755 480 2040</div>
          </div>
        </div>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="glass-card rounded-[2.25rem] p-5 sm:p-7"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" value={form.fullName} onChange={update("fullName")} error={errors.fullName} />
            <Field label="Email" type="email" value={form.email} onChange={update("email")} error={errors.email} />
            <Field label="Phone Number" value={form.phone} onChange={update("phone")} error={errors.phone} />
            <Field label="Age" type="number" value={form.age} onChange={update("age")} error={errors.age} />
            <div>
              <label className="text-sm font-bold text-care-navy">
                Gender
              </label>
              <select
              value={form.gender}
              onChange={update("gender")}
              className="focus-ring mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm text-care-navy"
              >
                <option value="">Select Gender</option>  
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="mt-2 text-sm font-semibold text-rose-500">{errors.gender}</p>}
            </div>
            <Field label="Address" value={form.address} onChange={update("address")} error={errors.address} />
            <div>
              <label className="text-sm font-bold text-care-navy">
                Blood Group
              </label>
              <select
              value={form.bloodGroup}
              onChange={update("bloodGroup")}
              className="focus-ring mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm text-care-navy"
              >
                <option value="">Select Blood Group</option>  
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodGroup && <p className="mt-2 text-sm font-semibold text-rose-500">{errors.bloodGroup}</p>}
            </div>
            <Field label="Disease" value={form.disease} onChange={update("disease")} error={errors.disease} />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="text-sm font-bold text-care-navy">Message</label>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows="5"
                className="focus-ring mt-2 w-full resize-none rounded-3xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-care-navy"
                placeholder="Tell us about your healthcare network, city, or hospital group."
              />
              {errors.message && <p className="mt-2 text-sm font-semibold text-rose-500">{errors.message}</p>}
            </div>
          </div>
          {submitted && (
            <div className="mt-5 rounded-2xl bg-care-mint px-4 py-3 text-sm font-bold text-care-teal">
              Thank you. The CAREOS team will contact you shortly.
            </div>
          )}
          <Button type="submit" className="mt-6 w-full" icon={false}>
            Send Inquiry <Send size={17} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, error, ...props }) {
  return (
    <div>
      <label className="text-sm font-bold text-care-navy">{label}</label>
      <input
        {...props}
        className="focus-ring mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm text-care-navy"
        placeholder={label}
      />
      {error && <p className="mt-2 text-sm font-semibold text-rose-500">{error}</p>}
    </div>
  );
}
