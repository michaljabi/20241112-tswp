/**
 * Union Types:
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
 *
 * Union types wydają się średnio przydatne.
 * Po co mam definiować coś jako string albo number, wydaje się, że jestem niezdecydowany :)
 * */

// klasyczny przykład:
type StringOrNumber = string | number;


// Jednak są min 2 rzeczy, które czynią ten zapis bardzo użytecznymi:
// 1) W JS, nie istnieje (w TS też) przeładowywanie konstruktorów i metod w klasie, union type może nam się wtedy przydać.
class BankAccount {
  constructor(public money: string | number) {}

  deposit(value: string | number): void {
    // To jest tzw. type guard — sprawdza typ zmiennej i pozwala na wywołanie odpowiednich metod.
    // Jest to zwykły if, który sprawdza typ zmiennej i zadziała run-time (więc upewnia nas na 100%, że dana metoda istnieje na typie)
    if(typeof value === 'number') {
      // Tutaj zadziałają metody z klasy Number:
      console.log(value.toFixed(2));
    } else {
      // Tutaj zadziałają metody z klasy String:
      console.log(value.toUpperCase())
    }
    // Tutaj zadziałają metody wspólne dla klas Number i String:
    console.log(value.toString());
  }

  // deposit(value: string): void {} // błąd nie można mieć 2 tak samo nazwanych metod. (Niezależnie od typu parametru)
}


// 2) Zapis union można zrobić również z wartości — wtedy mamy funkcjonalność tzw. flagi.
type Action = 'open' | 'collect' | 'pack' | 'ship' | 'close';

let performAction: Action = 'open';
performAction = 'collect';

// ustawienie nieistniejącej wartości w Action — skutkuje błędem:
// performAction = 'non-existent';

export {};
