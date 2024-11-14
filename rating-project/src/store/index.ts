import { configureStore } from "@reduxjs/toolkit";
import rateFormSliceReducer, { rateFormSlice, setEmail, cleanEmail } from "./rateFormSlice";

export const store = configureStore({
    reducer: {
        // [rateFormSlice.name]: rateFormSlice.reducer
        [rateFormSlice.name]: rateFormSliceReducer
    },
    devTools: true
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// const key = 'name'
//
// const user = { [key]: 'Michał' }
//
// user[key] = 'Marian';
//
// console.log(user['name'])
// console.log(user[key])


// store.dispatch(setEmail('michal@ok.pl'))
// store.dispatch(cleanEmail())