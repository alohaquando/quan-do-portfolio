<script lang="ts">
	import ReaderPage from '$lib/components/layouts/ReaderPage.svelte';
	import IMGHero from '$lib/assets/images/bg/demo-people-select-modal.svelte';

	import WIP from '$lib/components/_extras/WIP.svelte';

	const data = {
		title: 'People select modal',
		subtitle: 'An interesting tagline.',
		color: 'blue',
		pathBack: '/#Case studies'
	};
</script>

<ReaderPage {...data}>
	<IMGHero
		eager
		slot="hero_img"
		class="min-h-px h-full max-h-[32rem] w-auto" />
	<WIP />
</ReaderPage>
