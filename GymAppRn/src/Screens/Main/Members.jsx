import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopNavBar from '../SharedComponents/TopNavBar';
import AllMembersPage from '../Members/AllMembersPage';

const Members = () => {
  return (
    <View>
      <TopNavBar tabHeading="Members" />
      <AllMembersPage />
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({});
