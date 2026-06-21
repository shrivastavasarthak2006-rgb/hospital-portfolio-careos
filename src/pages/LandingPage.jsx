import { useEffect, useState } from "react";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";
import HealthcareMap from "../components/landing/HealthcareMap";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import Services from "../components/landing/Services";
import SplashScreen from "../components/landing/SplashScreen";
import Appointment from "../components/landing/Appointment";

export default function LandingPage() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen show={showSplash} />
      <Navbar />
      <main>
        <Hero />
        <div className="hospital-bg-shell">
          <div className="hospital-bg-layer" aria-hidden="true" />
          <div className="hospital-bg-content">
            <About variant="with-bg" />
            <Services />
            <HealthcareMap />
            <Appointment />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
