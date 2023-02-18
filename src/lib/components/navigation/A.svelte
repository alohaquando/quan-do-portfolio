<script>
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';

	let className = undefined;
	export { className as class };
	export let href = '/#';
	export let title = 'title';
</script>

<a
	{href}
	class="contents">
	<div class="relative flex w-fit place-content-center items-center gap-3 rounded-full py-2 px-6  {className}">
		<slot />
		<HoverGlow class="rounded-3xl" />
	</div>
</a>
