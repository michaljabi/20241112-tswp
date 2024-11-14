/**
 * Podejście: Event Sourcing
 *
 * Odbudowanie stanu aplikacji w dowolnym momencie w czasie.
 * Powtarzając akcje wykonane na danej kolekcji.
 * Event Sourcing może nie dotyczyć całego systemu tylko być zaimplementowany
 * dla jego fragmentu
 *
 * Głównie wykorzystywany na back-endzie
 *
 * Tutaj masz przed sobą naiwną implementacje - która pokazuje Ci zasadę działania.
 * W rozwiązaniu produkcyjnym używa się narzędzi (bibliotek).
 * Z jednej strony do łatwiejszego odbudowania stanu, z drugiej do "kolejkowania"
 * eventów.
 *
 * */

const eventStack = [
	{ type: 'open', id: 'konto#1', balance: 150, time: 0 },
	{ type: 'open', id: 'konto#2', balance: 0, time: 1 },
	{ type: 'transfer', fromId: 'konto#1', toId: 'konto#2', amount: 50, time: 2 },
	{ type: 'transfer', fromId: 'konto#1', toId: 'konto#2', amount: 100, time: 3 },
	{ type: 'transfer', fromId: 'konto#2', toId: 'konto#1', amount: 25, time: 4 },
	{ type: 'open', id: 'konto#3', balance: 450, time: 5 },
]

function applyEvent ( event: any, accounts: any ) {
	if (event.type === 'open') {
		accounts[event.id] = {};
		accounts[event.id].balance = event.balance;
	} else if (event.type === 'transfer') {
		accounts[event.fromId].balance -= event.amount
		accounts[event.toId].balance += event.amount
	}
	return accounts;
}

const accounts = eventStack.reduce(( accounts, event) => applyEvent(event, accounts), {})

function getAccountsAtTime (time: number) {
	return eventStack.reduce(( accounts, event) => {
		if (time < event.time) {
			return accounts
		}
		return applyEvent(event, accounts)
	}, {})
}

console.log(accounts);
console.log(getAccountsAtTime(0));
console.log(getAccountsAtTime(1));
console.log(getAccountsAtTime(2));
console.log(getAccountsAtTime(3));
// snapshot
console.log(getAccountsAtTime(4));
console.log(getAccountsAtTime(5));
