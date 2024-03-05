import {StyleSheet, Text, View} from 'react-native';
import {React, useEffect} from 'react';
import Colors from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigations = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigations.replace('BottomNavigation');
    }, 3000);
  }, []);

  return (
    <View style={styles.mainBackground}>
      <Text style={styles.appTxt}>EZ Gym</Text>
      <Text style={styles.appTxt}>V 1.0.1</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  appTxt: {
    fontSize: 30,
    color: Colors.white,
  },
});
