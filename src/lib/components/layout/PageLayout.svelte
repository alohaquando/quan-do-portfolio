<script>
	export let title;

	let className;
	// noinspection ReservedWordAsName
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
	class="flex flex-col px-6 pt-16 max-sm:pb-28 pb-12 sm:mx-auto sm:max-w-[55rem] {className}">
	<slot />
</div>
