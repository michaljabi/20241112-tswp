
const $app = document.querySelector('#app');

const headerElement = document.createElement('header');
headerElement.className = 'header p-6';

const titleElement = document.createElement('h1');
titleElement.className = 'title has-text-success has-text-centered';
titleElement.textContent = 'Single Page Application Example';
headerElement.append(titleElement);


const mainElement = document.createElement('main');
mainElement.classList.add('container', 'is-primary');

let counter = 0;

const btn = document.createElement('button');
btn.className = 'button is-info is-fullwidth';
btn.textContent = 'Count: 0';
btn.addEventListener('click', () => {
    btn.textContent = `Count: ${++counter}`;
})

const getAllUsersBtn = document.createElement('button');
getAllUsersBtn.className = 'button mt-3';
getAllUsersBtn.textContent = 'Get all users';
getAllUsersBtn.addEventListener('click', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = JSON.stringify(await res.json(), null, 2);
    const preElement = document.createElement('pre');
    preElement.textContent = jsonData;
    mainElement.append(preElement)
})

mainElement.append(btn, getAllUsersBtn)
$app.append(
    headerElement,
    mainElement
)
