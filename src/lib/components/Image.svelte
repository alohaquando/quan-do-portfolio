<script>
  export let imageData;

  let className;
  export { className as class };

  import lazySizes from "lazysizes";

  import { themeStore } from "$lib/stores/theme.js";
</script>

{#if $themeStore === 'light'}
  <picture>
    <source
      data-srcset={imageData.avifSrcLight}
      type="image/avif"
    />
    <source
      data-srcset={imageData.webpSrcLight}
      type="image/webp"
    />
    <img
      data-sizes="auto"
      width={imageData.width}
      height={imageData.height}
      class="lazyload {className}"
      src={imageData.lowQualitySrcLight}
      alt={imageData.alt}
    />
  </picture>
{:else}
  <picture>
    <source
      data-srcset={imageData.avifSrcDark}
      type="image/avif"
    />
    <source
      data-srcset={imageData.webpSrcDark}
      type="image/webp"
    />
    <img
      data-sizes="auto"
      width={imageData.width}
      height={imageData.height}
      class="lazyload {className}"
      src={imageData.lowQualitySrcDark}
      alt={imageData.alt}
    />
  </picture>
{/if}
