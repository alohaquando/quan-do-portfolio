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
	import { scrollY } from '$lib/data/window';

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
	let compact = false;
	// $: if (element && $innerHeight) {
	// 	compact = element.getBoundingClientRect().height < 100;
	// }

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
			class="relative flex grow portrait:flex-col landscape:flex-row overflow-clip rounded-3xl {solidColors[color]}">
			<!--<editor-fold desc="Noise overlay">-->
			<Noise class="!opacity-[30%]" />
			<!--</editor-fold>-->

			<!--<editor-fold desc="Title">-->
			<div class="pointer-events-none z-10 flex p-4 landscape:basis-1/3 ring ring-red-500 {compact ? '' : 'sm:p-6 lg:p-8'} grow">
				<h2 class="sm:text-2x {compact ? 'flex grow place-items-center' : ''}" >
					{title}
				</h2>
			</div>
			<!--</editor-fold>-->

			<!--<editor-fold desc="Image">-->
			{#if !compact}
				<div class="relative flex grow portrait:basis-full self-stretch ring">
					<div class="bg-glass pointer-events-none absolute -bottom-6 -right-6 landscape:left-0 portrait:top-0 landscape:top-6 rounded-b-3xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
						<svelte:component this={demoImg} />
					</div>
				</div>
			{/if}
			<!--</editor-fold>-->

			<!--<editor-fold desc="Glow on hover">-->
			<HoverGlow class="rounded-3xl" />
			<!--</editor-fold>-->
		</div>
		<!--</editor-fold>-->
	</a>
</Animate>
