<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt: string = 'Demo create new flow';
        // Lazy / eager loading
        export let eager: boolean = false;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/demo-create-new-flow.avif?meta=width;height&imagetools"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/demo-create-new-flow.avif?width=480&format=avif&quality=90&srcset&imagetools";
        import webpSrc
          from "$lib/assets/images/bg/demo-create-new-flow.avif?width=480&format=webp&quality=90&srcset&imagetools";

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