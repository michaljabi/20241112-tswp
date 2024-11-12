/**
 * W JS jest 7 typów prostych.
 * To na ich podstawie budujemy bardziej złożone obiekty etc.
 *
 * Klasyczne zachowanie JavaScript — pozwala na dynamiczną zmianę typu.
 * Coś, co na początku jest przypisane jako string, może po chwili mieć wartość typu number (**)
 *
 * W TypeScript — chcemy pozbyć się tej własności i mocno ją ograniczyć.
 * Upewniając się, że ustalony początkowo typ zmiennej — pozostanie niezmieniony.
 *
 * Typy proste przekazywane są przez wartości, dzięki czemu możliwe jest ich porównanie za pomocą
 * potrójnego znaku równości === z inną wartością tego samego typu.
 *
 * Dodatkowe info:
 * (**) - To nie jest tak, że w JS "nie ma typów!" - po prostu, typowanie nie jest zrobione jawnie.
 * JavaScript sam rozpoznaje typy, jednak my nie mamy możliwości określenia "zawczasu" dokładnego kształtu danych.
 * Ten problem ma rozwiązać TypeScript.
 *
 * */

// Lista wszystkich typów prostych w JS na rok 2023 (ES14):
// https://www.showwcase.com/show/34770/ecmascript-2023-es14-four-new-features

// Jest ich 7
const word: string = 'Hello';
const num: number = 1275612.82;
const flag: boolean = false;
const noWay: undefined = undefined;
const noValue: null = null;

const int: bigint = 10n;
const sym: symbol = Symbol();

// Wnioskowanie typów na podstawie wartości przypisanej do zmiennej:
let word2 = 'Hello';
let num2 = 1275612.82;
let flag2 = false;
let noWay2 = undefined;
let noValue2 = null;
let bigInt2 = 10n;
let sym2 = Symbol();

// Wnioskowanie typów (wartość przypisana do zmiennej decyduje o jej typie):
const word3 = 'Hello';
const num3 = 1275612.82;
const flag3 = false;
const noWay3 = undefined;
const noValue3 = null;
const bigInt3 = 10n;
const sym3 = Symbol();

// [!!!] Typowe błędy:
// Używanie duży liter w typach prostych:
const word4: String = 'Hello';
const num4: Number = 22;
const flag4: Boolean = true;

// Zapisy są poprawne, ale nie są zalecane.
// W JavaScript niektóre typy proste mają swoje odpowiedniki w postaci konstruktorów. (np. String, Number, Boolean, BigInt)
// Jest to podobny mechanizm jak w Javie.
// Jednak w JS dla typów prostych nie jest wymagane używanie konstruktorów, a wręcz przeciwnie — jest to odradzane.

// Konstruktory dla typów prostych są używane do rzutowania typów.
console.log(Number('123')); //=
console.log(String(123)); //=
console.log(Boolean(0)); //=
console.log(Boolean(1)); //=
console.log(Boolean('')); //=

// W JavaScript rzutowanie można zrobić jedynie na typy proste (tak jak powyżej).
// [!!!] TypeScript nie ma nic do Runtime, więc nie ma możliwości rzutowania typów ani nie dodaje jej np. dla typów złożonych.

// Typy proste sprawdzamy za pomocą operatora typeof:
console.log(typeof 'Hello'); //=
console.log(typeof 123); //=
console.log(typeof true); //=
console.log(typeof undefined); //=
console.log(typeof 10n); //=
console.log(typeof Symbol()); //=

// Bug istniejący w JS od początku:
console.log(typeof null); //=
// null to typ prosty, ale typeof zwraca 'object';

// typeof możemy jeszcze sprawdzić, czy coś jest funkcją:
console.log(typeof function() {}); //=

// typeof nie rozpoznaje typów złożonych:
console.log(typeof {}); //=
console.log(typeof []); //=
console.log(typeof new Date()); //=
console.log(typeof new RegExp('')); //=
console.log(typeof new Error()); //=


export {};
