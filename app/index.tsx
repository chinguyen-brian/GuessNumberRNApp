import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number>();
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useFonts({
    'open-sans': require("../assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold': require("../assets/fonts/OpenSans-Bold.ttf")
  });

  const pickUserNumber = (number: number) => {
    setUserNumber(number);
    setIsGameOver(false);
  };

  const GameOverHandler = () => {
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickUserNumber} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("../assets/images/diceBackground.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.2,
  },
});
