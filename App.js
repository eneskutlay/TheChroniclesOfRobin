import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './src/screens/index';
import Book from './src/screens/books/index.js';
import Intro from './src/screens/Intro.js';
import Content from './src/screens/Content.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={{ backgroundColor: 'red' }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Books" component={Book} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Content" component={Content} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#1E1E1E',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
