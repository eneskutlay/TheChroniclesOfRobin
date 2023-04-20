import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ children }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{children}</Text>
  </View>
);

const Description = ({ children }) => (
  <View style={styles.description}>
    <Text style={styles.descriptionText}>{children}</Text>
  </View>
);

// content text
// choice text

const BookCoverName = ({ children }) => (
  <View style={styles.bookCoverName}>
    <Text style={styles.bookCoverNameText}>{children}</Text>
  </View>
);

const IntroText = ({ children }) => (
  <View style={styles.introText}>
    <Text style={styles.introTextText}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    gap: 5,
    marginVertical: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'System',
    flexWrap: 'wrap',
    gap: 5,
    marginHorizontal: 10,
  },
  bookCoverName: {
    width: '100%',
    height: '100%',
    padding: '5%',
    justifyContent: 'flex-end',
  },
  bookCoverNameText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  introText: {
    padding: '5%',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 'auto',
    height: 'auto',
  },
  introTextText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export { Header, Description, BookCoverName, IntroText };
