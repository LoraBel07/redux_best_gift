import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartItems: []
	},
	reducers: {
		addItemToCart: ( state, action ) => {
			state.cartItems.push({
				giftId: action.payload.gift.id
			})
		}
	}
})