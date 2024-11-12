/**
 * Array to typ natywny w JavaScript.
 * Jest to struktura danych, która przechowuje kolekcję elementów.
 *
 * Array<T> jest typem generycznym.
 * W trakcie jego użycia definiujemy typ elementów, które będą przechowywane w tablicy.
 *
 * TypeScript zapisuje typy generyczne jako MyType<T> - gdzie T to tzw. type parameter.
 * Ten zapis zadziała również dla Array<T>.
 * Jednak w przypadku Array<T>, możemy skorzystać z uproszczonego zapisu: T[]
 * */

const numbers: Array<number> = [1, 2, 3, 4, 5];
const textNumbers: string[] = ['one', 'two', 'three', 'four', 'five'];

console.log(numbers);
console.log(textNumbers);

const kebabNumbers = textNumbers.join('-');

console.log(kebabNumbers);

/** TYLKO w TypeScript: */

// W JavaScript tablice są dynamiczne, czyli nie da się zdefiniować tablicy o stałym rozmiarze.
// W TypeScript można to osiągnąć, wykorzystując typ tuple.
// Tuple to tablice o stałym rozmiarze i stałych typach elementów.

const point: [number, number] = [1, -2];

// zwróć uwagę na zapis [number, number] - zamiast: number[]
// Wyraźnie sugeruje, że tablica ma dwa elementy i oba są typu number.

export {};
