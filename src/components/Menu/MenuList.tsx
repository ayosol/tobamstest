import React from 'react';
import {FlatList} from 'react-native';
import MenuItem from './MenuItem';

type ItemsProps = {
  itemsData: any;
};

const MenuList = ({itemsData}: ItemsProps) => {
  return (
    <FlatList
      data={itemsData}
      renderItem={MenuItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default MenuList;
