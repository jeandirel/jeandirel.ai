import React from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const LegalNotice = () => {
  const { lang } = useLanguage();
  const isFr = lang === "fr";

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white grain">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          {isFr ? "Retour" : "Back"}
        </a>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#9CA3AF] mb-4">
          {isFr ? "Mentions légales" : "Legal notice"}
        </p>
        <h1 className="font-display text-3xl lg:text-4xl text-white tracking-tighter mb-12">
          {isFr ? "Mentions légales" : "Legal Notice"}
        </h1>

        <div className="space-y-10 text-[#D1D5DB] text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Éditeur du site" : "Site publisher"}
            </h2>
            <p>Jean Direl</p>
            <p>Rouen, Normandie, France</p>
            <p>
              {isFr ? "Email : " : "Email: "}
              <a href="mailto:jeandirel@ogooueia.com" className="text-[#00D4FF] hover:underline">
                jeandirel@ogooueia.com
              </a>
            </p>
            <p className="mt-2 text-[#9CA3AF] text-xs">
              {isFr
                ? "Site personnel — non soumis à immatriculation commerciale."
                : "Personal website — not subject to commercial registration."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Hébergement" : "Hosting"}
            </h2>
            <p>Vercel Inc.</p>
            <p>340 Pine Street, 5th Floor</p>
            <p>San Francisco, CA 94104 — USA</p>
            <p>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Propriété intellectuelle" : "Intellectual property"}
            </h2>
            <p>
              {isFr
                ? "L'ensemble du contenu de ce site (textes, images, code, design) est la propriété exclusive de Jean Direl, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable."
                : "All content on this site (text, images, code, design) is the exclusive property of Jean Direl unless otherwise stated. Any reproduction, even partial, is prohibited without prior authorization."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Liens hypertextes" : "Hyperlinks"}
            </h2>
            <p>
              {isFr
                ? "Ce site contient des liens vers des sites tiers. Jean Direl ne peut être tenu responsable du contenu de ces sites externes."
                : "This site contains links to third-party sites. Jean Direl cannot be held responsible for the content of these external sites."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Droit applicable" : "Applicable law"}
            </h2>
            <p>
              {isFr
                ? "Le présent site est soumis au droit français. En cas de litige, les tribunaux français sont seuls compétents."
                : "This site is governed by French law. In case of dispute, French courts have exclusive jurisdiction."}
            </p>
          </section>

          <p className="text-xs text-[#6B7280] pt-6 border-t border-white/10">
            © {new Date().getFullYear()} Jean Direl. {isFr ? "Tous droits réservés." : "All rights reserved."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
