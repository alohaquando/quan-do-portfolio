<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import LargeWorkCard from '$lib/components/cards/LargeWorkCard.svelte';

	const works = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR',
			subtitle: 'Subtitle'
		},
		case_studies: {
			title: 'Case studies',
			subtitle: 'Specialized UI and UX case studies',
			secondaryWorks: {
				extendable_card_component: {
					href: '/work/case_studies/extendable_card_component',
					title: 'Extendable Card Component'
				},
				people_select_modal: {
					href: '/work/case_studies/people_select_modal',
					title: 'People Select Modal'
				},
				create_new_flow: {
					href: '/work/case_studies/create_new_flow',
					title: '"Create New" Flow'
				}
			}
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design System',
			subtitle: 'Subtitle'
		},
		external: {
			title: 'External projects',
			subtitle: 'Subtitle',
			secondaryWorks: {
				movieNow: {
					href: '/work/external_projects/movieNow',
					title: 'movieNow App'
				},
				hcmc_bars: {
					href: '/work/external_projects/hcmc_bars',
					title: 'HCMC Bars App'
				},
				task_calendar_dashboard: {
					href: '/work/external_projects/task_calendar_dashboard',
					title: 'Task Calendar Dashboard'
				}
			}
		}
	};
</script>

<Section
	id="work"
	class="relative pb-16 ">
	{#each Object.values(works) as work, i}
			<LargeWorkCard {...work} />
	{/each}
</Section>
