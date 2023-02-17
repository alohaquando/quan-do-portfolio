<script>
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let title = 'Title';
	export let href = '/';
	export let color = 'blue';

	import { solidColors } from '$lib/data/Colors.js';
	import Title from '$lib/components/typography/Title.svelte';
</script>

<a
	{href}
	class="contents">
	<!-- Card -->
	<div
		id={href}
		class="{solidColors[color]}  flex w-64 flex-col rounded-3xl max-lg:shrink-0 md:w-80 lg:w-auto">
		<!-- Title and Arrow -->
		<div class="flex basis-3/5 p-8">
			<Title>
				{title}
				<Icon
					name="arrow_right_solid"
					size="w-8 h-8 md:w-10 md:h-10"
					type="fill"
					class="inline-block mb-2" />
			</Title>
		</div>
		<!-- /Title and Arrow -->

		<!-- Image -->
		<div class="relative isolate grow overflow-hidden rounded-b-3xl">
			<div class="bg-glass absolute top-0 -right-12 w-5/6">
				<slot />
			</div>
		</div>
		<!-- /Image -->
	</div>
	<!-- /Card -->
</a>
