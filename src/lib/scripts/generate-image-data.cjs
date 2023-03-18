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
			if (!uniqueLightDarkImages.includes(imageName.replace(/-[LD]\.avif/g, '')) && imageName.match(/-[LD]\.avif/g)) {
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

			let imageData = `<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '${imageAlt}';
        // Lazy / eager loading 
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataLightName}?meta=width;height"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=760&format=avif&srcset";
        import webpSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=760&format=webp&srcset";

        // Dark image
        import avifSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=760&format=avif&srcset";
        import webpSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=760&format=webp&srcset";

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

      <Image {imageData} {eager} class={className}/>`;

			await fs.promises.writeFile(imageDataFileName, imageData);
		}

		// Write data for non light-dark images
		for (const imageName of uniqueImages) {
			let imageDataFileName = `${folderPath}/${imageName}.svelte`;
			let imageDataName = imageName + '.avif';
			let imageAlt = imageName.replace(/-/g, ' ');
			let highQuality = false;
			let sizes = '640;1024;1920'
			if (imageName.match(/hd-/g)) {
				highQuality = true;
				sizes = '1024;1920'
			}
			if (imageName.match(/demo-/g)) {
				highQuality = true;
				sizes = '640'
			}
			imageAlt = imageAlt.charAt(0).toUpperCase() + imageAlt.slice(1);

			let imageData = `<script>
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '${imageAlt}';
        // Lazy / eager loading
        export let eager = undefined;

        // Metadata
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataName}?meta=width;height"

        // Image
        import avifSrc
          from "$lib/assets/images/${folderName}/${imageDataName}?width=${sizes}&format=avif${highQuality ? '&quality=95' : ''}&srcset";
        import webpSrc
          from "$lib/assets/images/${folderName}/${imageDataName}?width=${sizes}&format=webp${highQuality ? '&quality=95' : ''}&srcset";

        const imageData = {
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
