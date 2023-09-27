import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppWrapper from '../components/AppWrapper';
import CustomIcon from '../components/CustomIcons/CustomIcon';
import {VerticalSpacer} from '../components/Spacers/VerticalSpacer';
import BoldText from '../components/CustomTexts/BoldText';
import {Helper} from '../util/helper';
import NormalText from '../components/CustomTexts/NormalText';
import {COLOR} from '../util/colors';
import BtnPrimary from '../components/Buttons/BtnPrimary';
import BtnSecondary from '../components/Buttons/BtnSecondary';
import {useDispatch} from 'react-redux';
import {
  addItemToCartWithQty,
  decrementItemInCart,
  incrementItemInCart,
} from '../redux/cartSlice';
import ICONS from '../util/icons';

const DetailScreen = ({route}) => {
  const dispatch = useDispatch();
  const currentItem = route.params?.currentItem;
  const [disableMinus, setDisableMinus] = useState(currentItem.quantity === 1);
  const addToCart = () => {
    dispatch(addItemToCartWithQty(currentItem));
  };

  const incrementItem = () => {
    setDisableMinus(false);
    dispatch(incrementItemInCart(currentItem));
  };

  const decrementItem = () => {
    if (currentItem.quantity === 1) {
      setDisableMinus(true);
      return;
    }
    dispatch(decrementItemInCart(currentItem));
  };

  return (
    <AppWrapper>
      <CustomIcon icon={currentItem?.icon} width={'50%'} height={240} />
      <VerticalSpacer />
      <View style={styles.titleRow}>
        <BoldText>{currentItem.name}</BoldText>
        <NormalText style={styles.price}>
          {Helper.formatPrice(currentItem.price)}
        </NormalText>
      </View>
      <VerticalSpacer height={8} />
      <NormalText style={styles.description}>
        Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are
        made from yeast dough, shaped into balls and deep-fried until golden
        brown. It has a doughnut-like texture but slightly o....
        <NormalText style={styles.price}>Read more</NormalText>
      </NormalText>

      <View style={styles.bottomBtn}>
        <View style={styles.cartBtns}>
          <Pressable
            disabled={disableMinus}
            onPress={decrementItem}
            style={styles.cartBtn}>
            <CustomIcon icon={ICONS.minusIcon} width={16} height={16} />
          </Pressable>
          <BoldText style={styles.textQty}>{currentItem.quantity}</BoldText>
          <Pressable onPress={incrementItem} style={styles.cartBtn}>
            <CustomIcon icon={ICONS.addIcon} width={16} height={16} />
          </Pressable>
        </View>
        <VerticalSpacer />
        <BtnPrimary btnTitle={'Add to cart'} onClick={addToCart} />
        <VerticalSpacer />
        <BtnSecondary btnTitle={'Subscribe to a Plan'} onClick={() => {}} />
      </View>
    </AppWrapper>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  titleRow: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    paddingHorizontal: 16,
    color: COLOR.primaryRed,
    fontSize: 16,
  },
  description: {
    lineHeight: 20,
    letterSpacing: 1.5,
    textAlign: 'justify',
    paddingHorizontal: 16,
  },
  cartBtns: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textQty: {
    color: COLOR.black,
    fontSize: 16,
  },
  cartBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLOR.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderWidth: 1,
    borderColor: COLOR.border,
  },
  bottomBtn: {
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 16,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
