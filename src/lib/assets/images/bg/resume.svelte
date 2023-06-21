<script lang="ts">
	import Image from '$lib/components/media/Image.svelte';

	// Alt text
	export let alt = 'Resume';
	// Lazy / eager loading
	export let eager = false;

	// Metadata
	// noinspection TypeScriptCheckImport
	import { width, height } from '$lib/assets/images/bg/resume.avif?as=meta:width;height&imagetools';

	// Image
	import avifSrc from '$lib/assets/images/bg/resume.avif?width=720;1024&format=avif&as=srcset&imagetools';
	import webpSrc from '$lib/assets/images/bg/resume.avif?width=720;1024&format=webp&as=srcset&imagetools';

	const imageData = {
		alt,
		width,
		height,
		avifSrc,
		webpSrc
	};

	let className = '';
	export { className as class };
</script>

<Image
	{imageData}
	{eager}
	class={className} />
