/**
 *
 * Modułami w JS nazywamy osobne pliki .js.
 * Są one hermetyzowane, tzn. nie mają dostępu do zmiennych z innych plików.
 *
 * Aby udostępnić funkcjonalność z modułu, musimy ją wyeksportować.*
 * Z kolei inny moduł, aby z niej skorzystać, musi ją zaimportować.
 *
*/

// W Node.js zawartości modułu eksportujemy za pomocą obiektu module.exports

const imALocalVariable = 'I am a local module variable';

module.exports = {
    SAMPLE: 'SAMPLE text....',
    helloFromSampleModule() {
        console.log('Hello from sample module');
    }
}

