<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '1';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/1.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/1.avif?width=360;640;768;1024;1366;1600;1920;2048&srcset";
        import webpSrc
          from "$lib/assets/images/bg/1.avif?width=360;640;768;1024;1366;1600;1920;2048&format=webp&srcset";

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