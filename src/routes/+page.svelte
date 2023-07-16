<script>
  import { t, locale } from "$lib/i18n"

</script>
<svelte:document>
  <html lang={$locale} />
</svelte:document>

<svelte:head>
  <title>{$t('home.title')} [{$locale}]</title>
</svelte:head>
<h1>{$t('home.welcome')}</h1>
<p>{$t('common.message')}</p>