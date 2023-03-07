<script>
	// Functional imports
	import { scrollY, innerHeight, innerWidth, scrollYBottom, userScroll } from '$lib/data/window.js';
	import { throttle, debounce } from 'lodash';
	import { beforeNavigate } from '$app/navigation';
	import SlideIn from '$lib/components/visuals/SlideIn.svelte';
	import { inview } from 'svelte-inview';

	// Functions
	function limitRange(number) {
		return Math.min(Math.max(number, 0), 100);
	}

	// ELEMENT
	// Element size bindings
	let element;
	let elementTop;
	let elementBottom;
	let elementPositionCalculated;

	// Initial scale and constants
	const initialScale = 80;
	const remainingScaleRatio = 100 / (100 - initialScale);
	const initialOffsetY = (100 - initialScale) / 2;
	const remainingOffsetYRatio = 100 / initialOffsetY;

	// Scaling variables
	let distancePercentage;
	let scalePercentage = `${initialScale}%`;
	let translatePercentage = `${initialOffsetY}%`;

	// Scaling function
	const scale = throttle(() => {
		distancePercentage = limitRange((($scrollYBottom - elementTop) / $innerHeight) * 100);
		scalePercentage = `${initialScale + distancePercentage / remainingScaleRatio}%`;
		translatePercentage = `${-initialOffsetY + distancePercentage / remainingOffsetYRatio}%`;
	}, 15);

	// Calculate initial size and position
	$: if (element && !elementPositionCalculated) {
		elementTop = element.getBoundingClientRect().y + $scrollY;
		elementBottom = elementTop + element.getBoundingClientRect().height;
		elementPositionCalculated = true;
		scale();
	}

	// Recalculate if window size changes
	$: if ($innerHeight || $innerWidth) {
		elementPositionCalculated = false;
	}

	// SCALING ANIMATION	------------
	$: if (elementPositionCalculated || $scrollY || true) {
		scale();
	}

	// SNAPPING	------------
	// Snapping function
	const snapToCard = debounce(() => {
		userScroll.set(false);
		element.scrollIntoView();
		snapCorrection();
	}, 800);

	const snapCorrection = debounce(() => {
		if ($scrollY !== elementTop) {
			console.log('correction called');
			element.scrollIntoView();
		}
	}, 900);

	beforeNavigate(() => {
		snapToCard.cancel();
	});
</script>

<div
	use:inview={{ rootMargin: '-50%' }}
	on:enter={snapToCard}
	class="translate-y-[var(--translatePercentage)] scale-[var(--scalePercentage)] transform-gpu"
	style="--scalePercentage: {scalePercentage}; --translatePercentage: {translatePercentage}"
	bind:this={element}>
	<SlideIn rootMargin="-10%">
		<slot />
	</SlideIn>
</div>
