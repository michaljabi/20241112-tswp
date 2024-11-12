/**
 * Wzorzec: Facade | Fasada
 *
 * @_Zasada-działania:
 * Przygotowanie innej warstwy abstrakcji aby zasłonić
 * szczegóły implementacji - lub ją uprościć
 *
 * @_Przypadki-użycia:
 * Bardzo często wykorzystywany wzorzec, który pozwoli nam
 * odseparować pewną część logiki tak aby:
 * 1. Stała się ona bardziej re-używalna
 * 2. Zasłonić szczegóły jej implementacji - ponieważ np. są skomplikowane albo widzimy masę powtórzeń tego samego kodu
 *
 * */

// Zły kodzik:
document.addEventListener('.save-btn', () =>  {
	const myUser: BodyInit = JSON.stringify({ name: 'Michal', lastName: 'Kowalski' });
	fetch('http://some.address', { method: 'POST', body: myUser })
});

document.addEventListener('.get-users-btn', () =>  {
	fetch('http://some.address/users')
});

document.addEventListener('.get-users-button3', () =>  {
	fetch('http://some.address/users')
});

document.addEventListener('.get-other-users-btn', () =>  {
	fetch('http://some.address/users/other')
		.then((users) => users.json())
		.then((users) => users.length)
});


// Fasada:
const userService = {
	mainUrl: 'http://some.address',
	addUser(user: {name: string, lastName: string}) {
		const jsonUser: BodyInit = JSON.stringify({ name: 'Michal', lastName: 'Kowalski' });
		return fetch(this.mainUrl, { method: 'POST', body: jsonUser })
	},
	getUsers() {
		return fetch(`${this.mainUrl}/users`)
	},
	getOtherUsersCount() {
		return fetch(`${this.mainUrl}/users/other`)
			.then((users) => users.json())
			.then((users) => users.length)
	}
};

// Dobry kodzik:
document.addEventListener('.save-btn', () =>  {
	const myUser = { name: 'Michal', lastName: 'Kowalski' };
	userService.addUser(myUser)
});

document.addEventListener('.get-users-btn', () =>  {
	userService.getUsers()
});

document.addEventListener('.get-users-button3', () =>  {
	userService.getUsers()
});

document.addEventListener('.get-other-users-btn', () =>  {
	userService.getOtherUsersCount()
});
