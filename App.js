import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function App() {
  const routing = useRoute(false);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}
