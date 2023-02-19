<script>
	import { colorScheme, colorSchemePreference, systemColorScheme } from '$lib/data/colorScheme.js';
	import { onMount } from 'svelte';

	function handleSystemColorSchemeChange() {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			systemColorScheme.set('dark');
		} else {
			systemColorScheme.set('light');
		}
		setColorScheme();
	}

	function setColorScheme() {
		if ($colorSchemePreference === 'system') {
			colorScheme.set($systemColorScheme);
		} else {
			colorScheme.set($colorSchemePreference);
		}
		setTailwindColorScheme();
	}

	let root;
	function setTailwindColorScheme() {
		root = document.getElementsByTagName('html')[0];
		if ($colorScheme === 'dark') {
			root?.classList.add('dark');
		} else {
			root?.classList.remove('dark');
		}
	}

	onMount(() => {
		handleSystemColorSchemeChange();
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleSystemColorSchemeChange);
	});
</script>

<div class="fixed top-0 z-[100] bg-blue-500">
	<p>colorScheme: {$colorScheme}</p>
	<p>systemColorScheme: {$systemColorScheme}</p>
	<p>colorSchemePreference: {$colorSchemePreference}</p>

	<select
		bind:value={$colorSchemePreference}
		on:change={setColorScheme}
		name="colorSchemePreference"
		id="colorSchemePreference">
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>
</div>
