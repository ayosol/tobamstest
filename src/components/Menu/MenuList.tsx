import React from 'react';
import {FlatList} from 'react-native';
import MenuItem from './MenuItem';
import {useDispatch} from 'react-redux';

type ItemsProps = {
  itemsData: any;
};

const MenuList = ({itemsData}: ItemsProps) => {
  const dispatch = useDispatch();
  return (
    <FlatList
      data={itemsData}
      renderItem={({item}) => <MenuItem item={item} dispatch={dispatch} />}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default MenuList;
