import NumberContainer from "@/components/game/NumberContainer";
import Card from "@/components/ui/Card";
import InstuctionText from "@/components/ui/InstructionText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "@/components/game/GuessLogItem";

type GameProps = {
  userNumber: number;
  onGameOver: (roundsNumber: number) => void;
};

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }: GameProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [curGuess, setCurGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  const guessRoundListLength = guessRounds.length;

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: "lower" | "higher") => {
    if (
      (direction === "lower" && curGuess < userNumber) ||
      (direction === "higher" && curGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = curGuess;
    } else {
      minBoundary = curGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      curGuess
    );
    setCurGuess(newRandomNumber);
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  };

  useEffect(() => {
    if (curGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [curGuess, onGameOver, userNumber]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{curGuess}</NumberContainer>
      <Card>
        <InstuctionText style={styles.instructionText}>
          Lower or Higher?
        </InstuctionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item.toString()}
          renderItem={(itemData) => {
            return (
              <GuessLogItem
                roundNumber={guessRoundListLength - itemData.index}
                guess={itemData.item}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex:1,
    padding: 16,
  }
});
