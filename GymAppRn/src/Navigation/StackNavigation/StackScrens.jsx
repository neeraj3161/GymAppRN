import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../Screens/Splash/Splash';
import BottomMain from '../BottomNavigation/BottomMain';

const StackScrens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomNavigation"
        component={BottomMain}
      />
    </Stack.Navigator>
  );
};

export default StackScrens;

const styles = StyleSheet.create({});
