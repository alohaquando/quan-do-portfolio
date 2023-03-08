<script>
	import { scrollY, innerHeight, innerWidth, scrollYBottom, userScroll, isTouching } from '$lib/data/window.js';
	import { throttle } from 'lodash';

	const handleUserScroll = throttle(() => {
		userScroll.set(true);
	}, 200);

	const handleTouchStart = () => {
		isTouching.set(true);
	};

	const handleTouchEnd = () => {
		isTouching.set(false);
	};

	$: {
		scrollYBottom.set($scrollY + $innerHeight);
	}
</script>

<svelte:window
	bind:scrollY={$scrollY}
	bind:innerHeight={$innerHeight}
	bind:innerWidth={$innerWidth}
	on:mousewheel={handleUserScroll}
	on:touchstart={handleTouchStart}
	on:touchend={handleTouchEnd}
	on:touchmove={handleUserScroll} />