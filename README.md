# SVELTE-TEST-3

## Intro

In this project several `i18n` libraries / solutions are explored. 

TBD: 
- Add features as carousel, burger menu for mobile devices, SSG, etc.

## Branch `test1` 

Quick solution, proposed on [this site](https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=4.0.5). 

In order to use the command `$t("homepage.welcome")` while the translations object structure is as follows, some modifications are mandatory to the `i18n.js` file (idea taken from [here](https://github.com/kaisermann/svelte-i18n/blob/main/src/shared/delve.ts)).
```js
{
  "en": {
    "homepage": {
      "welcome": "Lorem ipsum dolor sit amet.",
      "title": "Lorem ipsum dolor sit amet."
    }
  },
  "fr": {
    ...
  }
}
```
---
Created: 2023-07-13 || Modified: 2023-07-13

## References:

- [Svelte Basic i18n](https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=4.0.5)