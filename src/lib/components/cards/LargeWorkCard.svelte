<script>
	import BodyLarge from '$lib/components/typography/BodyLarge.svelte';
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';

	export let title = 'Title';
	export let subtitle = 'Subtitle';
	export let href = undefined;
</script>

<!-- Outer black BG -->
<div
	id={href ? href : title}
	class="flex h-screen w-full p-4 md:p-6">
	<!--	Card	-->
	<a
		href={href || null}
		class="contents">
		<div class="flex w-full flex-col place-content-between items-start rounded-[2.5rem] bg-zinc-900 relative">

			<!-- Secondary cards -->
			<!-- TODO: Add mouse drag scrolling or left right button	-->
			<!-- TODO: Add snap	-->
			<div class="relative h-1/2 w-full ">
				<div class="scrollbar-none absolute top-0 bottom-0 -left-4 -right-4 isolate w-screen gap-6 overflow-y-clip px-16 pt-16 max-lg:flex max-lg:overflow-x-scroll lg:left-0 lg:right-0 lg:grid lg:w-full lg:auto-cols-fr lg:grid-flow-col lg:gap-8 lg:px-20 lg:pt-24">
					<slot />
				</div>
			</div>
			<!-- /Secondary cards -->

			<!-- Title and subtitle -->
			<div class="flex flex-col px-12 py-16 md:px-20 md:py-24 z-10 pointer-events-none gap-2">
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
