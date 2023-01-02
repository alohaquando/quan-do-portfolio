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
<div class=" {className}">
	<slot />
</div>
