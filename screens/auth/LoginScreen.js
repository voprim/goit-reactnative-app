import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
  login: "",
};

export default function RegisterScreen({ navigation }) {
  const [isSecure, setIsSecure] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [state, setState] = useState({ initialState });
  const onSecureClick = () => {
    setIsSecure(!isSecure);
  };
  const hideKeyboard = () => {
    Keyboard.dismiss();
    setKeyboard(false);
  };
  const handleSubmit = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          hideKeyboard();
        }}
      >
        <ImageBackground style={styles.image} source={require("../../assets/images/PhotoBG.png")}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-100}
            style={{ width: "100%" }}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Вхід</Text>

              <View style={styles.input}>
                <TextInput
                  style={styles.inputField}
                  onFocus={() => setKeyboard(true)}
                  placeholder={"Адреса електронної пошти"}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                />
              </View>
              <View style={styles.input} position={"relative"}>
                <TextInput
                  style={styles.inputField}
                  placeholder={"Пароль"}
                  onFocus={() => setKeyboard(true)}
                  secureTextEntry={isSecure}
                  value={state.password}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
                <TouchableOpacity style={styles.secureBtn} onPress={onSecureClick}>
                  <Text style={styles.secureItem}>{isSecure ? "Показати" : "Скрити"}</Text>
                </TouchableOpacity>
              </View>
              {!keyboard && (
                <>
                  <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                    <Text style={styles.btnItem}>Вхід</Text>
                  </TouchableOpacity>
                  <Text onPress={() => navigation.navigate("Register")} style={styles.maybeRegister}>
                    Ще не зареєстровані? Реєстрація
                  </Text>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  input: {
    marginTop: 16,
    width: "100%",
    height: 50,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputField: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "left",
    alignItems: "center",
    height: "100%",
    paddingLeft: 16,
  },
  form: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingBottom: 45,
  },
  title: {
    fontFamily: "Roboto-Medium",
    marginTop: 32,
    fontSize: 30,
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    backgroundColor: "#FF6c00",
    width: "100%",
    height: 50,
    borderRadius: 25,
  },
  btnItem: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  secureBtn: {
    position: "absolute",
    backgroundColor: "transparent",
    right: 16,
    top: 12,
  },
  secureItem: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  maybeRegister: {
    marginTop: 16,
    marginBottom: 78,
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
