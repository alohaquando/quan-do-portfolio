<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt: string = 'Device concept';
        // Lazy / eager loading
        export let eager: boolean = false;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/device-concept.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/device-concept.avif?width=720;1024&format=avif&quality=90&srcset";
        import webpSrc
          from "$lib/assets/images/bg/device-concept.avif?width=720;1024&format=webp&quality=90&srcset";

        const imageData = {
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className: string = '';
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>