import React, { useEffect, useMemo } from "react";
import { Toaster } from "sonner";
import { useLanguage } from "../../i18n/LanguageContext";
import { PROFILE } from "../../data/profile";
import { PUBLICATIONS, THOUGHTS } from "../../data/governance";
import usePageSEO from "../../hooks/usePageSEO";

import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollProgress from "../ScrollProgress";
import AskJean from "../AskJean";

import GovernanceHero from "./GovernanceHero";
import ComplianceCards from "./ComplianceCards";
import Publications from "./Publications";
import Thoughts from "./Thoughts";
import Resources from "./Resources";
import Timeline from "./Timeline";
import GovernanceFAQ from "./GovernanceFAQ";
import GovernanceCTA from "./GovernanceCTA";

const SITE = "https://jeandirel.ai";

const GovernancePage = () => {
  const { t, lang } = useLanguage();
  const g = t.governance;

  // Start at the top when arriving on this route.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured data: a collection page + the articles it surfaces.
  const jsonLd = useMemo(() => {
    const articles = [
      ...PUBLICATIONS.map((p) => ({
        "@type": "ScholarlyArticle",
        headline: p.title.en,
        description: p.summary.en,
        datePublished: p.date,
        url: p.read || `${SITE}${p.pdf}`,
        author: { "@type": "Person", name: PROFILE.name, url: SITE },
      })),
      ...THOUGHTS.map((th) => ({
        "@type": "Article",
        headline: th.title.en,
        description: th.summary.en,
        datePublished: th.date,
        url: `${SITE}${th.pdf}`,
        author: { "@type": "Person", name: PROFILE.name, url: SITE },
      })),
    ];
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${SITE}/governance#page`,
      url: `${SITE}/governance`,
      name: g.metaTitle,
      description: g.metaDescription,
      inLanguage: lang === "fr" ? "fr-FR" : "en-US",
      isPartOf: { "@id": `${SITE}/#website` },
      about: [
        "AI Governance", "EU AI Act", "GDPR", "Responsible AI", "AI Safety",
        "Explainable AI", "ISO/IEC 42001", "ISO/IEC 27001", "NIST AI RMF", "MLOps",
      ],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Governance", item: `${SITE}/governance` },
        ],
      },
      mainEntity: { "@type": "ItemList", itemListElement: articles },
    };
  }, [g, lang]);

  usePageSEO({
    title: g.metaTitle,
    description: g.metaDescription,
    canonical: `${SITE}/governance`,
    lang,
    jsonLd,
  });

  return (
    <div
      data-testid="governance-root"
      className="bg-[#0B0F19] text-white min-h-screen grain antialiased"
    >
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <GovernanceHero />
        <ComplianceCards />
        <Publications />
        <Thoughts />
        <Resources />
        <Timeline />
        <GovernanceFAQ />
        <GovernanceCTA />
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
};

export default GovernancePage;
