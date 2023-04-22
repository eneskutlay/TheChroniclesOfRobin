import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootButton, Header } from '@components';
import { Main, Intro, Content } from '@screens';

function HomeScreen({ navigation }) {
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Books"
          component={Main}
          options={{
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Content"
          component={Content}
          options={{
            headerStyle: {
              backgroundColor: '#1E1E1E',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
