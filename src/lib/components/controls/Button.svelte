<script lang="ts">
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
</script>

<button
	class="contents"
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:focus>
	<span class="relative flex w-fit items-center gap-2 rounded-full px-6 ring-1 ring-gray-900/20 dark:ring-white/20">
		<slot />
		<HoverGlow class="rounded-full" />
	</span>
</button>
