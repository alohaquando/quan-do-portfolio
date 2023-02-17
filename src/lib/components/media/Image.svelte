<script>
	export let imageData;
	export let eager;

	let className;
	export { className as class };

	import { themeStore } from '$lib/data/colorScheme.js';

	const lightDarkImageClass = 'rounded-2xl md:max-w-screen-sm md:mx-auto';
</script>

{#if imageData.lightDark}
	{#if $themeStore === 'light'}
		<picture>
			<source
				srcset={imageData.avifSrcLight}
				type="image/avif" />
			<source
				srcset={imageData.webpSrcLight}
				type="image/webp" />
			<!--suppress HtmlWrongAttributeValue -->
			<img
				loading={eager ? 'eager' : 'lazy'}
				width={imageData.width}
				height={imageData.height}
				class="{className} {lightDarkImageClass}"
				alt={imageData.alt} />
		</picture>
	{:else}
		<picture>
			<source
				srcset={imageData.avifSrcDark}
				type="image/avif" />
			<source
				srcset={imageData.webpSrcDark}
				type="image/webp" />
			<!--suppress HtmlWrongAttributeValue -->
			<img
				loading={eager ? 'eager' : 'lazy'}
				sizes="auto"
				width={imageData.width}
				height={imageData.height}
				class="{className} {lightDarkImageClass}"
				alt={imageData.alt} />
		</picture>
	{/if}
{:else}
	<picture>
		<source
			srcset={imageData.avifSrc}
			type="image/avif" />
		<source
			srcset={imageData.webpSrc}
			type="image/webp" />
		<!--suppress HtmlWrongAttributeValue -->
		<img
			loading={eager ? 'eager' : 'lazy'}
			class="{className} h-auto"
			alt={imageData.alt} />
	</picture>
{/if}
