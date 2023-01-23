<script>
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/';
	export let color = 'rose';

	import { Colors } from '$lib/components/visuals/Colors.js';

	const ringColors = Colors.ringColors;
	const glowColors = Colors.bgColors;

	import DisplayMedium from '$lib/components/typography/display/DisplayMedium.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<a
	{href}
	class="group contents">
	<div
		class="{ringColors[
			color
		]} glass group-hover:scale-brand-style relative z-0 flex h-full rounded-3xl shadow-sm transition group-hover:shadow-md group-hover:ring-2 sm:items-end">
		<!--Visual-->
		<div class="blur-fix absolute h-full w-full overflow-clip rounded-3xl">
			<!--Whole card color-->
			<div
				class="{glowColors[
					color
				]} absolute top-0 -bottom-full left-1/2 z-10 w-[200%] -translate-x-1/2 transform bg-gradient-radial opacity-0 dark:opacity-5 dark:group-hover:opacity-10 dark:group-hover:saturate-[110%]" />

			<!--Prominent bottom glow-->
			<div
				class="{glowColors[
					color
				]} blur-fix absolute top-2/3 -bottom-1/2 -left-1/2 z-20 w-[200%] rounded-[50%] bg-gradient-radial opacity-0 blur-3xl transition dark:opacity-5 dark:group-hover:opacity-10 dark:group-hover:saturate-[110%] " />

			<!--Image group-->
			<div class="absolute right-0 z-10 h-full w-1/3 md:w-2/5">
				<div class="absolute -bottom-4 top-12 w-[105%] transition-all">
					<!--Glass behind image-->
					<div
						class="glass-light absolute -top-3 left-3 -z-10 h-full w-full overflow-clip rounded-t-2xl" />
					<div
						class="{glowColors[
							color
						]} absolute -top-3 left-3 -z-10 h-full w-full overflow-clip rounded-t-2xl opacity-0 transition group-hover:opacity-20 dark:group-hover:opacity-0" />
					<!--Image-->
					<div
						class="ring-glass-light h-full overflow-clip rounded-2xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
						<slot name="image" />
					</div>
				</div>
			</div>
		</div>

		<!--		Left side-->
		<div class="z-10 w-2/3 space-y-4 px-6 py-8 sm:w-3/5 sm:space-y-6 sm:py-12 md:px-10">
			<!--			Logo-->
			<div class="w-8 overflow-clip rounded-lg sm:w-12 [&_img]:h-full [&_img]:w-full">
				<slot name="logo" />
			</div>

			<!--			Text-->
			<div class="flex flex-col space-y-1 sm:gap-2">
				<DisplayMedium class="line-clamp-2">{title}</DisplayMedium>
				<Body class="line-clamp-2">{subtitle}</Body>
			</div>
		</div>
	</div>
</a>
