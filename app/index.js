import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Header, RootButton } from '@components';
function App() {
  const router = useRouter();
  const lorem = ' Welcome the game of choices! ';
  let objChild = { children: ['Books', 'Options', 'Credits'] };
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Header children={lorem} />
      </View>
      <View style={styles.mainBody}>
        {objChild.children.map((child, index) => {
          return (
            <RootButton press={() => router.push(`${child.toLowerCase()}`)} key={index}>
              {child}
            </RootButton>
          );
        })}
      </View>
    </View>
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

export default App;
