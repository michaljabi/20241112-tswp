import {div, label} from "../builders/dom-builders";

export function FormField({labelText, control, id, controlClass = ''}: {labelText: string, control: HTMLElement | HTMLElement[], id: string, controlClass?: string}) {

    return div('field is-horizontal', [
        div('field-label is-normal', label(id, labelText)),
        div('field-body', div('field', div(['control', controlClass], control))),
    ])
}