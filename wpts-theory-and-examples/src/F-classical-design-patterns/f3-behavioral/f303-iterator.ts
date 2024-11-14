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
	return 'Johnny...'
}
/// ---------------------------------

const iterateMembers = clubMembers();

console.log(iterateMembers.next())
console.log(iterateMembers.next())
console.log(iterateMembers.next())
console.log(iterateMembers.next())
console.log(iterateMembers.next())

console.log(clubMembers().next())
console.log(clubMembers().next())
console.log(clubMembers().next())
console.log(clubMembers().next())

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


for(const l of 'abcdefg') {
	console.log(l)
}

for(const l of [9, 2, 3, 4, 5]) {
	console.log(l)
}

for(const el of new Set(['Kris', 'Lukas', 'Arnold'])) {
	console.log(el)
}

for(const el of new Map([['Kris', 1], ['Lukas', 2], ['Arnold', 3]])) {
	console.log(el)
}

const mySettings = {
	name: 'OK',
	adjust: 20,
	settle: 30,
	*[Symbol.iterator]() {
		yield this.name
		yield this.settle
	}
}

const ref = mySettings[Symbol.iterator]();
console.log(ref.next())
console.log(ref.next())
console.log(ref.next())

// for(const el of mySettings) {
// 	console.log(el);
// }