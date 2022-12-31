<script>
	export let title;

	let className;
	export { className as class };
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content={title} />
</svelte:head>

<!--Page-->
<div
	class="mx-auto flex min-h-screen flex-col bg-white ring-zinc-100 transition-all dark:bg-zinc-900 dark:ring-zinc-800 sm:rounded-t-3xl md:mb-24 md:min-h-[90vh] md:w-[80vw] md:rounded-3xl md:ring-2 {className}">
	<slot />
</div>
