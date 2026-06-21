import { useState,useEffect} from "react";
import axios from "axios";
import { Menu, Search, FileText, Building2, CalendarCheck, User,} from "lucide-react";
import AdminSidebar from "../components/admin/AdminSidebar";
import ActivityFeed from "../components/admin/ActivityFeed";
import AnalyticsChart from "../components/admin/AnalyticsChart";
import ContactManagement from "../components/admin/ContactManagement";
import HospitalManagement from "../components/admin/HospitalManagement";
import StatCard from "../components/admin/StatCard";
import AppointmentManagement from "../components/admin/AppointmentManagement";


export default function AdminDashboard() {
  const [contactsData, setContactsData] = useState([]);
  const [hospitalsData, setHospitalsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
  hospitals: 0,
  appointments: 0,
  patients: 0,
});

  useEffect(() => {
    fetchPatients();
    fetchHospitals();
    fetchAppointments();
    fetchStats();
  }, []);

  const fetchPatients = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/patients");

    const patientsArray=res.data?.patients || [];

    const formattedData = patientsArray.map((patient) => ({
      _id: patient._id,
      name: patient.fullName,
      email: patient.email,
      status: patient.status,
      city: patient.address,
    }));

    setContactsData(formattedData);
  } catch (error) {
    console.error(error);
    setContactsData([]);
  }
  };

  const fetchHospitals = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/hospitals");
    setHospitalsData(res.data.hospitals || []);
  } catch (error) {
    console.error(error);
    setHospitalsData([]);
  }
};

const fetchAppointments = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/appointments");
    setAppointmentsData(res.data.appointments || []);
  } catch (error) {
    console.error(error);
    setAppointmentsData([]);
  }
};

const fetchStats = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/dashboard-stats");
    setStats(res.data);
  } catch (error) {
    console.error(error);
    setStats({ hospitals: 0, appointments: 0, patients: 0 });
  }
};

const dynamicStats = [
  {
    label: "Forms Filled",
    value: contactsData.length,
    change: "+Live",
    icon: FileText,
  },
  {
    label: "Hospitals Connected",
    value: hospitalsData.length,
    change: "+Live",
    icon: Building2,
  },
  {
    label: "Appointments Today",
    value: appointmentsData.length,
    change: "+Today",
    icon: CalendarCheck,
  },
  {
    label: "Patient Contacts",
    value: contactsData.length,
    change: "+Live",
    icon: User,
  },
];

  return (
    <main className="flex min-h-screen bg-care-radial">
      <AdminSidebar />
      <section className="min-w-0 flex-1 px-5 py-5 sm:px-7 lg:px-9 h-screen overflow-y-auto">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <button className="grid h-11 w-11 place-items-center rounded-2xl bg-care-navy text-white lg:hidden">
              <Menu size={20} />
            </button>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-care-teal">CAREOS Admin</p>
              <h1 className="font-display text-2xl font-extrabold text-care-navy sm:text-3xl">Healthcare Operations Dashboard</h1>
            </div>
          </div>
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-slate-400">
            <Search size={18} />
            <input className="w-full bg-transparent text-sm outline-none sm:w-56" placeholder="Search dashboard" />
          </div>
        </header>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {dynamicStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_0.75fr]">
          <AnalyticsChart />
          <div className="space-y-6">
            <ActivityFeed />
          </div>
        </div>

        <div className="mt-6 grid gap-6">
          <ContactManagement contacts={contactsData} setContacts={setContactsData} fetchPatients={fetchPatients}  
          />
          <AppointmentManagement appointments={appointmentsData} setAppointments={setAppointmentsData} fetchAppointments={fetchAppointments} />
          <HospitalManagement hospitalsData={hospitalsData} fetchHospitals={fetchHospitals} />
        </div>
      </section>
    </main>
  );
}