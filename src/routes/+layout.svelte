<script>
  import "../app.postcss";
  import DarkMode from "svelte-dark-mode";
  import {themeStore} from "$lib/stores/theme.js";
  let theme;
  $: $themeStore = theme;
</script>

<DarkMode bind:theme />

<nav>
  <a href="/">Home</a>
  <a href="about">About</a>
</nav>

<slot />







