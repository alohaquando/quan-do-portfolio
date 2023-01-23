<script>
	import Landing from '$lib/components/layout/Landing.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';
	import Intro from '$lib/sections/Intro.svelte';
	import Work from '$lib/sections/Work.svelte';
	import About from '$lib/sections/About.svelte';
	import Contact from '$lib/sections/Contact.svelte';
</script>

<Landing />

<PageLayout title="Quân Đỗ's Portfolio">
	<div class="flex flex-col gap-40 scroll-smooth pt-20">
		<Intro />
		<Work />
		<About />
		<Contact />
	</div>
</PageLayout>

