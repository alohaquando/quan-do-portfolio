<script lang="ts">
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';

	let className = '';
	export { className as class };
	export let href = '/#';
	export let target: string | undefined = undefined;
	export let ariaLabel = `Link to ${generateAriaLabel()}`;

	function generateAriaLabel() {
		let label = '';
		const matches = href.match(/[a-zA-Z]+/g);
		if (matches) {
			matches.forEach((word) => {
				label += `${word} `;
			});
		}
		return label;
	}
</script>

<a
	{href}
	class="contents"
	target={target || null}
	aria-label={ariaLabel}>
	<div class="relative flex w-fit place-content-center items-center gap-3 rounded-full py-2 px-6  {className}">
		<slot />
		<HoverGlow class="rounded-3xl" />
	</div>
</a>
