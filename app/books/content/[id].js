import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import getContent from '../../../src/hooks/getContent';
import Content from '../../../src/components/Content';
import BackButton from '../../../src/components/Buttons';
import LoadingAnimation from '../../../src/components/Animation';

const ContentDetails = () => {
  const [loading, setLoading] = useState(true);
  const { contents, currentContentIndex, handleChoiceClick } = getContent();
  useEffect(() => {
    if (contents.length > 0) {
      setLoading(false);
    }
  }, [contents]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <View style={styles.container}>
      <Content content={contents[currentContentIndex]} handleChoiceClick={handleChoiceClick} />
      <BackButton />
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
