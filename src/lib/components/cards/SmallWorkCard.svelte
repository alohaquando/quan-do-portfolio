<script>
	// Component imports
	import Title from '$lib/components/typography/Title.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
	import Animate from '$lib/components/visuals/SlideIn.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import { solidColors } from '$lib/data/Colors.js';

	// Images imports
	import DemoExtendable from '$lib/assets/images/bg/demo-extendable-card-component.svelte';
	import DemoPeople from '$lib/assets/images/bg/demo-people-select-modal.svelte';
	import DemoCreate from '$lib/assets/images/bg/demo-create-new-flow.svelte';
	import DemoMovie from '$lib/assets/images/bg/demo-movieNow.svelte';
	import DemoHCMC from '$lib/assets/images/bg/demo-hcmc-bars.svelte';
	import DemoTask from '$lib/assets/images/bg/demo-task-calendar-dashboard.svelte';
	import Noise from '$lib/components/visuals/Noise.svelte';

	const demoImg = {
		extendable_card_component: DemoExtendable,
		people_select_modal: DemoPeople,
		create_new_flow: DemoCreate,
		movieNow: DemoMovie,
		hcmc_bars: DemoHCMC,
		task_calendar_dashboard: DemoTask
	};

	let className;
	export { className as class };
	export let title = 'Title';
	export let href = '/';
	export let color = 'blue';
	export let demo;
</script>

<Animate
	class="{className} flex w-64 grow sm:w-auto"
	preAnimationLocation="max-sm:translate-x-56 sm:translate-y-56">
	<a
		{href}
		class="contents">
		<!-- Card -->
		<div
			id={href}
			class="{solidColors[color]} relative isolate flex grow flex-col overflow-clip rounded-3xl !text-white sm:flex-row md:flex-col">
			<!-- Noise -->
			<Noise class="!opacity-[5%]" />
			<!-- /Noise -->

			<!-- Title and Arrow -->
			<div class="pointer-events-none z-10 flex p-6 sm:basis-full md:p-10">
				<Title>
					{title}
					<Icon
						name="arrow_right_solid"
						size="w-8 h-8 md:w-10 md:h-10"
						class="mb-2 inline-block !fill-white" />
				</Title>
			</div>
			<!-- /Title and Arrow -->

			<!-- Image -->
			<div class="relative flex grow self-stretch sm:basis-full">
				<div class="bg-glass pointer-events-none absolute top-0 -bottom-6 -right-6 w-[95%] rounded-b-3xl sm:top-6 lg:top-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
					<svelte:component
						this={demoImg[demo]}
						eager />
				</div>
			</div>
			<!-- /Image -->

			<!-- Glow on hover -->
			<HoverGlow class="rounded-3xl" />
			<!-- /Glow on hover -->
		</div>
		<!-- /Card -->
	</a>
</Animate>
