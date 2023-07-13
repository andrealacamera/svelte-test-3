<script>
  import {locale, locales} from 'svelte-i18n'
</script>

<header>
  <h1>SVELTE-TEST-3</h1>
  <select bind:value={$locale}>
    {#each $locales as locale}
      <option value={locale}>{locale}</option>
    {/each}
  </select>
</header>

<slot />

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>