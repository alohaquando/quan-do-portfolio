<script>
	export let href;
	export let color = 'blue';

	import Body from '$lib/components/typography/Body.svelte';
	import { Colors } from '$lib/components/visuals/Colors.js';

	const ringHoverColors = Colors.ringHoverColors;
</script>

<a
	{href}
	class="group contents">
	<div class="{ringHoverColors[color]} group-hover:glass w-fit py-1 transition-all group-hover:rounded-full group-hover:px-6 group-hover:ring-2 pr-2">
		<Body class="flex place-content-center items-center gap-1 transition-all group-hover:font-semibold group-hover:text-zinc-900 dark:group-hover:text-white sm:gap-2"><slot /></Body>
	</div>
</a>
