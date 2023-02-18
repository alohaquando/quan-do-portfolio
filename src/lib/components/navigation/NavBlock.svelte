<script>
	let className = undefined;
	export { className as class };
</script>

<div class="{className} relative flex w-full place-content-between py-1 px-3 transition-all sm:gap-2  md:w-fit">
	<slot />
</div>
