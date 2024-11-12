/**

 Destrukturyzacja (rozbrajanie) obiektów i tablic.
 Uproszczenie dostępu do kolejnych "poziomów" zagnieżdżenia się w środku obiektu.
 (obiekt w obiekcie... w obiekcie...w... itd. itd.)
 Sposób alias'owania rozbrojonych zmiennych.

 */

const someComplexObject = {
  name: 'Complexer',
  lastName: 'Smith',
  things: {
    loved: ['pizza', 'macaroni', 'peperoni'],
    disliked: {
      name: 'Simpler',
      reason: 'this fella is just to shallow...',
      rate: -34
    }
  }
};

// extract simple data:
// someComplexObject.name | someComplexObject.things.loved
const {name, things: { loved }} = someComplexObject;

console.log(name, loved);

const {things: { loved: [ lov1,,lov3 ] }} = someComplexObject;

console.log(lov3, lov1);


// Rozbrajanie obiektów i tablic w praktycznym użyciu
const inDoorAPI = {
  fridge: {
    manufacturer: 'Samsung',
    model: 'Cooler 291263',
    doors: 3,
    deFrost: true,
    content: ['eggs', 'ham', 'cheese', 'orange juice']
  }
};

//
//
//
// kilkanaście lini kodziku niżej (lub po prostu zakładając że inDoorAPI jest z innego modułu
// .....
// pokaż mi producenta lodówki
const { manufacturer } = inDoorAPI.fridge;
console.log('manufacturer:', manufacturer);

// pokaż mi ilość drzwi w lodówce:
const { fridge: {doors} } = inDoorAPI;
console.log('doors:',doors);

// wyjmij ser z lodówki:
const { content } = inDoorAPI.fridge;
const [,,yourCheese] = content;
console.log('Here you are, it is your:', yourCheese);

// rozbrajać obiekty można również bezpośrednio w deklaracji argumentów funkcji
// np, jeśli jednym z argumentów funkcji jest obiekt:

// ZAMIAST:
function makeJuice(fruit: {amount: number, name: string}) {
  return `The juice is made of ${fruit.amount} ${fruit.name} !`;
}

// NAPISZEMY:
function makeJuice2({amount, name}: {amount: number, name: string}) {
  return `The juice is made of ${amount} ${name} !`;
}


export {};
