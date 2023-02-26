const fs = require('fs');

const imageFoldersPath = 'src/lib/assets/images';

async function generateImageDataFiles() {
	// Get all image folders
	let folders = await fs.promises.readdir(imageFoldersPath);

	// Remove hidden folders
	folders = folders.filter((item) => !item.match(/(^|\/)\.[^\/]/g));

	// For each folder
	for (let folderName of folders) {
		let uniqueLightDarkImages = [];
		let uniqueImages = [];
		let folderPath = `${imageFoldersPath}/${folderName}`;
		let images = await fs.promises.readdir(folderPath);

		// Get images
		for (let imageName of images) {
			if (
				!uniqueLightDarkImages.includes(imageName.replace(/-[LD]\.avif/g, '')) &&
				imageName.match(/-[LD]\.avif/g)
			) {
				imageName = imageName.replace(/-[LD]\.avif/g, '');
				uniqueLightDarkImages.push(imageName);
			} else if (imageName.match(/[^LD]\.avif/g)) {
				uniqueImages.push(imageName.replace(/\.avif/g, ''));
			}
		}

		// Write data files for light dark images
		for (const imageName of uniqueLightDarkImages) {
			let imageDataFileName = `${folderPath}/${imageName}.svelte`;
			let imageDataLightName = imageName + '-L.avif';
			let imageDataDarkName = imageName + '-D.avif';
			let imageAlt = imageName.replace(/-/g, ' ');
			imageAlt = imageAlt.charAt(0).toUpperCase() + imageAlt.slice(1);

			// noinspection JSUnresolvedVariable
			let imageData = `<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '${imageAlt}';
        // Lazy / eager loading 
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataLightName}?metadata"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        // Dark image
        import avifSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

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

      <Image {imageData} {eager} class={className}/>`;

			await fs.promises.writeFile(imageDataFileName, imageData);
		}

		for (const imageName of uniqueImages) {
			let imageDataFileName = `${folderPath}/${imageName}.svelte`;
			let imageDataName = imageName + '.avif';
			let imageAlt = imageName.replace(/-/g, ' ');
			imageAlt = imageAlt.charAt(0).toUpperCase() + imageAlt.slice(1);

			// noinspection JSUnresolvedVariable
			let imageData = `<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '${imageAlt}';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataName}?metadata"

        // Image
        import avifSrc
          from "$lib/assets/images/${folderName}/${imageDataName}?width=360;640;768;1024;1366;1600;1920&format=avif&quality=95&srcset";
        import webpSrc
          from "$lib/assets/images/${folderName}/${imageDataName}?width=360;640;768;1024;1366;1600;1920&format=webp&quality=95&srcset";

        const imageData = {
          lightDark: false,
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className = undefined;
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>`;

			await fs.promises.writeFile(imageDataFileName, imageData);
		}
	}
}

// noinspection JSIgnoredPromiseFromCall
generateImageDataFiles();
