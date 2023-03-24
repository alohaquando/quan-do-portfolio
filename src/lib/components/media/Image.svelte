<!--suppress HtmlWrongAttributeValue -->
<script lang="ts">
	import { colorScheme } from '$lib/data/colorScheme.js';

	let className: string = '';
	export { className as class };
	export let imageData: { webpSrc: { light: any; dark: any }; alt: string; width: any; avifSrc: { light: any; dark: any }; height: any };
	export let eager: boolean;
</script>

<picture>
	<source
		srcset={imageData.avifSrc.light ? ($colorScheme === 'light' ? imageData.avifSrc.light : imageData.avifSrc.dark) : imageData.avifSrc}
		type="image/avif" />
	<source
		srcset={imageData.webpSrc.light ? ($colorScheme === 'light' ? imageData.webpSrc.light : imageData.webpSrc.dark) : imageData.webpSrc}
		type="image/webp" />
	<img
		src={undefined}
		alt={imageData.alt}
		width={imageData.width}
		height={imageData.height}
		loading={eager ? 'eager' : 'lazy'}
		class="{className} {imageData.avifSrc.light || imageData.webpSrc.light ? 'rounded-2xl md:mx-auto md:max-w-screen-sm' : ''}" />
</picture>
