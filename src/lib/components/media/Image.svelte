<script>
	export let imageData;
	export let eager;

	let className;
	// noinspection ReservedWordAsName
	export { className as class };

	import { themeStore } from '$lib/stores/theme.js';
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
				class="mx-auto my-2 rounded-2xl border border-black/10 object-scale-down shadow-sm sm:rounded-3xl {className}"
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
				class="mx-auto my-2 rounded-2xl border border-white/10 object-scale-down sm:rounded-3xl
{className}"
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
			class="{className} max-w-full"
			alt={imageData.alt} />
	</picture>
{/if}
