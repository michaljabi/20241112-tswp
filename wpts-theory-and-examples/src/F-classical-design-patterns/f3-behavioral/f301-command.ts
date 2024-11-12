/**
 * Wzorzec: Command | Polecenie
 *
 * @_Zasada-działania:
 * Utworzenie metody, która otrzymując parametry wejściowe
 * jest w stanie dynamicznie wywołać akcje na podstawie naszego interfejsu
 *
 * @_Przypadki-użycia:
 * Wszędzie tam, gdzie chcemy mieć możliwość odtworzenia
 * poleceń wydawanych danemu API np. z twardego zapisu (JSON, localStorage, etc.)
 *
 * */

type Commands = keyof typeof calculator;

const calculator = {
	add(num1: number, num2: number): number {
		return num1 + num2;
	},
	subtract(num1: number, num2: number): number {
		return num1 - num2;
	},
	multiply(num1: number, num2: number): number {
		return num1 * num2;
	},
	divide(num1: number, num2: number): number {
		return num1/num2;
	},
	calc(command: Command): number  {
		if(command.type !== 'calc') {
			return this[command.type](command.num1, command.num2);
		}
		return 0;
	}
};

class Command {
	constructor (public type: Commands, public num1: number, public num2: number) {}
}

console.log(calculator.calc(new Command('divide', 10, 2)))
console.log(calculator.calc(new Command('subtract', 10, 2)))

