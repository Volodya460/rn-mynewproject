import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderBackButton } from "@react-navigation/elements";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
        tabBarStyle: { height: 100 },
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="appstore-o" size={30} color={color} />
          ),
          headerRight: (props) => (
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="logout"
              size={24}
              color="#BDBDBD"
              onPress={() => {
                navigation.navigate("Registration");
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo
              style={{
                borderRadius: 60,
                width: 75,
                height: 45,
                backgroundColor: "#FF6C00",
                paddingLeft: 19,
                paddingTop: 4,
              }}
              name="plus"
              size={35}
              color={"#FFFFFF"}
            />
          ),
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                navigation.navigate("PostsScreen");
              }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={30} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default Home;
