<script lang="ts">
	import ReaderPage from '$lib/components/layouts/ReaderPage.svelte';
	import Body from '$lib/components/typography/Body.svelte';
	import BodyReader from '$lib/components/typography/BodyReader.svelte';
	import IMG_Hero from '$lib/assets/images/bg/grove.svelte';
	import IMG_1 from '$lib/assets/images/extendable-card-component/idea-exploration.svelte';
	import TaglineTitle from '$lib/components/typography/TaglineTitle.svelte';
	import Spacer from '$lib/components/layouts/Spacer.svelte';
	import WIP from '$lib/components/_extras/WIP.svelte';

	const data = {
		title: 'GroveHR',
		subtitle: 'HR app with 10k+ downloads, for employees and managers to keep track of time off requests, performance reviews, company news...',
		color: 'green'
	};
</script>

<ReaderPage {...data}>
	<IMG_Hero
		eager
		slot="hero_img"
		class="h-12 h-full max-h-[32rem] w-auto" />

	<WIP />
</ReaderPage>
