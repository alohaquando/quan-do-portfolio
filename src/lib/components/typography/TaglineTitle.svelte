<script>
	import Tagline from '$lib/components/typography/Tagline.svelte';
	import Title from '$lib/components/typography/Title.svelte';

	export let tagline = 'Tagline';
	export let title = 'Title';
</script>

<div class="flex flex-col gap-2 md:gap-4">
	<Tagline>{tagline}</Tagline>
	<Title>{title}</Title>
</div>
