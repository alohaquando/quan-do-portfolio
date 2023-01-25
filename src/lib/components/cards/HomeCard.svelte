<script>
	import DisplaySmall from '$lib/components/typography/display/DisplaySmall.svelte';

	export let href = '/';
	export let title = 'Title';
	export let icon = 'sparkles';
	export let color = 'amber';
	export let colorOpacity = 'low';

	let className;
	// noinspection ReservedWordAsName
	export { className as class };

	import { Colors } from '$lib/components/visuals/Colors.js';

	const bgColors = Colors.bgColors;
	const ringColors = Colors.ringHoverColors;
	const glowColors = Colors.gradientColors;

	const glowOpacity = {
		high: 'dark:opacity-5 dark:group-hover:opacity-10',
		low: 'dark:opacity-5 dark:group-hover:opacity-10'
	};

	import Icon from '$lib/components/iconography/Icon.svelte';
</script>

<a
	{href}
	class="group contents">
	<!--Card-->
	<div class="{className} {ringColors[color]} glass group-hover:scale-brand-style relative z-0 flex h-full rounded-3xl shadow-sm transition group-hover:shadow group-hover:ring-2 sm:items-end">
		<!--Visual-->
		<div class="blur-fix absolute h-full w-full overflow-clip rounded-3xl">
			<!--Whole card color-->
			<div class="{glowColors[color]} {glowOpacity[colorOpacity]} absolute top-0 -bottom-full left-1/2 z-10 w-[200%] -translate-x-1/2 transform bg-gradient-radial opacity-0 dark:group-hover:saturate-[110%]" />
			<!--Prominent bottom glow-->
			<div class="{glowColors[color]} {glowOpacity[colorOpacity]} blur-2xl absolute top-2/3 -bottom-1/2 -left-1/2 z-20 w-[200%] rounded-[50%] bg-gradient-radial opacity-0 transition dark:group-hover:saturate-[110%] " />
		</div>

		<!--Text and icon-->
		<div class="z-30 flex grow flex-col place-content-center items-center gap-2 px-6 py-4 sm:flex-row sm:place-content-between sm:px-10 sm:py-6">
			<DisplaySmall>{title}</DisplaySmall>
			<Icon
				name={icon}
				size="w-6 sm:w-7"
				stroke_width="1.7"
				class="stroke-stone-900 dark:stroke-zinc-300 max-sm:order-first" />
		</div>

		<!--Behind card glow on hover-->
		<div class="{glowColors[color]} blur-fix pointer-events-none absolute top-0 right-0 left-0 bottom-0 -z-30 bg-gradient-radial opacity-0 blur-3xl transition dark:group-hover:opacity-5 " />
	</div>

	<!--	Whole page color on hover-->
	<div class="{bgColors[color]} blur-fix pointer-events-none absolute top-0 right-0 left-0 bottom-0 -z-40 opacity-0 blur-3xl transition dark:group-hover:opacity-10" />
</a>
