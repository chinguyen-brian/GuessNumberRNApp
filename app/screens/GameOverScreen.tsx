import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/constants/color";
import { deviceWidth } from "@/constants/dimension";
import { Image, View, StyleSheet, Text } from "react-native";

type GameOverProps = {
  userNumber: number | null;
  roundsNumber: number;
  onStartNewGame: () => void;
};

export default function GameOverScreen({
  userNumber,
  roundsNumber,
  onStartNewGame,
}: GameOverProps) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    borderRadius: deviceWidth < 380 ? 90 : 150,
    width: deviceWidth < 380 ? 180 : 300,
    height: deviceWidth < 380 ? 180 : 300,
    overflow: "hidden",
    margin: deviceWidth < 380 ? 24 : 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: deviceWidth < 380 ? 18 : 24,
    textAlign: "center",
    marginVertical: deviceWidth < 380 ? 18 : 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
