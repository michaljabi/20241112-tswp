/**
 * W TypeScript możemy definiować własne typy danych.
 *
 * Zarówno, jeśli chodzi o typy proste, jak i złożone.
 *
 * */

// 1. Alias typu.
// Najprostszy możliwy przykład, to tzw. alias typu:

type Numeric = number;

const seed: number = 100;
const randomNumber: Number = Math.random();
const myNumber: Numeric = seed;

console.log(myNumber === seed);

// więcej o jego wykorzystaniu w pliku: src/J-production-laboratory/j01-alias-type-use-case.ts

// 2. Union type.
// Budowanie nowego typu na podstawie kilku innych typów.
type StringOrNumber = number | string;

let testMeAgain: StringOrNumber = 100;
testMeAgain = 'one hundred';

// więcej o jego wykorzystaniu w pliku: src/J-production-laboratory/j02-union-type-use-case.ts

// 3. Enum. (uwaga: wprowadzone w TS słowo kluczowe. Enum nie jest natywnie obsługiwany przez JS)
// Enumy są przydatne, gdy chcemy zdefiniować zbiór wartości, które są ze sobą powiązane.
// Przykładem takiego zbioru, może być np. lista dni tygodnia.

enum WeekDay {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Przykład użycia enuma:

const today: WeekDay = WeekDay.Wednesday;
const tomorrow: WeekDay = WeekDay.Thursday;

// tzw. reverse lookup:
const dayName: string = WeekDay[1];
console.log(dayName);


// 4. Typy złożone.
// Np. obiektowe

type Person = { name: string, age: number };

const me: Person = { name: 'John', age: 30 };

// Można je definiować również w sposób tzw. inline:
const you: { name: string, age: number } = { name: 'Jane', age: 25 };

// Jednak sposób ten nie pozwala na re-używalność typu [!].

// 4.1 Tablice obiektów
const myNumbers: Person[] = [me, you];


export {};
