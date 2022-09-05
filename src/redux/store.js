import { configureStore } from '@reduxjs/toolkit';
import gift from './giftSlice';

export const store = configureStore({
	reducer: {
		gift: gift
	},
  })