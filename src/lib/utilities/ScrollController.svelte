<script>
	import { scrollY } from '$lib/data/scrollY.js';
</script>

<svelte:window bind:scrollY={$scrollY} />
