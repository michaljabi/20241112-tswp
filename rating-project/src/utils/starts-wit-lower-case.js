// pure function
// 1. same input / same output
// 2. no side effects
// 3. single responsibility
// (predykat akurat => predykat = funkcja która dla danych zwraca true/false)
export function startsWithLowerCase(word = '') {
    return word.charAt(0) === word.charAt(0).toLowerCase();
}