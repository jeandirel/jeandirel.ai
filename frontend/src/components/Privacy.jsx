import React from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Privacy = () => {
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
          {isFr ? "Politique de confidentialité" : "Privacy policy"}
        </p>
        <h1 className="font-display text-3xl lg:text-4xl text-white tracking-tighter mb-12">
          {isFr ? "Politique de confidentialité" : "Privacy Policy"}
        </h1>

        <div className="space-y-10 text-[#D1D5DB] text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Données collectées" : "Data collected"}
            </h2>
            <p>
              {isFr
                ? "Ce site utilise PostHog, un outil d'analyse d'audience, pour mesurer des données agrégées de navigation : pages visitées, durée de session, pays d'origine. Aucune donnée personnelle identifiable n'est collectée sans votre consentement explicite."
                : "This site uses PostHog, an analytics tool, to measure aggregated browsing data: pages visited, session duration, country of origin. No personally identifiable data is collected without your explicit consent."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Formulaires de contact" : "Contact forms"}
            </h2>
            <p>
              {isFr
                ? "Les données saisies dans les formulaires (nom, email, message) sont utilisées exclusivement pour répondre à votre demande. Elles ne sont ni vendues, ni partagées avec des tiers."
                : "Data entered in forms (name, email, message) is used exclusively to respond to your request. It is neither sold nor shared with third parties."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Cookies" : "Cookies"}
            </h2>
            <p>
              {isFr
                ? "Ce site utilise un cookie de session PostHog (analytique) et un cookie de préférence de langue. Aucun cookie publicitaire ou de tracking cross-site n'est utilisé."
                : "This site uses a PostHog session cookie (analytics) and a language preference cookie. No advertising or cross-site tracking cookies are used."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Vos droits (RGPD)" : "Your rights (GDPR)"}
            </h2>
            <p>
              {isFr
                ? "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de portabilité et d'opposition. Pour exercer ces droits, contactez-nous à :"
                : "In accordance with the General Data Protection Regulation (GDPR), you have the following rights: right of access, rectification, erasure, portability and objection. To exercise these rights, contact us at:"}
            </p>
            <p className="mt-2">
              <a href="mailto:jeandirel@ogooueia.com" className="text-[#00D4FF] hover:underline">
                jeandirel@ogooueia.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Tiers hébergeurs" : "Third-party services"}
            </h2>
            <ul className="space-y-2">
              <li>
                <span className="text-white font-medium">PostHog</span>
                {isFr ? " — Analytique web. " : " — Web analytics. "}
                <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">
                  {isFr ? "Politique PostHog" : "PostHog privacy"}
                </a>
              </li>
              <li>
                <span className="text-white font-medium">Vercel</span>
                {isFr ? " — Hébergement. " : " — Hosting. "}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">
                  {isFr ? "Politique Vercel" : "Vercel privacy"}
                </a>
              </li>
              <li>
                <span className="text-white font-medium">Resend</span>
                {isFr ? " — Envoi d'emails depuis les formulaires." : " — Email delivery from forms."}
              </li>
              <li>
                <span className="text-white font-medium">Calendly</span>
                {isFr ? " — Prise de rendez-vous en ligne." : " — Online scheduling."}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">
              {isFr ? "Mise à jour" : "Last updated"}
            </h2>
            <p className="text-[#9CA3AF]">
              {isFr ? "Dernière mise à jour : juin 2026." : "Last updated: June 2026."}
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

export default Privacy;
