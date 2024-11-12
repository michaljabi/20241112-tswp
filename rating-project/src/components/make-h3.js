export function makeH3(title = 'Rate our company') {
    const h3Rate = document.createElement('h3');
    h3Rate.className = 'title has-text-light is-3'
    h3Rate.textContent = title;

    //
    h3Rate.addEventListener('click', () => {
        h3Rate.textContent += '!'
    })

    return h3Rate;
}