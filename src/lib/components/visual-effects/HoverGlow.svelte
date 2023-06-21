<script lang="ts">
	let p: { x: number; y: number } = { x: 0, y: 0 };
	let pointerX: string;
	let pointerY: string;

	function trackPointer(event: MouseEvent) {
		const rect = event.currentTarget as HTMLElement;
		const rectPos = rect.getBoundingClientRect();
		p.x = Math.round(event.clientX - rectPos.x);
		p.y = Math.round(event.clientY - rectPos.y);
	}

	$: {
		pointerX = `${p.x}px`;
		pointerY = `${p.y}px`;
	}

	import { colorfulGradients } from '$lib/data/Colors';

	let className = '';
	export { className as class };
</script>

<div
	on:mousemove={trackPointer}
	aria-hidden="true"
	class="{colorfulGradients.monochrome} {className} backdrop-saturate-125 absolute bottom-0 left-0 right-0 top-0 z-0 select-none opacity-0 ring-1 ring-inset ring-white/80 transition-all duration-300 [mask-image:radial-gradient(180px_at_var(--pointerX)_var(--pointerY),white,transparent)] hover:opacity-30"
	style="--pointerX: {pointerX}; --pointerY: {pointerY}" />
