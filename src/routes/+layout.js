import { loadTranslations } from '$lib/i18n';

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
  const initLocale = 'en'; // get from cookie, user session, ...

  await loadTranslations(initLocale, '/') // keep this just before the `return`

  return {};
}

export const prerender = true;