<script lang="ts">
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';

	let className = '';
	export { className as class };
</script>

<Animate>
	<h1 class="{className} text-6x md:text-6x-large  font-light">
		<slot />
	</h1>
</Animate>
