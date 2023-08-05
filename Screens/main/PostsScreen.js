import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./PostsScreenStyle";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPost from "../helpersScreen/DefaultScreen";
import CommentScreen from "../helpersScreen/CommentScreen";
import MapScreen from "../helpersScreen/MapScreen";
const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPost}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
