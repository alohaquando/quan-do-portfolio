<script>
  import { themeStore } from "$lib/stores/theme.js";

  import Image from '$lib/components/Image.svelte';
  import dark from '$lib/images/Extendable Card Component/Update to new design - dark.png';
  import light from '$lib/images/Extendable Card Component/Update to new design - light.png';


</script>


{#if $themeStore === "dark"}
  <Image src={dark} alt="Image" class="max-h-screen"/>
  {:else}
  <Image src={light} alt="Image" class="max-h-screen"/>
  {/if}

  <h1>Does it jump?</h1>





