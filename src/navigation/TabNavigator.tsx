import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Cart from '../screens/Cart';
import Menu from '../screens/Menu';
import {TabBarIcon} from '../components/CustomIcons/TabBarIcon';
import {COLOR} from '../util/colors';

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <TabBarIcon focused={focused} routeName={route.name} />
        ),
        tabBarStyle: {
          backgroundColor: COLOR.appBg,
          paddingVertical: 10,
          height: 100,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
      <TabStack.Screen name="Home" component={Home} />
      <TabStack.Screen name="Menu" component={Menu} />
      <TabStack.Screen name="Cart" component={Cart} />
      <TabStack.Screen name="Account" component={Account} />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
