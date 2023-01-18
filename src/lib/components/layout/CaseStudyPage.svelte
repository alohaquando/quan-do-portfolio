<script>
	export let title;
	export let headline;

	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import CaseStudyPageHero from '$lib/components/layout/CaseStudyPageHero.svelte';
	import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 200, duration: 500 }}>
	<!--	Hero Header-->
	<CaseStudyPageHero
		{title}
		{headline}>
		<slot name="hero_image" />
	</CaseStudyPageHero>
</div>

	<PageLayout {title}>
		<!--	Content-->
		<div class="space-default">
			<slot />
		</div>
	</PageLayout>
