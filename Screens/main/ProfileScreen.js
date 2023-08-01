import { Text, View, ImageBackground, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./profileStyle";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../images/photoBG.jpg")}
      style={styles.image}
    >
      <View style={styles.bgrView}>
        <MaterialIcons
          style={styles.logUot}
          name="logout"
          size={30}
          color="#BDBDBD"
          onPress={() => {
            navigation.navigate("Registration");
          }}
        />
        <Text style={styles.registrationText}>Имя и Фамилия </Text>
        <View style={styles.avatar}>
          <Image style={styles.avatarIcon} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Profile;
