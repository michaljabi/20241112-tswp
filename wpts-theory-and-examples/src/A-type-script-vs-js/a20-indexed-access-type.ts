/**
 *
 * Indexed Access Types
 *
 * Typy indeksowane są używane do uzyskania typu, który jest zwracany przez operator indeksowania, np. MyType[key].
 * Dzięki temu można uzyskać typ wartości, która jest zwracana przez operator indeksowania.
 *
 * W takim układzie, jeśli typ [key] zmieni się na inny typ, to typ zwracany przez operator indeksowania również się zmieni.
 *
 * Najlepiej zobaczyć to na przykładach
 *
 * https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 * */

// Posiadamy typ:
type Person = {
    name: string;
    age: number;
    money: number;
}

// Chcemy uzyskać typ wartości, która jest zwracana przez operator indeksowania
type PersonFounds = Person['money']; // number

// Zauważ, że typ PersonFounds jest równy typowi "number";
// Jeśli zmieni się typ pola "money" na inny typ, to typ PersonFounds również się zmieni

// Przykład:
type Money = {
    currency: string;
    amount: number;
}

type Person2 = {
    name: string;
    age: number;
    money: Money;
}

type OtherPersonFounds = Person2['money']; // Money

// W tym układzie, mamy pewną elastyczność podejścia.
// Otrzymujemy alias typu na podstawie jednego pola typu.

// Jednak wpis pola 'money` może wydawać się trochę ryzykowny. Przecież to tylko wpis "z palca", możemy się pomylić
// i odnieść do pola, które nie istnieje.
// Na przykład:

// type PersonAge = Person2['agez']; // Error: Type 'Person2' does not have property 'agez'.

// Okazuje się, że TypeScript posiada mechanizm, który pozwala na bezpieczne odwołanie się do pola.
// Mechanizm ten nazywa się "keyof" i pozwala na uzyskanie typu, który jest zbiorem wszystkich kluczy obiektu.

// Przykład:
type PersonKeys = keyof Person2; // 'name' | 'age' | 'money'

// I to on jest pod spodem wykorzystywany do "pilnowania" nazw pól używanych w indeksowanych typach.
// operator ten możemy wykorzystać sami do generowania unii wszystkich kluczy obiektu.

// Możemy również wykorzystać go do wyciągnięcia, wszystkich typów wartości z obiektu.
// Ponieważ typ indeksowany może odnosić się do unii kluczy obiektu.

// Przykład:
type SomePersonValues = Person['name' | 'age']; // string | number

type PersonValues = Person2[keyof Person2]; // string | number | Money


// Pomimo tego, że zapis jest dynamiczny. Nie można go wykorzystywać i mieszać z wartościami w kodzie JS.

const nameKey = 'name';
// type PersonName = Person2[nameKey]; // Error: Type 'nameKey' cannot be used to index type 'Person2'.

export {};
