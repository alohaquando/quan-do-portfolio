<script>
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let highlight = 'Highlight';
	export let color = 'blue';

	import { solidColors, readerGradients, solidColorsHex } from '$lib/data/Colors.js';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';
	import TaglineTitle from '$lib/components/typography/TaglineTitle.svelte';

	import { readerMode } from '$lib/data/colorScheme.js';

	let root;
	onMount(() => {
		root = document.getElementsByTagName('html')[0];
		root?.classList.remove('dark:bg-black');
		root?.classList.add('dark:bg-zinc-900');
		readerMode.set(true);
	});
	beforeNavigate(() => {
		root?.classList.remove('dark:bg-zinc-900');
		root?.classList.add('dark:bg-black');
		readerMode.set(false);
	});

	let scrollY;
	let innerHeight;

	import { page } from '$app/stores';
	import A from "$lib/components/navigation/A.svelte";
	export let pathBack = '/#' + $page.route.id;
</script>

<svelte:window
	bind:scrollY
	bind:innerHeight />

<svelte:head>
	<title>{title} | Quân Đỗ | Portfolio</title>
	{#if scrollY < innerHeight / 2}
		<meta
			name="theme-color"
			media="(prefers-color-scheme: dark)"
			content={solidColorsHex[color]} />
	{:else}
		<meta
			name="theme-color"
			content="#18181b" />
	{/if}
</svelte:head>

<!-- Reader Page -->
<div class="mx-auto flex w-full flex-col place-content-center gap-24 px-6 pt-8 sm:pt-16 sm:px-16 md:pt-[12rem]">
	<!-- Heading Block -->
	<div class="flex flex-col gap-12 md:gap-16">
		<!-- Text -->
		<div class="mx-auto flex w-full max-w-screen-md flex-col gap-6">
			<!-- Back -->
			<A
				class="!px-3 border border-white/20"
				href={pathBack}>
				<Icon
					name="arrow_left"
					type="fill" />
			</A>
			<!-- /Back -->
			<!-- Title and Subtitle -->
			<div>
				<DisplaySmall>{title}</DisplaySmall>
				<BodyLarge class="opacity-50 ">{subtitle}</BodyLarge>
			</div>
			<!-- /Title and Subtitle -->
		</div>
		<!-- /Text -->

		<!-- Hero Image -->
		{#if $$slots.hero_img}
			<!-- Hero Image -->
			<div class="bg-glass mx-auto max-w-screen-lg">
				<slot name="hero_img" />
			</div>
		{/if}
		<!-- /Hero Image -->
	</div>
	<!-- /Heading Block -->

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

	<!-- Slot -->
	<div class="mx-auto flex max-w-screen-md flex-col gap-10">
		<slot />
	</div>
	<!-- /Slot -->

	<!-- Color BG -->
	<div class="{readerGradients[color]} min-h-screen-safe absolute top-0 left-0 right-0 -z-10" />
	<!-- /Color BG -->
</div>
<!-- /Reader Page -->
