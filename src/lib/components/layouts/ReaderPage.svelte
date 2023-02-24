<script>
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import A from '$lib/components/navigation/A.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import TaglineTitle from '$lib/components/typography/TaglineTitle.svelte';

	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let highlight = 'Highlight';
	export let color = 'blue';

	import { solidColors, readerGradients, solidColorsHex } from '$lib/data/Colors.js';

	// For navigating back to right location
	import { page } from '$app/stores';
	export let pathBack = '/#' + $page.route.id;

	import { colorScheme, readerMode } from '$lib/data/colorScheme.js';
	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import Animate from '$lib/components/visuals/Animate.svelte';
	onMount(() => {
		readerMode.set(true);
	});
	beforeNavigate(() => {
		readerMode.set(false);
	});


	import {scrollY, innerHeight} from "$lib/data/window.js";
</script>



<svelte:head>
	<title>{title} | Quân Đỗ | Portfolio</title>
	{#if $scrollY < $innerHeight / 2}
		{#if $colorScheme === 'dark'}
			<meta
				name="theme-color"
				content={solidColorsHex.dark[color]} />
		{:else}
			<meta
				name="theme-color"
				content={solidColorsHex.light[color]} />
		{/if}
	{:else if $colorScheme === 'dark'}
		<meta
			name="theme-color"
			content={solidColorsHex.dark.reader} />
	{:else}
		<meta
			name="theme-color"
			content={solidColorsHex.light.reader} />
	{/if}
</svelte:head>

<!-- Reader Page -->
<div class="mx-auto flex w-full flex-col place-content-center gap-24 px-6 pt-8 sm:px-16 sm:pt-16 md:pt-[12rem]">
	<!-- Heading Block -->
	<div class="flex flex-col gap-12 md:gap-16">
		<!-- Text -->
		<div class="mx-auto flex w-full max-w-screen-md flex-col gap-6">
			<!-- Back -->
			<Animate>
				<A
					class="!px-3 ring-1 ring-gray-900/20 dark:ring-white/20"
					href={pathBack}>
					<Icon name="arrow_left" />
				</A>
			</Animate>
			<!-- /Back -->
			<!-- Title and Subtitle -->
			<div>
				<Animate>
					<DisplaySmall>{title}</DisplaySmall>
				</Animate>
				<Animate>
					<BodyLarge class="opacity-50">{subtitle}</BodyLarge>
				</Animate>
			</div>
			<!-- /Title and Subtitle -->
		</div>
		<!-- /Text -->

		<!-- Hero Image -->
		{#if $$slots.hero_img}
			<!-- Hero Image -->
			<Animate class="mx-auto max-w-screen-lg">
				<div class="bg-glass ">
					<slot name="hero_img" />
				</div>
			</Animate>
		{/if}
		<!-- /Hero Image -->
	</div>
	<!-- /Heading Block -->

	<Animate>
		<!-- Highlight Block -->
		{#if $$slots.highlight}
			<div class="{solidColors[color]} mx-auto flex w-full max-w-screen-md flex-col gap-6 rounded-3xl bg-opacity-50 py-10 px-8 md:gap-8 md:py-16 md:px-12">
				<TaglineTitle
					tagline="Highlight"
					title={highlight} />
				<slot name="highlight" />
			</div>
		{/if}
		<!-- /Highlight Block -->
	</Animate>

	<!-- Slot -->
	<Animate>
		<div class="mx-auto flex max-w-screen-md flex-col gap-10">
			<slot />
		</div>
	</Animate>
	<!-- /Slot -->

	<!-- Color BG -->
	<div class="{readerGradients[color]} min-h-screen-safe absolute top-0 left-0 right-0 -z-10" />
	<!-- /Color BG -->
</div>
<!-- /Reader Page -->
