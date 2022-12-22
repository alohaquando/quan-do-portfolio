<script>
  import "../app.postcss";
  import DarkMode from "svelte-dark-mode";
  import {themeStore} from "$lib/stores/theme.js";
  let theme;
  $: $themeStore = theme;
</script>

<DarkMode bind:theme />

<nav class="h-14 flex place-content-between px-6 items-center mb-6 sticky top-0">
  <a href="/" class="text-2xl font-medium ">
    Quân's Portfolio
  </a>
  <div class="flex space-x-6 font-medium ">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/case-studies/grove/expandable-card-component">Card component</a>
  </div>
</nav>

<div class="px-6">
  <slot />
</div>







