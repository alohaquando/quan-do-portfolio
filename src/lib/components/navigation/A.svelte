<script>
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';

	let className = undefined;
	export { className as class };
	export let href = '/#';
	export let ariaLabel = `Link to ${generateAriaLabel()}`;

	function generateAriaLabel() {
		const hrefWords = href.match(/[a-zA-Z]+/g);
		let label = '';
		if (hrefWords) {
			href.match(/[a-zA-Z]+/g).forEach((word) => {
				label += `${word} `;
			});
		}
		return label;
	}
</script>

<a
	{href}
	class="contents"
	aria-label={ariaLabel}>
	<div class="relative flex w-fit place-content-center items-center gap-3 rounded-full py-2 px-6 {className}">
		<slot />
		<HoverGlow class="rounded-3xl" />
	</div>
</a>
