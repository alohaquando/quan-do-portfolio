<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Iteration process component';
        // Lazy / eager loading 
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/extendable-card-component/iteration-process-component-L.avif?meta=width;height"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/extendable-card-component/iteration-process-component-L.avif?width=1024&format=avif&srcset";
        import webpSrcLight
          from "$lib/assets/images/extendable-card-component/iteration-process-component-L.avif?width=1024&format=webp&srcset";

        // Dark image
        import avifSrcDark from "$lib/assets/images/extendable-card-component/iteration-process-component-D.avif?width=1024&format=avif&srcset";
        import webpSrcDark from "$lib/assets/images/extendable-card-component/iteration-process-component-D.avif?width=1024&format=webp&srcset";

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

        let className = undefined;
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>