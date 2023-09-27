import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {COLOR} from '../../util/colors';
import CustomIcon from '../CustomIcons/CustomIcon';
import BoldText from '../CustomTexts/BoldText';
import NormalText from '../CustomTexts/NormalText';
import ICONS from '../../util/icons';
import {
  decrementItemInCart,
  deleteItemFromCart,
  incrementItemInCart,
} from '../../redux/cartSlice';
import {Helper} from '../../util/helper';

const CartItem = ({item, dispatch}: any) => {
  const incrementItem = () => {
    dispatch(incrementItemInCart(item));
  };

  const decrementItem = () => {
    if (item.quantity === 1) {
      return;
    }
    dispatch(decrementItemInCart(item));
  };

  const deleteItem = () => {
    dispatch(deleteItemFromCart(item));
  };

  return (
    <View style={styles.cartItem}>
      <View style={styles.firstRow}>
        <CustomIcon icon={item.icon} width={100} height={100} />
        <View style={styles.itemNamePrice}>
          <NormalText numberOfLines={1} style={styles.name}>
            {item.name}
          </NormalText>
          <BoldText style={styles.price}>
            {Helper.formatPrice(item.price)}
          </BoldText>
          <Pressable onPress={deleteItem}>
            <CustomIcon icon={ICONS.deleteIcon} width={20} height={20} />
          </Pressable>
        </View>
      </View>
      <View style={styles.cartBtnBox}>
        <Pressable onPress={incrementItem} style={styles.cartBtn}>
          <CustomIcon icon={ICONS.addIcon} width={16} height={16} />
        </Pressable>
        <BoldText style={styles.text}>{item.quantity}</BoldText>
        <Pressable onPress={decrementItem} style={styles.cartBtn}>
          <CustomIcon icon={ICONS.minusIcon} width={16} height={16} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    minHeight: 100,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    padding: 8,
  },
  firstRow: {
    flexDirection: 'row',
  },
  itemNamePrice: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  name: {
    width: '100%',
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    color: COLOR.primaryRed,
    marginVertical: 8,
    fontSize: 18,
  },
  cartBtnBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  text: {
    color: COLOR.black,
    fontSize: 16,
  },
});

export default CartItem;
