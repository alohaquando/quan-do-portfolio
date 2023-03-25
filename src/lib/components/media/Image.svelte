<!--suppress HtmlWrongAttributeValue -->
<script lang="ts">
	import { colorScheme } from '$lib/data/colorScheme';

	interface ImageData {
		webpSrc: string | { light: string; dark: string };
		avifSrc: string | { light: string; dark: string };
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
		srcset={typeof imageData.avifSrc === 'object' ? ($colorScheme === 'light' ? imageData.avifSrc.light : imageData.avifSrc.dark) : imageData.avifSrc || undefined}
		type="image/avif" />
	<source
		srcset={typeof imageData.webpSrc === 'object' ? ($colorScheme === 'light' ? imageData.webpSrc.light : imageData.webpSrc.dark) : imageData.webpSrc || undefined}
		type="image/webp" />
	<img
		src={undefined}
		alt={imageData.alt}
		width={imageData.width}
		height={imageData.height}
		loading={eager ? 'eager' : 'lazy'}
		class="{className} {typeof imageData.avifSrc === 'object' ? 'rounded-2xl md:mx-auto md:max-w-screen-sm' : ''}" />
</picture>
