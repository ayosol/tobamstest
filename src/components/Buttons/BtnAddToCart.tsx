import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {COLOR} from '../../util/colors';
import CustomIcon from '../CustomIcons/CustomIcon';
import ICONS from '../../util/icons';
import NormalText from '../CustomTexts/NormalText';
import {HorizontalSpacer} from '../Spacers/HorizontalSpacer';

type Props = {
  onClick: () => void;
};

const BtnAddToCart = ({onClick}: Props) => {
  return (
    <Pressable style={styles.addToCartBtn} onPress={onClick}>
      <CustomIcon icon={ICONS.whiteCartIcon} width={20} height={20} />
      <HorizontalSpacer width={8} />
      <NormalText style={{color: COLOR.white}}>Add to cart</NormalText>
    </Pressable>
  );
};

export default BtnAddToCart;

const styles = StyleSheet.create({
  addToCartBtn: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: COLOR.primaryRed,
  },
});
