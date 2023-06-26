<script lang="ts">
	// Import CSS
	import '../app.postcss';
	import NavigationBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import SmoothScrollHandler from '$lib/utilities/SmoothScrollHandler.svelte';
	import ColorSchemeHandler from '$lib/utilities/ColorSchemeHandler.svelte';
	import ScrollController from '$lib/utilities/ScrollController.svelte';

	import { colorScheme } from '$lib/data/colorScheme';

	import faviconSVG from '$lib/assets/favicons/favicon.svg';
	import faviconPNG from '$lib/assets/favicons/favicon.png';
	import faviconApple from '$lib/assets/favicons/apple-touch-icon.png';
	import FloatingDebug from '$lib/components/_extras/FloatingDebug.svelte';
</script>

<svelte:head>
	<!--	Favicons	-->
	<link
		rel="icon"
		href={faviconSVG}
		type="image/svg+xml" />
	<link
		rel="icon"
		href={faviconPNG}
		type="image/png" />
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href={faviconApple} />
</svelte:head>

<FloatingDebug />

<ColorSchemeHandler />
<SmoothScrollHandler />
<ScrollController />
{#if $colorScheme !== ''}
	<NavigationBar />
	<slot />
	<Footer />
{/if}
