<script>
	import { scrollY, innerHeight } from '$lib/data/window.js';

	// Initial scale and other constants
	export let initialScale = 80;
	const remainingScaleRatio = 100 / (100 - initialScale);
	const initialOffsetY = (100 - initialScale) / 2; // Half of remaining scale
	const remainingOffsetYRatio = 100 / initialOffsetY;
	const viewMargin = $innerHeight / 2;

	// Element binding
	let scrollYBottom;

	let element;
	let elementTop;
	let elementBottom;

	let enterPercentage;
	let exitPercentage;

	let percentage;
	let scalePercentage;
	let translatePercentage;

	function limitRange(number) {
		const MIN = 0;
		const MAX = 100;
		return Math.min(Math.max(number, MIN), MAX);
	}

	$: {
		scrollYBottom = $scrollY + $innerHeight;
	}

	$: if (element) {
		elementTop = element.getBoundingClientRect().y + $scrollY; // To top element
		elementBottom = elementTop + element.getBoundingClientRect().height;

		// enterPercentage = limitRange(((scrollYBottom - elementTop) / $innerHeight) * 100);
		// exitPercentage = limitRange(((elementBottom - $scrollY + viewMargin) / $innerHeight) * 100);

		enterPercentage = limitRange(((scrollYBottom - elementTop) / $innerHeight) * 100);
		exitPercentage = limitRange(((elementBottom - $scrollY) / $innerHeight) * 100);

		percentage = 100 - Math.abs(exitPercentage - enterPercentage);

		// scalePercentage = `${initialScale + percentage / remainingScaleRatio}%`;
		// translatePercentage = `${(enterPercentage - exitPercentage) / remainingOffsetYRatio}%`;

		scalePercentage = `${initialScale + enterPercentage / remainingScaleRatio}%`;
		translatePercentage = `${-initialOffsetY + enterPercentage / remainingOffsetYRatio}%`;

	}
</script>

<div bind:this={element}>
	<div
		class="translate-y-[var(--translatePercentage)] scale-[var(--scalePercentage)] transform-gpu"
		style="--scalePercentage: {scalePercentage}; --translatePercentage: {translatePercentage}">
		<slot />
	</div>
</div>
