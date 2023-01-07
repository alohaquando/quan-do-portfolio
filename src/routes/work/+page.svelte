<script>
	import ShowcaseCard from '$lib/components/cards/ShowcaseCard.svelte';
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';

	import IMG_Grove from '$lib/assets/images/work/grove.svelte';
	import IMG_Grove_Logo from '$lib/assets/images/work/grove-logo.svelte';

	import IMG_Concept from '$lib/assets/images/work/concept.svelte';
	import IMG_Concept_Logo from '$lib/assets/images/work/concept-logo.svelte';

	import IMG_Card_Component from '$lib/assets/images/extendable-card-component/hero.svelte';
	import DisplayXL from '$lib/components/typography/DisplayXL.svelte';
	import Landing from '$lib/components/layout/Landing.svelte';

	let workLinks = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR App',
			subtitle: 'Cross-platform app with 10k+ downloads'
			// colorStyle: 'bg-emerald-400 dark:bg-emerald-600',
			// ringStyle: 'group-hover:ring-emerald-400 dark:group-hover:ring-emerald-600'
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design Library',
			subtitle: 'Robust component library for web dashboards'
			// colorStyle: 'bg-indigo-400 dark:bg-indigo-600',
			// ringStyle: 'group-hover:ring-indigo-400 dark:group-hover:ring-indigo-600'
		},
		extendable_card_component: {
			href: '/work/grove/extendable-card-component',
			title: 'Extendable Card Component',
			subtitle: 'Showcase data and actions effortlessly'
			// colorStyle: 'bg-slate-400 dark:bg-slate-600',
			// ringStyle: 'group-hover:ring-slate-400 dark:group-hover:ring-slate-600'
		}
	};
</script>

<Landing tagline="Designs that work" />

<ShowcasePage title="Work">
	<div class="spacing-default flex flex-col pt-6">
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
	</div>
</ShowcasePage>
