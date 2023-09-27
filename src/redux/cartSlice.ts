import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state: RootState, action: PayloadAction<any>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({...newItem, quantity: 1});
      } else {
        existingItem.quantity++;
      }
      state.totalAmount += newItem.price;
    },
    addItemToCartWithQty: (state: RootState, action: PayloadAction<any>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity += newItem.quantity;
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity,
        });
      } else {
        existingItem.quantity += newItem.quantity;
      }
      state.totalAmount += newItem.price * newItem.quantity;
    },
    incrementItemInCart: (state: RootState, action: PayloadAction<any>) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(item => item.id === currentItem.id);
      state.totalQuantity++;
      if (existingItem) {
        existingItem.quantity++;
      }
      state.totalAmount += existingItem.price;
    },
    decrementItemInCart: (state: RootState, action: PayloadAction<any>) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(item => item.id === currentItem.id);
      state.totalQuantity--;
      if (existingItem) {
        existingItem.quantity--;
      }
      state.totalAmount -= existingItem.price;
    },
    deleteItemFromCart: (state: RootState, action: PayloadAction<any>) => {
      const currentItem = action.payload;
      const existingItem = state.items.find(item => item.id === currentItem.id);
      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.price * existingItem.quantity;
      state.items = state.items.filter(item => item.id !== currentItem.id);
    },
  },
});

export const {
  addItemToCart,
  addItemToCartWithQty,
  incrementItemInCart,
  decrementItemInCart,
  deleteItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
