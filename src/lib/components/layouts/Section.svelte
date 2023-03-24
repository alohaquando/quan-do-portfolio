<script lang="ts">
	let className: string = '';
	export { className as class };
	export let id: string = '';
	import { inview } from 'svelte-inview';
	import { sectionInView } from '$lib/data/sectionInView.js';
	import { beforeNavigate } from '$app/navigation';

	beforeNavigate(() => {
		sectionInView.set('');
	});
</script>

<section
	use:inview={{ rootMargin: '-50%' }}
	on:inview_enter={() => {
		sectionInView.set(id);
	}}
	{id}
	class={className}>
	<slot />
</section>
