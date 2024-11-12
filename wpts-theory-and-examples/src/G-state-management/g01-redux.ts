/**
 * Architektura: Flux,
 * implementacja: Redux
 *
 * Jednokierunkowy przepływ danych.
 *
 * Zaimplementowany wzorzec CQRS:
 * Zainteresowani zmianą danych - muszą wywołać akcję dla danego reducera
 *
 * Zainteresowania odczytem muszą zasubskrybować się do stora
 *
 * */

import { configureStore } from '@reduxjs/toolkit'


const increment = {type: 'INCREMENT_COUNTER'};
const decrement = {type: 'DECREMENT_COUNTER'};

// Zrób akcje, która zwiększy o 10 counter i zaimplementuj
// * Zaimplementuj akcje, która zwiększy o dowolną zadaną wartość counter

function counterReducer(state = 0, action: {type: string}) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        default:
            return state;
    }
}

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

store.subscribe(() => {
    console.log(store.getState());
    console.log(store.getState().counter);
})
console.log(store.getState());
store.dispatch(increment);
store.dispatch(increment);
store.dispatch(increment);
console.log(store.getState());
store.dispatch(decrement);
console.log(store.getState());
