<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
          export let alt;
          if (!alt) {
            alt = "Grove logo"
          }

        // Metadata
        import {width, height} from "$lib/assets/images/work/grove-logo.png?metadata"

        // Image
        import lowQualitySrc
          from "$lib/assets/images/work/grove-logo.png?width=768&format=avif&quality=45&blur=100";
        import avifSrc
          from "$lib/assets/images/work/grove-logo.png?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrc
          from "$lib/assets/images/work/grove-logo.png?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        const imageData = {
          lightDark: false,
          alt,
          width,
          height,
          lowQualitySrc,
          avifSrc,
          webpSrc,
        }

        let className;
        // noinspection ReservedWordAsName
        export {className as class};
      </script>

      <Image {imageData} class={className}/>