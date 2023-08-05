import React, { useEffect, useState } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { styles } from "../main/PostsScreenStyle";

const DefaultScreenPost = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prev) => [...prev, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageBox}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <View style={styles.svgBox}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Feather name="message-circle" size={24} color="grey" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Map")}>
                <Foundation name="marker" size={24} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default DefaultScreenPost;
