<script>
	// Functional imports
	import { scrollY, innerHeight, scrollYBottom } from '$lib/data/window.js';
	import { throttle, debounce } from 'lodash';
	import { beforeNavigate } from '$app/navigation';
	import SlideIn from '$lib/components/visuals/SlideIn.svelte';

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

	$: if ($innerHeight) {
		elementPositionCalculated = false;
	}

	// SCALING ANIMATION	------------
	$: if (elementPositionCalculated || $scrollY || true) {
		scale();
	}

	// SNAPPING	------------
	// Snapping variables
	let offset;
	$: offset = $innerHeight / 2;

	// Snapping function
	const snapToCard = debounce(() => {
		setTimeout(function () {
			window.scrollTo({
				top: elementTop,
				left: 0,
				behavior: 'smooth'
			});
		}, 1);
	}, 500);

	$: if ($scrollY > elementTop - offset && $scrollY < elementBottom - offset) {
		snapToCard();
	} else {
		snapToCard.cancel();
	}

	beforeNavigate(() => {
		snapToCard.cancel();
	});
</script>

<div
	class="translate-y-[var(--translatePercentage)] scale-[var(--scalePercentage)] transform-gpu"
	style="--scalePercentage: {scalePercentage}; --translatePercentage: {translatePercentage}"
	bind:this={element}>
	<SlideIn rootMargin="-10%">
		<slot />
	</SlideIn>
</div>
