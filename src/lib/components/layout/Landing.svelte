<script>
	export let tagline = 'Tagline';
	import DisplayXL from '$lib/components/typography/DisplayXL.svelte';
</script>

<header
	class="mx-auto flex min-h-screen w-screen flex-col place-content-between items-center gap-10 px-6 pb-36 sm:pb-wr sm:px-32">
	<!--  Visual-->
	<div class="flex flex-grow items-center self-stretch">
		<slot />
	</div>
	<!--  Tagline-->
	<div class="text-center ">
		<DisplayXL>{tagline}</DisplayXL>
	</div>
</header>
