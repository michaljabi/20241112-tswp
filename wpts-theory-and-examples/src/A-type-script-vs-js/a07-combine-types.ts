/**
 * Czasem zdarza się sytuacja, w której chcesz stworzyć nowy typ, który będzie zawierał wszystkie właściwości z 2 (lub n) typów.
 *
 * Te 2 (n) typy są już zdefiniowane i okazuje się, że w TypeScript da się je połączyć w jeden typ.
 * */


// Posiadasz 2 interface: Person i Address.
interface Person {
    name: string;
    phone: number;
}
interface Address {
    streetName: string;
    no: number;
}

// Chcesz stworzyć nowy typ, który będzie zawierał wszystkie właściwości z Person i Address.

// 1. Możesz to zrobić za pomocą extends + nowy interface:
interface PersonWithAddress extends Person, Address {}

// 2. Możesz to zrobić za pomocą &:
type OtherPersonWithAddress = Person & Address;


// Jeśli posiadasz 2 typy: OtherPerson i OtherAddress
type OtherPerson = {
    name: string;
    phone: number;
}

type OtherAddress = {
    streetName: string;
    no: number;
}

// 1. Możesz to zrobić za pomocą &:
type OtherPersonWithOtherAddress = OtherPerson & OtherAddress;

// 2. Możesz to zrobić za pomocą extends po tych 2 typach + nowy interface:
interface IOtherPersonWithOtherAddress extends OtherPerson, OtherAddress {}

export {};
