<script>
	import Landing from '$lib/components/layout/Landing.svelte';
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{  duration: 350 }}>
	<Landing tagline="I design & build interfaces" />
</div>
