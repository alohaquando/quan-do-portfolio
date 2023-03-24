<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt: string = 'Demo task calendar dashboard';
        // Lazy / eager loading
        export let eager: boolean = false;

        // Metadata
        import {width, height} from "$lib/assets/images/bg/demo-task-calendar-dashboard.avif?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/bg/demo-task-calendar-dashboard.avif?width=480&format=avif&quality=90&srcset";
        import webpSrc
          from "$lib/assets/images/bg/demo-task-calendar-dashboard.avif?width=480&format=webp&quality=90&srcset";

        const imageData = {
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className: string = '';
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>