/**
 *
 * Node.js jest z nami od 2009 roku.
 *
 * Jest to środowisko uruchomieniowe, które pozwala na uruchamianie kodu JS poza przeglądarką.
 * Daje możliwości tworzenia aplikacji serwerowych, desktopowych, mobilnych, IoT, etc.
 *
 * Standardowy sposób zapisu modułowego kodu w Node.js to CommonJS.
 * */

// W Node.js moduły importujemy za pomocą funkcji require()
const moduleContent = require('./b01-sample-module');

console.log(moduleContent);

console.log(moduleContent.SAMPLE);
moduleContent.helloFromSampleModule();
