<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import LargeWorkCard from '$lib/components/cards/LargeWorkCard.svelte';

	const works = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR',
			subtitle: 'Subtitle'
		},
		while_grove: {
			href: '/',
			title: 'While at GroveHR',
			subtitle: 'Subtitle'
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design System',
			subtitle: 'Subtitle'
		},
		external: {
			href: '',
			title: 'External projects',
			subtitle: 'Subtitle'
		}
	};
</script>

<Section section="work">
	{#each Object.values(works) as work}
		<LargeWorkCard {...work} />
	{/each}
</Section>
