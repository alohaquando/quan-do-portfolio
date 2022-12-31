<script>
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';

	export let title;
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
</script>

<PageLayout class="relative bg-opacity-0 md:ring-0">
	<div class="absolute z-0 h-full w-full">
		<div
			class="absolute -left-6 top-12 h-24 w-4/5 rotate-12 rounded-full bg-amber-500 opacity-20 blur-2xl dark:bg-amber-900 md:top-32 md:-left-12 md:h-32 md:blur-3xl" />
	</div>
	<div
		class="z-10 mx-auto flex max-w-xl flex-col space-y-6 md:space-y-8 px-6 pt-16 pb-28 md:pt-36 lg:max-w-5xl lg:px-24">
		<DisplayLarge class="mb-4">{title}</DisplayLarge>
		<slot />
	</div>
</PageLayout>
