<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import { themeStore } from '$lib/stores/theme.js';

	let title = 'Quân Đô';

	import IMG_Me from '$lib/assets/images/about/me.svelte';
	import Title from "$lib/components/typography/Title.svelte";
	import Body from "$lib/components/typography/Body.svelte";
</script>

<header class="relative">
	<!--	Background-->
	<div>
		<!--		Background Colors-->
		<div
			class="absolute flex h-full w-full items-center -space-x-96 opacity-40 blur-3xl dark:opacity-80 ">
			<div
				class="h-5/6 w-full flex-none [background-image:linear-gradient(90deg,rgba(217,119,6,0.2)_0%,rgba(217,119,6,0.4)_32.29%,rgba(220,38,38,0.3)_67.19%,rgba(202,138,4,0.2)_100%)]" />
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
	</div>

	<!--	Front Content-->
	<div
		class="spacing-default relative flex flex-col px-6 pt-16 pb-12 transition-all sm:mx-12 sm:mb-4 sm:pt-40 sm:pt-56 md:mx-auto md:w-[40rem]">
		<div class="flex flex-col space-y-2 sm:space-y-4 sm:pb-28">
			<!--		Title-->
			<DisplayLarge class="">{title}</DisplayLarge>
			<!--		Subtitle -->
			<Headline class="sm:w-1/2">I'm a Senior UI/UX Designer with 2+ years of experience & Front-end Development skill </Headline>
		</div>
		<!--		Image-->
		<div
			class="relative outline outline-2 outline-amber-500 dark:outline-amber-600 sm:absolute sm:top-36 sm:-right-24 sm:w-3/5">
			<IMG_Me />
			<div class="absolute top-0 bottom-0 left-0 right-0 w-full">
				<div
					class="absolute -top-1 -left-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
				<div
					class="absolute -top-1 -right-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
				<div
					class="absolute -bottom-1 -left-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
				<div
					class="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-white outline outline-2 outline-amber-500 dark:outline-amber-600" />
			</div>
		</div>
	</div>
</header>

<!--Page-->
<PageLayout title="About">
	<!--	Content-->
	<div class="spacing-default">
		<Title>Hello</Title>
		<Body>This is something about me</Body>
	</div>
</PageLayout>

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
