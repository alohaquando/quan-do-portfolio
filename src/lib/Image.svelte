<!--suppress ES6UnusedImports -->
<script>
  export let src;
  export let alt;

  let className;
  // noinspection ReservedWordAsName
  export {className as class};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import lazySizes from "lazysizes";

  let avifSrcset = "";
  let webpSrcset = "";
  let pngSrcset = "";
  let placeholderSrc;

  // noinspection JSUnusedAssignment
  src.forEach(image => {
    if (image.blur === 100 && image.quality === 50 && image.format==='webp') {
      placeholderSrc = image.src
    }
    switch (image.format) {
      case 'avif':
        avifSrcset += image.src + ', ';
        break;
      case 'webp':
        webpSrcset += image.src + ', ';
        break;
      case 'png':
        pngSrcset += image.src + ', ';
        break;
      default:
        break;
    }
  })
</script>


<picture >
  <source data-srcset={avifSrcset} type="image/avif" />
  <source data-srcset={webpSrcset} type="image/webp" />
  <source data-srcset={pngSrcset} type="image/png" />
  <img class="lazyload blur-up {className}" data-sizes="auto" src={placeholderSrc} {alt}/>
</picture>