/**
 * Wzorzec: Adapter
 *
 * @_Zasada-działania:
 * Dla konkretnego obiektu / zestawu funkcji - przygotowujemy
 * "Wrapper" w postaci innego obiektu - zestawu funkcji
 * tak, aby dopasować interfejs do istniejącego API
 *
 * @_Przypadki-użycia:
 * Wszędzie tam, gdzie chcemy korzystać z różnych implementacji,
 * które finalnie mają dopasować się do jednego interfejsu (API).
 *
 * */

type Money = {value: number, currency: string};

const moneyAsCurrency = { value: 100, currency: 'USD' };
const moneyAsString = '300 PLN';
const moneyAsNumber = 300;

// Przy aktualnym API, nie możemy wykonać operacji na różnych typach danych
// printMoney(moneyAsCurrency); nie zadziała
// printMoney(moneyAsString); nie zadziała
// jedynie, zadziała nam:
printMoney(moneyAsNumber);

function printMoney(amount: number) {
    console.log(`I have ${amount} $`);
}

// W takim przypadku możemy użyć wzorca Adapter:
function adaptDifferentKindOfMoney(someMoney: string | Money): number {
    let computedCurrency;
    let computedValue;
    if(typeof someMoney === 'string') {
        const [value, currency] = someMoney.split(' ');
        computedCurrency = currency;
        computedValue = Number(value);
    } else {
        computedCurrency = someMoney.currency;
        computedValue = someMoney.value;
    }
    if(computedCurrency === 'PLN') {
        return computedValue * 0.24;
    }
    if(computedCurrency === 'USD') {
        return computedValue;
    }
    return 0;
}

printMoney(adaptDifferentKindOfMoney(moneyAsCurrency));
printMoney(adaptDifferentKindOfMoney(moneyAsString));
