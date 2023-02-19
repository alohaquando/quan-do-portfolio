<script>
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
</script>

<button
	class="contents"
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave>
	<span class="relative flex w-fit items-center gap-2 rounded-full px-6 ring-1 ring-gray-900/20 dark:ring-white/20">
		<slot />
		<HoverGlow class="rounded-full" />
	</span>
</button>
