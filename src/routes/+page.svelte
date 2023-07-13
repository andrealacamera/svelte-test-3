<script>
  import {t,locale,locales} from "$lib/i18n"
  // Create a locale specific timestamp
  $: time = new Date().toLocaleDateString($locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  $: name = $t("common.unknown");
</script>

<select bind:value={$locale}>
  {#each locales as l}
    <option value={l}>{l}</option>
  {/each}
</select>

<h1>{$t("homepage.title")}</h1>
<label>
  Input:
  <input bind:value={name} type="text" />
</label>
<h3>{$t("homepage.welcome", {name})}</h3>
<p>{$t("homepage.time", {time})}</p>