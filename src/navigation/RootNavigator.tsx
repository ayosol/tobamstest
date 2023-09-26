import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const RootStack = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Settings" component={Settings} />
    </RootStack.Navigator>
  );
};
