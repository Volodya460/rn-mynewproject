import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Registration from "./Screens/auth/RegistrationScreen";
import Login from "./Screens/auth/LoginScreen";
import Home from "./Screens/main/Home";
import PostsScreen from "./Screens/main/PostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";

const Stack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Home />
    // <MainTab.Navigator>
    //   <MainTab.Screen
    //     name="PostsScreen"
    //     component={PostsScreen}
    //     options={{ title: "Публікації" }}
    //   />
    //   <MainTab.Screen
    //     name="CreatePostsScreen"
    //     component={CreatePostsScreen}
    //     options={{ title: "Створити публікацію" }}
    //   />
    //   <MainTab.Screen
    //     name="ProfileScreen"
    //     component={ProfileScreen}
    //     options={{ headerShown: false }}
    //   />
    // </MainTab.Navigator>
  );
};
