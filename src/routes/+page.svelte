<script>
  import Image from '$lib/Image.svelte';
  import dark from '$lib/images/Extendable Card Component/Update to new design - dark.png';
  import light from '$lib/images/Extendable Card Component/Update to new design - light.png';

  let darkTheme = false;
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
      if (event.matches) {
        //dark mode
      } else {
        //light mode
      }
    })
</script>


{#if darkTheme}
  <Image src={dark} alt="Image" class="max-h-screen"/>
  {:else}
  <Image src={light} alt="Image" class="max-h-screen"/>
  {/if}
  <h1>Does it jump?</h1>





