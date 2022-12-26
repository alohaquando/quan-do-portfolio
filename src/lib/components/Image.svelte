<script>
	export let imageData;

	let className;
	export { className as class };

	import lazySizes from 'lazysizes';

	import { themeStore } from '$lib/stores/theme.js';
</script>

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
			class="lazyload rounded-2xl sm:rounded-[36px] border border-[rgba(0,0,0,0.08)] shadow-sm  sm:w-[60vw] object-scale-down mx-auto {className}"
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
			class="lazyload rounded-2xl sm:rounded-[36px] border border-[rgba(255,255,255,0.15)] sm:w-[60vw] object-scale-down mx-auto
{className}"
			src={imageData.lowQualitySrcDark}
			alt={imageData.alt} />
	</picture>
{/if}
