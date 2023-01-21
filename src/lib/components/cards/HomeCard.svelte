<script>
	import DisplaySmall from "$lib/components/typography/display/DisplaySmall.svelte";

	export let href = '/';
	export let title = 'Title';
	export let icon = 'sparkles';
	export let color = 'amber';
	export let colorOpacity = 'low';

	let className;
	// noinspection ReservedWordAsName
	export { className as class };

	const ringColors = {
		amber: 'group-hover:ring-amber-300 ',
		blue: 'group-hover:ring-blue-300 ',
		purple: 'group-hover:ring-purple-300 ',
		indigo: 'group-hover:ring-indigo-300 ',
		pink: 'group-hover:ring-pink-300 ',
		rose: 'group-hover:ring-rose-300 ',
		orange: 'group-hover:ring-orange-300 '
	};

	const bgColors = {
		amber: 'bg-amber-300 dark:bg-amber-800',
		blue: 'bg-blue-300 dark:bg-blue-800',
		purple: 'bg-purple-300 dark:bg-purple-800',
		indigo: 'bg-indigo-300 dark:bg-indigo-800',
		pink: 'bg-pink-300 dark:bg-pink-800',
		rose: 'bg-rose-300 dark:bg-rose-800',
		orange: 'bg-orange-300 dark:bg-orange-800'
	};

	const glowColors = {
		amber: 'from-amber-300 dark:from-amber-800',
		blue: 'from-blue-300 dark:from-blue-800',
		purple: 'from-purple-300 dark:from-purple-800',
		indigo: 'from-indigo-300 dark:from-indigo-800',
		pink: 'from-pink-300 dark:from-pink-800',
		rose: 'from-rose-300 dark:from-rose-800',
		orange: 'from-orange-300 dark:from-orange-800'
	};

	const glowOpacity = {
		high: 'dark:opacity-20 opacity-0 dark:group-hover:opacity-40',
		low: 'dark:opacity-10 opacity-0 dark:group-hover:opacity-20'
	};

	import DisplayMedium from '$lib/components/typography/display/DisplayMedium.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
</script>

<a
	{href}
	class="group contents">
	<!--Card-->
	<div
		class="{className} {ringColors[
			color
		]} ring-glass-light relative z-0 flex h-full rounded-3xl shadow-sm transition hover:shadow group-hover:scale-[1.02] dark:bg-zinc-900/20 dark:group-hover:ring-white/20 sm:items-end">
		<!--Visual-->
		<div class="blur-fix absolute h-full w-full overflow-clip rounded-3xl">
			<!--Whole card color-->
			<div
				class="{glowColors[
					color
				]} absolute top-0 -bottom-full left-1/2 z-10 w-[200%] -translate-x-1/2 transform bg-gradient-radial opacity-0 dark:opacity-5 dark:group-hover:opacity-10 dark:group-hover:saturate-[150%]" />
			<!--Prominent bottom glow-->
			<div
				class="{glowColors[color]} {glowOpacity[
					colorOpacity
				]} blur-fix absolute top-2/3 -bottom-1/2 -left-1/2 z-20 w-[200%] rounded-[50%] bg-gradient-radial blur-3xl transition dark:group-hover:saturate-[150%] " />
		</div>

		<!--Text and icon-->
		<div
			class="z-30 flex grow flex-col place-content-center items-center gap-2 px-6 py-4 sm:flex-row sm:place-content-between sm:px-10 sm:py-6">
			<DisplaySmall>{title}</DisplaySmall>
			<Icon
				name={icon}
				size="w-6 sm:w-7"
				stroke_width="1.7"
				class="stroke-stone-900 dark:stroke-zinc-300 max-sm:order-first" />
		</div>

		<!--Behind card glow on hover-->
		<div
			class="{glowColors[
				color
			]} blur-fix pointer-events-none absolute top-0 right-0 left-0 bottom-0 -z-30 bg-gradient-radial opacity-0 blur-3xl transition dark:group-hover:opacity-5 " />
	</div>

	<!--	Whole page color on hover-->
	<div
		class="{bgColors[
			color
		]} blur-fix pointer-events-none absolute top-0 right-0 left-0 bottom-0 -z-40 opacity-0 blur-3xl transition dark:group-hover:opacity-5" />
</a>
