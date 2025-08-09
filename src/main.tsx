import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import App from "./App.tsx";
import "./index.css";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "zh",
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
    backend: {
      loadPath: `${import.meta.env.BASE_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: true,
    },
  });
i18n.on("failedLoading", (lng, ns, msg) => {
  console.error(`載入語系檔錯誤，語言: ${lng}, namespace: ${ns}, 訊息: ${msg}`);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
