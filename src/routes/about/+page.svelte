<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';

	let title = 'Quân Đô';
	import Title from '$lib/components/typography/Title.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Landing from '$lib/components/layout/Landing.svelte';
	import IMG_Me from '$lib/assets/images/about/me.svelte';

	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 400 }}>
	<Landing tagline="Designer with developer's insights">
		<div
			class="flex flex-grow place-content-center items-center self-stretch overflow-clip max-sm:pt-6 sm:pt-32">
			<IMG_Me
				eager
				class="mx-auto w-3/4 rounded-full object-cover sm:h-96 sm:w-96" />
		</div>
	</Landing>
</div>

<!--Page-->
<PageLayout
	title="About"
	class="relative sm:pt-56">
	<header>
		<!--	Color Blur Highlight-->
		<div class="absolute -z-10 h-full w-[90%]">
			<div
				class="absolute -left-40 -top-8 h-20 w-full rotate-12 rounded-full bg-amber-500 opacity-30 blur-2xl dark:bg-amber-900 sm:h-32 sm:blur-3xl" />
		</div>

		<!--	Front Content-->
		<div class="relative flex gap-10 max-sm:flex-col">
			<div class="flex flex-col gap-2 sm:w-1/2 sm:gap-4">
				<!--		Title-->
				<DisplayLarge class="bg-green-600">
					{title}
					<span class="absolute top-0.5 font-display text-3xl font-bold sm:-right-1 sm:text-5xl"
						>&#x303;</span>
				</DisplayLarge>
				<!--		Subtitle -->
				<Headline>
					I'm a Senior UI/UX Designer with 2+ years of experience & Front-end Development skill
				</Headline>
			</div>
		</div>
	</header>

	<!--	Content-->
	<div class="space-default pt-10">
		<Title>Hello</Title>
		<Body>This is something about me</Body>
	</div>
</PageLayout>
