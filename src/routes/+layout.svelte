<script>
	// Import CSS
	import '../app.postcss';
	import NavigationBar from '$lib/components/navigation/NavBar.svelte';
	import Footer from '$lib/sections/Footer.svelte';
	import SmoothScrollHandler from '$lib/utilities/SmoothScrollHandler.svelte';
	import ColorSchemeHandler from '$lib/utilities/ColorSchemeHandler.svelte';
	import ScrollController from '$lib/utilities/ScrollController.svelte';
</script>

<ScrollController />
<ColorSchemeHandler />
<SmoothScrollHandler />

<NavigationBar />
<slot />
<Footer />
