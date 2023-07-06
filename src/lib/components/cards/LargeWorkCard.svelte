<script lang="ts">
	//<editor-fold desc="Imports">
	//<editor-fold desc="Components">

	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import SmallWorkCard from '$lib/components/cards/SmallWorkCard.svelte';
	import { colorScheme } from '$lib/data/colorScheme';
	//</editor-fold>

	//<editor-fold desc="Background illustrations">
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	import BG1 from '$lib/assets/images/bg/hd-1.svelte';
	import BG2 from '$lib/assets/images/bg/hd-2.svelte';
	import BG3 from '$lib/assets/images/bg/hd-3.svelte';
	import BG4 from '$lib/assets/images/bg/hd-4.svelte';
	import DemoGrove from '$lib/assets/images/bg/device-grove.svelte';
	import DemoConcept from '$lib/assets/images/bg/device-concept.svelte';

	const bgImg = {
		'1': {
			img: BG1,
			class: 'object-left-top'
		},
		'2': {
			img: BG2,
			class: 'object-right-top opacity-25'
		},
		'3': {
			img: BG3,
			class: 'object-left-top'
		},
		'4': {
			img: BG4,
			class: 'object-center opacity-50'
		}
	};

	const demoImg = {
		grove: {
			img: DemoGrove,
			class: 'top-0 -bottom-1/4 left-0 right-0 md:-right-20 max-md:flex max-md:items-start [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top'
		},
		concept: {
			img: DemoConcept,
			class: '-top-[10%] -bottom-[10%] -left-[10%] -right-[30%] sm:-top-[0%] sm:-bottom-[0%] sm:-left-[5%] sm:-right-[5%] overflow-visible md:left-0 md:top-0 md:bottom-0 md:-right-20 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top'
		}
	};
	//</editor-fold>
	//</editor-fold>

	//<editor-fold desc="Exports">
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let demo: string;
	export let bg = '1';
	export let href: string;
	export let secondaryWorks: object;
	//</editor-fold>

	const selectedDemo = demoImg[demo as keyof typeof demoImg];
	const selectedBG = bgImg[bg as keyof typeof bgImg];
</script>

<article
	id={href ? href : title}
	class="sticky top-0 md:top-16">
	<!--<editor-fold desc="Card outer area">-->
	<div class="pb-safe mb-72 flex h-screen w-full p-2.5 md:mb-96 md:p-4 lg:p-6">
		<svelte:element
			this={href ? 'a' : 'div'}
			href={href || null}
			class="contents">
			<!--<editor-fold desc="Card content">-->
			<div
				class="relative z-10 grid min-h-[280px] w-full gap-6 overflow-clip rounded-[2.5rem] p-6 md:min-h-[16rem] md:gap-8 md:p-8 lg:min-h-[20rem] lg:gap-12 lg:p-16 portrait:flex portrait:flex-col landscape:min-w-[18rem] landscape:grid-cols-3 landscape:grid-rows-1 {$colorScheme === 'light'
					? 'bg-white'
					: 'bg-black'} {secondaryWorks == null ? ' portrait:grid-rows-3' : ' portrait:grid-rows-6'}">
				<!--<editor-fold desc="Title and Subtitle">-->
				<div class="pointer-events-none flex flex-col gap-2 landscape:justify-end">
					<!-- Title and Arrow -->
					<h1 class="text-5x md:text-5x-large max-lg:landscape:text-4x font-light">
						{title}
					</h1>
					<!-- /Title and Arrow -->

					<!-- Subtitle -->
					<h2 class="text-1x md:text-2x-large max-lg:landscape:text-1x font-light opacity-70">
						{subtitle}
					</h2>
					<!-- /Subtitle -->
				</div>
				<!--</editor-fold>-->

				<!--<editor-fold desc="Secondary cards">-->
				{#if secondaryWorks}
					<div class="relative z-30 flex grow landscape:col-span-2">
						<div class="isolate grid w-full grid-cols-1 grid-rows-3 gap-6 self-stretch px-0 md:gap-8">
							{#each Object.values(secondaryWorks) as secondaryWork}
								<SmallWorkCard
									{...secondaryWork}
									class="snap-always max-sm:snap-start" />
							{/each}
						</div>
					</div>
				{/if}
				<!--</editor-fold>-->

				<!--<editor-fold desc="Demo image">-->
				{#if demo}
					<div class="pointer-events-none relative z-0 flex basis-full self-stretch portrait:row-span-2 landscape:col-span-2">
						<div class="absolute {selectedDemo.class}">
							<svelte:component this={selectedDemo.img} />
						</div>
					</div>
				{/if}
				<!--</editor-fold>-->

				<!--<editor-fold desc="Background illustration">-->
				<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 select-none overflow-clip rounded-[2.5rem]">
					<svelte:component
						this={selectedBG.img}
						eager={bg === '1'}
						class="h-full w-full object-cover {selectedBG.class}" />
				</div>
				<!--</editor-fold>-->

				<!--<editor-fold desc="Noise overlay">-->
				<Noise class="z-20 rounded-[2.5rem] opacity-50" />
				<!--</editor-fold>-->

				<!--<editor-fold desc="Glow on hover">-->
				{#if href}
					<HoverGlow class="rounded-[2.5rem]" />
				{/if}
				<!--</editor-fold>-->
			</div>
			<!--</editor-fold>-->
		</svelte:element>
	</div>
	<!--</editor-fold>-->
</article>
