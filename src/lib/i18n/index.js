import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  translations: {
    en: { lang },
    it: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'], // you can use regexes as well!
      loader: async () => (
        await import('./en/home.json')
      ).default,
    },
    {
      locale: 'it',
      key: 'common',
      loader: async () => (
        await import('./it/common.json')
      ).default,
    },
    {
      locale: 'it',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./it/home.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);