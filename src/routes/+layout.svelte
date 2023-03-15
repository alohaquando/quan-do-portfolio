<script>
	// Import CSS
	import '../app.postcss';
	import NavigationBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import SmoothScrollHandler from '$lib/utilities/SmoothScrollHandler.svelte';
	import ColorSchemeHandler from '$lib/utilities/ColorSchemeHandler.svelte';
	import ScrollController from '$lib/utilities/ScrollController.svelte';

	import { colorScheme } from '$lib/data/colorScheme.js';
</script>

<svelte:head>
	<!--	Favicons	-->
	<link
		rel="shortcut icon"
		href="$lib/assets/favicons/favicon.svg"
		type="image/svg+xml" />
	<link
		rel="alternate icon"
		href="$lib/assets/favicons/favicon.png"
		type="image/png"
		sizes="any" />
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="$lib/assets/favicons/apple-touch-icon.png?v=2" />
</svelte:head>

<ColorSchemeHandler />
<SmoothScrollHandler />
<ScrollController />
{#if $colorScheme !== ''}
	<NavigationBar />
	<slot />
	<Footer />
{/if}
