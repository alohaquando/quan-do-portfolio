<script lang="ts">
	//<editor-fold desc="Imports">
	//<editor-fold desc="Components">

	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import SmallWorkCard from '$lib/components/cards/SmallWorkCard.svelte';
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';

	//</editor-fold>

	//<editor-fold desc="Background illustrations">
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	import BG1 from '$lib/assets/images/bg/hd-1.svelte';
	import BG2 from '$lib/assets/images/bg/hd-2.svelte';
	import BG3 from '$lib/assets/images/bg/hd-3.svelte';
	import BG4 from '$lib/assets/images/bg/hd-4.svelte';
	import DemoGrove from '$lib/assets/images/bg/device-grove-full.svelte';
	import DemoConcept from '$lib/assets/images/bg/device-concept.svelte';

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

<Animate rootMargin='-50%'>

	<article
		id={href ? href : title}
		class="">
		<!--<editor-fold desc="Card outer area">-->
		<div class="pb-safe mb-20 flex min-h-screen w-full">
			<svelte:element
				this={href ? 'a' : 'div'}
				href={href || null}
				class="contents">
				<!--<editor-fold desc="Card content">-->
				<div
					class="relative z-10 grid min-h-[280px] w-full gap-6 overflow-clip dark:bg-black p-5 md:min-h-[16rem] md:gap-5 md:p-8 lg:min-h-[20rem] lg:gap-10 lg:p-14 portrait:flex portrait:flex-col landscape:min-w-[18rem] landscape:grid-cols-3 landscape:grid-rows-1 {secondaryWorks == null
					? ' portrait:grid-rows-3'
					: ' portrait:grid-rows-6'}">
					<!--<editor-fold desc="Title and Subtitle">-->
					<div class="pointer-events-none flex gap-2 landscape:place-items-end">
						<div class=" flex shrink flex-col">
							<!-- Title and Arrow -->
							<h1 class="text-4x md:text-5x-large max-lg:landscape:text-4x font-light !leading-snug mb-2">
								{title}
							</h1>
							<!-- /Title and Arrow -->

							<!-- Subtitle -->
							<h2 class="text-1x md:text-2x-large max-lg:landscape:text-1x max-md:landscape:line-clamp-7 font-light opacity-70 max-lg:landscape:!leading-snug">
								{subtitle}
							</h2>
							<!-- /Subtitle -->
						</div>
					</div>
					<!--</editor-fold>-->

					<!--<editor-fold desc="Secondary cards">-->
					{#if secondaryWorks}
						<div class="relative z-30 flex grow landscape:col-span-2">
							<div class="isolate grid w-full grid-cols-1 grid-rows-3 gap-4 self-stretch px-0 sm:gap-6">
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
								<svelte:component
									this={selectedDemo.img}
									eager={bg === '1'} />
							</div>
						</div>
					{/if}
					<!--</editor-fold>-->

					<!--<editor-fold desc="Background illustration">-->
					<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-20 select-none overflow-clip ">
						<svelte:component
							this={selectedBG.img}
							eager={bg === '1'}
							class="h-full w-full object-cover opacity-50  saturate-150 dark:saturate-100 dark:opacity-40 {selectedBG.class}" />
					</div>
					<!--</editor-fold>-->

					<!--<editor-fold desc="Background shadow">-->
					<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 flex select-none flex-col overflow-clip">
						<div class="grow bg-gradient-to-b dark:from-black from-white via-white/30" />
						<div class="grow" />
						<div class="grow bg-gradient-to-t dark:from-black from-white via-white/30" />
					</div>
					<!--</editor-fold>-->

					<!--<editor-fold desc="Noise overlay">-->
					<Noise class="z-20 opacity-50" />
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

</Animate>