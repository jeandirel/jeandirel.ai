import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Projects from "@/components/Projects";
import Ventures from "@/components/Ventures";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import AIArchitectures from "@/components/AIArchitectures";
import Research from "@/components/Research";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AskJean from "@/components/AskJean";
import NotFound from "@/components/NotFound";
import LegalNotice from "@/components/LegalNotice";
import Privacy from "@/components/Privacy";
import GovernancePage from "@/components/governance/GovernancePage";

const SitePage = () => (
  <div data-testid="site-root" className="bg-[#0B0F19] text-white min-h-screen grain antialiased">
    <ScrollProgress />
    <Navbar />
    <main>
      <Hero />
      <ClientLogos />
      <About />
      <Projects />
      <Ventures />
      <Experience />
      <Skills />
      <AIArchitectures />
      <Research />
      <Services />
      <Testimonials />
      <Booking />
      <Contact />
    </main>
    <Footer />
    <AskJean />
    <Toaster
      theme="dark"
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#111827",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "#ffffff",
        },
      }}
    />
  </div>
);

const LegalPage = ({ children }) => (
  <div className="grain antialiased">
    {children}
    <Toaster theme="dark" position="bottom-right" />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SitePage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/legal" element={<LegalPage><LegalNotice /></LegalPage>} />
          <Route path="/privacy" element={<LegalPage><Privacy /></LegalPage>} />
          <Route path="*" element={<LegalPage><NotFound /></LegalPage>} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
