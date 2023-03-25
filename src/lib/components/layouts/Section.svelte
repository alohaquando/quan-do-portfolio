<script lang="ts">
	let className = '';
	export { className as class };
	export let id = '';
	import { inview } from 'svelte-inview';
	import { sectionInView } from '$lib/data/sectionInView';
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
