import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header } from '../components/Texts';
import { RootButton } from '../components/Buttons';

function Index({ navigation }) {
  const lorem = ' Welcome the game of choices! ';
  let objChild = { children: ['Books', 'Options', 'Credits'] };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Header children={lorem} />
      </View>
      <View style={styles.mainBody}>
        {objChild.children.map((child, index) => {
          return (
            <RootButton press={() => navigation.navigate(`${child}`)} key={index}>
              {child}
            </RootButton>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    width: '100%',
  },
  mainContent: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBody: {
    flex: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default Index;
