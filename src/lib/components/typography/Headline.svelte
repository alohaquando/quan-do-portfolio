<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<h1 class="{className} text-4x font-light">
	<slot />
</h1>
