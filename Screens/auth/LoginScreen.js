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
import { styles } from "./loginStyle";
const initialState = {
  email: "",
  password: "",
};

export default function Login({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setdimensions] = useState(Dimensions.get("window").height);

  useEffect(() => {
    const onChange = () => {
      const { height } = Dimensions.get("window");
      setdimensions(height);
    };
    Dimensions.addEventListener("change", onChange);
  }, []);

  const keyBoardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

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

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/photoBG.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.bgrView}
          >
            <View
              style={{
                ...styles.bgrView,

                paddingBottom: dimensions < 450 ? 50 : 170,
              }}
            >
              <Text style={styles.loginText}>Войти</Text>
              <View>
                <View>
                  <TextInput
                    value={state.email}
                    style={styles.input}
                    placeholder="Адрес электронной почты"
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
                    secureTextEntry={true}
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
                  >
                    <Text style={styles.showBtn}>Показать</Text>
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
                      <Text style={styles.btnTitle}>Войти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.btnJoin}
                    >
                      <Text style={styles.btnJoinTitle}>
                        Нет аккаунта?
                        <Text
                          style={styles.btnJoinTitle}
                          onPress={() => navigation.navigate("Registration")}
                        >
                          Зарегистрироваться
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
