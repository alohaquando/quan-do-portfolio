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

			let imageData = `<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '${imageAlt}';
        // Lazy / eager loading 
        export let eager = false;

        // Metadata
       	// noinspection TypeScriptCheckImport
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataLightName}?as=meta:width;height&imagetools"

        // Light image
        import avifSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=1024&format=avif&as=srcset&imagetools";
        import webpSrcLight
          from "$lib/assets/images/${folderName}/${imageDataLightName}?width=1024&format=webp&as=srcset&imagetools";

        // Dark image
        import avifSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=1024&format=avif&as=srcset&imagetools";
        import webpSrcDark from "$lib/assets/images/${folderName}/${imageDataDarkName}?width=1024&format=webp&as=srcset&imagetools";

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

      <Image {imageData} {eager} class={className}/>`;

			await fs.promises.writeFile(imageDataFileName, imageData);
		}

		// Write data for non light-dark images
		for (const imageName of uniqueImages) {
			let imageDataFileName = `${folderPath}/${imageName}.svelte`;
			let imageDataName = imageName + '.avif';
			let imageAlt = imageName.replace(/-/g, ' ');
			let quality = '';
			let sizes = '720;1024';
			if (imageName.match(/hd-/g)) {
				quality = '95';
				sizes = '1024;1920;2500';
			}
			if (imageName.match(/demo-/g)) {
				quality = '90';
				sizes = '480';
			}
			if (imageName.match(/device-/g)) {
				quality = '90';
				sizes = '720;1024';
			}
			if (imageName.match(/quan-/g)) {
				quality = '95';
				sizes = '720;1024';
			}
			imageAlt = imageAlt.charAt(0).toUpperCase() + imageAlt.slice(1);

			let imageData = `<script lang="ts">
        import Image from "$lib/components/media/Image.svelte";

        // Alt text
        export let alt = '${imageAlt}';
        // Lazy / eager loading
        export let eager = false;

        // Metadata
        // noinspection TypeScriptCheckImport
        import {width, height} from "$lib/assets/images/${folderName}/${imageDataName}?as=meta:width;height&imagetools"

        // Image
        import avifSrc
          from "$lib/assets/images/${folderName}/${imageDataName}?width=${sizes}&format=avif${quality ? `&quality=${quality}` : ''}&as=srcset&imagetools";
        import webpSrc
          from "$lib/assets/images/${folderName}/${imageDataName}?width=${sizes}&format=webp${quality ? `&quality=${quality}` : ''}&as=srcset&imagetools";

        const imageData = {
          alt,
          width,
          height,
          avifSrc,
          webpSrc,
        }

        let className = '';
        export {className as class};
      </script>

      <Image {imageData} {eager} class={className}/>`;

			await fs.promises.writeFile(imageDataFileName, imageData);
		}
	}
}

// noinspection JSIgnoredPromiseFromCall
generateImageDataFiles();
