<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Grove';
        // Lazy / eager loading
        export let eager = false;

        // Metadata
        // noinspection TypeScriptCheckImport
        import {width, height} from "$lib/assets/images/bg/grove.avif?as=meta:width;height&imagetools"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/grove.avif?width=720;1024&format=avif&srcset&imagetools";
        import webpSrc
          from "$lib/assets/images/bg/grove.avif?width=720;1024&format=webp&srcset&imagetools";

        const imageData = {
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className = '';
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>