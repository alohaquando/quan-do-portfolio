<script>
	import IMG_Hero from '$lib/assets/images/work/concept.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import CaseStudyPage from '$lib/components/layout/CaseStudyPage.svelte';

	const info = {
		title: 'Concept Design System',
		headline: 'Robust design system for web dashboards',
		color: 'blue'
	};
</script>

<CaseStudyPage {...info}>
	<IMG_Hero
		eager
		slot="hero_image" />
	<Title>Heading</Title>
	<Body>
		The web has evolved a lot since it started. While designing for the web used to involve a single
		screen, in today’s world it means anything but. The reality of today’ web is tons of devices,
		with all different systems, screen sizes, input types, and form factors. Not only that, websites
		and mobile applications are even beginning to merge. What this all means is that the previous
		idea of a static web page just isn’t practical anymore.
	</Body>
</CaseStudyPage>
