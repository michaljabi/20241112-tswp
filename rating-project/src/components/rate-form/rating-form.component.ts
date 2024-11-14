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
import {BehaviorSubject, Observable, Subject} from "rxjs";

export function RatingFormComponent() {

    // const showButton = true;
    const showButton$ = new BehaviorSubject<boolean>(false);

    setTimeout(() => {
        showButton$.next(true);
    }, 3000)

    const $formRef = form('', [
        FormField({id: 'email', labelText: 'e-mail*:', control: inputEmail('email', 'your @ address')}),
        RateFieldComponent(),
        FormField({id: 'opinion', labelText: 'opinion:', control: textArea('opinion', '...something more about your feelings')}),
        div('is-flex is-justify-content-end', div('control',
            renderIf(showButton$, button('Send my testimonial'))
        ))
    ])

    $formRef.addEventListener('submit', ev => {
        ev.preventDefault()
        // console.log(new FormData(ev.target))
    })

    return withAttributes(section('box',
        $formRef
    ), { style: 'border: 1px solid #ccc; border-radius: 1em;' })
}

function renderIf(condition$: Observable<boolean>, el: HTMLElement): HTMLDivElement {
    // const wrapper = document.createDocumentFragment();
    const wrapper = div();
    condition$.subscribe(v => {
        if(v) {
            wrapper.append(el)
        } else {
            wrapper.innerHTML = ''
        }
    })
    return wrapper;
}
/*
function renderIf(condition : () => boolean, el: HTMLElement): HTMLElement | string {
    if(condition()) {
        return el;
    }
    return '';
}
*/
