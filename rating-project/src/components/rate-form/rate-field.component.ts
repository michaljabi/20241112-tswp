import {FormField} from "../form-field.component";
import {div, inputRange} from "../../builders/dom-builders";
import {RateFormState} from "./rate-from-state";

export function RateFieldComponent({formState}: {formState: RateFormState}) {

    const $div = div('p-2 px-4 has-text-weight-bold', String(4));
    const mySub = formState.getState().subscribe(({rate}) => {
        $div.textContent = String(rate);
    })
    mySub.unsubscribe();

    const $range =  inputRange('rate', {min: 1, max: 5, value: 4});
    formState.getRate().subscribe((rate) => {
        $range.value = String(rate);
    })

    $range.addEventListener('input', (e) => {
        if(e.target instanceof HTMLInputElement) {
            formState.setRate(Number(e.target?.value))
        }
    })

    formState.getState().subscribe((state) => {
        // Najgorsze co można zrobić na strumieniu to bezpośrednie mutowanie referencji stanu.
        // state.rate = 5;
    })

    // formState.getState().subscribe(({rate}) => {
    //     $div.textContent = String(rate);
    //     $range.value = String(rate);
    // })

    return FormField({id: 'rate', labelText: 'rate*:', controlClass: 'is-flex', control: [
            $div,
            $range
        ]})
}