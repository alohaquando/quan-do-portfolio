<script>
	import DisplayLarge from '$lib/components/typography/display/DisplayLarge.svelte';
	export let title = 'Title';
	export let id;
</script>

<section
	{id}
	class="min-h-[50vh] pt-8 space-brand-style">
	<DisplayLarge class="mb-8">{title}</DisplayLarge>
	<slot />
</section>
