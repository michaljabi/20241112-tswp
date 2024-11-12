/**
 *
 * TypeScript jest z nami od 2012 roku.
 *
 * Tutaj modułowy zapis kodu opiera się na korzystaniu ze składni import/export
 * Jest to standard ESM (Ecma Script Modules) wprowadzony do JS od 2015 roku.
 *
 * */
import moduleContent from "./c01-sample-module";

console.log(moduleContent);

console.log(moduleContent.SAMPLE);
moduleContent.helloFromSampleModule();
