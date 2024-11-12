/**

 Łączenie tablic i obiektów dzięki spread operator.

 Operator rest dla metod i funkcji (n liczba parametrów)

 */

const numbers = [1, 2, 3, 4];
const otherNumbers = [5, 7, 8, 10];
const allNumbers = [...numbers, ...otherNumbers];

console.log(allNumbers)

const user = {
	name: 'Michał',
	lastName: 'Kowalski'
}

const userOtherInfo = {
	age: 27
}

const userWithOtherInfo = {
    ...user,
    ...userOtherInfo
}

console.log(userWithOtherInfo);

// Rest operator
function sum(...numbers: number[]) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

console.log(sum(1, 2, 3, 4))
