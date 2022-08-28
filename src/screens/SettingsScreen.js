import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = ({navigation}) => {
  const goToPageName = name => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPageName('Home')} title="Ir a Home" />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
