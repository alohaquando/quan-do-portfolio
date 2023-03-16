<script>
	import { scrollY, innerHeight, innerWidth, scrollYBottom,  } from '$lib/data/window.js';

	$: {
		scrollYBottom.set($scrollY + $innerHeight);
	}
</script>

<svelte:window
	bind:scrollY={$scrollY}
	bind:innerHeight={$innerHeight}
	bind:innerWidth={$innerWidth} />