# SVELTE-TEST-3

## Intro

In this project several `i18n` libraries / solutions are explored. 

TBD: 
- Add features as carousel, burger menu for mobile devices, etc.
- Copy final version of this file on the `main` branch!

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

## Branch `test2`
Implements [svelte-i18n](https://www.npmjs.com/package/svelte-i18n) library. 
See example and docs in the github pages. In particular, usage for [SvelteKit](https://github.com/kaisermann/svelte-i18n/blob/46b025ceebeb9bd68df0a2f30cc3c0775049ed85/docs/Svelte-Kit.md)

1. **Add locale dictionaries**:  There are two different ways of adding a new dictionary of messages to a certain locale:
- *Synchronous* with `addMessages(locale, dict)` method.
- *Async* with `register` method (inside a loader).

2. **Initialize** lib: `init(config)`.

> 1 + 2 in the `$lib/i18n/index.js` file.

3. **Setup**
- For SSR we need to setup a server hook in `hooks.server.js`. (skipped!)
- On frontend the language is set with `window.navigator.language`. 

> TBD: Save the choice on a cookie, which can be read before first step in case of returning user.

4. **Localize** the page(s): `$format` method and `$_` and `$t` aliases. More details [here](https://github.com/kaisermann/svelte-i18n/blob/46b025ceebeb9bd68df0a2f30cc3c0775049ed85/docs/Formatting.md)


5. **Extras**: 
`svelte-i18n` uses the [FormatJS](https://formatjs.io/) library collection, which itself uses the [ICU message defacto standard](http://userguide.icu-project.org/). ICU messages use {curly braces} for interpolated values.

#### ICU plural messages 
The `{key, plural, matches}` syntax is standard ICU stuff. Example:
```json
{
  "test": "I want to drink {n, plural, =0 {no beers} one {one beer} other {a lot of beers}}"
}
```

```svelte
<p>{$t('test', {values: {n: thenumber}})}</p>
```
More details [here](https://phrase.com/blog/posts/how-to-localize-a-svelte-app-with-svelte-i18n/)

> Remark! The article is based on an old version of the library. Modifications are necessary! See [doc](https://github.com/kaisermann/svelte-i18n/blob/main/docs/Migration.md)
---
Created: 2023-07-13 || Modified: 2023-07-26

## References (all branches):

- [Svelte Basic i18n](https://svelte.dev/repl/de39de663ef2445b8fe17b79c500013b?version=4.0.5)
- [svelte-i18n](https://www.npmjs.com/package/svelte-i18n)
- [sveltekit-i18n](https://github.com/sveltekit-i18n/lib/tree/master)
