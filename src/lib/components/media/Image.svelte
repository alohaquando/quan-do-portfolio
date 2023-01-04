<script>
	export let imageData;

	let className;
	// noinspection ReservedWordAsName
	export { className as class };

	// noinspection ES6UnusedImports
	import lazySizes from 'lazysizes';

	import { themeStore } from '$lib/stores/theme.js';
</script>

{#if imageData.lightDark}
	{#if $themeStore === 'light'}
		<picture>
			<source
				data-srcset={imageData.avifSrcLight}
				type="image/avif" />
			<source
				data-srcset={imageData.webpSrcLight}
				type="image/webp" />
			<img
				data-sizes="auto"
				width={imageData.width}
				height={imageData.height}
				class="lazyload mx-auto my-2 rounded-2xl border border-black/10 object-scale-down shadow-sm sm:rounded-3xl {className}"
				src={imageData.lowQualitySrcLight}
				alt={imageData.alt} />
		</picture>
	{:else}
		<picture>
			<source
				data-srcset={imageData.avifSrcDark}
				type="image/avif" />
			<source
				data-srcset={imageData.webpSrcDark}
				type="image/webp" />
			<img
				data-sizes="auto"
				width={imageData.width}
				height={imageData.height}
				class="lazyload mx-auto my-2 rounded-2xl border border-white/10 object-scale-down sm:rounded-3xl
{className}"
				src={imageData.lowQualitySrcDark}
				alt={imageData.alt} />
		</picture>
	{/if}
{:else}
	<picture>
		<source
			data-srcset={imageData.avifSrc}
			type="image/avif" />
		<source
			data-srcset={imageData.webpSrc}
			type="image/webp" />
		<img
			data-sizes="auto"
			width={imageData.width}
			height={imageData.height}
			class="lazyload w-full h-full {className}"
			src={imageData.lowQualitySrc}
			alt={imageData.alt} />
	</picture>
{/if}
