# Rating project

Załączony plik [index.html](./index.html) zwiera _Landing page_ z formularzem do oceny firmy _ACME_.

Podczas szkolenia będziemy przekształcać statyczny HTML w pełnoprawnie działający fragment aplikacji SPA z wykorzystaniem wzorców projektowych i dobrych praktyk.


### Migration to TS:

1. ```npm init -y``` - nowy projekt nodowy (package.json)
2. ```npm i -D typescript``` - instalacja `tsc`
3. ```tsc --init``` - konfig do TSa (tsconfig.json)
4. robimy `build` script: `tsc` w package.json
5. index.html będzie korzystał z `dist/main.js`
6. aby mieć wszystkie pliki w trakcie migracji js -> to -> ts, włączamy opcje `allowJS: true` (w tsconfig.json)
7. poprawiamy błędy w pliku `main.ts`
8. migrujemy pozostałe pliki do `.ts`
9. spinamy `dev` z `live-server`