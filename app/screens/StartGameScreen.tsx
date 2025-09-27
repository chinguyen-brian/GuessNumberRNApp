import Card from "@/components/ui/Card";
import InstuctionText from "@/components/ui/InstructionText";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/constants/color";
import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

type StartGameProps = {
  onPickNumber: (number: number) => void;
};

export default function StartGameScreen({ onPickNumber }: StartGameProps) {
  const [numberInput, setNumberInput] = useState("");

  const resetInput = () => {
    setNumberInput("");
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(numberInput);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const handleInput = (textInput: string) => {
    setNumberInput(textInput);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstuctionText>Enter a Number</InstuctionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={numberInput}
          onChangeText={handleInput}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
