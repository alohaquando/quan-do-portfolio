<script>
	import '../app.postcss';
	import DarkMode from 'svelte-dark-mode';
	import { themeStore } from '$lib/stores/theme.js';
	import Header from '$lib/components/navigation/NavigationBar.svelte';

	let theme;
	$: $themeStore = theme;
</script>

<DarkMode bind:theme />

<!--<Header />-->

<div>
	<slot />
</div>
