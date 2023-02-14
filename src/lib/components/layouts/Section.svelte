<script>
	let className;
	export { className as class };
	export let section;
	import { inview } from 'svelte-inview';
	import { sectionInView, prevSectionInView } from '$lib/stores/sectionInView.js';
</script>

<section
	use:inview={{threshold: 0.1}}
	on:enter={() => {
		console.log(section, ' in view');
		prevSectionInView.set($sectionInView);
		sectionInView.set(section);
    console.log($sectionInView, '!!!!!')
	}}
	on:leave={() => {
		console.log(section, ' left');

		if (section !== $prevSectionInView) {
			sectionInView.set($prevSectionInView);
		}
	}}
	id={section}
	class="{className} min-h-screen-safe">
	<slot />
</section>
