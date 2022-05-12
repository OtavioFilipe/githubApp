import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";

import { Login } from "./src/screens/Login";

export default function App() {
  const [fonstLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
