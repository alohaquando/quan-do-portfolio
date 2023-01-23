<script>
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';

	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/';
	export let color = 'blue';

	const gradientGroupClasses =
		'blur-fix opacity-40 blur-3xl transition dark:opacity-20 dark:group-hover:opacity-30 dark:group-hover:saturate-[110%] group-hover:opacity-50 group-hover:saturate-[120%]';

	import { Colors } from '$lib/components/visuals/Colors.js';
	import Body from '$lib/components/typography/Body.svelte';
	import DisplaySmall from '$lib/components/typography/display/DisplaySmall.svelte';

	const ringHoverColors = Colors.ringHoverColors;
	const gradientGroupColors = Colors.gradientGroupColors;
	const textColors = Colors.textColors;
	const textGradientColor = Colors.textGradientColors;
</script>

<a
	class="group contents"
	{href}>
	<div
		class="relative flex h-[40rem] w-screen place-content-center items-center [left:calc(-50vw+50%)] lg:h-[70vh]">
		<!--Visual-->
		<div class="blur-fix absolute z-0 h-full w-full overflow-clip">
			<!--Prominent bottom glow-->
			<div
				class="{gradientGroupColors[color]
					.first} {gradientGroupClasses} absolute top-1/2 -bottom-full left-0 z-20 w-full rounded-[90%] bg-gradient-to-r" />
			<div
				class="{gradientGroupColors[color]
					.second} {gradientGroupClasses} absolute top-3/4 -bottom-[60%] left-0 w-full rounded-[50%] bg-gradient-radial" />
			<div
				class="{gradientGroupColors[color]
					.third} {gradientGroupClasses} absolute top-1/4 -bottom-full left-0 w-full rounded-[80%] bg-gradient-to-l" />
		</div>

		<!--Elements-->
		<div
			class="z-10 flex flex-col gap-10 self-stretch overflow-clip px-6 max-lg:pb-96 max-lg:pt-24 sm:px-16 lg:grid lg:max-w-[65rem] lg:grid-cols-5 lg:flex-row lg:gap-0 lg:px-px">
			<!--Left side-->
			<div
				class="flex flex-col place-content-center gap-4 lg:col-span-3 lg:h-[70vh] lg:gap-10 lg:pr-40">
				<!--Text-->
				<div class="flex flex-col gap-1 lg:gap-2">
					<DisplaySmall class="{textColors[color]} ">{title}</DisplaySmall>
					<DisplayLarge
						class="{textGradientColor[
							color
						]} bg-clip-text text-transparent [background-image:linear-gradient(120deg,var(--tw-gradient-stops))]"
						>{subtitle}</DisplayLarge>
				</div>

				<!--Button-->
				<div
					class="{ringHoverColors[
						color
					]} group-hover:glass w-fit py-1 transition-all group-hover:rounded-full group-hover:px-6 group-hover:ring-2">
					<Body class="transition-all dark:group-hover:font-semibold dark:group-hover:text-white"
						>View -></Body>
				</div>
			</div>

			<!--Right side-->
			<div class="my-auto lg:col-span-2 lg:py-24">
				<div
					class="glass-light rounded-2xl p-2 [&_img]:h-full [&_img]:w-full [&_img]:ring-glass [&_img]:rounded-lg [&_img]:object-cover [&_img]:object-left-top">
					<slot name="image" />
				</div>
			</div>
		</div>
	</div>
</a>
