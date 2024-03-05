import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';

const TopNavBar = props => {
  return (
    <View style={styles.topNavStyle}>
      <Text style={styles.navBarTxt}>{props.tabHeading}</Text>
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  topNavStyle: {
    backgroundColor: Colors.primary,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  navBarTxt: {
    color: Colors.white,
    fontSize: 20,
  },
});
