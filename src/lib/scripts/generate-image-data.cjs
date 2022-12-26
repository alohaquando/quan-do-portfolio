const fs = require("fs");

const imageFoldersPath = "src/lib/assets/images";

async function generateImageDataFiles() {
  // Get all image folders
  let folders = await fs.promises.readdir(imageFoldersPath);

  // Remove hidden folders
  folders = folders.filter((item) => !item.match(/(^|\/)\.[^\/]/g));

  // For each folder
  for (let folderName of folders) {
    let uniqueImages = [];
    let folderPath = `${imageFoldersPath}/${folderName}`;
    let images = await fs.promises.readdir(folderPath);

    // Get images
    for (let imageName of images) {
      if (
        !uniqueImages.includes(imageName.replace(/-[LD].png/g, "")) &&
        imageName.includes(".png")
      ) {
        imageName = imageName.replace(/-[LD].png/g, "");
        uniqueImages.push(imageName);
      }
    }

    // Write data files
    for (const imageName of uniqueImages) {
      let imageDataFileName = `${folderPath}/${imageName}.svelte`;
      let imageDataLightName = imageName + "-L.png";
      let imageDataDarkName = imageName + "-D.png";
      let imageAlt = imageName.replace(/-/g, " ");
      imageAlt = imageAlt.charAt(0).toUpperCase() + imageAlt.slice(1);

      // noinspection JSUnresolvedVariable
      let imageData = `<script>
        import Image from "$lib/components/Image.svelte";

        // Alt text
          export let alt;
          if (!alt) {
            alt = "${imageAlt}"
          }

        // Metadata
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataLightName}?metadata"

        // Light image
        import lowQualitySrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=768&format=avif&quality=45&blur=100";
        import avifSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        // Dark image
        import lowQualitySrcDark
          from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=768&format=avif&quality=45&blur=100";
        import avifSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

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

      <Image {imageData} class={className}/>`;

      await fs.promises.writeFile(imageDataFileName, imageData);
    }
  }
}

// noinspection JSIgnoredPromiseFromCall
generateImageDataFiles();
