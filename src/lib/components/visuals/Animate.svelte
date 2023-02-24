<script>
	let className = undefined;
	export { className as class };

	export let rootMargin = '-20%';

	import { inview } from 'svelte-inview';
	const options = {
		rootMargin: rootMargin,
		unobserveOnEnter: true
	};
	let inView = false;
	const animations = 'translate-y-0 opacity-100';
	export let preAnimationLocation = 'translate-y-56';
	let preAnimation = `blur-lg opacity-0 ${preAnimationLocation}`;
	let anchor = 'top-0';
</script>

<!-- TODO: Animate delay -->

<div
	use:inview
	class="{className} relative select-none"
	aria-hidden="true"
	on:enter={(event) => {
		const { scrollDirection } = event.detail;
		if (scrollDirection.vertical === 'down') {
			anchor += ' bottom-0';
		}
		inView = true;
	}}>
	<div
		use:inview={options}
		on:enter={() => {
			inView = true;
		}}
		class="absolute {anchor} left-0 right-0 hidden h-px select-none" />
	<div
		aria-hidden="true"
		class="{className} {inView ? animations : preAnimation} transform-gpu select-none transition-all duration-[750ms] ease-in-out">
		<slot />
	</div>
</div>
