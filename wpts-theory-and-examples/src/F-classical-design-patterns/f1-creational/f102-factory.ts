/**
 * Wzorzec: Fabryka / metoda-wytwórcza | Factory
 *
 * @_Zasada-działania:
 * Przygotowujemy funkcje, która przyjmując określone dane wejściowe
 * Dostarcza nam gotowy do użycia - nowy obiekt.
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie musimy upewnić się iż nasz obiekt zostanie utworzony
 * na podstawie określonych warunków wejściowych.
 * Możemy również użyc fabryki tam - gdzie przygotowanie nowego obiektu
 * jest skomplikowane - wymaga dużo kodowania.
 *
 * */

function carFactory (manufacturer: string, model: string, isVip = false) {

	const makeCar = {
		manufacturer,
		model,
		type: 'standard',
	};

	if(isVip) {
		makeCar.type = 'limo'
	}

	return makeCar;
}

