<script>
	import Body from '$lib/components/typography/Body.svelte';
	import Icon from '$lib/components/iconography/Icon.svelte';
	export let value;
	export let options;
	export let name;
	export let id;
</script>

<div class="relative w-fit rounded-full transition hover:bg-gray-400/10 dark:hover:bg-white/10">
	<select
		aria-label="Select theme for website"
		bind:value
		on:change
		{name}
		{id}
		class="absolute -top-2 -left-2 -right-2 -bottom-2 bg-white opacity-0 dark:bg-zinc-900">
		{#each Object.values(options) as option}
			<option value={option.value}>{option.title}</option>
		{/each}
	</select>
	<div class="pointer-events-none relative flex w-fit items-center gap-3 rounded-full px-6 ring-1 ring-gray-900/20 dark:ring-white/20">
		<Icon
			name={value}
			stroke_width="1.75" />
		<Body class="whitespace-nowrap py-2 font-medium">{value.charAt(0).toUpperCase() + value.slice(1)} theme</Body>
	</div>
</div>
