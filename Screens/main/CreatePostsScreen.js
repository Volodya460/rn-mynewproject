import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "./CreatePostsScreenStyle";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);

      let location = await Location.getCurrentPositionAsync();
      console.log(location);

      await MediaLibrary.createAssetAsync(uri);
    }
  };

  const sendPhoto = () => {
    navigation.navigate("DefaultScreen", { photo });
    setPhoto(null);
  };

  const changCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          {photo && (
            <View style={styles.takePhoto}>
              <Image
                source={{ uri: photo }}
                style={{ width: 346, height: 245, borderRadius: 8 }}
              />
            </View>
          )}
          <TouchableOpacity onPress={changCamera}>
            <Text style={{ marginLeft: 5, marginTop: 5 }}>
              <AntDesign name="sync" size={24} color="#FFFFFF" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <View style={styles.takePhotoOut}></View>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color="#FFFFFF"
              style={styles.camersSvg}
            />
          </TouchableOpacity>
        </Camera>
        <TouchableOpacity activeOpacity={0.2} onPress={() => setPhoto(null)}>
          <Text style={styles.downloadText}>Редагувати фото </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 32 }}>
        <TextInput
          style={styles.inputPost}
          placeholder="Назва"
          placeholderTextColor="#BDBDBD"
        ></TextInput>
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          style={styles.inputPost}
          placeholder="Місцевість"
          placeholderTextColor="#BDBDBD"
        ></TextInput>
      </View>
      {!photo ? (
        <TouchableOpacity
          disabled
          activeOpacity={0.8}
          style={{
            ...styles.buttonPost,
            backgroundColor: photo ? "#FF6C00" : "#F6F6F6",
          }}
          onPress={sendPhoto}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: photo ? "#FFFFFF" : "#BDBDBD",
            }}
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.buttonPost,
            backgroundColor: photo ? "#FF6C00" : "#F6F6F6",
          }}
          onPress={sendPhoto}
        >
          <Text
            style={{
              ...styles.buttonText,
              color: photo ? "#FFFFFF" : "#BDBDBD",
            }}
          >
            Опубліковати
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CreatePostsScreen;
