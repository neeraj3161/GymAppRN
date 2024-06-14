import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../Colors';

const CardViewWithImage = ({ cardName, number, width, height, imgSource, colorTxt }) => {
  const importedStyles = {
    width,
    height,
  };

  return (
    <TouchableOpacity delayPressIn={1000}>
      <View style={[importedStyles, styles.mainContainer]}>
        {number && <Text style={[styles.cardTxt, { color: colorTxt }]}>{number}</Text>}
        {imgSource &&
          <Image source={imgSource} style={{ width: 25, height: 25, tintColor: Colors.buttonColorPrimary, marginBottom: 15 }} />
        }
        <Text>{cardName}</Text>
        {/* <Text style={styles.cardTxt}>{number}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default CardViewWithImage;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Colors.inputColorWhite,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderRadius: 10,
    marginBottom: 15,
    padding: 10
  },

  cardTxt: { fontSize: 20, fontWeight: '600', marginBottom: 15 },
});
