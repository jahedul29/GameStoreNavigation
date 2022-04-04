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
import GameDetails from '../screens/GameDetails';

const Stack = createNativeStackNavigator();

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

export default function GameStack() {
  return (
    <Stack.Navigator
      initialRouteName="Game"
      drawerContent={props => <CustomDrawer {...props} />}>
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          headerShown: false,
          ...commonHeaderOptions,
        }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetails}
        options={({route}) => ({
          title: route?.params?.title,
          ...commonHeaderOptions,
        })}
      />
    </Stack.Navigator>
  );
}