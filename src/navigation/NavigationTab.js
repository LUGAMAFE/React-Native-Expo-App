import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

const Tabs = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2d76ff',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#ececec',
        },
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({size, color}) => (
        //     <Image
        //       style={{tintColor: color, width: size, height: size}}
        //       source={require('./src/assets/bank.png')}
        //     />
        //   ),
        // }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        // options={{
        //   tabBarIcon: ({size, color}) => (
        //     <Image
        //       style={{tintColor: color, width: size, height: size}}
        //       source={require('./src/assets/star.png')}
        //     />
        //   ),
        // }}
      />
    </Tabs.Navigator>
  );
};

export default NavigationTab;
