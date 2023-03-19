import { StyleSheet, Text, View } from 'react-native';

function HomeHero() {
  return (
    // data or static? && props?
    <View style={styles.root}>
      <Text style={styles.title}>Welcome Robin !</Text>
      <Text style={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut ipsum mattis urna pharetra
        varius id quis lacus. Aenean tempus lectus nec mi viverra, a imperdiet odio maximus.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  desc: {
    width: '85%',
    marginTop: 2,
    fontSize: 11,
    color: 'white',
  },
});
export default HomeHero;
