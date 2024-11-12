/**
 * Klasa abstrakcyjna — to specjalny rodzaj klasy, po której trzeb dziedziczyć, aby dostać instancję.
 * Nie da utworzyć instancji klasy abstrakcyjnej bezpośrednio.
 *
 * Jest to wynikiem jej zastosowania — podobnie jak w interfejsie, używając w klasie słowa kluczowego
 * "abstract" można zadeklarować kształt pól i metod, bez szczegółów ich implementacji.
 *
 * Jednak mamy również możliwość dopisania pól i metod w sposób standardowy — gdzie implementujemy sposób ich działania.
 *
 * */

// Oto klasa abstrakcyjna:
abstract class TheThing {}

// Idea jej działania jest podobna do innych języków wysokopoziomowych,
// które używają klas abstrakcyjnych:

// Na przykład:
// - Nie można utworzyć instancji TheThing:
// const something = new TheThing();

// Zamiast tego chcemy żeby inne klasy dziedziczyły po TheThing:
class Bicycle extends TheThing {}


// Klasa abstrakcyjna przypomina trochę interface...
// Różnica polega na tym że - interface nie posiada szczegółów implementacji.
// W przypadku klasy abstrakcyjnej - szczegółów implementacji nie będą posiadały elementy określone jako abstrakcyjne
// pozostałe mogą mieć własną implementację:

abstract class OtherThing {
    protected abstract name: string;

    abstract hello(): void;

    greetings(): void {
        console.log('Hello, my name is', this.name);
    }
}

class Something extends OtherThing {
    // [!] można zmienić modyfikator na przykład na public!
    public name = 'Something'

    hello(): void {
        console.log('Hello World');
    }
}

const aThing = new Something();
console.log(aThing.name);
aThing.hello();
aThing.greetings();

