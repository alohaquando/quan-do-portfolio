<script lang="ts">
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import A from '$lib/components/navigation/A.svelte';
	import Noise from '$lib/components/visual-effects/Noise.svelte';
	import BG from '$lib/assets/images/bg/hd-landing-bg.svelte';
</script>

<section class="min-h-screen-safe flex flex-col place-content-center items-center gap-12">
	<div class="flex flex-col place-content-center items-center">
		<DisplaySmall>Page not found</DisplaySmall>
	</div>

	<A
		href="/"
		class="ring-1 ring-white/20">
		<Body class="font-medium">Back to Home page</Body>
	</A>

	<!-- BG -->
	<div class="absolute top-0 left-0 right-0 -z-10 h-[150%] overflow-hidden [mask-image:linear-gradient(to_bottom,black,black,transparent)]">
		<Noise class="!opacity-30" />
		<div class="absolute z-0 h-full w-full bg-gradient-to-b from-black via-black/10 " />
		<BG
			class="h-full w-full object-cover object-top"
			eager />
	</div>
	<!-- /BG -->
</section>
