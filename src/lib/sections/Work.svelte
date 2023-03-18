<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import LargeWorkCard from '$lib/components/cards/LargeWorkCard.svelte';

	const works = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR',
			subtitle: 'HR app with 10k+ downloads. Let people easily manage time off requests, performance reviews, company news and more',
			demo: 'grove',
			bg: '1'
		},
		case_studies: {
			title: 'Case studies',
			subtitle: 'Specialized UI and UX case studies while working on GroveHR',
			bg: '2',
			secondaryWorks: {
				extendable_card_component: {
					href: '/work/case_studies/extendable_card_component',
					title: 'Extendable card component',
					demo: 'extendable_card_component'
				},
				people_select_modal: {
					href: '/work/case_studies/people_select_modal',
					title: 'People select modal',
					demo: 'people_select_modal'
				},
				create_new_flow: {
					href: '/work/case_studies/create_new_flow',
					title: 'Unified create new flow',
					demo: 'create_new_flow'
				}
			}
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design System',
			subtitle: 'Feature-packed and robust component library for complex web dashboards',
			demo: 'concept',
			bg: '3'
		},
		external: {
			title: 'External projects',
			subtitle: 'Front-end development and design projects for external uses',
			bg: '4',
			secondaryWorks: {
				movieNow: {
					href: '/work/external_projects/movieNow',
					title: 'Movie discovery app',
					demo: 'movieNow',
					color: 'red'
				},
				hcmc_bars: {
					href: '/work/external_projects/hcmc_bars',
					title: 'Bar guide app',
					demo: 'hcmc_bars',
					color: 'red'
				},
				task_calendar_dashboard: {
					href: '/work/external_projects/task_calendar_dashboard',
					title: 'Task calendar dashboard',
					demo: 'task_calendar_dashboard',
					color: 'red'
				}
			}
		}
	};
</script>

<Section
	id="work"
	class="relative pb-16 md:-translate-y-16">
	{#each Object.values(works) as work, i}
		<LargeWorkCard {...work} />
	{/each}
</Section>
