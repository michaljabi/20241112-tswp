/**

 W programowaniu funkcyjnym jedną z ważniejszych koncepcji są funkcje wyższego rzędu (higher order functions).
 Są to funkcje, które przyjmują jako argumenty inne funkcje lub zwracają funkcje.

 Dzięki nim możemy transformować dane w sposób deklaratywny, czyli w sposób opisujący co chcemy uzyskać, a nie jak to zrobić.

 Dobrze można to pokazać na przykładzie API do tablic:

 Załóżmy, że chcemy np. średnią wieku użytkowników, którzy pracują w IT.
 */

interface Person {
    name: string,
    age: number,
    profession: string,
    professionId: number;
}


const users: Person[] = [
  {
    name: 'Janusz',
    age: 41,
    profession: 'Hydraulik',
    professionId: 1
  },
  {
    name: 'Kazimiera',
    age: 25,
    profession: 'Developer',
    professionId: 3
  },
  {
    name: 'Barbara',
    age: 35,
    profession: 'Programistka',
    professionId: 3
  },
  {
    name: 'Zbyszek',
    age: 55,
    profession: 'Kierowca',
    professionId: 2
  }
];

// Rozwiązanie, z API do tablic:

const allITPerson = users.filter(user => user.professionId === 3);
const averageAge = allITPerson.map(user => user.age).reduce((a, b) => a + b, 0) / allITPerson.length;

console.log(averageAge);


// Programowanie funkcyjne korzysta z idei, że funkcje są wartościami i mogą być przekazywane jako argumenty do innych funkcji.
// Dodatkowo funkcje mają być tzw. "PURE", czyli nie powinny modyfikować stanu oraz powodować efektów ubocznych, a jedynie zwracać nowe wartości.
// Realizując jedno zadanie:
// Dzięki takiemu podejściu możemy przykład powyżej przedstawić w następujący zrefaktoryzowany sposób:

// oto nasze pure functions:
export const isItPerson = (user: Person) => user.professionId === 3;
export const getAge = (user: Person) => user.age;
export const sum = (a: number, b: number) => a + b;

const allITPerson2 = users.filter(isItPerson);
const averageAge2 = allITPerson2.map(getAge).reduce(sum, 0) / allITPerson2.length;

console.log(averageAge2);


console.log(sum(90, 28))

export {};
