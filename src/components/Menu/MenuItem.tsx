import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR} from '../../util/colors';
import CustomIcon from '../CustomIcons/CustomIcon';
import BoldText from '../CustomTexts/BoldText';
import NormalText from '../CustomTexts/NormalText';
import {VerticalSpacer} from '../Spacers/VerticalSpacer';
import {HorizontalSpacer} from '../Spacers/HorizontalSpacer';
import ICONS from '../../util/icons';
import BtnAddToCart from '../Buttons/BtnAddToCart';
import {addItemToCart} from '../../redux/cartSlice';
import {Helper} from '../../util/helper';

const MenuItem = ({item, dispatch}: any) => {
  const addToCart = () => {
    console.log('add item to cart', item);
    dispatch(addItemToCart(item));
  };

  return (
    <View style={styles.menuItem}>
      <View style={styles.likeBox}>
        <CustomIcon icon={ICONS.heartIcon} width={20} height={20} />
      </View>
      <CustomIcon icon={item.icon} width={100} height={100} />
      <VerticalSpacer />
      <View style={styles.itemNamePrice}>
        <NormalText numberOfLines={1} style={styles.name}>
          {item.name}
        </NormalText>
        <HorizontalSpacer width={8} />
        <BoldText style={styles.price}>
          {Helper.formatPrice(item.price)}
        </BoldText>
      </View>
      <VerticalSpacer />
      <BtnAddToCart onClick={() => addToCart()} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    minHeight: 250,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    border: 1,
    margin: 8,
    padding: 8,
    backgroundColor: COLOR.white,
  },
  likeBox: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  itemNamePrice: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    width: '70%',
  },
  price: {
    color: COLOR.primaryRed,
  },
});

export default MenuItem;
