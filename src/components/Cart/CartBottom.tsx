import {StyleSheet, View} from 'react-native';
import React from 'react';
import BtnPrimary from '../Buttons/BtnPrimary';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Helper} from '../../util/helper';
import NormalText from '../CustomTexts/NormalText';
import {VerticalSpacer} from '../Spacers/VerticalSpacer';
import BoldText from '../CustomTexts/BoldText';
import {COLOR} from '../../util/colors';

const CartBottom = () => {
  const {totalAmount, totalQuantity} = useSelector(
    (state: RootState) => state.cart,
  );
  const checkoutItems = () => {};
  return (
    <View style={styles.bottomBox}>
      <View style={styles.priceRow}>
        <View style={styles.priceRow}>
          <BoldText style={styles.text}>Total Price:</BoldText>
          <NormalText style={styles.text}> ({totalQuantity} items)</NormalText>
        </View>
        <BoldText style={styles.text}>
          {Helper.formatPrice(totalAmount)}
        </BoldText>
      </View>
      <VerticalSpacer height={10} />
      <BtnPrimary
        btnTitle="Checkout"
        extraTitle={Helper.formatPrice(totalAmount)}
        onClick={checkoutItems}
      />
      <VerticalSpacer />
    </View>
  );
};

export default CartBottom;

const styles = StyleSheet.create({
  bottomBox: {
    width: '100%',
    minHeight: 100,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: COLOR.black,
    fontSize: 18,
  },
});
