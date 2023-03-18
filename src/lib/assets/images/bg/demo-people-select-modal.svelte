<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Demo people select modal';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/demo-people-select-modal.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/demo-people-select-modal.avif?width=640&format=avif&quality=95&srcset";
        import webpSrc
          from "$lib/assets/images/bg/demo-people-select-modal.avif?width=640&format=webp&quality=95&srcset";

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