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

const incrementBy = (by: number) => ({type: 'INCREMENT_BY', by})

// Zrób akcje, która zwiększy o 10 counter i zaimplementuj
// * Zaimplementuj akcje, która zwiększy o dowolną zadaną wartość counter

function counterReducer(state = 0, action: {type: string, by?: number}) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + 1;
        case 'DECREMENT_COUNTER':
            return state - 1;
        case 'INCREMENT_BY':
            return state + (action?.by || 0);
        default:
            return state;
    }
}

const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        auth: authReducer,
    }
});

/*
    {
        counter: 21
    }
*
*
* */

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
