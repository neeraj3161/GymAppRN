import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../Colors';

const CustomButton = ({btnTxt, backgroundColor, color}) => {
  const importedTxtStyle = {color};
  const importedBtnStyle = {backgroundColor};

  return (
    <TouchableOpacity>
      <View style={[styles.customButtonStyle, importedBtnStyle]}>
        <Text style={[styles.customBtnTxt, importedTxtStyle]}>{btnTxt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButtonStyle: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.primary,
    color: Colors.white,
    width: 150,
  },

  customBtnTxt: {
    color: Colors.white,
  },
});
