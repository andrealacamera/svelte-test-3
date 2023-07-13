// +layout.ts
import { browser } from '$app/environment'
import { locale, waitLocale } from 'svelte-i18n'
import '$lib/i18n' // Import to initialize. Important :)

export const load = async () => {
	if (browser) {
		locale.set(window.navigator.language)
	}
	await waitLocale()
}

export const prerender = true;

