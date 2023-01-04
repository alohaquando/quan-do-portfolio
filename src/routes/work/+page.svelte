<script>
	import ShowcaseCard from '$lib/components/cards/ShowcaseCard.svelte';
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';
	
	import IMG_Grove from '$lib/assets/images/work/grove.svelte';
	import IMG_Grove_Logo from '$lib/assets/images/work/grove-logo.svelte';
	
	import IMG_Concept from '$lib/assets/images/work/concept.svelte'
	import IMG_Concept_Logo from '$lib/assets/images/work/concept-logo.svelte'
	
	import IMG_Card_Component from '$lib/assets/images/extendable-card-component/hero.svelte';

	let workLinks = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR App',
			subtitle: 'Cross-platform app with 10k+ downloads',
			imageDirection: 'vertical',
			colorStyle: 'bg-emerald-400 dark:bg-emerald-600',
			ringStyle: 'group-hover:ring-emerald-400 dark:group-hover:ring-emerald-600'
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design Library',
			subtitle: 'Robust component library for web dashboards',
			imageDirection: 'horizontal',
			colorStyle: 'bg-indigo-400 dark:bg-indigo-600',
			ringStyle: 'group-hover:ring-indigo-400 dark:group-hover:ring-indigo-600'
		},
		extendable_card_component: {
			href: '/work/grove/extendable-card-component',
			title: 'Extendable Card Component',
			subtitle: 'Showcase data and actions effortlessly',
			imageDirection: 'horizontal',
			colorStyle: 'bg-slate-400 dark:bg-slate-600',
			ringStyle: 'group-hover:ring-slate-400 dark:group-hover:ring-slate-600'
		}
	};
</script>

<ShowcasePage title="Work">
	<ShowcaseCard
		href={workLinks.grove.href}
		title={workLinks.grove.title}
		subtitle={workLinks.grove.subtitle}
		imageDirection={workLinks.grove.imageDirection}
		colorStyle={workLinks.grove.colorStyle}
		ringStyle={workLinks.grove.ringStyle}>
		<IMG_Grove_Logo
			eager
			slot="logo" />
		<IMG_Grove
			eager
			slot="image" />
	</ShowcaseCard>

	<ShowcaseCard
		href={workLinks.concept.href}
		title={workLinks.concept.title}
		subtitle={workLinks.concept.subtitle}
		imageDirection={workLinks.concept.imageDirection}
		colorStyle={workLinks.concept.colorStyle}
		ringStyle={workLinks.concept.ringStyle}>
		<IMG_Concept_Logo
			eager
			slot="logo" />
		<IMG_Concept
			eager
			slot="image" />
	</ShowcaseCard>

	<ShowcaseCard
		href="/work/grove/expandable-card-component"
		title="GroveHR App"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		imageDirection="horizontal">
		<IMG_Grove_Logo
			eager
			slot="logo" />
		<IMG_Card_Component
			eager
			slot="image" />
	</ShowcaseCard>
</ShowcasePage>
