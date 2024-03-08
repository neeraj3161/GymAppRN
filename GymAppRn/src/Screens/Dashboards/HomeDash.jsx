import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HomeCardView from '../../utils/CommonComponents/HomeCardView';
import Colors from '../../utils/Colors';
import CardViewWithImage from '../../utils/CommonComponents/CardViewWithImage';
import CustomButton from '../../utils/CommonComponents/CustomButton';

const HomeDash = () => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 20,
        marginBottom: 150,
      }}>
      <HomeCardView
        cardName={'Active Members'}
        number={22}
        borderLeftColor={Colors.mediumGreen}
        width={150}
        height={120}
      />

      <HomeCardView
        cardName={'Inactive Members'}
        number={20}
        borderLeftColor={Colors.ShadowGrey}
        width={150}
        height={120}
      />

      <HomeCardView
        cardName={'Renewals (Today)'}
        number={5}
        borderLeftColor={Colors.primary}
        width={150}
        height={120}
      />

      <HomeCardView
        cardName={'Pending Bills'}
        number={5}
        borderLeftColor={Colors.danger}
        width={150}
        height={120}
      />

      <CardViewWithImage
        cardName={'Birthday'}
        number={1}
        height={70}
        width={330}
        imgSource={require('../../assets/icons/cake.png')}
      />

      <CustomButton
        backgroundColor={Colors.primary}
        btnTxt={'Add UPI payment'}
        color={Colors.white}
      />

      <CustomButton
        backgroundColor={Colors.primary}
        btnTxt={'Add New Member'}
        color={Colors.white}
      />

      <CustomButton
        backgroundColor={Colors.primary}
        btnTxt={'Add Fees'}
        color={Colors.white}
      />
      <CustomButton
        backgroundColor={Colors.primary}
        btnTxt={'Search'}
        color={Colors.white}
      />
    </View>
  );
};

export default HomeDash;

const styles = StyleSheet.create({});
