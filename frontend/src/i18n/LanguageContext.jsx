import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations, LANGUAGES } from "./translations";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  toggleLang: () => {},
});

const STORAGE_KEY = "jd_lang";

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = typeof window !== "undefined" && window.localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) {
      // ignore
    }
    return "en";
  });

  const setLang = useCallback((newLang) => {
    if (translations[newLang]) {
      setLangState(newLang);
      try {
        window.localStorage.setItem(STORAGE_KEY, newLang);
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "fr" : "en");
  }, [lang, setLang]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang], languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
