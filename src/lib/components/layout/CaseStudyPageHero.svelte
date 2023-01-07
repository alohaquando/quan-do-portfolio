<script>
	import BottomColorBar from '$lib/components/visuals/BottomColorBar.svelte';

	export let title = 'Title';
	export let headline = 'Headline';

	import { themeStore } from '$lib/stores/theme.js';

	import Display from '$lib/components/typography/DisplayLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	import test from '$lib/assets/images/extendable-card-component/2nd-iteration-L.png';
	import FrameOutline from "$lib/components/visuals/FrameOutline.svelte";
</script>

<header class="relative flex h-[85vh] justify-center">
	<!--		Background-->
	<div class="absolute top-0 bottom-0 left-0 right-0">
		<!--		Background Colors-->
		<div
			class="absolute flex h-full w-full items-center  -space-x-96 overflow-clip opacity-40 blur-3xl dark:opacity-80">
			<div
				class="h-5/6 w-full flex-none [background-image:linear-gradient(90deg,rgba(217,119,6,0.2)_0%,rgba(217,119,6,0.4)_32.29%,rgba(220,38,38,0.3)_67.19%,rgba(202,138,4,0.2)_100%)]" />
		</div>

		<!--	Color Bar-->
		<BottomColorBar />

		<!--Background-->
		<div class="absolute h-full w-full bg-white/80 dark:bg-zinc-900/20 md:rounded-3xl" />
	</div>

	<!--	Front Content-->
	<div class="relative flex w-full flex-col gap-6  px-6 pt-8 pb-24 sm:max-w-[55rem] sm:pt-24">
		<!--	Image-->
		<div class="my-auto flex h-24 flex-grow items-center justify-center">
			<div class="relative h-full [&_img]:h-full [&_img]:w-full [&_img]:object-scale-down bg-green-500">
				<slot />
				<FrameOutline/>
			</div>
			<!--			<slot />-->
		</div>

		<!--	Image Design Block Outline -->

		<!--	Text-->
		<div class="flex flex-col place-content-center items-center gap-2 text-center sm:gap-4">
			<Display>{title}</Display>
			<Headline>{headline}</Headline>
		</div>
		<!--	Text-->
	</div>
</header>
