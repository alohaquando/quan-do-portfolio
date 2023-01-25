<script>
	import DisplayXL from '$lib/components/typography/display/DisplayXL.svelte';
	export let title = 'Title';
	export let id;

	import { Colors } from '$lib/components/visuals/Colors.js';
	const textGradientColors = Colors.textGradientColors;
</script>

<section
	{id}
	class="space-brand-style min-h-screen pt-8 sm:py-24">
	<div class="relative lg:mb-16">
		<div class="blur-fix absolute -top-1/2 left-0 right-0 m-auto aspect-square h-[200%] w-auto rounded-full bg-gradient-radial from-sky-500/50 opacity-40 blur-3xl" />
		<DisplayXL class="scale-[.8] text-center font-medium ">{title}</DisplayXL>
	</div>
	<slot />
</section>
