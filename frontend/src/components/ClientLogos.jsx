import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const logos = [
  { name: "ASTERA Group", sub: "Current employer" },
  { name: "Crédit Agricole", sub: "Academic project" },
  { name: "Substrate AI", sub: "Listed AI company" },
  { name: "Airtel Gabon", sub: "Telecoms contract" },
  { name: "aivancity", sub: "Grande École · #1" },
  { name: "UC Berkeley", sub: "AI Certificate" },
];

const logosFr = [
  { name: "ASTERA Group", sub: "Employeur actuel" },
  { name: "Crédit Agricole", sub: "Projet académique" },
  { name: "Substrate AI", sub: "Société IA cotée" },
  { name: "Airtel Gabon", sub: "Contrat télécom" },
  { name: "aivancity", sub: "Grande École · #1" },
  { name: "UC Berkeley", sub: "Certificat IA" },
];

const ClientLogos = () => {
  const { lang } = useLanguage();
  const items = lang === "fr" ? logosFr : logos;

  return (
    <div className="border-t border-b border-white/[0.06] bg-[#0B0F19] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF] mb-8">
          {lang === "fr" ? "Organisations partenaires" : "Organisations & partners"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full px-3 py-3 rounded border border-white/[0.07] bg-white/[0.02] group-hover:border-[#00D4FF]/30 group-hover:bg-white/[0.04] transition-all duration-300">
                <div className="font-display text-sm text-white/70 group-hover:text-white tracking-tight transition-colors duration-300">
                  {logo.name}
                </div>
                <div className="font-mono text-[9px] text-[#9CA3AF] mt-0.5 uppercase tracking-wider">
                  {logo.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
