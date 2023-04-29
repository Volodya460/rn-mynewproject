import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../auth/loginStyle";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>PostsScreen</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={styles.btnTitle}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostsScreen;
