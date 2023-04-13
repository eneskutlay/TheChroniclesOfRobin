import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getContent from '../../../src/hooks/getContent';
import Content from '../../../src/components/Content';

const ContentDetails = () => {
  const [loading, setLoading] = useState(true);
  const { contents, currentContentIndex, handleChoiceClick } = getContent();
  useEffect(() => {
    if (contents.length > 0) {
      setLoading(false);
    }
  }, [contents]);

  if (loading) {
    return <Text>loading</Text>;
  }

  return (
    <View style={styles.container}>
      <Content content={contents[currentContentIndex]} handleChoiceClick={handleChoiceClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ContentDetails;
