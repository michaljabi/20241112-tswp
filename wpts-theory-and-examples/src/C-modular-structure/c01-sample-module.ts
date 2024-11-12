/**
 *
 * Modułami w TS nazywamy osobne pliki .ts.
 * Są one hermetyzowane, tzn. nie mają dostępu do zmiennych z innych plików.
 *
 * Aby udostępnić funkcjonalność z modułu, musimy ją wyeksportować.*
 * Z kolei inny moduł, aby z niej skorzystać, musi ją zaimportować.
 *
*/

// W Node.js zawatości modułu eksportujemy za pomocą obiektu module.exports

const imALocalVariable = 'I am a local module variable';

export default {
    SAMPLE: 'SAMPLE text....',
    helloFromSampleModule() {
        console.log('Hello from sample module');
    }
}

