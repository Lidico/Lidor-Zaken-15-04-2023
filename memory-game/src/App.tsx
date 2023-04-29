import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useEffect, useMemo } from 'react';
import { Routes } from './routes';
import { GameContainer } from "./components/GameContainer";
import {useTypedSelector} from "./hooks";
import {RootState} from "./redux";
import { useTranslation } from "react-i18next";

function App() {
    const { mode, language } = useTypedSelector((state: RootState) => state.config);
    const { i18n } = useTranslation();

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                },
            }),
        [mode],
    );

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

  return (
      <ThemeProvider theme={theme}>
          <GameContainer>
            <Routes/>
          </GameContainer>
      </ThemeProvider>
  );
}

export default App;
