<script>
  // Alt text
  import Image from "$lib/components/Image.svelte";

  const alt = "The ideation of the first iteration";

  // Light image
  import lowQualitySrcLight
    from "$lib/images/extendable-card-component/1st-iteration-idea-light.png?format=avif&quality=45&blur=100";
  import avifSrcLight
    from "$lib/images/extendable-card-component/1st-iteration-idea-light.png?format=avif&quality=95";
  import webpSrcLight
    from "$lib/images/extendable-card-component/1st-iteration-idea-light.png?format=webp&quality=95";

  // Dark image
  import lowQualitySrcDark
    from "$lib/images/extendable-card-component/1st-iteration-idea-dark.png?format=avif&quality=45&blur=100";
  import avifSrcDark from "$lib/images/extendable-card-component/1st-iteration-idea-dark.png?format=avif&quality=95";
  import webpSrcDark from "$lib/images/extendable-card-component/1st-iteration-idea-dark.png?format=webp&quality=95";

  const imageData = {
    alt,
    lowQualitySrcLight,
    avifSrcLight,
    webpSrcLight,
    lowQualitySrcDark,
    avifSrcDark,
    webpSrcDark
  }

  let className;
  export {className as class};
</script>

<Image {imageData} class={className}/>