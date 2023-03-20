import { StyleSheet, Text, View } from 'react-native';

let Header = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};

let Description = ({ children }) => {
  return <Text style={styles.description}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 11,
    color: 'white',
  },
});

export { Header, Description };
