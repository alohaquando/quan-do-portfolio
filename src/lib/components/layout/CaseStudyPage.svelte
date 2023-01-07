<script>
	export let title;
	export let headline;

	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import CaseStudyPageHero from '$lib/components/layout/CaseStudyPageHero.svelte';
</script>

<!--	Hero Header-->
<CaseStudyPageHero
	{title}
	{headline}
	>
	<slot
		name="hero_image" />
</CaseStudyPageHero>

<PageLayout {title}>
	<!--	Content-->
	<div class="spacing-default">
		<slot />
	</div>
</PageLayout>
