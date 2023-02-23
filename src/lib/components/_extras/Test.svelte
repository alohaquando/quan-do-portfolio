<script>
	let className = undefined;
	export { className as class };

	import { inview } from 'svelte-inview';
	const options = {
		rootMargin: '-25%',
		unobserveOnEnter: true
	};

	const animations = ' translate-y-0 opacity-100';
	const pre_animations = 'blur-lg translate-y-[200%] opacity-0';
	let inView = false;
</script>

<div class="min-h-screen-safe flex place-content-center items-center">
		<h1
			use:inview={options}
			on:enter={() => {
				inView = true;
			}}
			class="{className} {inView ? animations : pre_animations} text-6x font-light transform-gpu  duration-700  ease-in-out transition-all">
			I'm Quan Do
		</h1>
</div>