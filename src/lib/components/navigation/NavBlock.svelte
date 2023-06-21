<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class="{className} relative flex w-full place-content-between px-3 py-1 transition-all sm:gap-2 md:w-fit">
	<slot />
</div>
