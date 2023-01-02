<script>
	export let title;
	export let headline;

	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import CaseStudyPageHero from '$lib/components/layout/CaseStudyPageHero.svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content={title} />
</svelte:head>

<!--	Hero Header-->
<CaseStudyPageHero
	{title}
	{headline}>
	<slot name="hero_image" />
</CaseStudyPageHero>

<PageLayout>
	<!--	Content-->
	<div class="spacing-default">
		<slot />
	</div>
</PageLayout>

<!--<style>-->
<!--	:global([slot='content']) {-->
<!--		@apply flex flex-col px-6 pt-16 pb-28 sm:mx-12 md:mx-auto md:w-[80%];-->
<!--	}-->
<!--</style>-->
