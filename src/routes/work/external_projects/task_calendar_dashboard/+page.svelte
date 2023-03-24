<script lang="ts">
	import ReaderPage from '$lib/components/layouts/ReaderPage.svelte';
	import IMGHero from '$lib/assets/images/bg/demo-task-calendar-dashboard.svelte';

	import WIP from '$lib/components/_extras/WIP.svelte';

	const data = {
		title: 'Task calendar dashboard',
		subtitle: 'An interesting tagline.',
		color: 'blue',
		pathBack: '/#External projects'
	};
</script>

<ReaderPage {...data}>
	<IMGHero
		eager
		slot="hero_img"
		class="min-h-px h-full max-h-[32rem] w-auto" />
	<WIP />
</ReaderPage>
