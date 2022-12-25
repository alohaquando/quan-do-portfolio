<script>
        import Image from "$lib/components/Image.svelte";

        // Alt text
          export let alt;
          if (!alt) {
            alt = "Idea exploration"
          }

        // Metadata
        import {width, height} from "$lib/images/extendable-card-component/idea-exploration-L.png?metadata"

        // Light image
        import lowQualitySrcLight
          from "$lib/images/extendable-card-component/idea-exploration-L.png?width=768&format=avif&quality=45&blur=100";
        import avifSrcLight
          from "$lib/images/extendable-card-component/idea-exploration-L.png?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcLight
          from "$lib/images/extendable-card-component/idea-exploration-L.png?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        // Dark image
        import lowQualitySrcDark
          from "$lib/images/extendable-card-component/idea-exploration-D.png?width=768&format=avif&quality=45&blur=100";
        import avifSrcDark from "$lib/images/extendable-card-component/idea-exploration-D.png?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcDark from "$lib/images/extendable-card-component/idea-exploration-D.png?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        const imageData = {
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