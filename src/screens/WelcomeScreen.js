import { StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
