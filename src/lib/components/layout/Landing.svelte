<script>
	export let tagline = 'Tagline';
	import DisplayXL from '$lib/components/typography/DisplayXL.svelte';
</script>

<header
	class="mx-auto flex h-screen w-screen flex-col place-content-between items-center gap-10 pb-16 max-sm:[height:-webkit-fill-available]">
	<!--  Visual  -->
	<div class="flex flex-grow items-center self-stretch overflow-clip">
		<slot />
	</div>
	<!--  Tagline  -->
	<div class="px-6 text-center sm:px-32">
		<DisplayXL>{tagline}</DisplayXL>
	</div>
</header>
