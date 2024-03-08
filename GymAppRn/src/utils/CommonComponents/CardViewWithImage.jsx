import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CardViewWithImage = ({cardName, number, width, height, imgSource}) => {
  const importedStyles = {
    width,
    height,
  };

  return (
    <TouchableOpacity>
      <View style={[importedStyles, styles.mainContainer]}>
        <Image source={imgSource} />
        <Text>{cardName}</Text>
        <Text style={styles.cardTxt}>{number}</Text>
        <Image
          source={require('../../assets/icons/right_arrow.png')}
          style={styles.rightIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardViewWithImage;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderLeftWidth: 2,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderRadius: 10,
    marginHorizontal: 50,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderRadius: 10,
    marginBottom: 15,
  },

  //   cardTxt: {fontSize: 20, fontWeight: '600', marginBottom: 15},
});
