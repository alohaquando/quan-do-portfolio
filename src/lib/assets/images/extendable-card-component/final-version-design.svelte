<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Final version design';
        // Lazy / eager loading 
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/extendable-card-component/final-version-design-L.avif?metadata"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/extendable-card-component/final-version-design-L.avif?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcLight
          from "$lib/assets/images/extendable-card-component/final-version-design-L.avif?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        // Dark image
        import avifSrcDark from "$lib/assets/images/extendable-card-component/final-version-design-D.avif?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcDark from "$lib/assets/images/extendable-card-component/final-version-design-D.avif?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        const imageData = {
          lightDark: true,
          alt,
          width,
          height,
          avifSrcLight,
          webpSrcLight,
          avifSrcDark,
          webpSrcDark
        }

        let className = undefined;
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>