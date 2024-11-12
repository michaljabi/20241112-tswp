/**
 * Wzorzec: Budowniczy | Builder
 *
 * @_Zasada-działania:
 * Przygotowujemy funkcje, która odpowiednio ustawia nam
 * (buduje) nowy obiekt na podstawie jego interfejsu
 * Przez co możemy mieć "predefiniowane ustawienia"
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie zauważysz, że np. używasz zawsze
 * danego obiektu w 2-3 bardzo podobnych ustawieniach
 * wejściowych i dzieje się to w wielu miejscach aplikacji
 *
 * */

class Party {

	guests: string[]  = [];
	attractions: string[] = [];
	afterMidnight = false;

	constructor (public name: string) {
		this.name = name;
	}
}

function bachelorPartyBuilder(name: string, guests: string[]) {
	const attractions = ['games', 'gocarts', 'paintball', 'escape-room'];
	const bachelorParty = new Party(name);
	bachelorParty.afterMidnight = true;
	bachelorParty.attractions = attractions;
	bachelorParty.guests = guests;
	return bachelorParty;
}

function kidsPartyBuilder(name: string, guests: string[]) {
	const attractions = ['piniata', 'popcorn', 'swimming-pool'];
	const kidsParty = new Party(name);
	kidsParty.attractions = attractions;
	kidsParty.guests = guests;
	return kidsParty;
}
