# esmInstanceofBug

To reproduce run :
 - `npx lerna bootstrap`
 - `node`
 - `require("esm")`
 - `import "./index.js"`

It should log `false` two time in the console instead of `true`.
