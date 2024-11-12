/**
 * Interface zachowuje się bardzo podobnie do typu.
 * Z tą różnicą, że zawsze dotyczy obiektu.
 * Nie da się zrobić interface'u dla typu prostego.
 * Zawsze musimy mieć min. Jedno pole lub metodę.
 *
 * Interface istnieje tylko w TS - podobnie jak `type`. W tym układzie po transpilacji nie zostawia po sobie śladu.
 *
 * Pozostałe zachowania interface są podobne jak przy innych językach zorientowanych obiektowo.
 *  - Interface pokazuje jedynie kształt danych - nie posiada szczegółów implementacji,
 *  - wszystkie jego pola są publiczne
 *  - może być implementowany przez klasę.
 *
 * */

// Interface mogą być zastosowane bardzo podobnie do `type`
// Jednak muszą być wykorzystywane dla obiektów.
// Podobnie jak po typach - nie ma po nich śladu po procesie transpilacji...
interface Slogan {
    id: number;
    type: string;
    title: string;
    isHanged?: boolean;
}

const sampleData: Slogan = {
    id: 1,
    title: 'All for $2 today!',
    type: 'marketing'
}

// Oczywiście interface może być wykorzystany w sposób, bardziej klasyczny
// Razem z klasami - jako zapewnienie implementacji przez nie tych samych funkcjonalności

interface IFlying {
    fly(height: number): void;
    isOnTheGround?: boolean;
}

class Airplane implements IFlying {

    isOnTheGround = true;

    fly(height: number): void {}
}

// Odkomentuj żeby zobaczyć błąd:
// class Balloon implements IFlying {}

// W przykładzie powyżej upewniamy się, że za równo Samolot jak i Balon
// potrafią latać i implementują te same metody
// Interface zawsze dostarcza pól i metod jako publiczne.

// Po naprawieniu klasy Balloon możemy odkomentować:
function makeMeFlyToThe(flayer: Airplane /*| Balloon*/, height = 0) {

    if(flayer.isOnTheGround) {
        flayer.fly(height);
    }
}

// Interface mogą się rozszerzać na bazie innych interface.
interface CanMove {
    move(): void;
}

interface CanJump {
    jump(): void;
}

// Połączenie dwóch interfaces za pomocą `CanDance`:
interface CanDance extends CanMove, CanJump {}

class Dancer implements CanDance {
    move(): void {}
    jump(): void {}
}


