import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CartItem from './CartItem';
import {useDispatch} from 'react-redux';
import BoldText from '../CustomTexts/BoldText';

type ItemsProps = {
  cartItems: any;
};

const CartList = ({cartItems}: ItemsProps) => {
  const dispatch = useDispatch();
  return (
    <FlatList
      data={cartItems}
      renderItem={({item}) => <CartItem item={item} dispatch={dispatch} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <View style={styles.emptyList}>
          <BoldText>No Items in Cart</BoldText>
        </View>
      )}
    />
  );
};

export default CartList;

const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
