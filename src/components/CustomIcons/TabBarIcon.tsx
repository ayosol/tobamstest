import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import NormalText from '../CustomTexts/NormalText';
import ICONS from '../../util/icons';

export const TabBarIcon = ({focused, routeName}: any) => {
  let icon;
  if (routeName === 'Home') {
    icon = ICONS.homeIcon;
  } else if (routeName === 'Menu') {
    icon = focused ? ICONS.menuIconFilled : ICONS.menuIcon;
  } else if (routeName === 'Cart') {
    icon = focused ? ICONS.cartIconFilled : ICONS.cartIcon;
  } else if (routeName === 'Account') {
    icon = ICONS.accountIcon;
  }
  return (
    <View style={styles.tabIcon}>
      <Image resizeMode="contain" source={icon} style={styles.icon} />
      <NormalText>{routeName}</NormalText>
    </View>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
