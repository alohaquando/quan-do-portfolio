<script lang="ts">
	// Component imports
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import SmallWorkCard from '$lib/components/cards/SmallWorkCard.svelte';

	// Animation imports
	import SlideScaleSnap from '$lib/components/visual-effects/SlideScaleSnap.svelte';

	// Background Illustrations imports
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	import BG1 from '$lib/assets/images/bg/hd-1.svelte';
	import BG2 from '$lib/assets/images/bg/hd-2.svelte';
	import BG3 from '$lib/assets/images/bg/hd-3.svelte';
	import BG4 from '$lib/assets/images/bg/hd-4.svelte';
	import DemoGrove from '$lib/assets/images/bg/device-grove.svelte';
	import DemoConcept from '$lib/assets/images/bg/device-concept.svelte';
	import type { SvelteComponent } from 'svelte';
	interface ImgAndClass {
		[key: string]: {
			img: typeof SvelteComponent;
			class: string;
		};
	}
	const bgImg: ImgAndClass = {
		1: {
			img: BG1,
			class: 'object-left-top'
		},
		2: {
			img: BG2,
			class: 'object-right-top'
		},
		3: {
			img: BG3,
			class: 'object-left-top'
		},
		4: {
			img: BG4,
			class: 'object-center'
		}
	};
	const demoImg: ImgAndClass = {
		grove: {
			img: DemoGrove,
			class: 'top-0 -bottom-1/4 left-0 right-0 md:-right-20 max-md:flex max-md:items-start [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top'
		},
		concept: {
			img: DemoConcept,
			class: '-top-[10%] -bottom-[10%] -left-[10%] -right-[30%] sm:-top-[0%] sm:-bottom-[0%] sm:-left-[5%] sm:-right-[5%] overflow-visible md:left-0 md:top-0 md:bottom-0 md:-right-20 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top'
		}
	};

	// Exports
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let demo: string | undefined = undefined;
	export let bg = '1';
	export let href: string | undefined = undefined;
	export let secondaryWorks: object | undefined = undefined;
</script>

<article
	id={href ? href : title}
	class="relative">
	<SlideScaleSnap>
		<!-- Outer BG -->
		<div class="pb-safe flex min-h-screen w-full p-4 md:p-6">
			<!--	Card Link	-->
			<svelte:element
				this={href ? 'a' : 'div'}
				href={href || null}
				class="contents">
				<!-- Card Content -->
				<div class="{demo ? 'flex-col overflow-clip md:flex-row md:items-end' : ''} {secondaryWorks ? 'flex-col' : ''} relative flex w-full gap-12 rounded-[2.5rem] px-8 py-10 shadow-xl md:p-16">
					<!-- Secondary cards -->
					{#if secondaryWorks}
						<div class="relative z-30 flex min-h-fit grow self-stretch max-lg:order-2">
							<div
								class="scrollbar-none absolute -left-12 -right-12 bottom-0 top-0 isolate grow scroll-px-12 gap-6 self-stretch px-16 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-scroll sm:static sm:grid sm:w-full sm:scroll-px-28 sm:grid-flow-row sm:grid-cols-1 sm:grid-rows-3 sm:px-0 md:gap-8 lg:grid-cols-3 lg:grid-rows-1">
								{#each Object.values(secondaryWorks) as secondaryWork}
									<SmallWorkCard
										{...secondaryWork}
										class="snap-always max-sm:snap-start" />
								{/each}
							</div>
						</div>
					{/if}
					<!-- /Secondary cards -->

					<!-- Title and subtitle -->
					<div class="{demo ? 'md:basis-full' : ''} pointer-events-none z-10 flex flex-col gap-2 md:justify-end">
						<!-- Title and Arrow -->
						<DisplaySmall class="!text-white">
							{title}
							{#if href}
								<Icon
									name="arrow_right_solid"
									size="w-10 h-10 md:w-12 md:h-12"
									class="mb-3 inline-block !fill-white md:mb-4" />
							{/if}
						</DisplaySmall>
						<!-- /Title and Arrow -->

						<!-- Subtitle -->
						<BodyLarge class="line-clamp-3 !text-white opacity-80">
							{subtitle}
						</BodyLarge>
						<!-- /Subtitle -->
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
					<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 select-none overflow-clip rounded-[2.5rem]">
						<svelte:component
							this={bgImg[bg].img}
							eager={bg === '1' ? true : null}
							class="h-full w-full object-cover {bgImg[bg].class}" />
					</div>
					<!-- /Background Illustration -->

					<!-- Noise -->
					<Noise class="z-20 rounded-[2.5rem] opacity-50" />
					<!-- /Noise -->

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
</article>
