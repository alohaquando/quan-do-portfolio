<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Grove';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/grove.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/grove.avif?width=640;1024;1920&format=avif&srcset";
        import webpSrc
          from "$lib/assets/images/bg/grove.avif?width=640;1024;1920&format=webp&srcset";

        const imageData = {
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