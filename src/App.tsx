import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import theme from "./theme";

// Works also with SSR as expected

const App: FC<PropsWithChildren<{ emotionCache: any; helmetContext?: any }>> = (
  props
) => {
  const { emotionCache, helmetContext } = props;
  return (
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Helmet>
              <title>MUI + VITE</title>
            </Helmet>
            {props.children}
          </ThemeProvider>
        </CacheProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
