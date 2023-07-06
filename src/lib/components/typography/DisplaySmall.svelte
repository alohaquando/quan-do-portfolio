<script lang="ts">
	let className = '';
	export { className as class };
</script>

<h1 class="{className} text-5x md:text-5x-large  font-light">
	<slot />
</h1>
