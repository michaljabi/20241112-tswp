/**
 *
 * Mapped Type
 * to typ, który tworzymy na podstawie innego typu.
 *
 * Zgodnie z nawą mapujemy typ A na typ B, zachowując pewne reguły.
 *
 * https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 * */


// Załóżmy, że mając typ:

type Person = {
    name: string;
    age: number;
    city: string;
}

// Chcemy utworzyć taki, co będzie miał wszystkie pola opcjonalne.

// W tym celu możemy napisać generyczny mapper:
type MakeOptional<T> = {
    [P in keyof T]?: T[P];
}
// Gdzie T to typ, który chcemy zmapować.
// P to nazwa pola z typu T, które chcemy zmapować.
// T[P] to typ pola z typu T, które chcemy zmapować.

type PersonOptional = MakeOptional<Person>;
// Teraz PersonOptional będzie miał wszystkie pola opcjonalne.

// Możemy też zrobić odwrotnie, czyli zmapować wszystkie pola na nieopcjonalne:
type MakeRequired<T> = {
    [P in keyof T]-?: T[P];
}
type PersonRequired = MakeRequired<Person>;

// w tym układzie oznaczenie -? będzie "zabraniem" opcjonalności z pola.

// PROSTSZY PRZYKŁAD:
// Mapper pozwalający na zamianę wszystkich pól na typ string:
type MakeString<T> = {
    [P in keyof T]: string;
}

type AllStringPerson = MakeString<Person>;

// Teraz ten typ to:
/*

type AllStringPerson = {
    name: string;
    age: string;
    city: string;
}

*/


// Przykład z życia wzięty to np. moment, kiedy zależy nam na zaktualizowaniu części pól w obiekcie.
// Zobaczmy:

function makeSmilingPerson(initialPerson: Person): Person {
    const { name, age, city} = initialPerson;
    const computedName = `${name} :)`;
    return {
        name: computedName,
        age,
        city
    };
}

// funkcja makeSmilingPerson wymaga od nas podania wszystkich wymaganych pól Person !

// makeSmilingPerson({}) // nieprawidłowe wywołanie, brakuje pól: name, age, city
// makeSmilingPerson({ age: 20 }) // nieprawidłowe wywołanie, brakuje pól: name, city

// Teraz może wystąpić sytuacja, w której chcemy zaktualizować tylko część pól.
// W tym celu możemy użyć Mapped Type:

function patchPerson(fieldsToUpdate: MakeOptional<Person>): void {
    fetch('https://example.com/api/person', {
        method: 'PATCH',
        body: JSON.stringify(fieldsToUpdate)
    }).then(() => {
        console.log('Person updated!');
    });
}

// teraz możemy wywołać funkcję patchPerson z dowolnymi polami z Person:
patchPerson({ name: 'John' });
patchPerson({ name: 'John', age: 20 });
patchPerson({ name: 'John', age: 20, city: 'Warsaw' });

// wszystkie wywołania są poprawne.


// Ponieważ przypadki użycia Mapped Type mogą być dość częste,
// to TypeScript udostępnia kilka wbudowanych Mapped Type tzw. Utility Types:

// - Partial<T> - wszystkie pola z T są opcjonalne.
// - Required<T> - wszystkie pola z T są wymagane.
// - Readonly<T> - wszystkie pola z T są readonly.
// - Record<K, T> - tworzy typ, który ma pola z K i wartości z T.
// - Pick<T, K> - tworzy typ, który ma tylko pola z K.
// - Omit<T, K> - tworzy typ, który ma wszystkie pola z T oprócz pól z K.
// - Exclude<T, U> - tworzy typ, który ma wszystkie pola z T oprócz pól z U.
// - Extract<T, U> - tworzy typ, który ma tylko pola z T, które są też w U.

// Więcej:
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Przykład użycia Omit:
type PersonWithoutAge = Omit<Person, 'age'>;

// Teraz PersonWithoutAge to:
/*
{
    name: string;
    city: string;
}
 */

// Można to sprawdzić wnioskowaniem typów (najeżdżając na typ kursorem myszy).

export {};
