<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Tagline from '$lib/components/typography/Tagline.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';

	export let title = 'Title';
	export let href = undefined;
	export let tagline = undefined;
	export let subtitle = undefined;
	export let secondary = undefined;

	let className = undefined;
	export { className as class };
</script>

<a
	{href}
	class="contents">
	<!-- Card BG & layout -->
	<div class="{className} bg-glass-gradient flex py-10 px-8 md:py-12 md:px-10">
		<!-- Text elements -->
		<div class={secondary ? 'grid grow grid-cols-1 grid-rows-2 gap-12 sm:grid-cols-2 sm:grid-rows-1 sm:gap-4' : 'contents'}>
			<!-- Main text elements -->
			<div class="flex flex-col gap-2 md:w-1/2">
				<!-- Tagline -->
				{#if tagline}
					<Tagline>{tagline}</Tagline>
				{/if}
				<!-- Title -->
				<Title class="flex items-center gap-3">
					{title}
					{#if href}
						<Icon
							name="arrow_right_solid"
							size="w-8 h-8 md:w-10 md:h-10"
							type="fill"
							class="inline-block" />
					{/if}
				</Title>
				<!-- Subtitle -->
				{#if subtitle}
					<Body class="opacity-50">{subtitle}</Body>
				{/if}
			</div>

			<!-- Secondary text elements -->
			{#if secondary}
				<div>
					<Tagline>{secondary.tagline}</Tagline>
					<Title>{secondary.title}</Title>
				</div>
			{/if}
		</div>
	</div>
</a>
