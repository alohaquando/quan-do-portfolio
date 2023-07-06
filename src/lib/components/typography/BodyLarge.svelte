<script lang="ts">
	let className = '';
	export { className as class };
</script>

<p class="{className} text-2x md:text-2x-large font-light">
	<slot />
</p>
