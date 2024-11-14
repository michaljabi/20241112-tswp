/**
 * Wzorzec: Prototype | Prototyp
 *
 * @_Zasada-działania:
 * Klonowanie obiektu na podstawie już istniejącego obiektu
 * Mam "prototyp" i chcę mieć nowy obiekt z tymi samymi właściwościami
 *
 * @_Przypadki-użycia:
 * Może być bardzo rozległe zwłaszcza tam - gdzie np.
 * nie chcemy mutować stanu i potrzebujemy pracować na nowym obiekcie
 *
 * @_Ciekawostki-JavaScript:
 * Jeśli wystarczy nam tzw. shallow-copy
 * (Czyli mamy gwarancję iż obiekt nie zawiera innych obiektów)
 * możemy posłużyć się dedykowaną metodą statyczną Object.create
 * lub nawet użyć spread operatora
 * np: const obj = {...otherObject}
 * W innych przypadkach warto pokusić się o tzw. "Util library"
 * z funkcją "clone"
 *
 * */

const myTower = {
	name: 'Tower',
	height: 200,
	printParams() {
		return `Hello this is ${this.name} my height is ${this.height}`;
	}
}

const myTower2 = {...myTower};
const myTower3 = Object.assign({}, myTower);

// Klonowanie obiektu na podstawie prototypu
function makeBuilding(building: typeof myTower) {
	return Object.create(building)
}

const otherTower = makeBuilding(myTower);

console.log(myTower);
console.log(otherTower.printParams())

otherTower.name = 'Higher Tower';
otherTower.height = 400;

console.log(myTower.printParams())
console.log(otherTower.printParams())


// --------------------------------- bardziej zaawansowane klonowanie "głębokie" ---------------------------------
// klonowanie z użyciem biblioteki lodash (deep clone):
import { cloneDeep } from 'lodash';

const lodashTower = cloneDeep(myTower);

console.log(lodashTower.printParams())
// potwierdzenie, że to dwa osobne obiekty:
console.log(lodashTower === myTower);

const user = {};

class User {}

const user2 = new User();

console.log(user.constructor.name)
console.log(user2 instanceof User)
console.log(user2.constructor.name)