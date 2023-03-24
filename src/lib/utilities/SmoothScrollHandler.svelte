<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let root: any;
	onMount(() => {
		root = document.getElementsByTagName('html')[0] as HTMLElement;
		root?.classList.add('scroll-smooth');
	});
	beforeNavigate(() => {
    root?.classList.remove('scroll-smooth');
	});
	afterNavigate(() => {
    root?.classList.add('scroll-smooth');
	});
</script>
