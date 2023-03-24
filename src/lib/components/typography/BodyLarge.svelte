<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<p class="{className} text-2x font-light">
	<slot />
</p>
