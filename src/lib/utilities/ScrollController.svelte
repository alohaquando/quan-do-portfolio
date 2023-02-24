<script>
	import { scrollY, innerHeight } from '$lib/data/window.js';
</script>

<svelte:window bind:scrollY={$scrollY} bind:innerHeight={$innerHeight}   />
