<script lang="ts">
	let className = '';
	export { className as class };
</script>

<p class="{className} text-3x md:text-3x-large  font-light">
	<slot />
</p>
