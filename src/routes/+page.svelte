<script>
	let testSections = ['landing', 'work', 'about', 'contact'];
	import { inview } from 'svelte-inview';
	import { sectionInView } from "$lib/stores/sectionInView.js";


</script>

{#each testSections as section, i}
	<section
		use:inview={{ threshold: 0.5 }}
		on:change={(e) => {
			const { inView } = e.detail;
			if (inView) {sectionInView.set(testSections[i])}
		}}
		id={section}
		class="min-h-screen-safe">
		{section.charAt(0).toUpperCase() + section.slice(1)}
	</section>
{/each}
