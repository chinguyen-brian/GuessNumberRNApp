import Colors from "@/constants/color";
import { StyleSheet, Text } from "react-native";

export default function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
