import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RootNavigator from './src/navigations/RootNavigator';

const App = () => {
  return <RootNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
});

export default App;
