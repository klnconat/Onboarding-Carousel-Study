import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomePage from '../screens/home/HomePage';

import HomeIcon from '../assets/bottomTab/homeIcon';
import DiagnoseIcon from '../assets/bottomTab/diagnoseIcon';
import ScanIcon from '../assets/bottomTab/scanIcon';
import MyGardenIcon from '../assets/bottomTab/myGardenIcon';
import ProfileIcon from '../assets/bottomTab/profileIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: '#8F8F8F',
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon style={{color: focused ? '#28AF6E' : '#8F8F8F'}} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Diagnose"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <DiagnoseIcon style={{color: focused ? '#28AF6E' : '#8F8F8F'}} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: 'Diagnose',
        }}
      />
      <Tab.Screen
        name="Scan"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => <ScanIcon />,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="MyGarden"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <MyGardenIcon style={{color: focused ? '#28AF6E' : '#8F8F8F'}} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: 'MyGarden',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileIcon style={{color: focused ? '#28AF6E' : '#8F8F8F'}} />
          ),
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: 'MyGarden',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginBottom: 10,
  },
  tabBarLabelStyle: {marginBottom: 10},
  tabBarStyle: {
    height: 49,
  },
});
