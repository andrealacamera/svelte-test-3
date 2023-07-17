<script>
  import { t, locale } from "$lib/i18n"

</script>

<svelte:head>
  <title>{$t('about.title')} [{$locale}]</title>
</svelte:head>
<h1>{$t('about.welcome')}</h1>
<h3>{$t('about.abstract')}</h3>
<p>{$t('common.message')}</p>