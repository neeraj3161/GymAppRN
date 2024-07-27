import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopNavBar from '../SharedComponents/TopNavBar';
import SettingsOptionCard from '../../utils/CommonComponents/SettingsOptionCard';

const Settings = () => {
  return (
    <View>
      <TopNavBar tabHeading="Settings" />
      <ScrollView>
        <SettingsOptionCard optionsName={'Profile settings'} />
        <SettingsOptionCard optionsName={'Update plans'} />
        <SettingsOptionCard optionsName={'Generate diet plan'} />
        <SettingsOptionCard optionsName={'Export database'} />
        <SettingsOptionCard optionsName={'Import database'} />
        <SettingsOptionCard optionsName={'Sync database'} />
        <SettingsOptionCard optionsName={'Generate holiday message'} />
        <SettingsOptionCard optionsName={'App info'} />

        <SettingsOptionCard optionsName={'Log out'} />


        {/* <SettingsOptionCard optionsName={'Profile settings'} />
        <SettingsOptionCard optionsName={'Profile settings'} />
        <SettingsOptionCard optionsName={'Profile settings'} /> */}
      </ScrollView>

    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
