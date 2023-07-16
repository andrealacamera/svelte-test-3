<script>
  import {t, locales, locale } from '$lib/i18n';

</script>



<header>
  <select bind:value="{$locale}">
    {#each $locales as value}
      <option value="{value}">{$t(`lang.${value}`)}</option>
    {/each}
  </select>
</header>

<slot />