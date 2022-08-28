import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = ({navigation}) => {
  const goToPageName = name => {
    navigation.navigate(name);
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={() => goToPageName('Settings')} title="Ir a Ajustes" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
