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
</script>

<a
	{href}
	class="contents">
	<!-- Card -->
	<div
		id={href}
		class="{solidColors[color]} {className} relative isolate flex w-64 shrink-0 flex-col overflow-clip rounded-3xl sm:w-auto">
		<!-- Title and Arrow -->
		<div class="pointer-events-none z-10 flex p-6  md:p-8">
			<Title>
				{title}
				<Icon
					name="arrow_right_solid"
					size="w-8 h-8 md:w-10 md:h-10"
					type="fill"
					class="mb-2 inline-block" />
			</Title>
		</div>
		<!-- /Title and Arrow -->

		<!-- Image -->
		<div class="relative grow">
			<div class="bg-glass pointer-events-none absolute top-0 -bottom-6 -right-6 z-10  w-3/4 rounded-b-3xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
				<slot />
			</div>
		</div>
		<!-- /Image -->

		<!-- Glow on hover -->
		<HoverGlow
			class="rounded-3xl" />
		<!-- /Glow on hover -->
	</div>
	<!-- /Card -->
</a>
