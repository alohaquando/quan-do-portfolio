<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import ContactCard from '$lib/components/cards/ContactCard.svelte';

	const contactData = ['email', 'github', 'linkedin'];
</script>

<Section
	section="contact"
	class="flex flex-col items-center items-stretch gap-20 pt-[12rem] md:gap-40 md:pt-[22.5rem]">
	<!-- Section title -->
	<Display class="text-center">Let's work together</Display>

	<!-- Cards -->
	<div class="mx-auto grid w-full max-w-screen-md flex-col gap-6 px-6 sm:grid-cols-2 sm:grid-rows-2">
		{#each contactData as data}
			<ContactCard
				{data}
				class="sm:first:col-span-2" />
		{/each}
	</div>
</Section>
