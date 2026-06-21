const BASE_URL = "https://hospital-portfolio-backend.onrender.com";

export const api = {
  baseUrl: BASE_URL,
  auth: {
    adminLogin: `${BASE_URL}/api/admin/login`,
  },
  patients: {
    list: `${BASE_URL}/api/patients`,
    resolve: (id) => `${BASE_URL}/api/patients/${id}/resolve`,
    delete: (id) => `${BASE_URL}/api/patients/${id}`,
  },
  hospitals: {
    list: `${BASE_URL}/api/hospitals`,
    delete: (id) => `${BASE_URL}/api/hospitals/${id}`,
  },
  appointments: {
    list: `${BASE_URL}/api/appointments`,
    delete: (id) => `${BASE_URL}/api/appointments/${id}`,
  },
  dashboard: {
    stats: `${BASE_URL}/api/dashboard-stats`,
  },
};

