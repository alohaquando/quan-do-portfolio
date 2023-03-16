<script>
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';

	import BG from '$lib/assets/images/bg/hd-landing-bg.svelte';
	import Noise from '$lib/components/visuals/Noise.svelte';
	import Logo from '$lib/components/iconography/Logo.svelte';
</script>

<Section
	id="landing"
	class="min-h-sm-screen-safe sm:min-h-md-screen-safe md:min-h-screen-safe relative flex">
	<!-- Foreground elements -->
	<div class="flex grow flex-col place-content-between md:place-content-center items-center gap-10 md:pt-16 pt-12 sm:pt-20">
		<!-- Logo -->
		<Logo class="md:hidden" />
		<!-- /Logo -->

		<!-- Landing title -->
		<div class="flex max-w-screen-lg px-6 text-center">
			<Display>Designer <br /> + <br /> problem solver</Display>
		</div>
		<!-- /Landing title -->

		<!-- Spacer -->
		<div class="h-px opacity-0" />
		<!-- /Spacer -->
	</div>
	<!-- /Foreground elements -->

	<!-- Background -->
	<div class="absolute top-0 left-0 right-0 -z-10 h-[200%] overflow-hidden [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
		<Noise class="!opacity-30" />
		<div class="absolute z-0 h-full w-full bg-gradient-to-b from-black via-black/10 " />
		<BG
			class="h-full w-full object-cover object-top"
			eager />
	</div>
	<!-- /Background -->
</Section>
