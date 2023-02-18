<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';
	import Title from '$lib/components/typography/Title.svelte';
</script>

<Section
	id="landing"
	class="flex h-[70vh] md:pt-16 flex-col place-content-center items-center gap-10 sm:h-[75vh] md:h-[90vh]">
	<Title class="font-medium md:hidden">Quan Do</Title>

	<div class="flex max-w-screen-lg px-6 text-center">
		<Display>Designer <br /> + <br /> problem solver</Display>
		<!--		<Display>With a knack for making designs that works</Display>-->
	</div>
</Section>
