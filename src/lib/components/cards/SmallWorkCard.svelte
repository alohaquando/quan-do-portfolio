<script lang="ts">
	// Component imports
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';

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

	export let title = 'Title';
	export let href = '/';
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
			class="bg-glass-gradient relative flex grow overflow-clip rounded-3xl portrait:flex-col landscape:flex-row md:portrait:flex-row">
			<!--<editor-fold desc="Noise overlay">-->
			<Noise class="dark:!opacity-[10%] !opacity-[20%]" />
			<!--</editor-fold>-->

			<!--<editor-fold desc="Title">-->
			<div class="pointer-events-none z-10 flex px-5 py-6 md:p-6 md:pl-7 landscape:grow md:portrait:grow {compact ? 'place-items-center pr-4' : 'landscape:place-items-end '}">
				<h2
					class="text-2x md:portrait:text-3x md:landscape:text-2x lg:landscape:text-4x max-lg:landscape:text-1x !text-white/95 font-light max-lg:landscape:whitespace-nowrap max-md:landscape:place-items-center max-md:landscape:text-base !leading-snug ">
					{title}
				</h2>
			</div>
			<!--</editor-fold>-->

			<!--<editor-fold desc="Image">-->
			<div class="relative flex max-md:portrait:grow md:portrait:w-1/3 landscape:w-1/3 lg:landscape:w-[35%]">
				<div class="pointer-events-none absolute -bottom-6 -right-6 portrait:top-0 md:portrait:top-5 landscape:top-5 portrait:left-[30%] sm:portrait:left-[50%] landscape:left-0 md:portrait:left-0">
					<div class="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover [&_img]:object-left-top">
						<svelte:component this={demoImg} />
					</div>
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
