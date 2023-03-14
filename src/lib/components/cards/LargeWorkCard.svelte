<script>
	// Component imports
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
	import SmallWorkCard from '$lib/components/cards/SmallWorkCard.svelte';

	// Animation imports
	import SlideScaleSnap from '$lib/components/visuals/SlideScaleSnap.svelte';

	// Background Illustrations imports
	import Noise from '$lib/components/visuals/Noise.svelte';
	import BG1 from '$lib/assets/images/bg/hd-1.svelte';
	import BG2 from '$lib/assets/images/bg/hd-2.svelte';
	import BG3 from '$lib/assets/images/bg/hd-3.svelte';
	import BG4 from '$lib/assets/images/bg/hd-4.svelte';
	import DemoGrove from '$lib/assets/images/bg/demo-grove.svelte';
	import DemoConcept from '$lib/assets/images/bg/demo-concept.svelte';
	const bgImg = {
		1: {
			bg: BG1,
			focus: 'object-left-top'
		},
		2: {
			bg: BG2,
			focus: 'object-right-top'
		},
		3: {
			bg: BG3,
			focus: 'object-left-top'
		},
		4: {
			bg: BG4,
			focus: 'object-center'
		}
	};
	const demoImg = {
		grove: {
			img: DemoGrove,
			class: 'top-0 -bottom-1/4 left-0 right-0 md:-right-20 max-md:flex max-md:items-start [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top'
		},
		concept: {
			img: DemoConcept,
			class: 'top-0 bottom-0 left-0 right-0 md:-right-20 max-md:flex max-md:items-center max-md:justify-center [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top'
		}
	};

	// Exports
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let demo = undefined;
	export let bg = 1;
	export let href = undefined;
	export let secondaryWorks = undefined;

	let snapDone;
</script>

<article
	id={href ? href : title}
	class="relative">
	<SlideScaleSnap bind:snapDone>
		<!-- Outer BG -->
		<div class="flex min-h-screen w-full p-4 !text-white md:p-6 ">
			<!--	Card Link	-->
			<svelte:element
				this={href ? 'a' : 'div'}
				href={href || null}
				class="contents">
				<!-- Card Content -->
				<div class="{demo ? 'flex-col overflow-clip md:flex-row md:items-end' : ''} {secondaryWorks ? 'flex-col' : ''} relative flex w-full gap-12 rounded-[2.5rem] px-8 py-10 shadow-xl md:p-16 lg:px-20">
					<!-- Secondary cards -->
					{#if secondaryWorks}
						<div class="relative z-10 flex min-h-fit grow self-stretch">
							<div
								class="scrollbar-none absolute top-0 bottom-0 -left-12 -right-12 isolate grow scroll-px-12 gap-6 self-stretch overflow-x-visible px-16 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-scroll sm:static sm:grid sm:w-full sm:scroll-px-28 sm:grid-flow-row sm:grid-cols-1 sm:grid-rows-3 sm:px-0 md:grid-cols-2 md:grid-rows-2 md:gap-8 lg:grid-cols-3 lg:grid-rows-1">
								{#each Object.values(secondaryWorks) as secondaryWork}
									<SmallWorkCard
										{...secondaryWork}
										class="max-sm:snap-start" />
								{/each}
							</div>
						</div>
					{/if}
					<!-- /Secondary cards -->

					<!-- Title and subtitle -->
					<div class="{demo ? 'md:basis-full' : ''} pointer-events-none z-10 flex flex-col gap-2 max-md:order-first md:justify-end">
						<!-- Title and Arrow -->
						<DisplaySmall>
							{title}
							{#if href}
								<Icon
									name="arrow_right_solid"
									size="w-10 h-10 md:w-12 md:h-12"
									class="mb-3 inline-block !fill-white md:mb-4" />
							{/if}
						</DisplaySmall>
						<!-- /Title and Arrow -->
						<BodyLarge class="opacity-80">
							{subtitle}
						</BodyLarge>
					</div>
					<!-- /Title and subtitle -->

					<!-- Demo image -->
					{#if demo}
						<div class="pointer-events-none relative z-0 flex basis-full self-stretch">
							<div class="absolute {demoImg[demo].class}">
								<svelte:component this={demoImg[demo].img} />
							</div>
						</div>
					{/if}
					<!-- /Demo image -->

					<!-- Background Illustration -->
					<div class="pointer-events-none absolute top-0 left-0 right-0  bottom-0 select-none overflow-hidden rounded-[2.5rem]">
						<svelte:component
							this={bgImg[bg].bg}
							class="h-full w-full object-cover {bgImg[bg].focus}" />
						<Noise class="!opacity-20" />
					</div>
					<!-- /Background Illustration -->

					<!-- Glow on hover -->
					{#if href}
						<HoverGlow class="rounded-[2.5rem]" />
					{/if}
					<!-- /Glow on hover -->
				</div>
				<!-- /Card Content -->
			</svelte:element>
		</div>
	</SlideScaleSnap>
	<div class=" fixed -top-8 -left-8 -right-8 -bottom-8 -z-10 overflow-hidden ">
		<svelte:component
			this={bgImg[bg].bg}
			class="h-full w-full object-cover object-left-top {snapDone ? 'opacity-70' : 'opacity-0'} blur-fix blur-xl  transition-all duration-300" />
		<div class="absolute top-0 -z-20 h-full w-full bg-black {snapDone ? 'opacity-100' : 'opacity-0'} transition-all duration-300" />
	</div>
</article>
