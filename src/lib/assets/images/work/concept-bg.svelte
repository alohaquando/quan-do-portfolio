<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Concept bg';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/work/concept-bg.avif?metadata"

        // Image
        import avifSrc
          from "$lib/assets/images/work/concept-bg.avif?width=3200&format=avif&quality=100&srcset";
        import webpSrc
          from "$lib/assets/images/work/concept-bg.avif?width=3200&format=webp&quality=100&srcset";

        const imageData = {
          lightDark: false,
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className = undefined;
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>