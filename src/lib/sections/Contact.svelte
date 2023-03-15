<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import ContactCard from '$lib/components/cards/ContactCard.svelte';

	import ColorBlurSVG from '$lib/assets/images/bg/lol.svelte'
	import SlideIn from "$lib/components/visuals/SlideIn.svelte";

	const contactData = ['email', 'github', 'linkedin'];
</script>

<Section
	id="contact"
	class="flex flex-col items-center items-stretch gap-20 pb-16 pt-[6rem] md:gap-40 md:pt-[14rem]">
	<div class="relative">
		<SlideIn>
			<ColorBlurSVG/>
		</SlideIn>
		<Display class="text-center">Let's work together</Display>
	</div>

	<!-- Cards -->
	<div class="mx-auto grid w-full max-w-screen-md flex-col gap-6 px-6 sm:grid-cols-2 sm:grid-rows-2">
		{#each contactData as data}
			<ContactCard
				{data}
				class="sm:first:col-span-2" />
		{/each}
	</div>
</Section>
