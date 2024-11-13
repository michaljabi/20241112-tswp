import {
    button,
    div,
    form,
    inputEmail,
    inputRange,
    section,
    textArea,
    withAttributes
} from "../builders/dom-builders.js";
import { FormField } from "./form-field.component";
import { Subject, BehaviorSubject } from "rxjs";

class RateFormState {
    private formState$ = new BehaviorSubject({ email: '', rate: 2, opinion: ''});


    getState() {
        return this.formState$.asObservable();
    }

    setEmail(email: string) {
        const myState = this.formState$.getValue();
        this.formState$.next({ ...myState, email })
    }
}

export function RatingFormComponent() {

    // const myRate = 2;
    const myRate$ = new BehaviorSubject(2);

    const $div = div('p-2 px-4 has-text-weight-bold', String(4));
    const $range =  inputRange('rate', {min: 1, max: 5, value: 4});

    $range.addEventListener('input', (e) => {
        if(e.target instanceof HTMLInputElement) {
            console.log(e.target?.value);
            // PROVIDER:
            myRate$.next(Number(e.target?.value))
        }
    })

    // Angular [(ngModel)]="" (2-way data binding) mvvm
    // CONSUMERS:
    // #1:
    myRate$.subscribe((v: number) => {
        document.title = `Rating Form (${v})`
    })
    // #2:
    myRate$.subscribe((myRate) => {
        $div.textContent = String(myRate);
    })
    // #3:
    myRate$.subscribe((myRate) => {
        $range.value = String(myRate);
    })

    setTimeout(() => {
        myRate$.next(1)
    }, 5000)

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

