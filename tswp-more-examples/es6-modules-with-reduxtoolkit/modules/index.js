import { store } from './store.js'
import { selectCountValue, increment, decrement, incrementBy10 } from './counterSlice.js';


const $btnDec = document.querySelector('#decrement')
const $btnInc = document.querySelector('#increment')
const $counter = document.querySelector('#counter')

$btnDec.addEventListener('click', () => {
	store.dispatch(decrement())
})

$btnInc.addEventListener('click', () => {
	store.dispatch(increment())
})

store.subscribe(() => {
	$counter.innerHTML = selectCountValue(store.getState());
})

// store.dispatch(incrementBy10())
