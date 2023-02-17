<script>
	let className = undefined;
	export { className as class };
	export let section = undefined;
	import { inview } from 'svelte-inview';
	import { sectionInView, prevSectionInView } from '$lib/data/sectionInView.js';
</script>

<section
	use:inview={{ threshold: 0.1 }}
	on:enter={() => {
		prevSectionInView.set($sectionInView);
		if ($sectionInView !== '') {
			sectionInView.set(section);
		}
	}}
	on:leave={() => {
		if (section !== $prevSectionInView) {
			sectionInView.set($prevSectionInView);
		}
	}}
	id={section}
	class="{className}">
	<slot />
</section>
