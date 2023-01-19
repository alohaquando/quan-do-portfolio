<script>
	import Landing from '$lib/components/layout/Landing.svelte';
	import { fade } from 'svelte/transition';
	import PageLayout from "$lib/components/layout/PageLayout.svelte";
	import DisplayMedium from "$lib/components/typography/DisplayMedium.svelte";
</script>

<div in:fade={{  duration: 350 }}>
	<Landing tagline="Designer with developer's insights" />
</div>

<PageLayout title="Designer with developer's insights">
	<div class="flex flex-col gap-32 sm:gap-48 pt-20">
		<DisplayMedium>
			I'm Quân Đô.
			<span class="text-inherit sm:-right-1 sm:text-5xl -indent-4 inline-block"
			>&#x303;</span>
		</DisplayMedium>
		<DisplayMedium>
			I've been designing intuitive user-first interfaces for two years.
		</DisplayMedium>
		<DisplayMedium>
			Capable with tech, I can design experiences that both look good and work well.
		</DisplayMedium>
		<DisplayMedium>
			Sounds like a good fit for your team? Let's get in touch ↓
		</DisplayMedium>
	</div>
</PageLayout>