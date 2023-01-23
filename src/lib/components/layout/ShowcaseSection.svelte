<script>
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/';
	export let color = 'rose';

	import { Colors } from '$lib/components/visuals/Colors.js';
	import DisplayMedium from '$lib/components/typography/display/DisplayMedium.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import DisplaySmall from '$lib/components/typography/display/DisplaySmall.svelte';

	const ringColors = Colors.ringColors;
	const glowColors = Colors.gradientColors;
</script>

<a
	class="group contents"
	{href}>
	<div
		class="relative flex h-[40rem] w-screen place-content-center items-center overflow-clip [left:calc(-50vw+50%)] lg:h-[70vh]">
		<!--Visual-->
		<div class="blur-fix absolute z-0 h-full w-full overflow-clip">
			<!--Prominent bottom glow-->
			<div
				class="blur-fix absolute top-1/2 -bottom-full left-0 z-10 z-20 -z-20 w-full -translate-x-1/2 transform rounded-[50%] bg-gradient-to-r dark:from-green-700 from-green-200 opacity-40 blur-3xl transition dark:opacity-20 dark:group-hover:opacity-30 dark:group-hover:saturate-[110%]" />
			<div
				class="blur-fix absolute top-0 -bottom-[60%] left-0 z-10 z-20 -z-20 w-full -translate-x-1/2 transform rounded-[50%] bg-gradient-radial dark:from-sky-700 from-sky-200 opacity-40 blur-3xl transition dark:opacity-20 dark:group-hover:opacity-30 dark:group-hover:saturate-[110%]" />
			<div
				class="blur-fix absolute top-1/4 -bottom-full left-0 z-10 z-20 -z-20 w-full -translate-x-1/2 transform rounded-[50%] bg-gradient-to-l dark:from-blue-700 from-blue-200 opacity-40 blur-3xl transition dark:opacity-20 dark:group-hover:opacity-30 dark:group-hover:saturate-[110%]" />
		</div>

		<!--Elements-->
		<div
			class="z-10 flex flex-col gap-10 self-stretch px-6 max-lg:pb-96 max-lg:pt-24 sm:px-16 lg:grid lg:max-w-[65rem] lg:grid-cols-5 lg:flex-row lg:gap-0 lg:px-0 ">
			<!--Left side-->
			<div
				class="flex flex-col place-content-center gap-4 lg:col-span-3 lg:h-[70vh] lg:gap-6 lg:pr-40">
				<!--Text-->
				<div class="flex flex-col gap-1 lg:gap-2">
					<DisplaySmall class="text-blue-600 line-clamp-1 dark:text-blue-300">{title}</DisplaySmall>
					<DisplayMedium class="">{subtitle}</DisplayMedium>
				</div>

				<!--Button-->
				<div
					class="{ringColors[
						color
					]} group-hover:glass w-fit py-1 transition-all group-hover:rounded-full group-hover:px-6 group-hover:ring-2">
					<Body class="group-hover:dark:text-zinc-200">View -></Body>
				</div>
			</div>

			<!--Right side-->
			<div class="my-auto lg:col-span-2 lg:py-24">
				<div
					class="glass-light rounded-2xl p-2 [&_img]:h-full [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover [&_img]:object-left-top">
					<slot name="image" />
				</div>
			</div>
		</div>
	</div>
</a>
