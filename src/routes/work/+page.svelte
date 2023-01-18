<script>
	import ShowcaseCard from '$lib/components/cards/ShowcaseCard.svelte';
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';

	import IMG_Grove from '$lib/assets/images/work/grove.svelte';
	import IMG_Grove_Logo from '$lib/assets/images/work/grove-logo.svelte';

	import IMG_Concept from '$lib/assets/images/work/concept.svelte';
	import IMG_Concept_Logo from '$lib/assets/images/work/concept-logo.svelte';

	import IMG_Card_Component from '$lib/assets/images/extendable-card-component/hero.svelte';
	import Landing from '$lib/components/layout/Landing.svelte';

	import { fade } from 'svelte/transition';

	let workLinks = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR App',
			subtitle: 'Cross-platform app with 10k+ downloads'
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design Library',
			subtitle: 'Robust component library for web dashboards'
		},
		extendable_card_component: {
			href: '/work/grove/extendable-card-component',
			title: 'Extendable Card Component',
			subtitle: 'Showcase data and actions effortlessly'
		}
	};
</script>

<div in:fade={{ duration: 350 }}>
	<Landing tagline="Designs that work" />
</div>

<ShowcasePage title="Work" >
		<ShowcaseCard {...workLinks.grove}>
			<IMG_Grove_Logo slot="logo" />
			<IMG_Grove slot="image" />
		</ShowcaseCard>

		<ShowcaseCard {...workLinks.concept}>
			<IMG_Concept_Logo slot="logo" />
			<IMG_Concept slot="image" />
		</ShowcaseCard>

		<ShowcaseCard {...workLinks.extendable_card_component}>
			<IMG_Grove_Logo slot="logo" />
			<IMG_Card_Component slot="image" />
		</ShowcaseCard>
</ShowcasePage>
