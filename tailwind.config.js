/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        care: {
          navy: "#0f1f3d",
          blue: "#2563eb",
          teal: "#14b8a6",
          cyan: "#06b6d4",
          indigo: "#4f46e5",
          mint: "#e6fffb",
          ink: "#172033",
        },
      },
      boxShadow: {
        premium: "0 24px 70px rgba(37, 99, 235, 0.14)",
        glass: "0 18px 55px rgba(15, 31, 61, 0.12)",
      },
      backgroundImage: {
        "care-radial":
          "radial-gradient(circle at 20% 20%, rgba(20,184,166,.18), transparent 32%), radial-gradient(circle at 82% 12%, rgba(79,70,229,.14), transparent 34%), linear-gradient(180deg, #ffffff 0%, #f5fbff 58%, #ffffff 100%)",
      },
    },
  },
  plugins: [],
};
