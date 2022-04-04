import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Game from '../screens/Game';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './../screens/Profile';
import Messages from './../screens/Messages';
import Moments from './../screens/Moments';
import Settings from './../screens/Settings';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GameStack from './GameStack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const commonHeaderOptions = {
  headerStyle: {
    backgroundColor: '#F66074',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  drawerInactiveBackgroundColor: '#fff',
  drawerActiveBackgroundColor: '#F66074',
  drawerActiveTintColor: '#fff',
  drawerInactiveTintColor: 'black',
  drawerLabelStyle: {
    marginLeft: -20,
  },
};

export default function AppStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          ...commonHeaderOptions,
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="home-outline" size={16} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Game"
        component={GameStack}
        options={({route}) => ({
          headerShown: getHeaderVisibility(route),
          title: 'Games',
          ...commonHeaderOptions,
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="game-controller-outline" size={16} color={color} />
          ),
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          ...commonHeaderOptions,
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="person-outline" size={16} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{
          title: 'Messages',
          ...commonHeaderOptions,
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="chatbox-outline" size={16} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={Moments}
        options={{
          title: 'Moments',
          ...commonHeaderOptions,
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="timer-outline" size={16} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          ...commonHeaderOptions,
          drawerIcon: ({focused, color, size}) => (
            <Ionicons name="settings-outline" size={16} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const getHeaderVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  if (routeName === 'GameDetails') {
    return false;
  } else {
    return true;
  }
};
