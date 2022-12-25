<script>
  import "../app.postcss";
  import DarkMode from "svelte-dark-mode";
  import { themeStore } from "$lib/stores/theme.js";
  import Header from "$lib/components/Header.svelte";
  import Header2 from "$lib/components/Header2.svelte";

  let theme;
  $: $themeStore = theme;
</script>

<DarkMode bind:theme />

<!--<Header />-->
<Header2 />

<div class="px-6">
  <slot />
</div>








