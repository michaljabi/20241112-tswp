
//Type vs interface w TS:
type User2 = {
    name: string
};


// interface jest TYLKO obiektowy
interface User {
    name: string
}
interface UserAge {
    age: number
}

// Biznesowy przypadek:
interface UserWithAge extends User, UserAge {}

// Type może być na bazie unii typów albo aliasu
type Money = number | string;


const user: User2 = {}

type DOMElementRefs = string | HTMLElement | (string | HTMLElement)[];
type ClassList =  string | string[];

// Adapter z formatu ClassList => na string
function makeClassName(classNames: ClassList): string {
    if(typeof classNames  === 'string') {
        return classNames;
    }
    // odfiltrowujemy puste wartości ("")
    return classNames.filter(c => Boolean(c)).join(' ')
    // return classNames.filter(Boolean).join(' ')
}

// function makeElementsList(elements: DOMElementRefs ): Pick<DOMElementRefs, (string | HTMLElement)[]> {

// Adapter z formatu DOMElementRefs => na (string | HTMLElement)[]
function makeElementsList(elements: DOMElementRefs ): (string | HTMLElement)[] {
    if(Array.isArray(elements)) {
        return elements;
    }
    return [elements]
}

// Factory function
function createElement<K extends keyof HTMLElementTagNameMap>(elementName: K, classNames: ClassList = '', elements: DOMElementRefs = [] /*attributes...*/ ): HTMLElementTagNameMap[K] {
    const node = document.createElement(elementName);
    node.className = makeClassName(classNames)
    node.append(...makeElementsList(elements))
    return node;
}

// Array to typ generyczny (wymaga dodefiniowania)
// const table : Array<string> = [];
const table : string[]  = [];

// table.length
// table.at(-1)

// dom-creators
export const section = (classNames?: ClassList, elements?: DOMElementRefs) => createElement('section', classNames, elements)
export const div = (classNames?: ClassList, elements?: DOMElementRefs) => createElement('div', classNames, elements)
export const p = (classNames?: ClassList, elements?: DOMElementRefs) => createElement('p', classNames, elements)

// Dekorator
export function withAttributes<E extends HTMLElement>(ref: E, attributes: { [key: string]: string | number | boolean }): E {
    for(const [key, value] of Object.entries(attributes)) {
        if(value !== false) {
            ref.setAttribute(key, String(value))
        }
    }
    return ref;
}

// form-creators:


const input = (classNames?: ClassList, elements?: DOMElementRefs) => createElement('input', classNames, elements);
const textarea = (classNames?: ClassList, elements?: DOMElementRefs) => createElement('textarea', classNames, elements);

export const form = (classNames?: ClassList, elements?: DOMElementRefs) => createElement('form', classNames, elements);
export const label = (id: string, text: string) => withAttributes(createElement('label', 'label', text), {for: id});
export const inputEmail = (id: string, placeholder = '') => withAttributes(input('input'), { id, placeholder, type: 'email' });
export const inputRange = (id: string, {min, max, value}: {min: number, max: number, value: number}) => withAttributes(input('input'), { id, min, max, value, type: 'range' });
export const textArea = (id: string, placeholder = '') => withAttributes(textarea('textarea'), { id, placeholder });
export const button = (text: string, type: 'submit' | 'button' = 'submit') => withAttributes(createElement('button', 'button is-link', text), { type });