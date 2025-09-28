import Colors from "@/constants/color";
import { StyleSheet, Text } from "react-native";

export default function InstuctionText({
  children,
  style,
}: {
  children: string | number;
  style?: any;
}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});
