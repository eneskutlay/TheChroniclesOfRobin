import React from 'react';
import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';

function BackArrow() {
  return (
    <View>
      <Link style={styles.backArrow} href='/stories'>
        {' '}
        ⇦ Back to Stories
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  backArrow: {
    marginVertical: 50,
    marginHorizontal: 20,
    color: 'green',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default BackArrow;
