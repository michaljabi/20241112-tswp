/**
 * W kontekście TypeScript jako języka pamiętajmy o tym, że to nadzbiór JavaScript.
 *
 * (Prawie) każdy kod JavaScript jest poprawnym kodem TypeScript.
 * (tutaj "prawie" - ponieważ TypeScript posiada dodatkowe zasady, których będzie pilnował)
 *
 * dodatkowo: TypeScript musi zostać transpilowany (skompilowany) do postaci JavaScript, aby przeglądarka mogła go zrozumieć.
 * podobnie będzie w Runtime - kiedy będziemy używać Node.js.
 * Node.js rozumie tylko JavaScript, więc musimy skompilować nasz kod TS do JS.
 * */

const sample: string = 'This will not work in Node.js or browser';

console.log(sample);
