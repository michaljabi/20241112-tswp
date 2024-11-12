/**
 * Typy opisujące funkcje można definiować w następujący sposób:
 *
 * */


// 1. Typ funkcji, która nie przyjmują argumentów i nie zwraca wartości:
type FunctionWithoutArgsAndReturn = () => void;

// 2. Typ funkcji, która posiada parametr typu string i zwraca wartość typu string:
type FunctionWithOneStringArgAndReturnString = (arg: string) => string;

// Zauważ, że w obu przypadkach to jedynie definicje typu, a nie implementacje funkcji.
// W tym układzie, TypeScript zachowuje się tak jak do tej pory. Opisuje pewną rzeczywistość, nie koniecznie już istniejącą.

// Przykład użycia typu:
type SumFunction = (a: number, b: number) => number;

const sum: SumFunction = (a, b) => a + b;

// Zapis definicji typu funkcyjnego przydaje się przy wyrażeniach funkcyjnych
// W tym układzie będzie również przydatny przy callbackach
function makeCalculations(callback: SumFunction, a: number, b: number): number {
    const result = callback(a, b);
    console.log(result);
    return result;
}

// teraz nie popełnimy błędu przy wywołaniu callbacka:
makeCalculations(sum, 1, 2); //=
makeCalculations((a: number, b: number) => a - b, 100, 50); //=



// 3. Ponieważ interface to tak naprawdę typ obiektowy, a funkcje to obiekty w JS.
// Możemy również definiować typy funkcji w ten sposób:
interface SayHello {
    (arg: string): string;
}

const sayHello: SayHello = (arg: string) => `Hello ${arg}!`;

sayHello('Michael'); //=


export {};
