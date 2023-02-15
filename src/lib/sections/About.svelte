<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import AboutCard from '$lib/components/cards/AboutCard.svelte';
</script>

<Section
	section="about"
	class="flex flex-col items-center items-stretch gap-20 md:gap-40 md:pt-[22.5rem] pt-[12rem]">
	<!-- Section title -->
	<Display class="text-center">A bit about me</Display>

	<!-- Cards -->
	<div class="mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-6 md:gap-6  md:px-0">
		<AboutCard data="me" />
		<div class="flex flex-col gap-4 self-stretch sm:flex-row md:gap-6  [&_div]:grow">
			<AboutCard data="experience" />
			<AboutCard data="career" />
		</div>
		<AboutCard data="languages" />
		<AboutCard data="specialty" />
		<AboutCard data="resume" />
	</div>
</Section>
