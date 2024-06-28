import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import React from 'react';
import TopNavBar from '../SharedComponents/TopNavBar';
import Colors from '../../utils/Colors';

const Reports = () => {

  return (
    <View>
      <TopNavBar tabHeading="Reports" />
      <View style={styles.mainContainer}>
        <Text style={{ color: Colors.buttonColorPrimary }}>Feature coming soon</Text>

      </View>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
