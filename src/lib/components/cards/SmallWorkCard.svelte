<script>
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
	<div class="{solidColors[color]} flex w-64 flex-col rounded-3xl max-lg:shrink-0 md:w-80 lg:w-auto">
		<Title class="basis-3/5 p-8">{title}</Title>
		<!-- TODO: Add arrow -->
		<!-- Image -->
		<div class="relative grow overflow-hidden isolate rounded-b-3xl">
			<div class="bg-glass absolute top-0 -right-12 w-5/6">
				<slot />
			</div>
		</div>

		<!-- /Image -->
	</div>
	<!-- /Card -->
</a>
