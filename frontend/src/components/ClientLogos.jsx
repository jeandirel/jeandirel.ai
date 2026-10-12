import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const ClientLogos = () => {
  const { lang } = useLanguage();
  const fr = lang === "fr";
  const organizations = [
    ["ASTERA", fr ? "Expérience professionnelle" : "Professional experience"],
    ["Crédit Agricole", fr ? "Projet académique" : "Academic project"],
    ["Substrate AI", fr ? "Expérience professionnelle" : "Professional experience"],
    ["aivancity", fr ? "Formation" : "Education"],
    ["UC Berkeley", fr ? "Certificat IA" : "AI certificate"],
  ];
  return <section className="editorial-credentials" aria-label={fr ? "Expériences et formation" : "Experience and education"}><div className="editorial-container"><p>{fr ? "UN PARCOURS ENTRE ENTREPRISE, RECHERCHE ET INNOVATION" : "AT THE INTERSECTION OF INDUSTRY, RESEARCH AND INNOVATION"}</p><div className="credentials-row">{organizations.map(([name, context]) => <div key={name}><strong>{name}</strong><span>{context}</span></div>)}</div></div></section>;
};
export default ClientLogos;
