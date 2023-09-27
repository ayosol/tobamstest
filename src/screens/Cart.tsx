import React from 'react';
import AppWrapper from '../components/AppWrapper';
import {useSelector} from 'react-redux';
import CartBottom from '../components/Cart/CartBottom';
import CartList from '../components/Cart/CartList';
import {RootState} from '../redux/store';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log('cartItems', cartItems);

  return (
    <AppWrapper titleText="Cart">
      <CartList cartItems={cartItems} />
      <CartBottom />
    </AppWrapper>
  );
};

export default Cart;
