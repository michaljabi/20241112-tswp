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

    return withAttributes(section('box',
        form('', [
            FormField({id: 'email', labelText: 'e-mail*:', control: inputEmail('email', 'your @ address')}),
            FormField({id: 'rate', labelText: 'rate*:', controlClass: 'is-flex', control: [
                    div('p-2 px-4 has-text-weight-bold', String(4)),
                    inputRange('rate', {min: 1, max: 5, value: 4})
                ]}),
            FormField({id: 'opinion', labelText: 'opinion:', control: textArea('opinion', '...something more about your feelings')}),
            div('is-flex is-justify-content-end', div('control', button('Send my testimonial')))
        ])
    ), { style: 'border: 1px solid #ccc; border-radius: 1em;' })
}

