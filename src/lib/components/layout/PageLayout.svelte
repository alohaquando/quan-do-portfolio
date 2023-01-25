<script>
	export let title;

	let className;
	// noinspection ReservedWordAsNamez
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
	class="flex flex-col pt-16 max-sm:pb-28 pb-6 max-w-brand-style {className}">
	<slot />
</div>
