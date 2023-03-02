<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = 'Update to new design';
        // Lazy / eager loading 
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/extendable-card-component/update-to-new-design-L.avif?meta=width;height"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/extendable-card-component/update-to-new-design-L.avif?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcLight
          from "$lib/assets/images/extendable-card-component/update-to-new-design-L.avif?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        // Dark image
        import avifSrcDark from "$lib/assets/images/extendable-card-component/update-to-new-design-D.avif?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcDark from "$lib/assets/images/extendable-card-component/update-to-new-design-D.avif?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

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