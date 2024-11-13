export function makeH3(title: string): HTMLHeadingElement {
    const h3Rate = h3('title has-text-light is-3', [title]);

    h3Rate.addEventListener('click', () => {
        h3Rate.textContent += '??!'
    })

    return h3Rate;
}


function h3(classNames = '', elements: (HTMLElement|string)[] = []) {
    const node = document.createElement('h3');
    node.className = classNames;
    node.append(...elements);
    return node;
}

// function span(classNames = '', elements: (HTMLElement|string)[] = []) {
//     const node = document.createElement('span');
//     node.className = classNames;
//     node.append(...elements);
//     return node;
// }