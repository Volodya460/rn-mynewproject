import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

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
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>{routing}</NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
