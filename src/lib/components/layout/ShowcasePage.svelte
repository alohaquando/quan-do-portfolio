<script>
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';

	export let title;
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
</script>

<PageLayout
	class="relative sm:pt-56"
	{title}>
	<!--	Color Blur Highlight-->
	<div class="absolute z-0 h-full w-[90%]">
		<div
			class="absolute -left-40 -top-8 h-20 w-full rotate-12 rounded-full bg-amber-500 opacity-30 blur-2xl dark:bg-amber-900 md:h-32 md:blur-3xl" />
	</div>

	<!--	Main content-->
	<div class="z-10 gap-2 sm:gap-4">
		<DisplayLarge>{title}</DisplayLarge>
		<div class="space-default flex flex-col pt-6" data-sveltekit-preload-data="tap" >
			<slot />
		</div>
	</div>
</PageLayout>
