<script lang="ts">
	// Classes for layout
	let className: string = '';
	export { className as class };

	// SLIDE-IN ANIMATION	------------
	// Imports
	import { inview } from 'svelte-inview';

	// Slide-in variables
	let isInView = false;
	export let rootMargin = '-5%';

	// Pre-slide and post-slide locations
	export let preAnimationLocation = 'translate-y-56';
	let preAnimation = `blur-lg opacity-0 ${preAnimationLocation}`;
	const postAnimation = 'opacity-100';
</script>

<div
	use:inview={{ rootMargin: rootMargin, unobserveOnEnter: true }}
	on:enter={() => {
		isInView = true;
	}}
	class="{className} relative">
	<div class="{isInView ? postAnimation : preAnimation} {className} transform-gpu transition-all duration-[750ms] ease-out">
		<slot />
	</div>
</div>
