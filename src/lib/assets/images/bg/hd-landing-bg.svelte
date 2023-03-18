<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Hd landing bg';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/hd-landing-bg.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/hd-landing-bg.avif?width=1024;1920;2500&format=avif&quality=95&srcset";
        import webpSrc
          from "$lib/assets/images/bg/hd-landing-bg.avif?width=1024;1920;2500&format=webp&quality=95&srcset";

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