<script>
	import CaseStudyPage from '$lib/components/layout/CaseStudyPage.svelte';
	import IMG_Hero from '$lib/assets/images/work/grove.svelte';

	const info = {
		title: 'GroveHR',
		headline: 'Cross-platform app designed for everyday HR tasks',
		color: 'green'
	};
</script>

<CaseStudyPage {...info}>
	<IMG_Hero
		slot="hero_image"
		eager />
</CaseStudyPage>
