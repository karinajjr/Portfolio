import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import EN from "./EN.json";
import RU from "./RU.json";
import JP from "./JP.json"
import UZ from "./UZ.json"

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: EN },
      ru: { translation: RU },
      jp: { translation: JP },
      uz: { translation: UZ },
    },
    fallbackLng: "EN",
    interpolation: { escapeValue: false },
  });

export default i18n;
