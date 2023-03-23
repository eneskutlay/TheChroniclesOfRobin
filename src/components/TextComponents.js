import { StyleSheet, Text } from 'react-native';

const Header = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};

const Description = ({ children }) => {
  return <Text style={styles.description}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'System',
    color: 'white',
  },
});

export { Header, Description };
