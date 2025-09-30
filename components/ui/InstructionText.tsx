import Colors from "@/constants/color";
import { deviceWidth } from "@/constants/dimension";
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
    fontSize: deviceWidth < 380 ? 18 : 24,
  },
});
