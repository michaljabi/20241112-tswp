/**
 * Wzorzec: Proxy | Pełnomocnik
 *
 * @_Zasada-działania:
 * Przygotowujemy nowy obiekt-wrapper
 * i zamiast odwołań do starej implementacji
 * - korzystamy z tego nowego wrapper'a (pełnomocnika)
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy zabezpieczyć dostęp do danej
 * funkcjonalności. Naszych motywacji może być kilka:
 * 1. chcemy upewnić się, iż ktoś jest autoryzowany
 * żeby wykonać operację
 * 2. wykonanie operacji wymaga poprzedzenia inną
 * ważna operacją (i chcemy zachować o tym wiedze
 * dla siebie = w środku Proxy)
 *
 * */


const cashService = {
	getMyCash() {
		return 1892;
	}
}

const cashServiceAuth = {
	userAuth: false,
	getMyCash () {
		if(!this.userAuth) {
			throw new Error('Unauthorized!')
		}
		return cashService.getMyCash();
	}
}

const cashAmount = cashServiceAuth.getMyCash();
console.log(cashAmount);
