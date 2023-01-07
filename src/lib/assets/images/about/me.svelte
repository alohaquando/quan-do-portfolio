<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Me';
        // Lazy / eager loading
        export let eager;

        // Metadata
        import {width, height} from "$lib/assets/images/about/me.png?metadata"

        // Image
        import avifSrc
          from "$lib/assets/images/about/me.png?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrc
          from "$lib/assets/images/about/me.png?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        const imageData = {
          lightDark: false,
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className;
        // noinspection ReservedWordAsName
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>