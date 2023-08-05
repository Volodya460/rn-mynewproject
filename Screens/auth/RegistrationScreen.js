import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Dimensions } from "react-native";
import { styles } from "./registrationStyle";

const initialState = {
  login: "",
  email: "",
  password: "",
};
export default function Registration({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [passShowBtn, setPassShowBtn] = useState(true);
  const [dimensions, setdimensions] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const onChange = () => {
      const { height } = Dimensions.get("window");
      setdimensions(height);
    };
    Dimensions.addEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsShowKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsShowKeyboard(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const keyBoardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    console.log(state);
  };
  const showPassword = () => {
    setPassShowBtn((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <ImageBackground
        source={require("../images/photoBG.jpg")}
        style={styles.image}
      >
        <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{
        //   ...styles.bgrView,
        // }}
        >
          <View
            style={{
              ...styles.bgrView,
              height: isShowKeyboard ? 400 : 530,
              // marginBottom: isShowKeyboard && dimensions > 450 ? 150 : 100,
              paddingBottom: isShowKeyboard && dimensions < 450 ? 20 : 45,
            }}
          >
            <View style={styles.avatar}>
              <Image style={styles.avatarIcon} />
            </View>
            <Text style={styles.registrationText}>Регистрация</Text>
            <View>
              <View>
                <TextInput
                  value={state.login}
                  style={styles.input}
                  placeholder="Логін"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, login: value }))
                  }
                ></TextInput>
              </View>
              <View>
                <TextInput
                  value={state.email}
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, email: value }))
                  }
                ></TextInput>
              </View>
              <View>
                <TextInput
                  value={state.password}
                  style={styles.input}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  secureTextEntry={passShowBtn}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prev) => ({ ...prev, password: value }))
                  }
                ></TextInput>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.passShowBtn}
                  onPress={showPassword}
                >
                  <Text style={styles.showBtn}>Показати</Text>
                </TouchableOpacity>
              </View>
              {!isShowKeyboard && (
                <>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={() => {
                      handleSubmit(), navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.btnTitle}>Зареєстуватися</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8} style={styles.btnJoin}>
                    <Text style={styles.btnJoinTitle}>
                      Вже є акаунт?
                      <Text
                        style={styles.btnJoinTitle}
                        onPress={() => navigation.navigate("Login")}
                      >
                        Увійти
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
