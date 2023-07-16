<script lang="ts">
	import { scrollY } from '$lib/data/window';
	import LargeWorkCardForeground from './LargeWorkCardForeground.svelte';
	import BG1 from '$lib/assets/images/bg/hd-1.svelte';
	import BG2 from '$lib/assets/images/bg/hd-2.svelte';
	import BG3 from '$lib/assets/images/bg/hd-3.svelte';
	import BG4 from '$lib/assets/images/bg/hd-4.svelte';
	import DemoGrove from '$lib/assets/images/bg/device-grove-full.svelte';
	import DemoConcept from '$lib/assets/images/bg/device-concept.svelte';

	$: $scrollY, console.log($scrollY);

	const works = {
		grove: {
			href: '/work/grove',
			title: 'GroveHR',
			subtitle: 'High-impact HR app.\n' + 'Effortlessly manage time off, reviews, news & more.\n' + '10k+ downloads and counting.',
			demo: 'grove',
			bg: '1'
		},
		concept: {
			href: '/work/concept',
			title: 'Concept Design System',
			subtitle: 'Comprehensive and powerful component library for responsive web dashboards.',
			demo: 'concept',
			bg: '3'
		},
		case_studies: {
			title: 'Case studies',
			subtitle: ' ',
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
		external: {
			title: 'External projects',
			subtitle: ' ',
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

	const bgImg = {
		'1': {
			img: BG1,
			class: 'object-left-top opacity-25'
		},
		'2': {
			img: BG2,
			class: 'object-right-top opacity-25'
		},
		'3': {
			img: BG3,
			class: 'object-left-top opacity-50'
		},
		'4': {
			img: BG4,
			class: 'object-center opacity-50'
		}
	};
	let bg = '1';
	const selectedBG = bgImg[bg as keyof typeof bgImg];

	const demoImg = {
		grove: {
			img: DemoGrove,
			class: ''
		},
		concept: {
			img: DemoConcept,
			class: ''
		}
	};
	export let demo = '1';
	const selectedDemo = demoImg[demo as keyof typeof demoImg];
</script>

<div
	id="group1"
	class="parallax__group mb-[40rem] mt-32">
	<!--<editor-fold desc="BG">-->
	<div class="parallax__layer parallax__layer--base">
		<div class=" absolute left-0 right-0 top-0 -z-10 h-screen">
			<div>
				<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-20 select-none overflow-clip">
					<svelte:component
						this={selectedBG.img}
						eager={bg === '1'}
						class="h-full w-full object-cover {selectedBG.class}" />
				</div>

				<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 flex select-none flex-col overflow-clip">
					<div class="grow bg-gradient-to-b from-black" />
					<div class="grow" />
					<div class="grow bg-gradient-to-t from-black" />
				</div>
			</div>
		</div>
	</div>
	<!--</editor-fold>-->
</div>

<div class="parallax__layer parallax__layer--back !z-30">
	<LargeWorkCardForeground {...works.grove} />
</div>

<div class="parallax__layer parallax__layer--deep !z-30">
	<!--<editor-fold desc="Demo image">-->
	<div class="flex justify-end ring">
		<div class="max-w-4xl">
			<DemoGrove />
		</div>
	</div>
	<!--</editor-fold>-->
</div>

<div
	id="group2"
	class="parallax__group mb-[40rem] mt-[200rem]">
	<!--<editor-fold desc="BG">-->
	<div class="parallax__layer parallax__layer--base">
		<div class="  ">
			<div>
				<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-20 select-none overflow-clip">
					<svelte:component
						this={BG3}
						eager={bg === '1'}
						class="h-full w-full object-cover {bgImg['2'].class}" />
				</div>

				<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 flex select-none flex-col overflow-clip">
					<div class="grow bg-gradient-to-b from-black" />
					<div class="grow" />
					<div class="grow bg-gradient-to-t from-black" />
				</div>
			</div>
		</div>
	</div>
	<!--</editor-fold>-->
</div>

<div class="parallax__layer parallax__layer--back !z-30">
	<LargeWorkCardForeground {...works.concept} />
</div>

<div class="parallax__layer parallax__layer--deep !z-30">
	<!--<editor-fold desc="Demo image">-->
	<div class="flex justify-end ring">
		<div class="max-w-4xl">
			<DemoConcept />
		</div>
	</div>
	<!--</editor-fold>-->
</div>

<style>
	:global(body) {
		@apply parallax;
	}

	/* Parallax base styles
	--------------------------------------------- */

	.parallax {
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-perspective: 300px;
		perspective: 300px;
		-webkit-perspective-origin-x: 100%;
		perspective-origin-x: 100%;
	}

	.parallax__group {
		position: relative;
		height: 500px; /* fallback for older browsers */
		height: 100vh;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.parallax__layer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transform-origin-x: 100%;
		transform-origin-x: 100%;
	}

	.parallax__layer--fore {
		-webkit-transform: translateZ(90px) scale(0.7);
		transform: translateZ(90px) scale(0.7);
		z-index: 1;
	}

	.parallax__layer--base {
		-webkit-transform: translateZ(0);
		transform: translateZ(0);
		z-index: 4;
	}

	.parallax__layer--back {
		-webkit-transform: translateZ(-300px) scale(2);
		transform: translateZ(-300px) scale(2);
		z-index: 3;
	}

	.parallax__layer--deep {
		-webkit-transform: translateZ(-600px) scale(3);
		transform: translateZ(-600px) scale(3);
		z-index: 2;
	}

	/* demo styles
		--------------------------------------------- */

	.parallax {
		font-size: 200%;
	}

	/* centre the content in the parallax layers */
	.title {
		text-align: center;
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	/* style the groups
		--------------------------------------------- */

	#group1 {
		z-index: 5; /* slide over group 2 */
	}

	#group2 {
		z-index: 3; /* slide under groups 1 and 3 */
	}

	#group3 {
		z-index: 4; /* slide over group 2 and 4 */
	}

	#group4 {
		z-index: 2; /* slide under group 3 and 5 */
	}

	#group5 {
		z-index: 3; /* slide over group 4 and 6 */
	}

	#group6 {
		z-index: 2; /* slide under group 5 and 7 */
	}

	#group7 {
		z-index: 3; /* slide over group 7 */
	}
</style>
