<script>
	import src from '$lib/assets/images/bg/noise.webp';

	let className = undefined;
	export { className as class };
</script>

<div
	class="absolute top-0 left-0 right-0 bottom-0 bg-center bg-repeat mix-blend-overlay opacity-[15%] pointer-events-none {className}"
	style="background-image: url({src})" />
