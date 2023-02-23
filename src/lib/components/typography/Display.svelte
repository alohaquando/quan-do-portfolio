<script>
	import Animate from '$lib/utilities/Animate.svelte';

	let className = undefined;
	export { className as class };
</script>

<Animate>
	<h1 class="{className} text-6x font-light">
		<slot />
	</h1>
</Animate>
