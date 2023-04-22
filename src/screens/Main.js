import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { RenderBooks } from '@containers';
import { Header, Description } from '@components';

function Main() {
  let lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.details}>
          <Header children="Welcome Robin" />
          <Description children={lorem} />
        </View>
        <View style={styles.renderBooks}>
          <RenderBooks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    minWidth: '92%',
    height: 'auto',
  },
  details: {
    flex: 1,
    paddingVertical: '4%',
    alignSelf: 'center',
    gap: 10,
    marginHorizontal: 10,
    height: '100%',
  },
  renderBooks: {
    flex: 6,
  },
});

export default Main;
