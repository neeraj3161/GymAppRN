import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeCardView = ({cardName, number, borderLeftColor, width, height}) => {
  const importedStyles = {
    borderLeftColor,
    width,
    height,
  };

  return (
    <TouchableOpacity>
      <View style={[styles.mainContainer, importedStyles]}>
        <Text style={styles.cardTxt}>{number}</Text>
        <Text>{cardName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCardView;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 2,
    backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderRadius: 10,
    marginVertical: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    borderRadius: 10,
  },

  cardTxt: {fontSize: 20, fontWeight: '600', marginBottom: 15},
});
