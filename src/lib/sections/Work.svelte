<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import LargeWorkCard from '$lib/components/cards/LargeWorkCard.svelte';

	const works = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR',
			subtitle: 'Subtitle',
			demo: 'grove',
			bg: '1'
		},
		case_studies: {
			title: 'Case studies',
			subtitle: 'Specialized UI and UX case studies',
			bg: '2',
			secondaryWorks: {
				extendable_card_component: {
					href: '/work/case_studies/extendable_card_component',
					title: 'Extendable Card Component',
					demo: 'extendable_card_component'
				},
				people_select_modal: {
					href: '/work/case_studies/people_select_modal',
					title: 'People Select Modal',
					demo: 'people_select_modal'

				},
				create_new_flow: {
					href: '/work/case_studies/create_new_flow',
					title: '"Create New" Flow',
					demo: 'create_new_flow'
				}
			}
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design System',
			subtitle: 'Subtitle',
			demo: 'concept',
			bg: '3'
		},
		external: {
			title: 'External projects',
			subtitle: 'Subtitle',
			bg: '4',
			secondaryWorks: {
				movieNow: {
					href: '/work/external_projects/movieNow',
					title: 'movieNow App',
					demo: 'movieNow',
					color: 'red'
				},
				hcmc_bars: {
					href: '/work/external_projects/hcmc_bars',
					title: 'HCMC Bars App',
					demo: 'hcmc_bars',
					color: 'red'
				},
				task_calendar_dashboard: {
					href: '/work/external_projects/task_calendar_dashboard',
					title: 'Task Calendar Dashboard',
					demo: 'task_calendar_dashboard',
					color: 'red'
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
