import {
  Activity,
  BarChart3,
  Building2,
  CalendarCheck,
  FileText,
  HeartPulse,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Network", href: "#network" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Hospital Management System",
    description: "Digitize admissions, departments, beds, billing signals, care teams, and operational workflows.",
    icon: Building2,
    metric: "42% faster ops",
  },
  {
    title: "AI Analytics & Insights",
    description: "Surface demand trends, utilization risks, emergency load, and decision intelligence in real time.",
    icon: BarChart3,
    metric: "18k signals/day",
  },
  {
    title: "City-wise Hospital Discovery",
    description: "Connect patients and administrators with verified hospitals by city, specialty, and capacity.",
    icon: MapPinned,
    metric: "3 pilot cities",
  },
  {
    title: "Patient & Appointment Management",
    description: "Coordinate patient journeys from inquiry to appointment, triage, follow-up, and care reminders.",
    icon: CalendarCheck,
    metric: "91% slot clarity",
  },
  {
    title: "Admin Dashboard & Reports",
    description: "Give leadership live reporting, activity trails, contact management, and hospital directory control.",
    icon: FileText,
    metric: "Live reporting",
  },
];

export const aboutPoints = [
  {
    title: "AI-powered healthcare ecosystem",
    text: "CareOS unifies operational, geographic, and patient interaction data so teams can act with clarity.",
    icon: HeartPulse,
  },
  {
    title: "Smart hospital management",
    text: "Departments, appointments, reporting, and hospital profiles live in one modern operating layer.",
    icon: Stethoscope,
  },
  {
    title: "Connected healthcare infrastructure",
    text: "City-level visibility helps planners understand access, service availability, and growth opportunities.",
    icon: Activity,
  },
  {
    title: "Data-driven decision making",
    text: "Dashboards convert live signals into boardroom-ready insights for clinical and administrative leaders.",
    icon: ShieldCheck,
  },
];

export const cityProfiles = [
  {
    name: "Bhopal",
    slug: "bhopal",
    coordinates: [23.2599, 77.4126],
    summary: "State capital healthcare hub with tertiary care, diagnostics, and emergency response coverage.",
    totalHospitals: 3,
    totalDoctors: 148,
    emergencyCenters: 9,
    specialtiesAvailable: ["Cardiology", "Neurosciences", "Oncology", "Orthopedics", "Critical Care", "Diagnostics"],
  },
  {
    name: "Indore",
    slug: "indore",
    coordinates: [22.7196, 75.8577],
    summary: "High-growth urban healthcare network with multispeciality clinics and referral care capacity.",
    totalHospitals: 2,
    totalDoctors: 96,
    emergencyCenters: 6,
    specialtiesAvailable: ["Internal Medicine", "Pediatrics", "Trauma Care", "Radiology", "General Surgery"],
  },
  {
    name: "Ujjain",
    slug: "ujjain",
    coordinates: [23.1765, 75.7885],
    summary: "Regional care cluster focused on accessible emergency, maternity, and outpatient services.",
    totalHospitals: 2,
    totalDoctors: 62,
    emergencyCenters: 4,
    specialtiesAvailable: ["Emergency Medicine", "Maternity", "ENT", "General Medicine", "Pathology"],
  },
];

export const hospitalProfiles = [
  {
    name: "JK Hospital",
    slug: "jk-hospital",
    city: "Bhopal",
    citySlug: "bhopal",
    address: "Kolar Road, Bhopal, Madhya Pradesh 462042",
    phone: "+91 755 408 7000",
    email: "care@jkhospital.example",
    banner: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80",
    description: "A digitally enabled multispeciality hospital with strong emergency, diagnostics, and surgical coordination across central Bhopal.",
    departments: ["Cardiology", "Emergency Care", "Diagnostics", "Internal Medicine", "General Surgery"],
    facilities: ["24x7 Pharmacy", "Advanced ICU", "Digital Lab", "Ambulance Desk", "Insurance Support"],
    emergencyServices: ["Trauma stabilization", "Cardiac response", "Critical care transfer"],
    doctors: [
      { name: "Dr. Ananya Rao", specialization: "Cardiology", experience: "14 years", availability: "Mon, Wed, Fri" },
      { name: "Dr. Kabir Sen", specialization: "Emergency Medicine", experience: "11 years", availability: "Daily evening" },
      { name: "Dr. Nisha Mehta", specialization: "Radiology", experience: "9 years", availability: "Tue to Sat" },
    ],
  },
  {
    name: "Bansal Hospital",
    slug: "bansal-hospital",
    city: "Bhopal",
    citySlug: "bhopal",
    address: "Shahpura, Bhopal, Madhya Pradesh 462016",
    phone: "+91 755 408 6090",
    email: "enterprise@bansalhospital.example",
    banner: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80",
    description: "A flagship tertiary care facility for neurosciences, oncology, critical care, and advanced clinical programs.",
    departments: ["Neurosciences", "Oncology", "Critical Care", "Nephrology", "Robotic Surgery"],
    facilities: ["Modular OT", "NICU", "Dialysis Unit", "Cancer Daycare", "Patient Lounge"],
    emergencyServices: ["Stroke response", "ICU escalation", "Emergency diagnostics"],
    doctors: [
      { name: "Dr. Meera Singh", specialization: "Neurosurgery", experience: "18 years", availability: "Mon to Thu" },
      { name: "Dr. Arjun Malhotra", specialization: "Oncology", experience: "16 years", availability: "Tue, Thu, Sat" },
      { name: "Dr. Priya Nair", specialization: "Critical Care", experience: "12 years", availability: "24x7 roster" },
    ],
  },
  {
    name: "Sagar Multispeciality Hospital",
    slug: "sagar-multispeciality-hospital",
    city: "Bhopal",
    citySlug: "bhopal",
    address: "Danish Nagar, Bhopal, Madhya Pradesh 462026",
    phone: "+91 755 492 1100",
    email: "ops@sagarhospital.example",
    banner: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1600&q=80",
    description: "A reliable multispeciality care center serving outpatient, surgical, orthopedic, and ICU needs.",
    departments: ["Orthopedics", "General Surgery", "ICU", "Pulmonology", "Physiotherapy"],
    facilities: ["Rehab Center", "Emergency Bay", "Digital X-Ray", "Daycare Beds", "Blood Storage"],
    emergencyServices: ["Orthopedic trauma", "Respiratory support", "Surgical emergency"],
    doctors: [
      { name: "Dr. Raghav Tiwari", specialization: "Orthopedics", experience: "15 years", availability: "Mon to Fri" },
      { name: "Dr. Isha Kapoor", specialization: "Pulmonology", experience: "10 years", availability: "Wed, Fri" },
      { name: "Dr. Sameer Khan", specialization: "General Surgery", experience: "13 years", availability: "Tue to Sat" },
    ],
  },
  {
    name: "Indore Care Institute",
    slug: "indore-care-institute",
    city: "Indore",
    citySlug: "indore",
    address: "Vijay Nagar, Indore, Madhya Pradesh 452010",
    phone: "+91 731 500 2400",
    email: "hello@indorecare.example",
    banner: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80",
    description: "A modern urban hospital focused on internal medicine, pediatrics, trauma care, and diagnostics.",
    departments: ["Internal Medicine", "Pediatrics", "Trauma Care", "Radiology"],
    facilities: ["Pediatric Ward", "CT Scan", "Observation Unit", "Teleconsult Room"],
    emergencyServices: ["Pediatric emergency", "Accident response", "Rapid imaging"],
    doctors: [
      { name: "Dr. Devika Jain", specialization: "Pediatrics", experience: "12 years", availability: "Mon to Sat" },
      { name: "Dr. Harsh Vyas", specialization: "Internal Medicine", experience: "14 years", availability: "Daily morning" },
    ],
  },
  {
    name: "CHL Advanced Care",
    slug: "chl-advanced-care",
    city: "Indore",
    citySlug: "indore",
    address: "AB Road, Indore, Madhya Pradesh 452001",
    phone: "+91 731 407 8000",
    email: "network@chlcare.example",
    banner: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1600&q=80",
    description: "A high-capacity advanced care center with surgical, emergency, and specialty outpatient programs.",
    departments: ["General Surgery", "Radiology", "Cardiology", "Emergency Medicine"],
    facilities: ["Cath Lab", "Surgical Suites", "Emergency Ambulance", "Diagnostics Hub"],
    emergencyServices: ["Cardiac triage", "Trauma response", "Surgical emergency"],
    doctors: [
      { name: "Dr. Kunal Awasthi", specialization: "Cardiology", experience: "17 years", availability: "Tue to Sat" },
      { name: "Dr. Ritu Soni", specialization: "Emergency Medicine", experience: "9 years", availability: "24x7 roster" },
    ],
  },
  {
    name: "Ujjain Health Center",
    slug: "ujjain-health-center",
    city: "Ujjain",
    citySlug: "ujjain",
    address: "Freeganj, Ujjain, Madhya Pradesh 456010",
    phone: "+91 734 255 4100",
    email: "care@ujjainhealth.example",
    banner: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    description: "A regional healthcare facility supporting emergency medicine, maternity, outpatient care, and diagnostics.",
    departments: ["Emergency Medicine", "Maternity", "ENT", "General Medicine"],
    facilities: ["Maternity Wing", "Pathology Lab", "Ambulance Unit", "Outpatient Suites"],
    emergencyServices: ["Maternity emergency", "ENT emergency", "Primary trauma care"],
    doctors: [
      { name: "Dr. Kavya Dubey", specialization: "Maternity Care", experience: "13 years", availability: "Mon, Wed, Fri" },
      { name: "Dr. Mohit Sahu", specialization: "ENT", experience: "8 years", availability: "Tue to Sat" },
    ],
  },
  {
    name: "Avantika Multicare",
    slug: "avantika-multicare",
    city: "Ujjain",
    citySlug: "ujjain",
    address: "Dewas Road, Ujjain, Madhya Pradesh 456010",
    phone: "+91 734 260 8300",
    email: "admin@avantikamulticare.example",
    banner: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1600&q=80",
    description: "A growing multispeciality center for general medicine, pathology, emergency care, and family health.",
    departments: ["General Medicine", "Pathology", "Emergency Care", "Family Health"],
    facilities: ["Digital Records", "Sample Collection", "Minor OT", "Emergency Desk"],
    emergencyServices: ["Primary emergency", "Stabilization bay", "Ambulance coordination"],
    doctors: [
      { name: "Dr. Sanya Trivedi", specialization: "General Medicine", experience: "10 years", availability: "Daily morning" },
      { name: "Dr. Ashwin Patidar", specialization: "Emergency Care", experience: "7 years", availability: "Evening roster" },
    ],
  },
];

export const getCityBySlug = (slug) => cityProfiles.find((city) => city.slug === slug);

export const getHospitalsByCity = (citySlug) => hospitalProfiles.filter((hospital) => hospital.citySlug === citySlug);

export const getHospitalBySlug = (slug) => hospitalProfiles.find((hospital) => hospital.slug === slug);

export const dashboardStats = [];

export const activityFeed = [
  "Bhopal network capacity report generated",
  "New contact request from Indore municipal health office",
  "JK Hospital updated emergency availability",
  "AI anomaly detected in appointment demand pattern",
  "Admin exported monthly leadership dashboard",
];

export const contacts = [
  { name: "Dr. Meera Singh", email: "meera.singh@bansalhealth.in", status: "Enterprise demo", city: "Bhopal" },
  { name: "Rahul Verma", email: "rahul.verma@citycare.mp.gov", status: "Discovery call", city: "Indore" },
  { name: "Aditi Sharma", email: "aditi@hospitalops.in", status: "Proposal sent", city: "Ujjain" },
];

export const managedHospitals = [
  { name: "JK Hospital", city: "Bhopal", departments: 18, occupancy: "78%", status: "Live" },
  { name: "Bansal Hospital", city: "Bhopal", departments: 26, occupancy: "84%", status: "Live" },
  { name: "Sagar Multispeciality Hospital", city: "Bhopal", departments: 14, occupancy: "69%", status: "Onboarding" },
];

export const chartData = [
  { month: "Jan", appointments: 1400, aiAlerts: 22 },
  { month: "Feb", appointments: 1680, aiAlerts: 26 },
  { month: "Mar", appointments: 1810, aiAlerts: 20 },
  { month: "Apr", appointments: 2140, aiAlerts: 33 },
  { month: "May", appointments: 2380, aiAlerts: 31 },
  { month: "Jun", appointments: 2630, aiAlerts: 36 },
];
