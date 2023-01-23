<script>
	import Section from '$lib/components/layout/Section.svelte';
	import IMG_Grove from '$lib/assets/images/work/grove.svelte';
	import IMG_Grove_Logo from '$lib/assets/images/work/grove-logo.svelte';
	import IMG_Concept from '$lib/assets/images/work/concept.svelte';
	import IMG_Concept_Logo from '$lib/assets/images/work/concept-logo.svelte';
	import IMG_Card_Component from '$lib/assets/images/extendable-card-component/hero.svelte';
	import ShowcaseSection from "$lib/components/layout/ShowcaseSection.svelte";

	let workLinks = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR',
			subtitle: 'Cross-platform HR app with 10k+ downloads',
			color: 'green'
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design Library',
			subtitle: 'Robust component library for web dashboards',
			color: 'blue'
		},
		extendable_card_component: {
			href: '/work/grove/extendable-card-component',
			title: 'Extendable Card Component',
			subtitle: 'Showcase data and actions effortlessly',
			color: 'amber',
		}
	};
</script>

<Section
	id="work"
	title="Designs that work">
	<ShowcaseSection {...workLinks.grove}>
		<IMG_Grove_Logo slot="logo" />
		<IMG_Grove slot="image" />
	</ShowcaseSection>

	<ShowcaseSection {...workLinks.concept}>
		<IMG_Concept_Logo slot="logo" />
		<IMG_Concept slot="image" />
	</ShowcaseSection>

	<ShowcaseSection {...workLinks.extendable_card_component}>
		<IMG_Grove_Logo slot="logo" />
		<IMG_Card_Component slot="image" />
	</ShowcaseSection>
</Section>
