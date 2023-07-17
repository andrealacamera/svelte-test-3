<script>
  import {t, locales, locale } from '$lib/i18n';

</script>



<header>
  <nav>
    <span><a href="/">Home</a></span>
    <span><a href="/about">{$t('common.about')}</a></span>
    <select bind:value="{$locale}">
      {#each $locales as value}
      <option value="{value}">{$t(`lang.${value}`)}</option>
      {/each}
    </select>
  </nav>
</header>

<slot />


<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2em;
    padding: 10px 20px;

  }

</style>