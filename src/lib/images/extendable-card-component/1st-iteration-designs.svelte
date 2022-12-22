<script>
  // Alt text
  import Image from "$lib/components/Image.svelte";

  const alt = "The design of the first iteration";

  // Metadata
  import {width, height} from "$lib/images/extendable-card-component/1st-iteration-designs-light.png?metadata"

  // Light image
  import lowQualitySrcLight
    from "$lib/images/extendable-card-component/1st-iteration-designs-light.png?width=768&format=avif&quality=45&blur=100";
  import avifSrcLight
    from "$lib/images/extendable-card-component/1st-iteration-designs-light.png?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
  import webpSrcLight
    from "$lib/images/extendable-card-component/1st-iteration-designs-light.png?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

  // Dark image
  import lowQualitySrcDark
    from "$lib/images/extendable-card-component/1st-iteration-designs-dark.png?width=768&format=avif&quality=45&blur=100";
  import avifSrcDark from "$lib/images/extendable-card-component/1st-iteration-designs-dark.png?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
  import webpSrcDark from "$lib/images/extendable-card-component/1st-iteration-designs-dark.png?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

  const imageData = {
    alt,
    width,
    height,
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