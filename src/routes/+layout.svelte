<script>
	import '../app.postcss';
	import DarkMode from 'svelte-dark-mode';
	import { themeStore } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let theme;
	let root;

	onMount(() => {
		root = document.getElementsByTagName('html')[0];
		root?.classList.add('scroll-smooth');
		$: $themeStore = theme;
	});
	beforeNavigate(() => {
		root?.classList.remove('scroll-smooth');
	});
	afterNavigate(() => {
		root?.classList.add('scroll-smooth');
	});
</script>

<DarkMode bind:theme />

<slot />
