<script>
	import ShowcaseCard from '$lib/components/cards/ShowcaseCard.svelte';
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';

	import IMG_Grove from '$lib/assets/images/work/grove.svelte';
	import IMG_Grove_Logo from '$lib/assets/images/work/grove-logo.svelte';

	import IMG_Concept from '$lib/assets/images/work/concept.svelte';
	import IMG_Concept_Logo from '$lib/assets/images/work/concept-logo.svelte';

	import IMG_Card_Component from '$lib/assets/images/extendable-card-component/hero.svelte';

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

<ShowcasePage title="Work">
	<div class="flex flex-col spacing-default pt-6">
	<ShowcaseCard
		href={workLinks.grove.href}
		title={workLinks.grove.title}
		subtitle={workLinks.grove.subtitle}
		colorStyle={workLinks.grove.colorStyle}
		ringStyle={workLinks.grove.ringStyle}>
		<IMG_Grove_Logo
			eager
			slot="logo" />
		<IMG_Grove
			eager
			slot="image"
			class="object-left-top" />
	</ShowcaseCard>

	<ShowcaseCard
		href={workLinks.concept.href}
		title={workLinks.concept.title}
		subtitle={workLinks.concept.subtitle}
		colorStyle={workLinks.concept.colorStyle}
		ringStyle={workLinks.concept.ringStyle}>
		<IMG_Concept_Logo
			eager
			slot="logo" />
		<IMG_Concept
			eager
			slot="image"
			class="object-left-top" />
	</ShowcaseCard>

	<ShowcaseCard
		href={workLinks.extendable_card_component.href}
		title={workLinks.extendable_card_component.title}
		subtitle={workLinks.extendable_card_component.subtitle}>
		<IMG_Grove_Logo
			eager
			slot="logo" />
		<IMG_Card_Component
			eager
			slot="image"
			class="object-left-top" />
	</ShowcaseCard>
	</div>
</ShowcasePage>