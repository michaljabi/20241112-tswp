/**
 * W poprzednich przykładach widać było, że typy mogą być zdefiniowane na kilka sposobów.
 *
 * Np. za pomocą słowa kluczowego type lub interface.
 *
 * W obydwu tych przypadkach definiujemy typ. Jednak czy mają one jakieś różnice?
 * Okazuje się, że tak, (choć niewielkie, jeśli chodzi o typy złożone).
 * */

// Różnica zasadnicza: "type" może być używany do definiowania typów prostych, złożonych, ale też do definiowania aliasów typów.

type Numeric = number;
type StringOrNumber = number | string;
type Person = { name: string; phone: number }
// Funkcja również jest typem obiektowym (obiekt specjalnego typu i "First Class Citizen" w świecie JS).
// Można więc zapisać jej dokładny typ w TypeScript:
type Action = ( actionName: string ) => boolean;

// interface może być używany do definiowania TYLKO typów złożonych.
interface OtherPerson { name: string; phone: number }

// Funkcje to również typy złożone (obiektowe), więc można je definiować za pomocą interface.
interface CallMe { (phone: number): void }


// W przypadku typów złożonych różnica jest niewielka.

// 1. Interfejsy mogą być rozszerzane, typy też, ale nie za pomocą "extends" ale "&".
// rozszerzanie interfejsu:
interface PersonWithAddress extends Person {
    address: string
}

const example: PersonWithAddress = {
    name: 'John',
    phone: 123456789,
    address: 'ul. Testowa 1'
}

// rozszerzanie typu:
type OtherPersonWithAddress = Person & { address: string }

const example2: OtherPersonWithAddress = {
    name: 'John',
    phone: 123456789,
    address: 'ul. Testowa 1'
}

// 2. interfejsy mogą być implementowane przez klasy i typy też (jeśli są typami obiektowymi).
interface CanFly {
    fly(): void
}

class Bird implements CanFly {
    fly(): void {
        console.log('I can fly!');
    }
}

// Typy mogą być implementowane przez klasy, ale tylko w przypadku gdy są typami obiektowymi.
type CanSwim = {
    swim(): void
}

class Fish implements CanSwim {
    swim(): void {
        console.log('I can swim!');
    }
}

// 3. istniejące interfejsy mogą być rozszerzane dynamicznie. Typy nie.
// rozszerzanie interfejsu:
interface CanWalk {
    walk(): void
}
// wystarczy powtórzyć nazwę interfejsu, który chcemy rozszerzyć.
interface CanWalk {
    runThenWalk(): void
}
// Zostanie on rozszerzony o nowe właściwości.
// w tym układzie CanWalk będzie zawierał 2 metody: walk i runThenWalk.
const sampleObject: CanWalk = {
    walk(){},
    runThenWalk() {}
}

// W typach tak zrobić nie można. W danym scope nie można zdefiniować więcej niż jednego typu o tej samej nazwie.
type IMustBeUnique = { name: string, value: number }
// type IMustBeUnique = { metadata: string } // error: Duplicate identifier 'IMustBeUnique'.


// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

export {};
