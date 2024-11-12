/**
 * Wzorzec: Iterator
 *
 * @_Zasada-działania:
 * Tworzymy metody służące do rozpoczęcia, a potem wyciągania obiektów z kolekcji
 * "jeden po drugim"
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy ujednolicić sposób dostępu
 * do różnych kolekcji danych -
 * lub nawet (po przez [Symbol.iterator]) ustalić sposób iterowania
 * po naszym nowym obiekcie (kolekcja np. może być w jego środku)
 *
 * @_Ciekawostki-JavaScript:
 * W JavaScript bardzo prosto uzyskać implementację tego wzorca
 * wystarczy użyć dostępnych Generatorów
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 *
 * */

function *clubMembers() {
	yield 'John';
	yield 'Merry';
	yield 'Stan';
	yield 'George';
}
/// ---------------------------------

const iterateMembers = clubMembers();

console.log(iterateMembers.next())
console.log(iterateMembers.next())
console.log(iterateMembers.next())

/// ---------------------------------
function *familyMembers() {
	const family = ['Jerry', 'Ramon', 'Jeremy', 'Kate', 'Johan'];
	for(let member of family) {
		yield member
	}
}
/// ---------------------------------

const iterate = familyMembers();
for(let iter of iterate) {
	console.log(iter)
}

function vipMembers() {
	const vips = new Set(['Kris', 'Lukas', 'Arnold']);
	return vips[Symbol.iterator]()
}

const iterateVip = vipMembers();

console.log(iterateVip.next())
console.log(iterateVip.next())
