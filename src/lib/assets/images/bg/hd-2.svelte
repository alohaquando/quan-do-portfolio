<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt: string = 'Hd 2';
        // Lazy / eager loading
        export let eager: boolean = false;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/hd-2.avif?meta=width;height&imagetools"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/hd-2.avif?width=1024;1920;2500&format=avif&quality=95&srcset&imagetools";
        import webpSrc
          from "$lib/assets/images/bg/hd-2.avif?width=1024;1920;2500&format=webp&quality=95&srcset&imagetools";

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