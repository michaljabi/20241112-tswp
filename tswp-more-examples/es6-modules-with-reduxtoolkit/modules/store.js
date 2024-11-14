import { configureStore } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm'
import counterReducer, { counterSlice } from './counterSlice.js';

export const store = configureStore({
	reducer: {
		[counterSlice.name]: counterReducer
	},
	devTools: true
})


store.dispatch()