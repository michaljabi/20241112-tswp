/**
 * TypeScript wprowadza kilka nowych typów:
 *
 * - unknown
 * - any
 * - void
 * - never
 *
 * Są to typy, które nie istnieją w JavaScript.
 * Służą one do opisywania różnych przypadków, które mogą wystąpić w kodzie.
 *
 * */

// 1. any
// Jest to typ, który może być dowolny.
// Oznacza to, że zmienna typu any może być przypisana do dowolnej zmiennej.
// Jest to typ, który nie jest sprawdzany przez TypeScript.
let x: any = 1;
x = 'abc';
x = true;
console.log(x);

let sample: number = x; // jest poprawne, bo x jest typu any

// Istnienie tego typu przydaj się przy migracji projektów JS do TS.
// Wtedy możemy zacząć od typu any, a potem stopniowo zmieniać na bardziej precyzyjne typy.
// Podobnie, jeśli dana biblioteka `.js` nie ma typów (jest pisana w czystym JS), to możemy być zmuszeniu do użycia typu any.

// Zachowanie tego typu przypomina klasyczny JavaScript, gdzie możemy dynamicznie zmieniać typy zmiennych.
// Jednak dzięki jego istnieniu nie jesteśmy zmuszeni do migrowania całego projektu na raz na TypeScript.


// 2. unknown
// Jest to typ, który może być dowolny. Jest jednak bezpieczniejszy od typu any.
// Nie jest to to samo co any, ponieważ:
// - zmienna typu any może być przypisana do dowolnej zmiennej
// - zmienna typu unknown może być przypisana tylko do zmiennej typu unknown lub any

let y: unknown = 1;
y = 'abc';
y = true;
console.log(y);

// const sample2: number = y; // błąd, bo y nie jest "assignable" do typu number

// 3. void
// Jest to typ, który nie może być przypisany do żadnej zmiennej.
// Nie ma żadnej wartości.
// Jest używany w funkcjach, które nie zwracają żadnej wartości.
let z: void;
z = undefined;
console.log(z);

function log(message: string): void {
    console.log(message);
}
// Funkcja log nie zwraca żadnej wartości, więc jej zwracanym typem jest void.


// 4. never
// Jest to typ, który nie może być przypisany do żadnej zmiennej.
// Nie ma żadnej wartości.
// Nic nie może być przypisane do typu never.
// Można go przypisać tylko do innego never.
let nonExistent: never;
// nonExistent = undefined; // błąd
// nonExistent = null; // błąd
// nonExistent = 1; // błąd
// sample = nonExistent; // błąd bo sample to number

// przykład użycia:
function throwError(message: string): never {
    throw new Error(message);
}

// Inny przykład użycia to tzw. exhaustive check:
function exhaustiveCheck(value: 'a' | 'b'): number {
    switch (value) {
        case 'a':
            return 1;
        case 'b':
            return 2;
        default:
            // Jest to specjalna "sztuczka", która sprawdza, czy wszystkie możliwe wartości zostały obsłużone.
            // Jeśli nie, to TypeScript zgłosi błąd.
            const check: never = value;
    }
    return 0;
}

export {};
