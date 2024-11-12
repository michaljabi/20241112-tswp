/**
 *
 * Dziedziczenie w TypeScript zachowuje się podobnie jak w klasycznym JavaScript.
 * Już od 2015 roku mamy możliwość używania lukru składniowego i dwóch słów
 * kluczowych: `class` oraz `extends`.
 * Po transpiracji kod wygląda tak — jakbyśmy korzystali z dziedziczenia łańcucha prototypów w JS.
 *
 * W tym układzie zasady są bardzo podobne jak w przypadku dziedziczenia klas w JS.
 * np.
 *  Używamy słowa kluczowego `extends`
 * Przy użyciu konstruktora w klasie dziedziczącej — musimy odwołać się do super() dla klasy bazowej.
 *
 * Dodatkowo:
 * Użycie modyfikatorów pól takich jak `protected`, pozwala zabezpieczyć przed dostępem z zewnątrz
 * a zezwolić na dostęp w środku klas do wartości pola lub wywołania metody.
 * */


// Klasa bazowa
class Animal {

    name: string;
    age = 20;

    constructor(name: string = '...') {
        this.name = name;
    }

}

class Cat {

    name: string;
    //age = 20;

    constructor(name: string) {
        this.name = name;
    }
}

// const myCat: Cat = new Animal('Puszek');
// myCat


// Prosty przykład dziedziczenia:
class Mammal extends Animal {
    constructor(public name: string) {
        // To wywołanie super jest omówione niżej
        super(name);
    }
}

class Reptile extends Animal {
    constructor() {
        super('Snake');
    }
}

// W TypeScript można dziedziczyć tylko po 1 klasie bazowej,
// Oznacza to, że gdybyśmy mieli np. 2 klasę Mechanical i chcieli zrobić Mechanical Animal - nie jest to możliwe
class Mechanical {}

// Operacja niedozwolona:
// class Amphibian extends Animal, Mechanical{}

// Dana klasa może implementować wiele interface'ów - jednak nie może dziedziczyć po wielu klasach.
// Zachowanie to jest podobne do klasycznego działania JavaScript'u.

// Z dziedziczeniem powiązane są 2 fakty:

// Jeśli dziedziczysz i posiadasz w swojej klasie konstruktor, musi on odwołać się do klasy bazowej za pomocą:
// super();
// Jeśli klasa bazowa również ma konstruktor wygląda to tak jak powyżej w przykładzie:
// Reptile - Animal
// Mammal - Animal

// Jednak jeśli klasa Mechanical nie ma konstruktora zadeklarowanego Jawnie?

class MechanicalBird extends Mechanical {
    constructor(public name?: string) {
        // Używam tutaj konstruktora, ponieważ dziedziczę, musze zapisać super();
        // Mimo, że Mechanical nie posiada jawnie zapisanego konstruktora - i tak jest to wymagane
        super();
    }
}

// Przykłady z instancją:
const pigeon = new MechanicalBird();
console.log(pigeon.name);

const owl = new MechanicalBird('White Owl');
console.log(owl.name);


// Na przykładzie dziedziczenia można zauważyć dostępność pól:

class Mineral {
    protected name = 'nieznany minerał...';
    amount = 0;
    private notVisible = 'porysowany';
}

class Gold extends Mineral {
    public info: string;
    constructor() {
        super();
        this.name = 'Złoto';
        this.info = `${this.name} w ilości: ${this.amount} uncji`;
        // operacje niedozwolone:
        // console.log(this.notVisible);
    }
}

const myTreasure = new Gold();
// Operacja niedozwolona:
// console.log(myTreasure.name)

console.log(myTreasure.info)
console.log(myTreasure.amount)
