<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import AboutCard from '$lib/components/cards/AboutCard.svelte';
</script>

<Section
	section="about"
	class="flex flex-col items-center items-stretch gap-20 pt-[12rem] md:gap-40 md:pt-[22.5rem]">
	<!-- Section title -->
	<Display class="text-center">A bit about me</Display>

	<!-- Cards -->
	<div class="mx-auto flex w-full max-w-screen-md flex-col gap-6 px-6">
		<AboutCard data="me" />
		<div class="flex flex-col gap-6 self-stretch sm:flex-row [&_div]:grow">
			<AboutCard data="experience" />
			<AboutCard data="career" />
		</div>
		<AboutCard data="languages" />
		<AboutCard data="specialty" />
		<AboutCard data="resume" />
	</div>
</Section>
