<script>
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
</script>

<button
	class="contents"
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave>
	<span class="relative flex w-fit items-center gap-2 rounded-full border border-white/20 px-6">
		<slot />
		<HoverGlow class="rounded-full" />
	</span>
</button>
