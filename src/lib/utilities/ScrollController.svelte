<script>
	import { scrollY, innerHeight, innerWidth, scrollYBottom, userScroll } from '$lib/data/window.js';
	import { throttle } from "lodash";

	const handleUserScroll = throttle(() => {
		userScroll.set(true);
	}, 200);

	$: {
		scrollYBottom.set($scrollY + $innerHeight);
	}
</script>

<svelte:window
	on:mousewheel={handleUserScroll}
	on:touchmove={handleUserScroll}
	bind:scrollY={$scrollY}
	bind:innerHeight={$innerHeight}
	bind:innerWidth={$innerWidth} />
