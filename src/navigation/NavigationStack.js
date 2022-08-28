import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#000'},
        headerTintColor: '#fff',
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
