<script>
	import DisplaySmall from '$lib/components/typography/DisplaySmall.svelte';
	import Body from '$lib/components/typography/Body.svelte';
</script>

<section class="min-h-screen-safe flex flex-col place-content-center items-center gap-12">
	<div class="flex flex-col place-content-center items-center">
		<DisplaySmall>Page not found</DisplaySmall>
	</div>

	<a href="/">
		<Body class="font-medium">Back to Home page</Body>
	</a>
</section>
