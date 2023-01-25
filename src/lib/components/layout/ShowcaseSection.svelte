<script>
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = '/';
	export let color = 'blue';

	import { Colors } from '$lib/components/visuals/Colors.js';
	import DisplaySmall from '$lib/components/typography/display/DisplaySmall.svelte';
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import SlidingButton from '$lib/components/buttons/SlidingButton.svelte';

	let return_path = href;
	return_path = return_path.replace('/work/', '');

	const gradientGroupColors = Colors.gradientGroupColors;
	const textColors = Colors.textColors;
	const textGradientColor = Colors.textGradientColors;
</script>

<a
	class="group contents"
	{href}>
	<div
		id={return_path}
		class="relative flex h-[40rem] w-screen place-content-center items-center [left:calc(-50vw+50%)] lg:h-[70vh]">
		<!--Visual-->
		<div class="blur-fix absolute z-0 h-full w-full overflow-clip">
			<!--Prominent bottom glow-->
			<div class="{gradientGroupColors[color].first} gradients-brand-style absolute top-1/2 -bottom-full left-0 right-0 rounded-[90%] bg-gradient-to-r" />
			<div class="{gradientGroupColors[color].second} gradients-brand-style absolute top-3/4 -bottom-[60%] left-0 right-0 rounded-[50%] bg-gradient-radial" />
			<div class="{gradientGroupColors[color].third} gradients-brand-style absolute top-1/4 -bottom-full left-0 right-0 rounded-[80%] bg-gradient-to-l" />
		</div>

		<!--Elements-->
		<div class="max-w-brand-style z-10 flex flex-col gap-10 self-stretch overflow-clip max-lg:pb-96 max-lg:pt-24 lg:grid lg:grid-cols-5 lg:gap-0">
			<!--Left side-->
			<div class="flex flex-col place-content-center gap-4 lg:col-span-3 lg:h-[70vh] lg:gap-10 lg:pr-40">
				<!--Text-->
				<div class="flex flex-col gap-1 lg:gap-2">
					<DisplaySmall class="{textColors[color]} ">{title}</DisplaySmall>
					<DisplayLarge class="{textGradientColor[color]} text-gradient font-medium">{subtitle}</DisplayLarge>
				</div>

				<!--Button-->
				<SlidingButton
					{href}
					{color}
					>View <Icon
						name="chevron_right"
						class="w-4 stroke-zinc-500 group-hover:stroke-zinc-900 group-hover:stroke-[3px] dark:stroke-zinc-400 dark:group-hover:stroke-white" /></SlidingButton>
			</div>

			<!--Right side-->
			<div class="my-auto lg:col-span-2 lg:py-24">
				<div class="glass-light [&_img]:ring-glass rounded-2xl p-2 [&_img]:h-full [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover [&_img]:object-left-top">
					<slot name="image" />
				</div>
			</div>
		</div>
	</div>
</a>
