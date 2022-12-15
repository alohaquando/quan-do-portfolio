<script>
  export let src;
  export let alt;
</script>

<picture>
  {#each Object.entries(src.sources) as [format, images]}
    <source
      srcSet={images.map((image) => `${image.src}`).join(', ')}
      type={'image/' + format}
    />
  {/each}
  <img src={src.fallback.src} {alt} loading="lazy" />
</picture>

