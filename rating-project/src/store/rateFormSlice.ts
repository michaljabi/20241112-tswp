import {createSlice} from "@reduxjs/toolkit";
import { RootState } from "./";

// Wyrocznia jak wygląda kształt stanu:
interface State {
    email: string;
    rate: number;
    opinion: string;
}

const INITIAL_STATE: State = { email: '', rate: 4, opinion: ''}

export const rateFormSlice = createSlice({
    name: 'rate-form',
    initialState: INITIAL_STATE,
    reducers: {
        setEmail(state, {payload}: {payload: string}) { state.email = payload },
        cleanEmail(state) { state.email = '' },
        setRate(state, {payload}: {payload: number}) { state.rate = payload },
    },
})


export const { setEmail, cleanEmail, setRate } = rateFormSlice.actions

export const selectEmail = (state: RootState) => state[rateFormSlice.name].email
export const selectRate = (state: RootState) => state[rateFormSlice.name].rate

export default rateFormSlice.reducer;