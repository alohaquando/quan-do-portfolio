<script>
	// Import CSS
	import '../app.postcss';

	// Smooth scroll enabled after load
	import NavigationBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';

	import SmoothScrollHandler from '$lib/utilities/SmoothScrollHandler.svelte';
	import ColorSchemeHandler from '$lib/utilities/ColorSchemeHandler.svelte';
</script>

<ColorSchemeHandler />
<SmoothScrollHandler />

<NavigationBar />
<slot />
<Footer />
