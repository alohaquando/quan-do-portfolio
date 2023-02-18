<script>
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
	import SmallWorkCard from '$lib/components/cards/SmallWorkCard.svelte';

	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = undefined;

	export let secondaryWorks = undefined;

	import IMG from '$lib/assets/images/work/grove.svelte';
</script>

<!-- Outer black BG -->
<div
	id={href ? href : title}
	class="flex min-h-screen w-full p-4 md:p-6">
	<!--	Card	-->
	<a
		href={href || null}
		class="contents">
		<div class="relative flex w-full flex-col place-content-between items-start gap-12 rounded-[2.5rem] bg-zinc-900 px-12 py-16 md:px-20 lg:py-24">
			<!-- Secondary cards -->
			<div class="relative flex min-h-fit grow self-stretch">
				<div
					class="scrollbar-none absolute top-0 bottom-0 -left-16 isolate w-screen grow scroll-px-16 gap-6 self-stretch px-16 max-sm:flex max-sm:snap-x max-sm:snap-mandatory max-sm:overflow-x-scroll sm:static sm:grid sm:w-full sm:scroll-px-28 sm:grid-flow-row sm:grid-cols-2 sm:grid-rows-2 sm:px-0 md:gap-8 ">
					{#if secondaryWorks}
						{#each Object.values(secondaryWorks) as secondaryWork}
							<SmallWorkCard
								{...secondaryWork}
								class="max-sm:snap-start">
								<IMG />
							</SmallWorkCard>
						{/each}
					{/if}
				</div>
			</div>
			<!-- /Secondary cards -->

			<!-- Title and subtitle -->
			<div class="pointer-events-none z-10 flex flex-col gap-2 self-stretch">
				<!-- Title and Arrow -->
				<DisplaySmall>
					{title}
					{#if href}
						<Icon
							name="arrow_right_solid"
							size="w-10 h-10 md:w-12 md:h-12"
							type="fill"
							class="mb-3 inline-block md:mb-4" />
					{/if}
				</DisplaySmall>
				<!-- /Title and Arrow -->

				<BodyLarge class="opacity-80">
					{subtitle}
				</BodyLarge>
			</div>
			<!-- /Title and subtitle -->

			<!-- Glow on hover -->
			{#if href}
				<HoverGlow class="rounded-[2.5rem]" />
			{/if}
			<!-- /Glow on hover -->
		</div>
	</a>
</div>
