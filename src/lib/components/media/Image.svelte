<!--suppress HtmlWrongAttributeValue -->
<script lang="ts">
	import { colorScheme } from '$lib/data/colorScheme.js';

	interface ImageData {
		webpSrc: { light: string; dark: string };
		avifSrc: { light: string; dark: string };
		alt: string;
		width: number;
		height: number;
	}

	let className = '';
	export { className as class };
	export let imageData: ImageData;
	export let eager: boolean;
</script>

<picture>
	<source
		srcset={imageData.avifSrc.light && imageData.avifSrc.dark ? ($colorScheme === 'light' ? imageData.avifSrc.light : imageData.avifSrc.dark) : undefined}
		type="image/avif" />
	<source
		srcset={imageData.webpSrc.light && imageData.webpSrc.dark ? ($colorScheme === 'light' ? imageData.webpSrc.light : imageData.webpSrc.dark) : undefined}
		type="image/webp" />
	<img
		src={undefined}
		alt={imageData.alt}
		width={imageData.width}
		height={imageData.height}
		loading={eager ? 'eager' : 'lazy'}
		class="{className} {imageData.avifSrc.light || imageData.webpSrc.light ? 'rounded-2xl md:mx-auto md:max-w-screen-sm' : ''}" />
</picture>
