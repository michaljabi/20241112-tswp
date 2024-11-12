/**
 * > Najprostsza konstrukcja w JS - prowadząca nas do asynchroniczności
 *
 *
 * Callbackiem nazywamy taką funkcję, która zostanie przekazana i wywołana przez inną.
 *
 * Jeśli to nie my definiowaliśmy logikę, która wywoła callback.
 * Nie mamy pewności, kiedy to nastąpi (chyba że znamy dokumentację).
 *
 * Najprostszy przykład użycia callbacku to kliknięcie w btn.
 *
 * Nie wiesz, kiedy to user zrobi, natomiast korzystasz z tzw. listener'a,
 * któremu przekazujesz callback "click" - wtedy po kliknięciu wykona się Twoja logika.
 */


function refund(cashBackFn: (amount: number) => void): void {
    // Zauważ, że parametr `cashBackFn` - to funkcja.
    // Nie jest ona wywołana, dopóki nie zrobimy...

    // ...tak:
    cashBackFn(200);

    // To wywołanie robimy z liczbą 200, jest to argument przekazany do funkcji,
    // którą dostaliśmy tutaj.

    // Zauważ, że to PROVIDER — refund decyduje o tym, kiedy wywoła funkcję cashBackFn
    // * Może się to nigdy nie zdarzyć
    // * Może się to zdarzyć po upływie czasu (setTimeout)
    // * Może się to zdarzyć kilka razy !!!
}

refund((amount: number) => {
    console.log('#1 collected:', amount);
})


// Inne przykłady zastosowania callbacks:
// setTimeout — pozwala wywołać coś po określonym czasie orkeślonym w ms:
// 1000ms = 1s

setTimeout(() => {
    console.log('Przychodzę po 1 sekundzie....')
}, 1000)

