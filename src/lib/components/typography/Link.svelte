<script>
	export let href;

	let className;
	export { className as class };
</script>

<a
	{href}
	class="border-b-2 border-amber-400 font-semibold hover:border-amber-200 dark:border-amber-500 dark:hover:border-amber-300 {className}">
	<slot />
</a>
