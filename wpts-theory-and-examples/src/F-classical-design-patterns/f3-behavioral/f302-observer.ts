import { Subject } from "rxjs";

/**
 * Wzorzec: Observer | Obserwator
 *
 * @_Zasada-działania:
 * Obiekt A chce rozgłosić obiektom B i C zmiany związane z pewnymi
 * obserwowanymi przez B i C wartościami
 *
 * @_Przypadki-użycia:
 * Wyobraź sobie że na stronie jest kilka komponentów. Kiedy dodajesz użytkownika
 * chcesz aby pozostałe komponenty odpowiednio zareagowały na te zmianę.
 * np.
 * 1 z nich będzie aktualizował ilość wszystkich dodanych użytkowników (liczba)
 * 2 z nich wyświetli imię i nazwisko nowo dodanego użytkownika.
 * Każdy z nich dostanie informacje odnośnie jego aktualizacji - natychmiastowo
 * i będzie mógł zaktualizować swój stan.
 *
 * @_Ciekawostki-JavaScript:
 * Bardzo szeroko wykorzystywany wzorzec w oparciu o istniejące implementacje
 * popularna biblioteka: RxJS.
 *
 *
 * */

/**

 # Zadanie:
 1. Doinstaluj bibliotekę rxjs
 2. Dodaj logikę rozgłaszania zamian w "mainBroadcaster"
 3. Rozgłaszaj każde utworzenie nowego samochodu
 4. Przekaż strumień i zasubskrybuj zmiany przez każdy z komponentów
 5. Rozgłoś kilka zmian w odstępach czasowych używając setInterval(()=>{}, timeout);

 */


// UWAGA : zadanie wymaga użycia biblioteki Rx.js

/* jshint esnext: true */

class Car {
	constructor(public name: string) {}
}

function firstComponent(ev$: Subject<Car>) {
	ev$.subscribe((car: Car) => {
		console.log(`Hello first ${car.name}`)
	})
}

function secondComponent(ev$: Subject<Car>) {
	//tutaj
}

function thirdComponent(ev$: Subject<Car>) {
	//tutaj
}

(function mainBroadcaster() {

	// logic here
	// Poinformuj każdego o nowym samochodzie
	const car = new Car('BMW');
	const carSubject: Subject<Car> = new Subject();

	// Podanie możliwości subskrypcji
	firstComponent(carSubject);
	secondComponent(carSubject);
	thirdComponent(carSubject);

	carSubject.next(new Car('Mercedes'))
	// kolejna subskrypcja:
	carSubject.subscribe((car) => {
		console.log(car);
	})

	// Rozgłoszenie
	carSubject.next(car);
	carSubject.next(new Car('Audi'))

})();

