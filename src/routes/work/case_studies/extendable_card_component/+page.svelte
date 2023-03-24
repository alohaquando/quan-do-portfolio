<script lang="ts">
	import ReaderPage from '$lib/components/layouts/ReaderPage.svelte';
	import IMGHero from '$lib/assets/images/bg/demo-extendable-card-component.svelte';
	import WIP from '$lib/components/_extras/WIP.svelte';

	const data = {
		title: 'Extendable Card Component',
		subtitle: 'An interesting tagline.',
		color: 'blue',
		pathBack: '/#Case studies'
	};
</script>

<ReaderPage {...data}>
	<IMGHero
		eager
		slot="hero_img"
		class="h-12 h-full max-h-[32rem] w-auto" />
	<WIP />
</ReaderPage>
