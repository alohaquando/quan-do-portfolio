<script>
	// Import CSS
	import '../app.postcss';

	// Smooth scroll enabled after load
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import NavigationBar from "$lib/components/navigation/NavigationBar.svelte";
  import Footer from "$lib/sections/Footer.svelte";

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

<NavigationBar/>
<slot />
<Footer/>