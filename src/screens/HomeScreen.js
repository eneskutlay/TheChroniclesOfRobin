import { StyleSheet, Text, View } from "react-native";
import StoryBooks from "../containers/StoryBooks";
import HomeHero from "../components/HomeHero";

function HomeScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.hero}>
        <HomeHero />
      </View>
      <View style={styles.storyBooks}>
        <StoryBooks />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "#1E1E1E",
  },
  hero: {
    flex: 1,
    marginTop: 25,
  },
  storyBooks: {
    flex: 4,
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
  },
});

export default HomeScreen;
