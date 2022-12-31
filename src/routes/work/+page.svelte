<script>
	import LinkCard from '$lib/components/LinkCard.svelte';
	import ShowcasePage from '$lib/components/layout/ShowcasePage.svelte';
	import Display from '$lib/components/typography/DisplayLarge.svelte';
	import IMG_Grove from '$lib/assets/images/work/grove.svelte';
	import IMG_Logo_Grove from '$lib/assets/images/work/grove-logo.svelte';
	import IMG_Card_Component from '$lib/assets/images/extendable-card-component/hero.svelte';
</script>

<ShowcasePage title="Work">

	<LinkCard
		href="/work/grove/expandable-card-component"
		title="GroveHR App"
		body="Cross-platform app with 10k+ downloads"
		imageDirection="vertical">
		<IMG_Logo_Grove slot="logo" />
		<IMG_Grove slot="image" />
	</LinkCard>

	<LinkCard
		href="/work/grove/expandable-card-component"
		title="GroveHR App"
		body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	imageDirection="horizontal">
		<IMG_Logo_Grove slot="logo" />
		<IMG_Card_Component slot="image" />
	</LinkCard>

	<LinkCard
		href="/work/grove/expandable-card-component"
		title="GroveHR App"
		body="Cross-platform app with 10k+ downloads">
		<IMG_Logo_Grove slot="logo" />
		<IMG_Grove slot="image" />
	</LinkCard>


</ShowcasePage>
