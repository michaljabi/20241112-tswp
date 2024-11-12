/**
 * Obiekty, które tworzyliśmy do tej pory, były przypisywane od razu — jednak
 * nie dawały nam swobody podobnej do "class"
 * gdzie na podstawie klasy (definicji), można tworzyć instancje obiektów.
 *
 * W 2015 roku do JS wchodzi słowo kluczowe `class`.
 * Pozwala ono na robienie klas w JS — jednak nie wynaturza to języka.
 * Tak naprawdę, po procesie transpilacji klasa — to funkcja (tak jak to było w klasycznym JS przed 2015).
 *
 * W tym układzie słowo kluczowe class — to tylko tzw. lukier składniowy.
 *
 * Jednak dla nas istotne jest to, że działa to faktycznie jak klasa w tym języku.
 * */

// Klasa zachowuje się bardzo podobnie jak w klasycznych językach wysokopoziomowych (np. Java, C#).
// Określa ona kształt obiektu (jego typ) i pozwala na tworzenie instancji

// Najmniejsza ilość elementów potrzebna do istnienia klasy:
class Simple {}

const obj = new Simple();
// Oczywiście, nasza klasa nie zawiera definicji żadnych pól,
// w TypeScript (inaczej jak w JS) nie można jej dynamicznie rozszerzyć.
// obj.name = 'ok';

// Pola w klasach domyślnie są publiczne:
// podczas ich deklarowania — albo nadajemy im wartość początkową, albo określamy jako opcjonalne
class SuperCat {
    name = '';
    age?: number;
}

const myFirstCat = new SuperCat();
myFirstCat.name = 'Mruczek';
myFirstCat.age = 2;

// Pole w klasie może być publiczne, prywatne albo chronione:
class Example {
    private notAccessibleOutsideAClass = true;
    protected accessibleForInheritanceOnly = true;
    public visibleAndAccessibleForAnyone = 'access to all !';
    visibleAndAccessibleForAnyoneByDefault = 'access to all !';
}

// Możemy również określić pola jako tylko do odczytu:
// oraz nadać klasie konstruktor,
// w tym układzie w momencie konstruowania instancji — mamy możliwość nadania nazwy filmu,
// jednak później nie możemy jej zmienić!
class Movie {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const myMovie = new Movie('The Witcher');
console.log(myMovie.name)
// Operacja poniżej jest dozwolona (ponieważ pole jest domyślnie publiczne):
myMovie.name = 'The Gathering';

// Konstruktor w klasie może być tylko jeden.
// TypeScript oferuje nam pewien idom, aby możliwy był zapis tego powyżej w skróconej formie
// Wystarczy przenieść modyfikatory pól (public readonly) do parametru konstruktora

// Movie [===] OtherMovie

class OtherMovie {
    // skrócona forma zapisu tego co mamy powyżej w Movie !!!
    constructor(public name: string) {}
}

const myOtherMovie = new OtherMovie('Friends');
console.log(myOtherMovie.name)
// myOtherMovie.name = 'That 70s show';


// W klasie podobnie jak w typie i interface — możemy mieć pola opcjonalne:
class MountainTroll {
    name?: string;
}

const barney = new MountainTroll();
const ricky = new MountainTroll();
ricky.name = 'Ricky'


// Klasa może posiadać metody, jednak podobnie jak w JavaScript — nie można ich "przeładowywać"
// nie ma również możliwości przeładowania konstruktorów

class Person {
    name = 'Unknown';

    sayYourName() {
        console.log(this.name);
    }
    // operacja niedozwolona! Nie można mieć 2 tak samo nazwanych metod:
    /*
    sayYourName(prefix: string) {
        console.log(prefix, this.name);
    }
    */
}
