import { deviceWidth } from "@/constants/dimension";
import { StyleSheet, Text } from "react-native";

export default function Title({ children }: { children: string }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 20 : 24,
    textAlign: "center",
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: deviceWidth < 380 ? 10 : 12,
  },
});
