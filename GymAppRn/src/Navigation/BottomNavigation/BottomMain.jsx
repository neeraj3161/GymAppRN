import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Main/Home';
import Settings from '../../Screens/Main/Settings';
import Reports from '../../Screens/Main/Reports';
import Members from '../../Screens/Main/Members';
import Colors from '../../utils/Colors';
import MainDash from '../../Screens/Dashboards/MainDash';

const BottomMain = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          borderTopEndRadius: 15,
          borderTopLeftRadius: 15,
          height: 70,
          zIndex: 0,
          justifyContent: 'center',
          alignItems: 'center'
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MainDash}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                  fontSize: 10,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Members"
        component={Members}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/members.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                  fontSize: 10,
                }}>
                Members
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/report.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                  fontSize: 10,
                }}>
                Reports
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('../../assets/icons/settings.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.buttonColorPrimary : Colors.NavGrey,
                  fontSize: 10,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMain;
