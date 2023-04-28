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
export default function Registration() {
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
  console.log(dimensions < 450);

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
                height: isShowKeyboard ? 300 : 580,
                marginBottom: isShowKeyboard && dimensions > 450 ? 150 : 0,
                paddingBottom: isShowKeyboard && dimensions < 450 ? 20 : 0,
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
                    placeholder="Логин"
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
                      onPress={handleSubmit}
                    >
                      <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.btnJoin}
                    >
                      <Text style={styles.btnJoinTitle}>
                        Уже есть аккаунт? Войти
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
