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
	class="flex flex-col px-6 pt-16 pb-24 transition-all sm:mx-12 md:mx-auto md:w-[70%] lg:w-[60%] xl:w-[50%] {className}">
	<slot />
</div>
