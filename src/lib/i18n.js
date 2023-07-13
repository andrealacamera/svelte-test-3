import { derived, writable } from "svelte/store";
import translations from "./translations";

export const locale = writable("en");
export const locales = Object.keys(translations);


// https://github.com/kaisermann/svelte-i18n/blob/main/src/shared/delve.ts
function extractFromObject(obj, fullKey) {
  if (fullKey == null) {
    return  undefined;
  }

  if (fullKey in obj) {
    return obj[fullKey]
  }

  const keys = fullKey.split('.');
  let result = obj;
  for (let p=0; p<keys.length; p++) {
    if (typeof result === 'object') {
      if (p>0) { 
        const partialKey = keys.slice(p, keys.length).join('.');

        if (partialKey in result) {
          result = result[partialKey];
          break;
        }
      } 
      result = result[keys[p]];  
    } else {
      result = undefined;
    }
  }
  return result
}


function translate(locale, key, vars) {
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = extractFromObject(translations[locale], key);
  console.log(text)

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  translate($locale, key, vars)
);
