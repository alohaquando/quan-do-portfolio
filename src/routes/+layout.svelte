<script>
	import '../app.postcss';
	import DarkMode from 'svelte-dark-mode';
	import { themeStore } from '$lib/stores/theme.js';
	import Header from '$lib/components/Header.svelte';

	let theme;
	$: $themeStore = theme;
</script>

<DarkMode bind:theme />

<Header />

<div class="px-6 pt-6 pb-24">
	<slot />
</div>
