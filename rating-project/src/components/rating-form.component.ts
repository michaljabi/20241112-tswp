import {
    button,
    div,
    form,
    inputEmail,
    inputRange,
    section,
    textArea,
    withAttributes
} from "../builders/dom-builders";
import { FormField } from "./form-field.component";

export function RatingFormComponent() {

    const myRate = 2;
    const $div = div('p-2 px-4 has-text-weight-bold', String(4));
    $div.textContent = String(myRate);
    const $range =  inputRange('rate', {min: 1, max: 5, value: 4});
    $range.value = String(myRate);
    document.title = `Rating Form (${myRate})`
    $range.addEventListener('input', (e) => {
        if(e.target instanceof HTMLInputElement) {
            console.log(e.target?.value);
        }
    })

    return withAttributes(section('box',
        form('', [
            FormField({id: 'email', labelText: 'e-mail*:', control: inputEmail('email', 'your @ address')}),
            FormField({id: 'rate', labelText: 'rate*:', controlClass: 'is-flex', control: [
                    $div,
                    $range
                ]}),
            FormField({id: 'opinion', labelText: 'opinion:', control: textArea('opinion', '...something more about your feelings')}),
            div('is-flex is-justify-content-end', div('control', button('Send my testimonial')))
        ])
    ), { style: 'border: 1px solid #ccc; border-radius: 1em;' })
}

