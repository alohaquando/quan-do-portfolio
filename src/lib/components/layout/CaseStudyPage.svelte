<script>
	import ReaderBG from "$lib/components/visuals/ReaderBG.svelte";

	export let title;
	export let headline;
	export let color;

	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import CaseStudyPageHero from '$lib/components/layout/CaseStudyPageHero.svelte';

</script>

<ReaderBG/>

<!--	Hero Header-->
<CaseStudyPageHero
	{title}
	{headline}
	{color}>
	<slot name="hero_image" />
</CaseStudyPageHero>

<PageLayout {title}>
	<!--	Content-->
	<div class="space-brand-style z-10">
		<slot />
	</div>
</PageLayout>

