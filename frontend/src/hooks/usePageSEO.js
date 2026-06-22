import { useEffect } from "react";

/**
 * usePageSEO — lightweight document-head manager for client-side routes.
 *
 * CRA has no <Helmet>, so this hook imperatively sets the document title,
 * meta description, canonical and og/twitter tags, and (optionally) injects a
 * JSON-LD structured-data block. Everything is restored on unmount so other
 * routes (home, legal, privacy) are never affected.
 *
 * @param {Object}   opts
 * @param {string}   opts.title        Document title.
 * @param {string}   opts.description  Meta description.
 * @param {string}   [opts.canonical]  Canonical URL.
 * @param {string}   [opts.lang]       Document language (e.g. "en" | "fr").
 * @param {Object}   [opts.jsonLd]     Structured data object (serialised to JSON-LD).
 */
export function usePageSEO({ title, description, canonical, lang, jsonLd }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    // --- meta helpers -------------------------------------------------------
    const touched = [];
    const setMeta = (selector, attr, key, value) => {
      if (!value) return;
      let el = document.head.querySelector(selector);
      let created = false;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        created = true;
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", value);
      touched.push({ el, prev, created });
    };

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    // --- canonical ----------------------------------------------------------
    let canonicalEl = null;
    let canonicalPrev = null;
    if (canonical) {
      canonicalEl = document.head.querySelector('link[rel="canonical"]');
      if (canonicalEl) {
        canonicalPrev = canonicalEl.getAttribute("href");
        canonicalEl.setAttribute("href", canonical);
      }
    }

    // --- lang ---------------------------------------------------------------
    // (LanguageContext already manages <html lang>, so we leave it alone.)

    // --- JSON-LD ------------------------------------------------------------
    let script = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-seo", "true");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = prevTitle;
      touched.forEach(({ el, prev, created }) => {
        if (created) el.remove();
        else if (prev !== null) el.setAttribute("content", prev);
      });
      if (canonicalEl && canonicalPrev !== null) {
        canonicalEl.setAttribute("href", canonicalPrev);
      }
      if (script) script.remove();
    };
  }, [title, description, canonical, lang, jsonLd]);
}

export default usePageSEO;
