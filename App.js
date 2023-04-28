import React, { useEffect, useState } from "react";
import Registration from "./Screens/RegistrationScreen";
import Login from "./Screens/LoginScreen";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Login />;
}
