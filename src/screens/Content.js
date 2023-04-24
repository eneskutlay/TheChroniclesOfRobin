import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { getContent } from '@hooks';
import { RenderContent } from '@containers';
import { LoadingAnimation } from '@components';

const Content = () => {
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
  //scrollview or view?
  return (
    <ScrollView style={styles.container}>
      <RenderContent
        content={contents[currentContentIndex]}
        handleChoiceClick={handleChoiceClick}
      />
      <View style={styles.containerFooter}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  containerFooter: {
    marginVertical: 25,
    marginHorizontal: 25,
    width: 'auto',
  },
});

export default Content;
