# esmInstanceofBug

To reproduce run :
 - `npx lerna bootstrap`
 - `node --require esm index.js`

It will log `false` (incorrect behavior) two time in the console instead of `true`.
