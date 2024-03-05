import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackScrens from './src/Navigation/StackNavigation/StackScrens';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <NavigationContainer>
      <StackScrens />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
