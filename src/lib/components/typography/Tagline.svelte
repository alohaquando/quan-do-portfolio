<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<p class="{className} text-small font-light uppercase tracking-widest">
	<slot />
</p>
