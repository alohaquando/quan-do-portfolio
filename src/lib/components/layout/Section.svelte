<script>
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';
	export let title = 'Title';
	export let id;
</script>

<section
	{id}
	class="space-brand-style min-h-[50vh] pt-8">
	<DisplayLarge class="mb-8 text-center">{title}</DisplayLarge>
	<slot />
</section>
