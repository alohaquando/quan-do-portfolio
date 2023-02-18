<script>
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let title = 'Title';
	export let href = '/';
	export let color = 'blue';

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
		class="{solidColors[color]} relative flex w-64 flex-col rounded-3xl max-lg:shrink-0 md:w-80 lg:w-auto">
		<!-- Title and Arrow -->
		<div class="flex basis-3/5 p-8 z-10 pointer-events-none">
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
		<div class="relative isolate grow overflow-hidden rounded-b-3xl z-10 pointer-events-none">
			<div class="bg-glass absolute top-0 -right-12 w-5/6">
				<slot />
			</div>
		</div>
		<!-- /Image -->

		<!-- Glow on hover -->
		<HoverGlow
			{color}
			class="rounded-3xl" />
		<!-- /Glow on hover -->
	</div>
	<!-- /Card -->
</a>
