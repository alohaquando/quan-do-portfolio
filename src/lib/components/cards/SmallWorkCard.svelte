<script lang="ts">
	// Component imports
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';
	import { solidColors } from '$lib/data/Colors';

	// Images imports
	import DemoExtendable from '$lib/assets/images/bg/demo-extendable-card-component.svelte';
	import DemoPeople from '$lib/assets/images/bg/demo-people-select-modal.svelte';
	import DemoCreate from '$lib/assets/images/bg/demo-create-new-flow.svelte';
	import DemoMovie from '$lib/assets/images/bg/demo-movieNow.svelte';
	import DemoHCMC from '$lib/assets/images/bg/demo-hcmc-bars.svelte';
	import DemoTask from '$lib/assets/images/bg/demo-task-calendar-dashboard.svelte';
	import Noise from '$lib/components/visual-effects/Noise.svelte';

	const demoImgObject = {
		extendable_card_component: DemoExtendable,
		people_select_modal: DemoPeople,
		create_new_flow: DemoCreate,
		movieNow: DemoMovie,
		hcmc_bars: DemoHCMC,
		task_calendar_dashboard: DemoTask
	};

	let className = '';
	export { className as class };
	export let title = 'Title';
	export let href = '/';
	export let color = 'blue';
	export let demo = '';

	import { innerHeight } from '$lib/data/window';
	let element: HTMLElement;
	let compact: boolean;

	$: if (element && $innerHeight) {
		compact = element.getBoundingClientRect().height < 100;
	}

	const demoImg = demoImgObject[demo as keyof typeof demoImgObject];
</script>

<Animate class="contents">
	<a
		{href}
		class="contents">
		<!--<editor-fold desc="Card">-->
		<div
			id={href}
			bind:this={element}
			class="bg-glass-gradient relative flex grow overflow-clip rounded-3xl portrait:flex-col landscape:flex-row">
			<!--<editor-fold desc="Noise overlay">-->
			<Noise class="!opacity-[25%]" />
			<!--</editor-fold>-->

			<!--<editor-fold desc="Title">-->
			<div class="pointer-events-none z-10 flex grow p-3.5 pl-4 md:p-6 md:pl-7 landscape:basis-1/4 {compact ? 'place-items-center pr-4' : 'place-items-end '}">
				<h2 class="text-1x md:portrait:text-3x-large md:landscape:text-2x lg:landscape:text-2x-large max-lg:landscape:text-1x text-white/95 md:font-light landscape:whitespace-nowrap max-md:landscape:flex max-md:landscape:grow max-md:landscape:place-items-center max-md:landscape:text-base landscape:text-white/95">
					{title}
				</h2>
			</div>
			<!--</editor-fold>-->

			<!--<editor-fold desc="Image">-->
			<div class="relative flex grow self-stretch portrait:basis-full">
				<div class="pointer-events-none absolute -bottom-6 -right-6 portrait:top-0 landscape:left-0 landscape:top-5 [&_img]:h-full [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover [&_img]:object-left-top">
					<svelte:component this={demoImg} />
				</div>
			</div>
			<!--</editor-fold>-->

			<!--<editor-fold desc="Glow on hover">-->
			<HoverGlow class="rounded-3xl" />
			<!--</editor-fold>-->
		</div>
		<!--</editor-fold>-->
	</a>
</Animate>
