<script>
	let p = { x: 0, y: 0 };
	let pointerX;
	let pointerY;

	function trackPointer(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		p.x = Math.round(event.clientX - rect.x);
		p.y = Math.round(event.clientY - rect.y);
	}

	$: {
		pointerX = `${p.x}px`;
		pointerY = `${p.y}px`;
	}

	import { colorfulGradients } from '$lib/data/Colors.js';

	let className = undefined;
	export { className as class };
</script>

<div
	on:mousemove={trackPointer}
	class="{colorfulGradients.monochrome} {className} absolute top-0 bottom-0 right-0 left-0 z-0 opacity-0 ring-1 ring-inset ring-white/30 backdrop-brightness-200 backdrop-saturate-200 transition-all duration-300 [mask-image:radial-gradient(180px_at_var(--pointerX)_var(--pointerY),white,transparent)] hover:opacity-30 select-none"
	style="--pointerX: {pointerX}; --pointerY: {pointerY}" />
