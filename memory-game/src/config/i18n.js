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
                        startGame: "Start new game",
                        enterYourName:'Enter your name',
                        leaderBoard: 'Leader Board',
                        score: 'Score',
                        name:'name',
                        turnLost:'Turn lost',
                        time:'time',
                        shuffle: 'Shuffle',
                        gameOver: 'Game over',
                        positive1: "You did it! You crushed the game!",
                        positive2: "Congratulations on your amazing victory!",
                        positive3: "You're a winner! You really pulled it off!",
                        comfort1: "Great effort! Keep going and you'll get there next time.",
                        comfort2: "No worries! Keep practicing and you'll succeed soon enough.",
                        comfort3: "You're on the right track! Keep up the good work.",
                        youWon: 'You won!',
                        saveScore: 'Save score',
                        tryAgain: 'try again',
                    }
                }
            },
            es: {
                translation: {
                    text: {
                        start: "Empezar",
                        startGame: "Empezar nuevo juego",
                        enterYourName: "Ingrese su nombre",
                        leaderBoard: "Tabla de clasificación",
                        score: "Puntuación",
                        name:'nombre',
                        turnLost:'Turnos perdidos',
                        time:'tiempo',
                        shuffle: "Mezclar",
                        gameOver: "Fin del juego",
                        positive1: "¡Lo lograste! ¡Aplastaste el juego!",
                        positive2: "¡Felicitaciones por tu increíble victoria!",
                        positive3: "¡Eres un ganador! ¡Realmente lo lograste!",
                        comfort1: "¡Gran esfuerzo! Sigue adelante y lo lograrás la próxima vez.",
                        comfort2: "¡No te preocupes! Sigue practicando y pronto tendrás éxito.",
                        comfort3: "¡Vas por buen camino! Sigue haciendo un buen trabajo.",
                        youWon: 'Has ganado!',
                        saveScore: 'Guardar puntuación',
                        tryAgain: 'Intenta de nuevo',


                    }
                }
            }
        }
    });

export default i18n;
