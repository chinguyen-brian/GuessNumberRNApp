import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [userNumber, setUserNumber] = useState<number | null>();
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [roundsNumber, setRoundsNumber] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundsNumber(0);
  };

  const pickUserNumber = (number: number) => {
    setUserNumber(number);
    setIsGameOver(false);
  };

  const GameOverHandler = (roundsNumber: number) => {
    setRoundsNumber(roundsNumber);
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickUserNumber} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={GameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
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
