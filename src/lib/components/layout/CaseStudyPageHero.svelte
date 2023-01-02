<script>
	export let title = 'Title';
	export let headline = 'Headline';

	import { themeStore } from '$lib/stores/theme.js';

	import Display from '$lib/components/typography/DisplayLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
</script>

<header class="relative">
	<!--		Background Colors-->
	<div
		class="absolute flex h-full w-full items-center opacity-40 blur-3xl dark:opacity-80 ">
		<div class="h-[83%] w-[44%] rounded-full bg-red-600 dark:bg-red-900 " />
		<div class="h-[83%] w-[44%] rounded-full bg-amber-600 dark:bg-amber-900 " />
		<div class="h-[83%] w-[44%] rounded-full bg-yellow-600 dark:bg-yellow-900 " />
	</div>
	<!--		Background Colors-->

	<!--	Color Bar-->
	<div class="absolute -bottom-px flex h-[2px] w-full dark:opacity-80">
		<div
			class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(217,119,6,0)_0%,rgba(217,119,6,0.4)_32.29%,rgba(220,38,38,0.3)_67.19%,rgba(202,138,4,0)_100%)]" />
		<div
			class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(217,119,6,0)_0%,rgba(217,119,6,0.4)_32.29%,rgba(220,38,38,0.3)_67.19%,rgba(202,138,4,0)_100%)]" />
		<div
			class="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(217,119,6,0)_0%,rgba(217,119,6,0.4)_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(202,138,4,0)_100%)]" />
		<div
			class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(200,38,38,0)_0%,rgba(200,38,38,0.4)_32.29%,rgba(220,38,38,0.3)_67.19%,rgba(202,138,4,0)_100%)]" />
	</div>
	<!--	Color Bar-->

	<!--Background-->
	<div
		class="absolute h-full w-full bg-white/80 dark:bg-zinc-900/20 md:rounded-3xl {$themeStore ===
		'light'
			? 'hero'
			: 'hero-dark'}" />
	<!--Background-->

	<!--	Front Content-->
	<div
		class="flex flex-col place-content-center items-center space-y-6 py-16 text-center sm:space-y-10 md:pt-16">
		<!--	Image Design Block Outline -->
		<div
			class="relative mx-10 outline outline-2 outline-amber-500 dark:outline-amber-600 sm:max-w-xs">
			<!--	Image Design Block 4 Corners Squares-->
			<div>
				<div
					class="absolute -top-1 -left-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
				<div
					class="absolute -top-1 -right-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
				<div
					class="absolute -bottom-1 -left-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
				<div
					class="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
			</div>
			<!--	Image goes here-->
			<slot />
		</div>
		<!--	Image Design Block Outline -->

		<!--	Text-->
		<div
			class="relative mx-6 flex flex-col place-content-center items-center space-y-4 sm:space-y-6">
			<!--	Title-->
			<Display>
				{title}
			</Display>
			<!--	Subtitle-->
			<Headline>
				{headline}
			</Headline>
		</div>
		<!--	Text-->
	</div>
</header>

<style>
	.hero {
		background-size: 40px 40px;
		background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
		background-position: center;
	}

	.hero-dark {
		background-size: 40px 40px;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
		background-position: center;
	}
</style>
