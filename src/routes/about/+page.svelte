<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import DisplayLarge from '$lib/components/typography/DisplayLarge.svelte';
	import Headline from '$lib/components/typography/Headline.svelte';
	import { themeStore } from '$lib/stores/theme.js';

	let title = 'Quân Đô';

	import IMG_Me from '$lib/assets/images/about/me.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

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
				<DisplayLarge class="relative w-fit">
					{title}
					<span class="absolute font-display top-0.5 text-3xl font-bold sm:-right-1 sm:text-5xl"
						>&#x303;</span>
				</DisplayLarge>
				<!--		Subtitle -->
				<Headline>
					I'm a Senior UI/UX Designer with 2+ years of experience & Front-end Development skill
				</Headline>
			</div>
			<!--		Image-->

			<!--Image group-->
			<div class="relative sm:w-1/2">
				<!--Glass behind image-->
				<div
					class="glass-light absolute -top-3 left-3 -z-10 h-full w-full overflow-clip rounded-3xl max-sm:hidden" />

				<!--Image-->
				<div class="glass-ring-light h-full overflow-clip rounded-2xl">
					<IMG_Me eager />
				</div>
			</div>
		</div>
	</header>

	<!--	Content-->
	<div class="spacing-default pt-10">
		<Title>Hello</Title>
		<Body>This is something about me</Body>
	</div>
</PageLayout>
