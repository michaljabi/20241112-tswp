
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

// Factory function
function createElement<K extends keyof HTMLElementTagNameMap>(elementName: K, classNames: ClassList = '', elements: DOMElementRefs = [] /*attributes...*/ ): HTMLElementTagNameMap[K] {
    const node = document.createElement(elementName);
    if(typeof classNames  === 'string') {
        node.className = classNames;
    } else {
        node.className = classNames.join(' ')
    }
    if(Array.isArray(elements)) {
        node.append(...elements);
    } else {
        node.append( elements )
    }
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