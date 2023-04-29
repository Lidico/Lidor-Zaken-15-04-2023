import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        useSuspense: true,
        fallbackLng: false,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    text: {
                        start: "Start",
                        enterYourName:'Enter your name',
                        leaderBoard: 'Leader Board'
                    }
                }
            },
            es: {
                translation: {
                    text: {
                        start: "Starto",
                        enterYourName:'Ingrese su nombre',
                    }
                }
            }
        }
    });

export default i18n;
