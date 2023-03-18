<script>
	// Imports
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Tagline from '$lib/components/typography/Tagline.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	import HoverGlow from '$lib/components/visual-effects/HoverGlow.svelte';
	import Animate from '$lib/components/visual-effects/SlideIn.svelte';
	import Illustration from '$lib/components/illustrations/Illustration.svelte';
	import FullName from '$lib/components/iconography/FullName.svelte';

	// BG Image
	import profilePicture from '$lib/assets/images/bg/quan.svelte';
	const bgImg = {
		profile_picture: {
			bg: profilePicture,
			focus: 'object-center'
		}
	};

	// Image
	import ResumeImg from '$lib/assets/images/bg/resume.svelte';
	const images = {
		resume: {
			bg: ResumeImg,
			focus: 'object-left-top'
		}
	};

	// Props
	let className = undefined;
	export { className as class };
	export let title = 'Title';
	export let href = undefined;
	export let download = undefined;
	export let target = undefined;
	export let tagline = undefined;
	export let subtitle = undefined;
	export let illustration = undefined;
	export let illustrationGroupClass = undefined;
	export let illustrationClass = undefined;
	export let illustrationSecondary = undefined;
	export let illustrationSecondaryClass = undefined;
	export let bg = undefined;
	export let secondary = undefined;
	export let image = undefined;
</script>

<Animate class="flex basis-full">
	<svelte:element
		this={href ? 'a' : 'div'}
		href={href || null}
		download={download || null}
		target='{target || null}'
		class="contents">
		<!-- Card -->
		<div class="{className} {secondary ? 'grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1' : ''} bg-glass-gradient relative flex grow overflow-clip">
			<!-- Primary text -->
			<div class="pointer-events-none z-10 flex flex-col gap-2 py-10 px-8 md:py-12 md:px-10">
				<!-- Tagline -->
				{#if tagline}
					<Tagline>{tagline}</Tagline>
				{/if}
				<!-- /Tagline -->

				<!-- Title and Icon -->
				<Title class="flex items-center gap-3">
					<!-- Title / Full Name -->
					{#if title !== 'Quân Hoàng Đỗ'}
						{title}
					{:else}
						<FullName class="w-52 md:w-64" />
					{/if}
					<!-- /Title / Full Name -->

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

			<!-- Illustration -->
			{#if illustration}
				<div class="flex grow basis-full {illustrationGroupClass}">
					<Illustration
						name={illustration}
						class="h-full w-full {illustrationClass}" />
					{#if illustrationSecondary}
							<Illustration
								name={illustrationSecondary}
								class="h-full w-full {illustrationSecondaryClass}" />
					{/if}
				</div>
			{/if}
			<!-- /Illustration -->

			<!-- Background Image -->
			{#if bg}
				<div class="pointer-events-none absolute top-0 left-0 right-0 bottom-0 -z-10 overflow-hidden">
					<div class="absolute h-full w-full bg-gradient-to-tr-alt from-zinc-100 via-[#F8F8F8CC_20%] to-[#F8F8F800_40%] dark:from-zinc-900 dark:via-[#151515CC_20%] dark:to-[#00000000_40%]" />
					<svelte:component
						this={bgImg[bg].bg}
						class="h-full w-full object-cover {bgImg[bg].focus}" />
				</div>
			{/if}
			<!-- /Background Image -->

			<!-- Image -->
			{#if image}
				<div class="relative flex max-h-full grow basis-full self-stretch ">
					<div class="bg-glass pointer-events-none absolute top-8 -bottom-6 -right-32 w-[120%] sm:-right-6 sm:w-[85%] rounded-b-3xl [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top">
						<svelte:component this={images[image].bg} />
					</div>
				</div>
			{/if}
			<!-- /Image -->

			<!-- Secondary text  -->
			{#if secondary}
				<div class="flex flex-col gap-2 py-10 px-8 md:py-12 md:px-10">
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
