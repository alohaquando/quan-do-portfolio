<script>
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Landing from '$lib/components/layout/Landing.svelte';
	import IMG_Me from '$lib/assets/images/about/me.svelte';

	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ duration: 400 }}>
	<Landing tagline="Let's work together">
		<div
			class="flex flex-grow place-content-center items-center self-stretch overflow-clip max-sm:pt-6 sm:pt-32">
			<IMG_Me
				eager
				class="h-[40vh] rounded-full object-contain sm:h-96 sm:w-96" />
		</div>
	</Landing>
</div>

<PageLayout title="About" >

</PageLayout>

