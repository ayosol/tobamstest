import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigator';
import DetailScreen from '../screens/DetailScreen';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen name="Details" component={DetailScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
