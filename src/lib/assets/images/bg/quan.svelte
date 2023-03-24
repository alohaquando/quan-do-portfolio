<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt: string = 'Quan';
        // Lazy / eager loading
        export let eager: boolean = false;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/quan.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/quan.avif?width=720;1024&format=avif&srcset";
        import webpSrc
          from "$lib/assets/images/bg/quan.avif?width=720;1024&format=webp&srcset";

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