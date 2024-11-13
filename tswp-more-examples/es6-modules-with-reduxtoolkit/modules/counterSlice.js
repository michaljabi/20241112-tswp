import { createSlice } from 'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.9.5/+esm'

const initialState = {
	value: 0
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) { state.value += 1 },
		decrement(state) { state.value -= 1 },
		incrementBy10(state) { state.value += 10 },
	},
})

export const { increment, decrement, incrementBy10 } = counterSlice.actions

export const selectCountValue = state => state[counterSlice.name].value

export default counterSlice.reducer

