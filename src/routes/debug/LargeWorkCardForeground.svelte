<script lang="ts">
	//<editor-fold desc="Imports">
	//<editor-fold desc="Components">

	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import SmallWorkCard from '$lib/components/cards/SmallWorkCard.svelte';

	//</editor-fold>



	//</editor-fold>
	//</editor-fold>

	//<editor-fold desc="Exports">
	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href: string;
	export let secondaryWorks: object | undefined;
	//</editor-fold>


	// Classes for layout
	let className = '';
	export { className as class };
</script>

<article
	id={href ? href : title}
	class="">
	<!--<editor-fold desc="Card outer area">-->
	<div class="pb-safe mb-24 flex min-h-screen w-full">
		<svelte:element
			this={href ? 'a' : 'div'}
			href={href || null}
			class="contents">
			<!--<editor-fold desc="Card content">-->
			<div
				class="relative z-10 grid min-h-[280px] w-full gap-6 overflow-clip p-5 md:min-h-[16rem] md:gap-5 md:p-8 lg:min-h-[20rem] lg:gap-10 lg:p-14 portrait:flex portrait:flex-col landscape:min-w-[18rem] landscape:grid-cols-3 landscape:grid-rows-1 {secondaryWorks == null
					? ' portrait:grid-rows-3'
					: ' portrait:grid-rows-6'}">
				<!--<editor-fold desc="Title and Subtitle">-->
				<div class="pointer-events-none flex gap-2 landscape:place-items-end">
					<div class=" flex shrink flex-col">
						<!-- Title and Arrow -->
						<h1 class="text-4x md:text-5x-large max-lg:landscape:text-4x font-light !text-white max-lg:landscape:!leading-snug">
							{title}
						</h1>
						<!-- /Title and Arrow -->

						<!-- Subtitle -->
						<h2 class="text-1x md:text-2x-large max-lg:landscape:text-1x max-md:landscape:line-clamp-7 font-light !text-white/80 max-lg:landscape:!leading-snug">
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
