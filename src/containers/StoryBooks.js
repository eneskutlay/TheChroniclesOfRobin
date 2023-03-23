import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Book from '../components/Book';
import { API_URL } from '@env';

function BookContainer() {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/stories/`)
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.root}>
      {loading ? (
        <ActivityIndicator style={styles.loadingContainer} size='small' color='#999999' />
      ) : (
        <Book stories={stories} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '25%',
  },
});

export default BookContainer;