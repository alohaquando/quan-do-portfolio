<script>
	import DisplayXL from "$lib/components/typography/display/DisplayXL.svelte";
	export let title = 'Title';
	export let id;
</script>

<section
	{id}
	class="space-brand-style min-h-[50vh] pt-8 sm:pt-24">
	<DisplayXL class="mb-8 text-center scale-[.8]">{title}</DisplayXL>
	<slot />
</section>
