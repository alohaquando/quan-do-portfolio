<script>
	import BottomColorBar from '$lib/components/visuals/BottomColorBar.svelte';

	export let title = 'Title';
	export let headline = 'Headline';

	import Display from '$lib/components/typography/DisplayLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
</script>

<header class="relative flex h-[32rem] min-h-[600px] justify-center sm:h-[56rem]">
	<!--		Background-->
	<div class="absolute top-0 bottom-0 left-0 right-0">
		<!--		Background Colors-->
		<div
			class="absolute flex h-full w-full items-center -space-x-96 overflow-clip opacity-80 blur-3xl">
			<div
				class="h-5/6 w-full flex-none [background-image:linear-gradient(90deg,rgba(217,119,6,0.2)_0%,rgba(217,119,6,0.4)_32.29%,rgba(220,38,38,0.3)_67.19%,rgba(202,138,4,0.2)_100%)]" />
		</div>

		<!--	Color Bar-->
		<BottomColorBar />

		<!--Background-->
		<div class="absolute h-full w-full bg-white/20 dark:bg-zinc-900/20 md:rounded-3xl" />
	</div>

	<!--	Front Content-->
	<div class="relative mx-6 mb-12 mt-4 flex flex-grow flex-col gap-6 sm:mb-24 sm:max-w-[55rem]">
		<!--	Image-->
		<div
			class="[&_img]:glass-light relative flex flex-grow place-content-center items-center sm:mt-24 [&_img]:mx-auto [&_img]:max-h-[26rem] [&_img]:rounded-2xl [&_img]:object-contain [&_img]:p-2 sm:[&_img]:max-h-[32rem]">
			<slot />
		</div>

		<!--	Text-->
		<div class="flex flex-col gap-2 text-center sm:gap-4">
			<Display>{title}</Display>
			<Headline>{headline}</Headline>
		</div>
		<!--	Text-->
	</div>
</header>
