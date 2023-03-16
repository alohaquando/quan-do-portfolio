<script>
	// Imports
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Tagline from '$lib/components/typography/Tagline.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visuals/HoverGlow.svelte';
	import Animate from '$lib/components/visuals/SlideIn.svelte';

	// Props
	let className = undefined;
	export { className as class };
	export let title = 'Title';
	export let href = undefined;
	export let tagline = undefined;
	export let subtitle = undefined;
	export let secondary = undefined;
</script>

<Animate class="flex basis-full">
	<svelte:element
		this={href ? 'a' : 'div'}
		href={href || null}
		class="contents">
		<!-- Card -->
		<div class="{className} {secondary ? 'grid grid-cols-1 grid-rows-2 gap-12 sm:grid-cols-2 sm:grid-rows-1 sm:gap-4' : ''} bg-glass-gradient flex grow py-10 px-8 md:py-12 md:px-10">
			<!-- Primary text -->
			<div class="pointer-events-none z-10 flex flex-col gap-2 md:w-1/2">
				<!-- Tagline -->
				{#if tagline}
					<Tagline>{tagline}</Tagline>
				{/if}
				<!-- /Tagline -->

				<!-- Title and Icon -->
				<Title class="flex items-center gap-3">
					{title}
					<!-- Icon -->
					{#if href}
						<Icon
							name="arrow_right_solid"
							size="w-8 h-8 md:w-10 md:h-10"
							class="inline-block" />
					{/if}
					<!-- /Icon -->
				</Title>
				<!-- /Title and Icon -->

				<!-- Subtitle -->
				{#if subtitle}
					<Body class="opacity-50">{subtitle}</Body>
				{/if}
				<!-- /Subtitle -->
			</div>
			<!-- /Primary text -->

			<!-- Secondary text  -->
			{#if secondary}
				<div class="flex flex-col gap-2">
					<Tagline>{secondary.tagline}</Tagline>
					<Title>{secondary.title}</Title>
				</div>
			{/if}
			<!-- /Secondary text  -->

			<!-- Glow on hover -->
			{#if href}
				<HoverGlow class="rounded-[2.5rem] " />
			{/if}
			<!-- /Glow on hover -->
		</div>
		<!-- /Card -->
	</svelte:element>
</Animate>
