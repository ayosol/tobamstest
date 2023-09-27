import React from 'react';
import AppWrapper from '../components/AppWrapper';
import SearchBar from '../components/SearchBar';
import MenuList from '../components/Menu/MenuList';
import {MENU_DATA} from '../data/mockData';

const Menu = () => {
  return (
    <AppWrapper hasLeftIcon={false} titleText="Menu">
      <SearchBar />
      <MenuList itemsData={MENU_DATA} />
    </AppWrapper>
  );
};

export default Menu;
