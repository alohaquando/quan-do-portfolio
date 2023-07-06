<script lang="ts">
	let className = '';
	export { className as class };
</script>

<h1 class="{className} text-4x md:text-4x-large  font-light">
	<slot />
</h1>
