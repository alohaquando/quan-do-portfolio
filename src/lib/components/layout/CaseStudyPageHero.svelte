<script>
	export let title = 'Title';
	export let headline = 'Headline';
	export let color = 'blue';

	import Icon from '$lib/components/iconography/Icon.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';
	import DisplayMedium from '$lib/components/typography/display/DisplayMedium.svelte';
	import SlidingButton from '$lib/components/buttons/SlidingButton.svelte';

	import { page } from '$app/stores';
	let return_path = $page.url.pathname;
	return_path = return_path.replace('/work/', '');

	import { Colors } from '$lib/components/visuals/Colors.js';
	const gradientGroupColors = Colors.gradientGroupColors;
	const textGradientColor = Colors.textGradientColors;
</script>

<header class="relative flex">
	<!--Visual-->
	<div class="blur-fix pointer-events-none absolute z-0 h-full w-full overflow-clip">
		<!--Prominent bottom glow-->
		<div class="{gradientGroupColors[color].first} gradients-brand-style absolute -top-1/2 bottom-1/2 -left-1/3 right-0 rounded-[90%] bg-gradient-to-r" />
		<div class="{gradientGroupColors[color].second} gradients-brand-style absolute -top-1/2 bottom-1/2 left-0 right-0 rounded-[50%] bg-gradient-radial" />
		<div class="{gradientGroupColors[color].third} gradients-brand-style absolute -top-1/2 bottom-1/2 left-0 -right-1/3 rounded-[80%] bg-gradient-to-l" />
	</div>

	<!--Elements-->
	<div class="max-w-brand-style z-10 flex grow flex-col gap-12 pb-8 pt-20 sm:pt-24">
		<!--Left side-->
		<div class="flex flex-col place-content-center gap-3 lg:gap-3">
			<!--Back-->
			<SlidingButton
				{color}
				href="/#{return_path}">
				<Icon
					name="chevron_left"
					class="w-4 stroke-zinc-500 group-hover:stroke-zinc-900 group-hover:stroke-[3px] dark:stroke-zinc-400 dark:group-hover:stroke-white" />
				Work
			</SlidingButton>

			<!--Text-->
			<div class="flex flex-col gap-1">
				<DisplayLarge class="{textGradientColor[color]} text-gradient">{title}</DisplayLarge>
				<DisplayMedium class="">{headline}</DisplayMedium>
			</div>
		</div>

		<!--Right side-->
		<div class="glass-light w-fit self-center rounded-2xl p-2">
			<div class="[&_img]:ring-glass [&_img]:max-h-[55vh] [&_img]:min-h-[8rem] [&_img]:rounded-lg [&_img]:object-contain">
				<slot />
			</div>
		</div>
	</div>
</header>
