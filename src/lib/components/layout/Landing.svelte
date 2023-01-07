<script>
	export let tagline = 'Tagline';
	import DisplayXL from '$lib/components/typography/DisplayXL.svelte';
</script>

<header class="mx-auto flex h-screen w-screen flex-col place-content-between items-center pb-28 sm:pb-20 gap-10">
	<!--  Visual-->
	<div class="h-32 self-stretch flex-grow items-center ">
		<slot />
	</div>
	<!--  Tagline-->
	<div class="text-center">
		<DisplayXL>{tagline}</DisplayXL>
	</div>
</header>
