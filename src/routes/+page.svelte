<script>
  import { _, locale } from 'svelte-i18n'
  console.log($locale)
  locale.set('it')
</script>

<h1>{$_('homepage.welcome')}</h1>
<p>{$_('homepage.text')}</p>

