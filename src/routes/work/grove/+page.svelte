<script>
	import CaseStudyPage from '$lib/components/layout/CaseStudyPage.svelte';
	import IMG_Hero from '$lib/assets/images/work/grove.svelte';
</script>

<CaseStudyPage
	title="GroveHR App"
	headline="Cross-platform app designed for everyday HR tasks">
	<IMG_Hero
		slot="hero_image"
		eager
	/>
</CaseStudyPage>
