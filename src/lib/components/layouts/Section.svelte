<script>
	let className = undefined;
	export { className as class };
	export let id = undefined;
	import { inview } from 'svelte-inview';
	import { sectionInView } from '$lib/data/sectionInView.js';
	import { beforeNavigate } from '$app/navigation';

	beforeNavigate(() => {
		sectionInView.set('');
	});
</script>

<section
	use:inview={{ rootMargin: '-50%' }}
	on:enter={() => {
		sectionInView.set(id);
	}}
	{id}
	class={className}>
	<slot />
</section>
