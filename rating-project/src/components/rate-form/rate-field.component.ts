import {FormField} from "../form-field.component";
import {div, inputRange} from "../../builders/dom-builders";
import {store} from "../../store";
import {selectRate, setRate} from "../../store/rateFormSlice";

export function RateFieldComponent() {

    const $div = div('p-2 px-4 has-text-weight-bold', String(4));

    const unsubscribe = store.subscribe(() => {
        $div.textContent = String(selectRate(store.getState()));
    })
    // unsubscribe();

    const $range =  inputRange('rate', {min: 1, max: 5, value: 4});
    store.subscribe(() => {
        $range.value = String(selectRate(store.getState()));
    })

    $range.addEventListener('input', (e) => {
        if(e.target instanceof HTMLInputElement) {
            store.dispatch(setRate(Number(e.target?.value)))
        }
    })

    // formState.getState().subscribe((state) => {
    //     // Najgorsze co można zrobić na strumieniu to bezpośrednie mutowanie referencji stanu.
    //     // state.rate = 5;
    // })

    // formState.getState().subscribe(({rate}) => {
    //     $div.textContent = String(rate);
    //     $range.value = String(rate);
    // })

    return FormField({id: 'rate', labelText: 'rate*:', controlClass: 'is-flex', control: [
            $div,
            $range
        ]})
}