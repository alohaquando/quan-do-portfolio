<script lang="ts">
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
	interface ImgAndClass {
		[key: string]: {
			img: typeof SvelteComponent;
			class: string;
		};
	}

	const bgImg: ImgAndClass = {
		profile_picture: {
			img: profilePicture,
			class: 'object-center'
		}
	};

	// Image
	import ResumeImg from '$lib/assets/images/bg/resume.svelte';
	import type { SvelteComponent } from 'svelte';
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	import TaglineTitle from '$lib/components/typography/TaglineTitle.svelte';
	const images: ImgAndClass = {
		resume: {
			img: ResumeImg,
			class: 'object-left-top'
		}
	};

	// Props
	let className = '';
	export { className as class };
	export let title = 'Title';
	export let href: string | undefined = undefined;
	export let download: string | undefined = undefined;
	export let target: string | undefined = undefined;
	export let tagline: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let illustration: string | undefined = undefined;
	export let illustrationGroupClass: string | undefined = undefined;
	export let illustrationClass: string | undefined = undefined;
	export let illustrationSecondary: string | undefined = undefined;
	export let illustrationSecondaryClass: string | undefined = undefined;
	export let bg: string | undefined = undefined;
	export let secondary: { tagline: string; title: string } | undefined = undefined;
	export let image: string | undefined = undefined;
</script>

<Animate class="flex basis-full">
	<svelte:element
		this={href ? 'a' : 'div'}
		href={href || null}
		download={download || null}
		target={target || null}
		class="contents">
		<!-- Card -->
		<div class="{className} {secondary ? 'grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1' : ''} bg-glass-gradient relative flex grow overflow-clip">

			<!--<editor-fold desc="Noise overlay">-->
			<Noise class="dark:!opacity-[10%] !opacity-[20%] rounded-3xl" />
			<!--</editor-fold>-->

			<!-- Primary text -->
			<div class="pointer-events-none z-10 flex flex-col px-5 py-6 md:px-8 md:py-10 {secondary ? 'pb-1 sm:pb-6' : ''}">
				<!-- Tagline -->
				{#if tagline}
					<Tagline>{tagline}</Tagline>
				{/if}
				<!-- /Tagline -->

				<!-- Title and Icon -->
				<Title class="flex items-center gap-3 {secondary ? '' : 'pb-2'}">
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

			<!-- Secondary text  -->
			{#if secondary}
				<div class="pointer-events-none z-10 flex flex-col px-5 pb-2  sm:py-10">
					<Tagline>{secondary.tagline}</Tagline>
					<Title>{secondary.title}</Title>
				</div>
			{/if}
			<!-- /Secondary text  -->

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
				<div class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 -z-10 overflow-hidden">
					<div class="absolute h-full w-full bg-gradient-to-tr-alt from-zinc-100 via-[#F8F8F8CC_20%] to-[#F8F8F800_40%] dark:from-zinc-900 dark:via-[#151515CC_20%] dark:to-[#00000000_40%]" />
					<svelte:component
						this={bgImg[bg].img}
						class="h-full w-full object-cover {bgImg[bg].class}" />
				</div>
			{/if}
			<!-- /Background Image -->

			<!-- Image -->
			{#if image}
				<div class="relative basis-full">
					<div class="pointer-events-none absolute -bottom-6 -right-6 top-0 left-[30%]">
						<div class="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:rounded-lg [&_img]:object-cover [&_img]:object-left-top">
							<svelte:component this={images[image].img} />
						</div>
					</div>
				</div>
			{/if}
			<!-- /Image -->


			<!-- Glow on hover -->
			{#if href}
				<HoverGlow class="rounded-3xl " />
			{/if}
			<!-- /Glow on hover -->
		</div>
		<!-- /Card -->
	</svelte:element>
</Animate>
