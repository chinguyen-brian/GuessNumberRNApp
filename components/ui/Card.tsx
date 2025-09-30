import Colors from "@/constants/color";
import { deviceWidth } from "@/constants/dimension";
import { StyleSheet, View } from "react-native";

export default function Card({ children }: { children: any }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow for android only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25, // 4 shadow property for IOS platform
  },
});
