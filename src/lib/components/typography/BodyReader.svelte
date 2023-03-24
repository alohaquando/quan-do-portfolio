<script lang="ts">
	let className: string = '';
	export { className as class };
</script>

<p class="{className} text-1x font-reader opacity-[75%]">
	<slot />
</p>
