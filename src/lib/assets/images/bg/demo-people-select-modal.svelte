<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Demo people select modal';
        // Lazy / eager loading
        export let eager = false;

        // Metadata
        // noinspection TypeScriptCheckImport
        import {width, height} from "$lib/assets/images/bg/demo-people-select-modal.avif?as=meta:width;height&imagetools"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/demo-people-select-modal.avif?width=480&format=avif&quality=90&as=srcset&imagetools";
        import webpSrc
          from "$lib/assets/images/bg/demo-people-select-modal.avif?width=480&format=webp&quality=90&as=srcset&imagetools";

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