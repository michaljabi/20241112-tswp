/**
 * Wzorzec: Singleton
 *
 * @_Zasada-działania:
 * Wywołanie konstruktora ze słowem "new" dla obiektu
 * Zawsze będzie zwracało nam tę samą instancję obiektu
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy mieć pewność iż pracujemy na tym samym obiekcie
 * Możemy tak np. utrzymywać jakiś "stan" aplikacji
 * Należy jednak uważać ponieważ nadużywany Singleton - może stać się
 * antywzorcem (istnieją lepsze rozwiązania)
 *
 * @_Ciekawostki-JavaScript:
 * Moduły działają na zasadzie singletonu, jeśli je require'ujemy
 * To możemy w ich wnętrzu utrzymywać jakiś stan aplikacji
 * Przez co każdy inny pod-moduł importujący ten ze stanem - ma
 * dostęp do tego co w nim zapisaliśmy
 *
 * */

// "rozbudowany" przykład z użyciem OOP:
class IceTruckService {

	static instance: IceTruckService;
	name = '';

	constructor (name: string) {
		if(IceTruckService.instance) {
			return IceTruckService.instance;
		}
		this.name = name;
		IceTruckService.instance = this;
	}

	getName() {
		return this.name;
	}
}

// export const iceTruckService3 = new IceTruckService('');

const iceTruckService1 = new IceTruckService('My Ice Truck Service');
const iceTruckService2 = new IceTruckService('My Ice Truck Service 2');
// tak naprawdę to ta sama instancja obiektu:
console.log(iceTruckService1 === iceTruckService2);
// Dlatego taki sposób zapisu, może być niebezpieczny (mylący).


// Implementacja Singletona w TypeScript / JavaScript będzie znacznie prostsza (i bezpieczniejsza) przy wykorzystaniu ESM:
// wystarczy, że napiszemy tak:
export const iceTruckService = {
	name: 'My Ice Truck Service',
	getName() {
		return this.name;
	}
}

// teraz nieważne ile razy będziemy importować ten moduł
// będziemy mieli dostęp do tej samej instancji obiektu iceTruckService !!!
