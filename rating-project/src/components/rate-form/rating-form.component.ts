import {
    button,
    div,
    form,
    inputEmail,
    section,
    textArea,
    withAttributes
} from "../../builders/dom-builders.js";
import { FormField } from "../form-field.component";
import { RateFieldComponent } from "./rate-field.component";
import { RateFormState } from "./rate-from-state";

export function RatingFormComponent() {

    const formState = new RateFormState();

  setTimeout(() => {

        formState.setRate(1);
    }, 2000)

    return withAttributes(section('box',
        form('', [
            FormField({id: 'email', labelText: 'e-mail*:', control: inputEmail('email', 'your @ address')}),
            RateFieldComponent({formState}),
            FormField({id: 'opinion', labelText: 'opinion:', control: textArea('opinion', '...something more about your feelings')}),
            div('is-flex is-justify-content-end', div('control', button('Send my testimonial')))
        ])
    ), { style: 'border: 1px solid #ccc; border-radius: 1em;' })
}

