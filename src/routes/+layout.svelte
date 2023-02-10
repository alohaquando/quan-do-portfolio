<script>
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let root;
	onMount(() => {
		root = document.getElementsByTagName('html')[0];
		root?.classList.add('scroll-smooth');
	});
	beforeNavigate(() => {
		root?.classList.remove('scroll-smooth');
	});
	afterNavigate(() => {
		root?.classList.add('scroll-smooth');
	});
</script>

<slot />
