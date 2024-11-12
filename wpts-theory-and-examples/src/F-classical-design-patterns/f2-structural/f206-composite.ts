/**
 * Wzorzec: Composite | Kompozyt
 *
 * @_Zasada-działania:
 * Przygotowujemy 2 takie same interfejsy dla
 * klasy bazowej i dla tej która staje się kontenerem
 * dla elementów tej klasy (zbiera je wszystkie)
 *
 * @_Przypadki-użycia:
 * Wszędzie tam, gdzie mamy listę podobnych obiektów
 * lub jakieś "drzewo zależności" a chcemy mieć te same
 * metody (interfejs) dostępu do ich właściwości
 *
 * */

class Ingredient {

	constructor (public name: string, public calories: number) {}

	getCalories() {
		return this.calories
	}
}

// Tutaj stosujemy extends (bardziej "lekko" byłoby gdybyśmy mieli możliwość użycia interfejsów)
// możemy np. w TypeScript
class Dish extends Ingredient {

	ingredients: Ingredient[] = [];

	constructor (name: string) {
		super(name, 0)
	}

	addIngredient (ingredient: Ingredient) {
		this.ingredients.push(ingredient);
	}

	getCalories() {
		return this.ingredients.reduce((calories, ingredient) => calories + ingredient.getCalories(), 0)
	}
}


const milk = new Ingredient('milk', 130);
const flakes = new Ingredient('corn flakes', 400);


const milkSoup = new Dish('Milk Soup')

milkSoup.addIngredient(milk);
milkSoup.addIngredient(flakes);

console.log(milkSoup.getCalories());
