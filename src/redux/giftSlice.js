import { createSlice } from '@reduxjs/toolkit';

export const giftSlice = createSlice({
	name: 'gift',
	initialState: {
		selectedCategory: "All",
	},
	reducers: {
		filterCategory: (state, action) => {
			state.selectedCategory = action.payload;
		}
	}
})

export const getSelectedCategory = state => state.gift.selectedCategory;
export const { filterCategory } = giftSlice.actions;
export default giftSlice.reducer;