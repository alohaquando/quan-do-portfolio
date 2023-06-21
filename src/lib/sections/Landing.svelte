<script lang="ts">
	import Section from '$lib/components/layouts/Section.svelte';
	import Display from '$lib/components/typography/Display.svelte';

	import BG from '$lib/assets/images/bg/hd-landing-bg.svelte';
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	import Logo from '$lib/components/iconography/Logo.svelte';
</script>

<Section
	id="landing"
	class="min-h-sm-screen-safe sm:min-h-md-screen-safe md:min-h-screen-safe relative flex">
	<!-- Foreground elements -->
	<div class="flex grow flex-col place-content-between items-center gap-10 pt-12 sm:pt-20 md:place-content-center md:pt-16">
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
	<div class="absolute left-0 right-0 top-0 -z-10 h-[200%] overflow-hidden backdrop-saturate-200 [mask-image:linear-gradient(to_bottom,black,black,transparent)] dark:backdrop-contrast-125">
		<Noise class="!opacity-30" />
		<div class="absolute h-full w-full bg-gradient-to-b from-white/80 via-transparent dark:-z-50 dark:from-black dark:via-black/50" />
		<BG
			class="h-full w-full object-cover object-top"
			eager />
	</div>
	<!-- /Background -->
</Section>
