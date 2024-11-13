
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

// Factory function
function createElement<K extends keyof HTMLElementTagNameMap>(elementName: K, classNames = '', elements: (string | HTMLElement)[] = [] /*attributes...*/ ): HTMLElementTagNameMap[K] {
    const node = document.createElement(elementName);
    node.className = classNames;
    node.append(...elements);
    return node;
}

// Array to typ generyczny (wymaga dodefiniowania)
// const table : Array<string> = [];
const table : string[]  = [];

// table.length
// table.at(-1)

// dom-creators
export const section = (classNames = '', elements: (string | HTMLElement)[] = []) => createElement('section', classNames, elements)
export const div = (classNames = '', elements: (string | HTMLElement)[] = []) => createElement('div', classNames, elements)
export const p = (classNames = '', elements: (string | HTMLElement)[] = []) => createElement('p', classNames, elements)