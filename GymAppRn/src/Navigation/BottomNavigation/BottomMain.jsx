import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Main/Home';
import Settings from '../../Screens/Main/Settings';
import Reports from '../../Screens/Main/Reports';
import Members from '../../Screens/Main/Members';
import Colors from '../../utils/Colors';

const BottomMain = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          borderTopEndRadius: 15,
          borderTopLeftRadius: 15,
          height: 90,
          zIndex: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.primary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.primary : Colors.NavGrey,
                  fontSize: 12,
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
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/icons/members.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.primary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.primary : Colors.NavGrey,
                  fontSize: 12,
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
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/icons/settings.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.primary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.primary : Colors.NavGrey,
                  fontSize: 12,
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
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/icons/settings.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? Colors.primary : Colors.NavGrey,
                }}
              />
              <Text
                style={{
                  color: focused ? Colors.primary : Colors.NavGrey,
                  fontSize: 12,
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
