import { makeH3 } from './components/make-h3.js'
import { titles } from "./data/titles.js";
import { startsWithLowerCase } from "./utils/starts-wit-lower-case.js";
import { Hero } from "./components/hero.component.js";
import { RatingFormComponent } from "./components/rate-form/rating-form.component.js";
// to be continued... (add css).

const $subtitle = document.querySelector('[data-subtitle]');
if($subtitle) {
   $subtitle.textContent = 'A Company that just Makes Everything...'
}

const h3Rate = document.createElement('h3');
h3Rate.className = 'title has-text-light is-3'
h3Rate.textContent = 'Rate our company';
console.dir(h3Rate)
console.log(h3Rate.constructor.name)


console.log(h3Rate instanceof HTMLHeadingElement)
console.log(h3Rate instanceof HTMLElement)

const $formWrapper = document.querySelector('[data-form-wrapper]');

// solution 1:
// for(const title of titles.toReversed()) {
//     formWrapper.prepend(makeH3(title))
// }

//console.log(titles)
// solution 2: functional programming

// 1. ['This', 'is', 'my', 'example', null]
// 2. map(makeH3)
// 3. [makeH3('This'), makeH3('is'), makeH3('my'), makeH3('example')]
// 4. formWrapper.prepend(...[makeH3('This'), makeH3('is'), makeH3('my'), makeH3('example')])
const titlesAsH3s = titles.filter(startsWithLowerCase).map(makeH3) // === titles.map((title) => makeH3(title))
console.log(titlesAsH3s)


$formWrapper?.append(...titlesAsH3s, RatingFormComponent())
// formWrapper.prepend(makeH3('This'), makeH3('is'))

const $dataColumn = document.querySelector('[data-column]');

$dataColumn?.append(Hero({title: 'ACME inc.', subtitle: 'A Company that just Makes Everything...'}))
$dataColumn?.append(Hero({title: 'xACME inc.', subtitle: '----'}))