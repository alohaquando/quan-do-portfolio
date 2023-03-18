// noinspection JSIgnoredPromiseFromCall

const fs = require('fs');
const sharp = require('sharp');

const imageFoldersPath = 'src/lib/assets/images';

async function optimizeImages() {
	// Get all image folders
	let folders = await fs.promises.readdir(imageFoldersPath);

	// Remove hidden folders
	folders = folders.filter((item) => !item.match(/(^|\/)\.[^\/]/g));

	for (let folderName of folders) {
		let folderPath = `${imageFoldersPath}/${folderName}`;
		let images = await fs.promises.readdir(folderPath);

		// Get images
		for (let imageName of images) {
			if (imageName.match(/\.png/g)) {
				await sharp(`${folderPath}/${imageName}`)
					.avif({ effort: 1, lossless: true })
					.toFile(`${folderPath}/${imageName.replace(/\.png/g, '')}.avif`, () => {
						fs.unlink(`${folderPath}/${imageName}`, () => {});
					});
			}
		}
	}
}

optimizeImages();
