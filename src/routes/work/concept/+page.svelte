<script lang="ts">
	import ReaderPage from '$lib/components/layouts/ReaderPage.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import BodyReader from '$lib/components/typography/BodyReader.svelte';

	import IMG_Hero from '$lib/assets/images/bg/concept.svelte';
	import IMG_1 from '$lib/assets/images/extendable-card-component/idea-exploration.svelte';
	import TaglineTitle from '$lib/components/typography/TaglineTitle.svelte';
	import Spacer from '$lib/components/layouts/Spacer.svelte';
	import WIP from '$lib/components/_extras/WIP.svelte';

	const data = {
		title: 'Concept Design System',
		subtitle: 'A feature-packed and robust color and component library for complex web dashboards.',
		color: 'blue'
	};
</script>

<ReaderPage {...data}>
	<IMG_Hero
		eager
		slot="hero_img" />

	<WIP/>
</ReaderPage>
