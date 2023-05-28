import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo";

import RegistrationScreen from "./screens/auth/RegistrationScreen.js";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return <AppLoading startAsync={loadApplication} onFinish={() => setIsReady(true)} onError={console.warn} />;
  }

  return <RegistrationScreen></RegistrationScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
