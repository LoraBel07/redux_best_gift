import { configureStore } from '@reduxjs/toolkit';
import gift from './giftSlice';
import cart from './cartSlice';

export const store = configureStore({
	reducer: {
		gift,
		cart
	},
  })