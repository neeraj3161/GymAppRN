import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../utils/Colors';

const TopNavBar = props => {
  return (
    <View style={styles.topNavStyle}>
      <View style={styles.secondarContainer}>
        <Text style={styles.navBarTxt}>{props.tabHeading}</Text>
        {props.imageSource && (
          <TouchableOpacity>
            <Image source={props.imageSource} tintColor={Colors.white} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TopNavBar;

const styles = StyleSheet.create({
  topNavStyle: {
    backgroundColor: Colors.primaryBackground,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  navBarTxt: {
    color: Colors.white,
    fontSize: 20,
  },

  secondarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
