<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';

	import BG from '$lib/assets/images/bg/landing-bg.svelte';
	import Noise from '$lib/components/visuals/Noise.svelte';
	import Logo from '$lib/components/iconography/Logo.svelte';
</script>

<Section
	id="landing"
	class="relative flex h-[70vh] flex-col place-content-center items-center gap-10 sm:h-[75vh] md:h-[90vh] md:pt-16">
	<!--	TODO: Add landing animations	-->
	<Logo class="md:hidden" />

	<div class="flex max-w-screen-lg px-6 text-center">
		<Display>Designer <br /> + <br /> problem solver</Display>
	</div>

	<!-- BG -->

	<div class="absolute top-0 left-0 right-0 -z-10 h-[200%] overflow-hidden [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
		<Noise class="!opacity-30" />
		<div class="absolute z-0 h-full w-full bg-gradient-to-b from-black via-black/10 " />
		<BG class="h-full w-full object-cover object-top" />
	</div>
	<!-- /BG -->
</Section>
