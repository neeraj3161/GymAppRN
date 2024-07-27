import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopNavBar from '../SharedComponents/TopNavBar';
import AllMembersPage from '../Members/AllMembersPage';
import Colors from '../../utils/Colors';

const Members = () => {
  return (
    <View style={{ backgroundColor: Colors.white }}>
      <TopNavBar tabHeading="All Members" />
      <AllMembersPage />
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({});
