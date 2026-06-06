import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SitePage = () => {
  return (
    <div data-testid="site-root" className="bg-[#0B0F19] text-white min-h-screen grain antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Research />
        <Services />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
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
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SitePage />} />
          <Route path="*" element={<SitePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
