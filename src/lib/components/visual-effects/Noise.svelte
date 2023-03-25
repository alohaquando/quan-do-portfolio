<script lang="ts">
	import avifSrc from '$lib/assets/images/bg/noise.avif';
	import webpSrc from '$lib/assets/images/bg/noise.webp';

	let className = '';
	export { className as class };
</script>

<div
	class="{className} pointer-events-none absolute top-0 left-0 right-0 bottom-0 select-none bg-center bg-repeat mix-blend-overlay [background-size:23%] lg:[background-size:10%]"
	aria-hidden="true"
	style="background-image: url({webpSrc}); background-image: -webkit-image-set(url({webpSrc}) type('image/webp'), url({avifSrc}) type('image/avif')); background-image: image-set(url({webpSrc}) type('image/webp'), url({avifSrc}) type('image/avif')); " />

