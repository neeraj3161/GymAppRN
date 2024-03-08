import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import React from 'react';
import TopNavBar from '../SharedComponents/TopNavBar';
import CardView from '../../utils/CommonComponents/CardView';
import HomeDash from '../Dashboards/HomeDash';

const Home = () => {
  return (
    <View>
      <TopNavBar
        imageSource={require('../../assets/icons/off.png')}
        tabHeading="Home"
      />

      <ScrollView
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      >
        <HomeDash />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
