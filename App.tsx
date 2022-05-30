import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import Crashlytics  from "@react-native-firebase/crashlytics"
import AppLoading from "expo-app-loading";

import { init } from "sentry-expo";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Mulish_400Regular,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";

import Login from "./src/screens/Login";
import Users from "./src/screens/Users";
import AddUser from "./src/screens/AddUser";
import Repositories from "./src/screens/Repositories";
import { SentryError } from "./src/utils/SentryError";

const Stack = createNativeStackNavigator();


function App() {
  // const [fontLoaded] = useFonts({
  //   Mulish_400Regular,
  //   Mulish_700Bold,
  // });

  // if (!fontLoaded) {
  //   return <AppLoading />;
  // }

  init({
    dsn: process.env.SENTRY_DSN,
    enableInExpoDevelopment: true,
    tracesSampleRate: 1.0,
  });

  useEffect(() => {
    SentryError();
  }, []);

  console.log(Crashlytics);
  

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="User" component={Users} />
          <Stack.Screen name="AddUser" component={AddUser} />
          <Stack.Screen name="Repositories" component={Repositories} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
