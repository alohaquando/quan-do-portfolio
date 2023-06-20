<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Final card component';
        // Lazy / eager loading 
        export let eager = false;

        // Metadata
       	// noinspection TypeScriptCheckImport
        import {width, height} from "$lib/assets/images/extendable-card-component/final-card-component-L.avif?as=meta:width;height&imagetools"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/extendable-card-component/final-card-component-L.avif?width=1024&format=avif&srcset&imagetools";
        import webpSrcLight
          from "$lib/assets/images/extendable-card-component/final-card-component-L.avif?width=1024&format=webp&srcset&imagetools";

        // Dark image
        import avifSrcDark from "$lib/assets/images/extendable-card-component/final-card-component-D.avif?width=1024&format=avif&srcset&imagetools";
        import webpSrcDark from "$lib/assets/images/extendable-card-component/final-card-component-D.avif?width=1024&format=webp&srcset&imagetools";

        const imageData = {
          alt,
          width,
          height,
          avifSrc: {
						light: avifSrcLight,
						dark: avifSrcDark
					},
					webpSrc: {
						light: webpSrcLight,
						dark: webpSrcDark
					}
        };

        let className = '';
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>