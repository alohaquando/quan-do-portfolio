<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
          export let alt = '1st iteration designs';

        // Metadata
        import {width, height} from "$lib/assets/images/extendable-card-component/1st-iteration-designs-L.png?metadata"

        // Light image
        import lowQualitySrcLight
          from "$lib/assets/images/extendable-card-component/1st-iteration-designs-L.png?width=360&format=avif&quality=45&blur=100";
        import avifSrcLight
          from "$lib/assets/images/extendable-card-component/1st-iteration-designs-L.png?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcLight
          from "$lib/assets/images/extendable-card-component/1st-iteration-designs-L.png?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        // Dark image
        import lowQualitySrcDark
          from "$lib/assets/images/extendable-card-component/1st-iteration-designs-D.png?width=360&format=avif&quality=45&blur=100";
        import avifSrcDark from "$lib/assets/images/extendable-card-component/1st-iteration-designs-D.png?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcDark from "$lib/assets/images/extendable-card-component/1st-iteration-designs-D.png?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        const imageData = {
          lightDark: true,
          alt,
          width,
          height,
          lowQualitySrcLight,
          avifSrcLight,
          webpSrcLight,
          lowQualitySrcDark,
          avifSrcDark,
          webpSrcDark
        }

        let className;
        // noinspection ReservedWordAsName
        export {className as class};
      </script>

      <Image {imageData} class={className}/>