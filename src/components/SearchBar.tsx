import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLOR} from '../util/colors';
import CustomIcon from './CustomIcons/CustomIcon';
import ICONS from '../util/icons';
import {HorizontalSpacer} from './Spacers/HorizontalSpacer';

const SearchBar = () => {
  return (
    <View style={styles.barContainer}>
      <CustomIcon icon={ICONS.searchIcon} width={20} height={20} />
      <HorizontalSpacer />
      <TextInput
        placeholder="Search"
        placeholderTextColor={COLOR.placeholderText}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: COLOR.white,
    height: 48,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: COLOR.border,
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    paddingLeft: 32,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLOR.regtext,
  },
});
