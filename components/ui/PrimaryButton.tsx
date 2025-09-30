import Colors from "@/constants/color";
import { deviceWidth } from "@/constants/dimension";
import { Pressable, Text, View, StyleSheet } from "react-native";

type PrimaryButtonProps = {
  children: any;
  onPress: () => void;
};

export default function PrimaryButton({
  children,
  onPress,
}: PrimaryButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: deviceWidth < 380 ? 6 : 8,
    paddingHorizontal: deviceWidth < 380 ? 12 : 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
