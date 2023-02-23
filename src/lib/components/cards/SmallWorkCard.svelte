<script>
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let title = 'Title';
	export let href = '/';
	export let color = 'monochrome';

	let className;
	export { className as class };

	import { solidColors } from '$lib/data/Colors.js';
	import Title from '$lib/components/typography/Title.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
	import Animate from '$lib/utilities/Animate.svelte';
</script>

<Animate
	class="{className} flex w-64 grow sm:w-auto"
	preAnimationLocation="max-sm:translate-x-56 sm:translate-y-56">
	<a
		{href}
		class="contents">
		<!-- Card -->
		<div
			id={href}
			class="{solidColors[color]} relative isolate grow flex flex-col overflow-clip rounded-3xl">
			<!-- Title and Arrow -->
			<div class="pointer-events-none z-10 flex p-6  md:p-8">
				<Title>
					{title}
					<Icon
						name="arrow_right_solid"
						size="w-8 h-8 md:w-10 md:h-10"
						class="mb-2 inline-block" />
				</Title>
			</div>
			<!-- /Title and Arrow -->

			<!-- Image -->
			<div class="relative flex grow self-stretch">
				<div class="bg-glass pointer-events-none absolute top-0 -bottom-6 -right-6 z-10  w-3/4 rounded-b-3xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
					<!--	TODO: Figure out how to conditionally pass images	-->
					<slot />
				</div>
			</div>
			<!-- /Image -->

			<!-- Glow on hover -->
			<HoverGlow class="rounded-3xl" />
			<!-- /Glow on hover -->
		</div>
		<!-- /Card -->
	</a>
</Animate>
