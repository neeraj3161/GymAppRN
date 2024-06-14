import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../Screens/Splash/Splash';
import BottomMain from '../BottomNavigation/BottomMain';
import Login from '../../Screens/Login/Login';
import AddMember from '../../Screens/Members/AddMember';
import MemberDetailsPage from '../../Screens/Members/MemberDetailsPage';

const StackScrens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BottomNavigation"
        component={BottomMain}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="AddMember"
        component={AddMember} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="MemberDetails"
        component={MemberDetailsPage} />
    </Stack.Navigator>
  );
};

export default StackScrens;

const styles = StyleSheet.create({});
